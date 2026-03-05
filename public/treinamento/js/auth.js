/* ============================================
   AUTH.JS — Sistema de Autenticação
   Plataforma de Treinamento em IA
   ============================================ */

const Auth = (() => {
  const SESSION_KEY = 'treinamento_turma';
  const SESSION_SUBPASTA = 'treinamento_subpasta';
  const SESSION_CURSO = 'treinamento_curso';
  const SESSION_TIMESTAMP = 'treinamento_auth_time';

  // Detecta a subpasta do curso a partir da URL atual
  // Estrutura esperada: /treinamento/{subpasta}/...
  function getCurrentSubpasta() {
    const path = window.location.pathname;
    const match = path.match(/\/treinamento\/([^/]+)\//);
    return match ? match[1] : null;
  }

  // Retorna o caminho base relativo até a raiz de /treinamento/
  // Se estamos em /treinamento/tre-rn-2026/oficinas/xxx.html → ../../
  // Se estamos em /treinamento/tre-rn-2026/xxx.html → ../
  // Se estamos em /treinamento/login.html → ./
  function getBasePath() {
    const path = window.location.pathname;

    // Página de login na raiz de treinamento
    if (path.match(/\/treinamento\/[^/]*\.html$/) || path.match(/\/treinamento\/?$/)) {
      return './';
    }

    // Dentro de oficinas (3 níveis abaixo de treinamento)
    if (path.includes('/oficinas/')) {
      return '../../';
    }

    // Dentro de uma subpasta de curso (2 níveis abaixo de treinamento)
    return '../';
  }

  // Retorna o caminho base relativo à raiz da subpasta do curso
  function getCourseBasePath() {
    const path = window.location.pathname;
    if (path.includes('/oficinas/')) {
      return '../';
    }
    return './';
  }

  // Detecta o caminho absoluto até /treinamento/ a partir da URL
  function getTreinamentoRoot() {
    const path = window.location.pathname;
    const match = path.match(/(.*\/treinamento\/)/);
    return match ? match[1] : '/treinamento/';
  }

  // Carrega e parseia o CSV de turmas
  async function loadTurmas() {
    try {
      const root = getTreinamentoRoot();
      const response = await fetch(`${root}data/turmas.csv`);
      if (!response.ok) throw new Error('CSV não encontrado');
      const text = await response.text();
      return parseCSV(text);
    } catch (error) {
      console.error('Erro ao carregar turmas:', error);
      return {};
    }
  }

  // Parseia CSV no formato: turma,subpasta,nome_curso,validade
  function parseCSV(text) {
    const lines = text.trim().split('\n');
    const turmas = {};
    // Pula header
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const [turma, subpasta, nome_curso, validade] = line.split(',').map(s => s.trim());
      if (turma && subpasta && validade) {
        turmas[turma.toLowerCase()] = { subpasta, nome_curso: nome_curso || '', validade };
      }
    }
    return turmas;
  }

  // Verifica se a turma é válida e dentro da validade
  function isTurmaValid(turma, turmas) {
    const normalizedTurma = turma.toLowerCase().trim();
    const turmaData = turmas[normalizedTurma];

    if (!turmaData) {
      return { valid: false, reason: 'Turma não encontrada.' };
    }

    const validade = new Date(turmaData.validade + 'T23:59:59');
    if (new Date() > validade) {
      return { valid: false, reason: 'O acesso desta turma expirou.' };
    }

    return {
      valid: true,
      turma: normalizedTurma,
      subpasta: turmaData.subpasta,
      nome_curso: turmaData.nome_curso
    };
  }

  // Salva autenticação na sessão
  function saveSession(turma, subpasta, nome_curso) {
    sessionStorage.setItem(SESSION_KEY, turma);
    sessionStorage.setItem(SESSION_SUBPASTA, subpasta);
    sessionStorage.setItem(SESSION_CURSO, nome_curso);
    sessionStorage.setItem(SESSION_TIMESTAMP, Date.now().toString());
  }

  // Verifica se há sessão ativa
  function isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) !== null &&
           sessionStorage.getItem(SESSION_SUBPASTA) !== null;
  }

  // Retorna a turma da sessão
  function getTurma() {
    return sessionStorage.getItem(SESSION_KEY) || '';
  }

  // Retorna a subpasta autorizada
  function getSubpasta() {
    return sessionStorage.getItem(SESSION_SUBPASTA) || '';
  }

  // Retorna o nome do curso
  function getNomeCurso() {
    return sessionStorage.getItem(SESSION_CURSO) || '';
  }

  // Encerra a sessão
  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_SUBPASTA);
    sessionStorage.removeItem(SESSION_CURSO);
    sessionStorage.removeItem(SESSION_TIMESTAMP);
    const root = getTreinamentoRoot();
    window.location.href = `${root}login.html`;
  }

  // Protege uma página: verifica autenticação E se a subpasta corresponde
  function guardPage() {
    if (!isAuthenticated()) {
      const root = getTreinamentoRoot();
      window.location.href = `${root}login.html`;
      return false;
    }

    // Verifica se o usuário tem acesso à subpasta atual
    const currentSubpasta = getCurrentSubpasta();
    const allowedSubpasta = getSubpasta();

    if (currentSubpasta && currentSubpasta !== allowedSubpasta) {
      // Tentou acessar curso diferente do autorizado — redireciona para login
      sessionStorage.removeItem(SESSION_KEY);
      sessionStorage.removeItem(SESSION_SUBPASTA);
      sessionStorage.removeItem(SESSION_CURSO);
      sessionStorage.removeItem(SESSION_TIMESTAMP);
      const root = getTreinamentoRoot();
      window.location.href = `${root}login.html`;
      return false;
    }

    return true;
  }

  // Atualiza o display da turma na navbar
  function updateTurmaDisplay() {
    const turmaEl = document.getElementById('turmaDisplay');
    if (turmaEl) {
      turmaEl.textContent = getTurma();
    }
  }

  // Inicializa proteção de página (chamado em todas as páginas exceto login)
  function initPageGuard() {
    if (!guardPage()) return false;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateTurmaDisplay);
    } else {
      updateTurmaDisplay();
    }
    return true;
  }

  // Inicializa a página de login
  async function initLoginPage() {
    // Se já autenticado, redireciona para o curso correspondente
    if (isAuthenticated()) {
      const root = getTreinamentoRoot();
      const subpasta = getSubpasta();
      window.location.href = `${root}${subpasta}/index.html`;
      return;
    }

    const turmas = await loadTurmas();

    // Referências do DOM
    const input = document.getElementById('turmaInput');
    const errorEl = document.getElementById('loginError');
    const btnLogin = document.getElementById('btnLogin');

    function showError(msg) {
      errorEl.textContent = msg;
      errorEl.style.display = 'block';
      input.style.borderColor = '';
      setTimeout(() => {
        errorEl.style.display = 'none';
      }, 5000);
    }

    function hideError() {
      errorEl.style.display = 'none';
    }

    async function handleLogin() {
      hideError();
      const turma = input.value.trim();

      if (!turma) {
        showError('Por favor, informe o código da turma.');
        input.focus();
        return;
      }

      const result = isTurmaValid(turma, turmas);

      if (result.valid) {
        saveSession(result.turma, result.subpasta, result.nome_curso);
        const root = getTreinamentoRoot();
        window.location.href = `${root}${result.subpasta}/index.html`;
      } else {
        showError(result.reason);
        input.focus();
        input.select();
      }
    }

    // Event listeners
    if (btnLogin) {
      btnLogin.addEventListener('click', handleLogin);
    }

    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
      });
      input.addEventListener('input', hideError);
      input.focus();
    }
  }

  // API pública
  return {
    initLoginPage,
    initPageGuard,
    isAuthenticated,
    getTurma,
    getSubpasta,
    getNomeCurso,
    logout,
    guardPage,
    getBasePath,
    getCourseBasePath,
    updateTurmaDisplay
  };
})();

/* ============================================
   AUTH.JS — Sistema de Autenticação
   Workshop IA na prática aplicada ao TRE/RN
   ============================================ */

const Auth = (() => {
  const SESSION_KEY = 'workshop_turma';
  const SESSION_TIMESTAMP = 'workshop_auth_time';

  // Detecta o caminho base do projeto (funciona em subpastas e no GitHub Pages)
  function getBasePath() {
    const path = window.location.pathname;
    // Se estamos dentro de /oficinas/, subir um nível
    if (path.includes('/oficinas/')) {
      return '../';
    }
    return './';
  }

  // Carrega e parseia o CSV de turmas
  async function loadTurmas() {
    try {
      const basePath = getBasePath();
      const response = await fetch(`${basePath}data/turmas.csv`);
      if (!response.ok) throw new Error('CSV não encontrado');
      const text = await response.text();
      return parseCSV(text);
    } catch (error) {
      console.error('Erro ao carregar turmas:', error);
      return {};
    }
  }

  // Parseia CSV no formato: turma,validade
  function parseCSV(text) {
    const lines = text.trim().split('\n');
    const turmas = {};
    // Pula header
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const [turma, validade] = line.split(',').map(s => s.trim());
      if (turma && validade) {
        turmas[turma.toLowerCase()] = validade;
      }
    }
    return turmas;
  }

  // Verifica se a turma é válida e dentro da validade
  function isTurmaValid(turma, turmas) {
    const normalizedTurma = turma.toLowerCase().trim();
    if (!turmas[normalizedTurma]) {
      return { valid: false, reason: 'Turma não encontrada.' };
    }
    const validade = new Date(turmas[normalizedTurma] + 'T23:59:59');
    if (new Date() > validade) {
      return { valid: false, reason: 'O acesso desta turma expirou.' };
    }
    return { valid: true, turma: normalizedTurma };
  }

  // Salva autenticação na sessão
  function saveSession(turma) {
    sessionStorage.setItem(SESSION_KEY, turma);
    sessionStorage.setItem(SESSION_TIMESTAMP, Date.now().toString());
  }

  // Verifica se há sessão ativa
  function isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) !== null;
  }

  // Retorna a turma da sessão
  function getTurma() {
    return sessionStorage.getItem(SESSION_KEY) || '';
  }

  // Encerra a sessão
  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_TIMESTAMP);
    const basePath = getBasePath();
    window.location.href = `${basePath}login.html`;
  }

  // Protege uma página: redireciona para login se não autenticado
  function guardPage() {
    if (!isAuthenticated()) {
      const basePath = getBasePath();
      window.location.href = `${basePath}login.html`;
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
    // Quando o DOM carregar, atualiza o display
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateTurmaDisplay);
    } else {
      updateTurmaDisplay();
    }
    return true;
  }

  // Inicializa a página de login
  async function initLoginPage() {
    // Se já autenticado, redireciona para index
    if (isAuthenticated()) {
      window.location.href = './index.html';
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
        saveSession(result.turma);
        window.location.href = './index.html';
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

      // Limpa erro ao digitar
      input.addEventListener('input', hideError);

      // Focus automático
      input.focus();
    }
  }

  // API pública
  return {
    initLoginPage,
    initPageGuard,
    isAuthenticated,
    getTurma,
    logout,
    guardPage,
    getBasePath
  };
})();

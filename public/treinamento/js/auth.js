/* ============================================
   AUTH.JS — Sistema de Autenticação (Supabase)
   Plataforma de Treinamento em IA
   ============================================ */

const Auth = (() => {
  const SESSION_KEY = 'treinamento_turma';
  const SESSION_SUBPASTA = 'treinamento_subpasta';
  const SESSION_CURSO = 'treinamento_curso';
  const SESSION_TIMESTAMP = 'treinamento_auth_time';
  const SESSION_USER_ID = 'treinamento_user_id';
  const SESSION_USER_NAME = 'treinamento_user_name';

  function getCurrentSubpasta() {
    const path = window.location.pathname;
    const match = path.match(/\/treinamento\/([^/]+)\//);
    return match ? match[1] : null;
  }

  function getBasePath() {
    const path = window.location.pathname;
    if (path.match(/\/treinamento\/[^/]*\.html$/) || path.match(/\/treinamento\/?$/)) return './';
    if (path.includes('/oficinas/')) return '../../';
    return '../';
  }

  function getCourseBasePath() {
    const path = window.location.pathname;
    if (path.includes('/oficinas/')) return '../';
    return './';
  }

  function getTreinamentoRoot() {
    const path = window.location.pathname;
    const match = path.match(/(.*\/treinamento\/)/);
    return match ? match[1] : '/treinamento/';
  }

  function isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) !== null &&
           sessionStorage.getItem(SESSION_SUBPASTA) !== null &&
           sessionStorage.getItem(SESSION_USER_ID) !== null;
  }

  function getTurma() { return sessionStorage.getItem(SESSION_KEY) || ''; }
  function getSubpasta() { return sessionStorage.getItem(SESSION_SUBPASTA) || ''; }
  function getNomeCurso() { return sessionStorage.getItem(SESSION_CURSO) || ''; }
  function getUserName() { return sessionStorage.getItem(SESSION_USER_NAME) || ''; }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_SUBPASTA);
    sessionStorage.removeItem(SESSION_CURSO);
    sessionStorage.removeItem(SESSION_TIMESTAMP);
    sessionStorage.removeItem(SESSION_USER_ID);
    sessionStorage.removeItem(SESSION_USER_NAME);
    const root = getTreinamentoRoot();
    window.location.href = `${root}login.html`;
  }

  function guardPage() {
    if (!isAuthenticated()) {
      const root = getTreinamentoRoot();
      window.location.href = `${root}login.html`;
      return false;
    }

    const currentSubpasta = getCurrentSubpasta();
    const allowedSubpasta = getSubpasta();

    if (currentSubpasta && currentSubpasta !== allowedSubpasta) {
      logout();
      return false;
    }

    return true;
  }

  function updateTurmaDisplay() {
    const turmaEl = document.getElementById('turmaDisplay');
    if (turmaEl) {
      turmaEl.textContent = getUserName() || getTurma();
    }
  }

  function initPageGuard() {
    if (!guardPage()) return false;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateTurmaDisplay);
    } else {
      updateTurmaDisplay();
    }
    return true;
  }

  return {
    initPageGuard,
    isAuthenticated,
    getTurma,
    getSubpasta,
    getNomeCurso,
    getUserName,
    logout,
    guardPage,
    getBasePath,
    getCourseBasePath,
    getTreinamentoRoot,
    updateTurmaDisplay
  };
})();

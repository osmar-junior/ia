// ═══ topicos.js — Progresso de tópicos e badge de módulos ═══════════════
(function () {
  const TOPICOS_KEY = 'trern-topicos-concluidos';
  const MODULOS_TOTAL = 4;

  // Tópicos que compõem cada módulo
  const MODULO_TOPICOS = {
    1: ['ce-01','ce-02','ce-03'],
    2: ['cf-01','cf-02','cf-03'],
    3: ['reg-01','reg-02','reg-03','reg-04'],
    4: ['ep-01','ep-02','ep-03','ep-04','ep-05'],
  };

  function getState() {
    try { return JSON.parse(localStorage.getItem(TOPICOS_KEY)) || []; } catch { return []; }
  }
  function saveState(a) { localStorage.setItem(TOPICOS_KEY, JSON.stringify(a)); }

  // Conta módulos concluídos — todos por tópicos
  function modulosConcluidos(state) {
    let count = 0;
    [1, 2, 3, 4].forEach(m => {
      const topicos = MODULO_TOPICOS[m] || [];
      if (topicos.length > 0 && topicos.every(t => state.includes(t))) count++;
    });
    return count;
  }

  function updateModuloBadge() {
    const state = getState();
    const count = modulosConcluidos(state);
    const el = document.getElementById('navModulosText');
    if (el) el.textContent = count + '/' + MODULOS_TOTAL;
  }

  // Marca um tópico como concluído e navega para a próxima URL
  window.marcarTopicoConcluido = function (topicoId, proximaUrl) {
    const state = getState();
    if (!state.includes(topicoId)) { state.push(topicoId); saveState(state); }
    updateModuloBadge();
    if (window.Utils) Utils.showToast('Tópico concluído!', 'success');
    setTimeout(() => { window.location.href = proximaUrl; }, 500);
  };

  // Marca/desmarca um módulo inteiro (para módulos sem tópicos: 1 e 3)
  window.toggleModulo = function (moduloId) {
    const key = 'modulo-' + moduloId;
    const state = getState();
    const idx = state.indexOf(key);
    if (idx === -1) { state.push(key); } else { state.splice(idx, 1); }
    saveState(state);
    updateModuloBadge();
    renderModuloCards();
  };

  // Atualiza visual dos cards de módulo na index.html
  function renderModuloCards() {
    const state = getState();
    document.querySelectorAll('.module-card[data-modulo]').forEach(card => {
      const mid = card.dataset.modulo;
      let done = false;
      if (mid === '1' || mid === '3') {
        done = state.includes('modulo-' + mid);
      } else if (mid === '2') {
        done = ['cf-01','cf-02','cf-03'].every(t => state.includes(t));
      } else if (mid === '4') {
        done = MODULO_TOPICOS[4].every(t => state.includes(t));
      }
      card.classList.toggle('modulo-done', done);
      const btn = card.querySelector('.btn-modulo-concluir');
      if (btn) {
        btn.textContent = done ? '✓ Concluído' : '◯ Marcar como concluído';
        btn.classList.toggle('done', done);
      }
    });
  }

  window.App = window.App || {};
  window.App.updateModuloBadge = updateModuloBadge;
  window.App.renderModuloCards = renderModuloCards;

  document.addEventListener('DOMContentLoaded', function () {
    updateModuloBadge();
    renderModuloCards();

    // Marcar tópicos concluídos na sidebar com ✓ clicável para desmarcar
    const state = getState();
    document.querySelectorAll('.sb-topic[data-topico], .sb-item[data-topico]').forEach(el => {
      if (state.includes(el.dataset.topico)) {
        if (!el.querySelector('.sb-done')) {
          const tick = document.createElement('span');
          tick.className = 'sb-done';
          tick.style.cssText = 'margin-left:auto;font-size:.75rem;font-weight:700;color:var(--verde);cursor:pointer;padding:2px 4px;border-radius:4px;transition:all .15s;';
          tick.title = 'Clique para desmarcar leitura';
          tick.textContent = '✓';
          tick.addEventListener('mouseenter', () => { tick.style.color = 'var(--vermelho)'; tick.style.background = '#FEF2F2'; tick.textContent = '✕'; });
          tick.addEventListener('mouseleave', () => { tick.style.color = 'var(--verde)'; tick.style.background = 'transparent'; tick.textContent = '✓'; });
          tick.addEventListener('click', function(e) {
            e.preventDefault(); e.stopPropagation();
            const topicoId = el.dataset.topico;
            if (confirm('Deseja desmarcar a leitura deste tópico?')) {
              const s = getState();
              const idx = s.indexOf(topicoId);
              if (idx !== -1) { s.splice(idx, 1); saveState(s); }
              tick.remove();
              updateModuloBadge();
            } else {
              tick.style.color = 'var(--verde)'; tick.style.background = 'transparent'; tick.textContent = '✓';
            }
          });
          el.appendChild(tick);
        }
      }
    });
  });
})();

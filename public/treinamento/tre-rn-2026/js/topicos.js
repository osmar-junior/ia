// ═══ Tópicos — progresso e badge de módulos ══════════════════════════════
(function () {
  const TOPICOS_KEY = 'trern-topicos-concluidos';
  const MODULOS_TOTAL = 4;

  // Mapa: prefixo do tópico → índice do módulo (1-based)
  const TOPICO_MODULO = {
    'cf':  2, // como-funciona
    'ep':  4, // engenharia-de-prompts
  };

  // Módulos que não têm tópicos mas podem ser marcados diretamente
  // Módulo 01 (conceitos) e Módulo 03 (regulamentacao) — marcação futura
  // Por ora, um módulo é considerado concluído quando TODOS os seus tópicos estão concluídos

  // Tópicos por módulo
  const MODULO_TOPICOS = {
    2: ['cf-01','cf-02','cf-03'],     // como-funciona: tokens, cuidados, personalização
    4: ['ep-01','ep-02','ep-03','ep-04','ep-05'],
  };

  function getState() {
    try { return JSON.parse(localStorage.getItem(TOPICOS_KEY)) || []; } catch { return []; }
  }
  function saveState(a) { localStorage.setItem(TOPICOS_KEY, JSON.stringify(a)); }

  function modulosConcluidos(state) {
    // Módulos 1 e 3 são marcados como concluídos pela chave 'modulo-X'
    let count = 0;
    [1, 3].forEach(m => { if (state.includes('modulo-' + m)) count++; });
    // Módulos 2 e 4: todos os tópicos concluídos
    [2, 4].forEach(m => {
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

  // Expõe globalmente para ser chamado após toggle
  window.marcarConcluido = function (topicoId, proximaUrl) {
    const state = getState();
    if (!state.includes(topicoId)) state.push(topicoId);
    saveState(state);
    updateModuloBadge();
    if (window.Utils) Utils.showToast('Tópico concluído!', 'success');
    setTimeout(() => { window.location.href = proximaUrl; }, 600);
  };

  window.App = window.App || {};
  window.App.updateModuloBadge = updateModuloBadge;

  document.addEventListener('DOMContentLoaded', function () {
    updateModuloBadge();

    // Marcar itens da sidebar como concluídos visualmente
    const state = getState();
    document.querySelectorAll('.sb-item[data-topico]').forEach(el => {
      if (state.includes(el.dataset.topico)) {
        el.style.color = 'var(--verde)';
        if (!el.querySelector('.sb-done')) {
          const tick = document.createElement('span');
          tick.className = 'sb-done';
          tick.textContent = ' ✓';
          tick.style.cssText = 'font-size:.8rem;font-weight:700;color:var(--verde)';
          el.appendChild(tick);
        }
      }
    });
  });
})();

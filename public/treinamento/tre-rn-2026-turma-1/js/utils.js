/* ============================================
   UTILS.JS — Funções Utilitárias
   Workshop IA na prática aplicada ao TRE/RN
   ============================================ */

const Utils = (() => {

  // Formata data para exibição (DD/MM/AAAA)
  function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('pt-BR');
  }

  // Debounce para eventos frequentes (scroll, resize)
  function debounce(fn, delay = 250) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  // Throttle
  function throttle(fn, limit = 100) {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Copia texto para a área de transferência
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback para navegadores antigos
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    }
  }

  // Exibe notificação toast temporária
  function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    // Estilos inline para o toast (independente de CSS)
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      padding: '12px 24px',
      borderRadius: '12px',
      fontSize: '0.9rem',
      fontWeight: '500',
      fontFamily: "'DM Sans', sans-serif",
      zIndex: '9999',
      opacity: '0',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      maxWidth: '90vw',
      textAlign: 'center'
    });

    // Cores por tipo
    const colors = {
      info: { bg: '#EEF3FD', color: '#4A7FE8', border: '1px solid rgba(74,127,232,0.2)' },
      success: { bg: '#EDF5F0', color: '#5B8C6F', border: '1px solid rgba(91,140,111,0.2)' },
      warning: { bg: '#FDF6E3', color: '#D4A843', border: '1px solid rgba(212,168,67,0.2)' },
      error: { bg: '#FFF0EC', color: '#E8654A', border: '1px solid rgba(232,101,74,0.2)' }
    };

    const c = colors[type] || colors.info;
    toast.style.background = c.bg;
    toast.style.color = c.color;
    toast.style.border = c.border;

    document.body.appendChild(toast);

    // Anima entrada
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Remove após duração
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // Lazy loading de imagens
  function initLazyImages() {
    const images = document.querySelectorAll('img[data-src]');
    if (!images.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });

    images.forEach(img => observer.observe(img));
  }

  // Escapa HTML para prevenir XSS
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Gera ID único simples
  function uniqueId(prefix = 'id') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // API pública
  return {
    formatDate,
    debounce,
    throttle,
    copyToClipboard,
    showToast,
    initLazyImages,
    escapeHTML,
    uniqueId
  };
})();

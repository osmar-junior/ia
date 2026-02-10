/* ============================================
   MAIN.JS — Funcionalidades Principais
   Workshop IA na prática aplicada ao TRE/RN
   ============================================ */

const App = (() => {
  // Detecta caminho base
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/oficinas/')) return '../';
    return './';
  }

  // Carrega componente HTML externo e injeta no DOM
  async function loadComponent(elementId, filePath) {
    try {
      const el = document.getElementById(elementId);
      if (!el) return;

      const response = await fetch(filePath);
      if (!response.ok) throw new Error(`Componente não encontrado: ${filePath}`);
      let html = await response.text();

      // Ajusta caminhos relativos nos links (href e src)
      const basePath = getBasePath();
      html = html.replace(/href="\.\/([^"]+)"/g, `href="${basePath}$1"`);
      html = html.replace(/src="\.\/([^"]+)"/g, `src="${basePath}$1"`);

      el.innerHTML = html;
    } catch (error) {
      console.error(`Erro ao carregar componente ${elementId}:`, error);
    }
  }

  // Carrega header e footer
  async function loadLayout() {
    const basePath = getBasePath();
    await Promise.all([
      loadComponent('header-placeholder', `${basePath}components/header.html`),
      loadComponent('footer-placeholder', `${basePath}components/footer.html`)
    ]);

    // Após carregar, inicializa funcionalidades da navbar
    initNavbar();
    highlightCurrentPage();
    Auth.updateTurmaDisplay?.() || updateTurmaFromSession();
  }

  // Atualiza turma na navbar (fallback)
  function updateTurmaFromSession() {
    const turmaEl = document.getElementById('turmaDisplay');
    if (turmaEl && Auth) {
      turmaEl.textContent = Auth.getTurma();
    }
  }

  // Marca link ativo na navbar
  function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.navbar-links a');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.split('/').pop();

      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Para oficinas, marca o link "Oficinas" como ativo
    if (window.location.pathname.includes('/oficinas/')) {
      links.forEach(link => {
        if (link.getAttribute('href')?.includes('oficinas.html')) {
          link.classList.add('active');
        }
      });
    }
  }

  // Inicializa navbar: hamburger, mobile menu
  function initNavbar() {
    const hamburger = document.querySelector('.navbar-hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);

        // Anima o hamburger
        const spans = hamburger.querySelectorAll('span');
        if (isOpen) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      });

      // Fecha menu ao clicar em um link
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
          const spans = hamburger.querySelectorAll('span');
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        });
      });
    }

    // Botão de logout
    const logoutBtn = document.getElementById('btnLogout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Auth.logout();
      });
    }
  }

  // Scroll suave para âncoras
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 68;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  }

  // Botão scroll to top
  function initScrollTop() {
    const btn = document.querySelector('.scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Accordion
  function initAccordions() {
    document.addEventListener('click', (e) => {
      const header = e.target.closest('.accordion-header');
      if (!header) return;

      const item = header.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const inner = body.querySelector('.accordion-body-inner');

      if (item.classList.contains('active')) {
        item.classList.remove('active');
        body.style.maxHeight = '0';
      } else {
        // Fecha os outros do mesmo grupo
        const parent = item.parentElement;
        parent.querySelectorAll('.accordion-item.active').forEach(active => {
          active.classList.remove('active');
          active.querySelector('.accordion-body').style.maxHeight = '0';
        });

        item.classList.add('active');
        body.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  }

  // Animação on scroll (Intersection Observer)
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // Navbar background on scroll
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 10) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }

  // Inicialização geral (chamado em todas as páginas exceto login)
  async function init() {
    // Verifica autenticação
    if (!Auth.initPageGuard()) return;

    // Carrega layout (header + footer)
    await loadLayout();

    // Inicializa funcionalidades
    initSmoothScroll();
    initScrollTop();
    initAccordions();
    initScrollAnimations();
    initNavbarScroll();
  }

  // API pública
  return {
    init,
    loadLayout,
    getBasePath,
    initScrollAnimations
  };
})();

// Auto-inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Só inicializa se não for a página de login
  if (!document.body.classList.contains('login-page-body')) {
    App.init();
  }
});

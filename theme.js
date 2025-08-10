// Guard de autenticação com fluxo "Sobre primeiro, depois Login"
(function() {
  try {
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    const visitedAbout = localStorage.getItem('visitedAbout') === 'true';
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    // Ao abrir a página Sobre, marca que o usuário já a viu
    if (page === 'sobre.html') {
      try { localStorage.setItem('visitedAbout', 'true'); } catch {}
      // Permite ficar na página Sobre sem autenticação
      return;
    }

    // Permite acessar a página de login sem bloqueio
    if (page === 'login.html') return;

    // Para quem não está autenticado, força ver primeiro o Sobre e depois o Login
    if (!isAuth) {
      if (!visitedAbout) {
        window.location.replace('sobre.html');
      } else {
        window.location.replace('login.html');
      }
      return;
    }
  } catch (e) {
    console.warn('Auth guard falhou:', e);
  }
})();

// Sistema de alternância de tema
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (this.themeToggle) this.themeToggle.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (this.themeToggle) this.themeToggle.textContent = '🌙';
    }
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}

function standardizeFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-text">
      <h3>Tasty Cuisine</h3>
      <p>Feito com carinho, saúde e um toque de afeto.</p>
    </div>
    <div class="footer-links">
      <a href="politica.html">Política de Privacidade</a>
    </div>
    <div class="footer-social">
      <i class="fab fa-facebook"></i>
      <i class="fab fa-instagram"></i>
    </div>
  `;
}

function setupAuthUI() {
  try {
    const menu = document.querySelector('header nav ul.menu');
    if (!menu) return;
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';

    // Remove o item "Sobre" do menu em todas as páginas
    menu.querySelectorAll('a[href="sobre.html"]').forEach(a => {
      const li = a.closest('li');
      if (li) li.remove();
      else a.remove();
    });

    // Localiza o link de login/entrar (se existir)
    const loginAnchor = menu.querySelector('a[href="login.html"]');

    // Garante que o link de sair exista apenas uma vez
    let logoutAnchor = document.getElementById('logout-link');
    if (!logoutAnchor) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.id = 'logout-link';
      a.textContent = 'Sair';
      li.appendChild(a);
      menu.appendChild(li);
      logoutAnchor = a;

      a.addEventListener('click', (e) => {
        e.preventDefault();
        try { localStorage.removeItem('isAuthenticated'); } catch {}
        // Redireciona para a página Sobre após sair
        window.location.href = 'sobre.html';
      });
    }

    // Alterna visibilidade entre Login e Sair
    if (isAuth) {
      if (loginAnchor) {
        const li = loginAnchor.closest('li');
        if (li) li.style.display = 'none';
        else loginAnchor.style.display = 'none';
      }
      logoutAnchor.style.display = '';
    } else {
      if (loginAnchor) {
        const li = loginAnchor.closest('li');
        if (li) li.style.display = '';
        else loginAnchor.style.display = '';
      }
      if (logoutAnchor) logoutAnchor.style.display = 'none';
    }
  } catch (e) {
    console.warn('Falha ao configurar UI de autenticação:', e);
  }
}


// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  standardizeFooter();
  setupAuthUI();
});

// Também inicializar se o script for carregado após o DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    standardizeFooter();
    setupAuthUI();
  });
} else {
  new ThemeManager();
  standardizeFooter();
  setupAuthUI();
}
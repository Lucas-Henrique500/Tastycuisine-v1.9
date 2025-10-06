// Guard de autenticação
const AuthGuard = {
  STORAGE_KEYS: {
    AUTH: 'isAuthenticated',
    VISITED_ABOUT: 'visitedAbout'
  },
  
  getStorageItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn(`Erro ao acessar localStorage para ${key}:`, error);
      return null;
    }
  },
  
  setStorageItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn(`Erro ao salvar no localStorage ${key}:`, error);
    }
  },
  
  init() {
    try {
      const isAuth = this.getStorageItem(this.STORAGE_KEYS.AUTH) === 'true';
      const visitedAbout = this.getStorageItem(this.STORAGE_KEYS.VISITED_ABOUT) === 'true';
      const page = window.location.pathname.split('/').pop() || 'index.html';

      if (page === 'sobre.html') {
        this.setStorageItem(this.STORAGE_KEYS.VISITED_ABOUT, 'true');
        return;
      }

      if (page === 'login.html') return;

      if (!isAuth) {
        const redirectTo = visitedAbout ? 'html/login.html' : 'html/sobre.html';
        window.location.replace(redirectTo);
      }
    } catch (error) {
      console.warn('Auth guard falhou:', error);
    }
  }
};

AuthGuard.init();

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
    menu.querySelectorAll('a[href="sobre.html"], a[href="html/sobre.html"]').forEach(a => {
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
        window.location.href = 'html/sobre.html';
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
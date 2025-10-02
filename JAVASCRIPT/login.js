// login.js - Fluxo de cadastro e login com marcação de autenticação
const PROFILE_STORAGE_KEY = 'perfilUsuario';

function saveProfile(profile) {
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    return true;
  } catch (e) {
    console.error('Erro ao salvar perfil no cadastro:', e);
    return false;
  }
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function toggleForms(showRegister) {
  const registerForm = document.getElementById('register-form');
  const loginForms = document.querySelectorAll('.login-container > .login-form:not(#register-form)');
  if (registerForm) registerForm.style.display = showRegister ? 'block' : 'none';
  loginForms.forEach(f => f.style.display = showRegister ? 'none' : 'block');
}

document.addEventListener('DOMContentLoaded', () => {
  const linkCadastro = document.getElementById('link-cadastre-se');
  const linkVoltar = document.getElementById('link-voltar-login');
  const btnConcluir = document.getElementById('btn-concluir-cadastro');

  if (linkCadastro) linkCadastro.addEventListener('click', (e) => { e.preventDefault(); toggleForms(true); });
  if (linkVoltar) linkVoltar.addEventListener('click', (e) => { e.preventDefault(); toggleForms(false); });

  if (btnConcluir) {
    btnConcluir.addEventListener('click', () => {
      const fullname = document.getElementById('reg-fullname').value.trim();
      const username = document.getElementById('reg-username').value.trim();
      const dob = document.getElementById('reg-dob').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const accountType = document.getElementById('reg-account-type').value.trim();
      const password = document.getElementById('reg-password').value;

      const missing = [];
      if (!fullname) missing.push('Nome Completo');
      if (!username) missing.push('Nome de Usuário');
      if (!dob) missing.push('Data de Nascimento');
      if (!email) missing.push('Email');
      if (!accountType) missing.push('Tipo de Conta');
      if (!password) missing.push('Senha');

      if (missing.length > 0) {
        alert('Preencha os campos obrigatórios: ' + missing.join(', '));
        return;
      }

      const existing = loadProfile() || {};
      const profile = {
        ...existing,
        fullname,
        username,
        dob,
        email,
        accountType,
        password,
        restrictions: existing.restrictions || '',
        diets: existing.diets || '',
        photo: existing.photo || null
      };

      const ok = saveProfile(profile);
      if (!ok) {
        alert('Não foi possível concluir o cadastro. Tente novamente.');
        return;
      }

      // Marca usuário como autenticado e redireciona para a home
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = 'index.html';
    });
  }

  // Login simples: valida campos e autentica
  const loginForm = document.querySelector('.login-form:not(#register-form)');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value;
      const profile = loadProfile();
      if (!profile) {
        alert('Nenhuma conta encontrada. Cadastre-se para continuar.');
        return;
      }
      if (profile.email === email && profile.password === senha) {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'index.html';
      } else {
        alert('Credenciais inválidas. Verifique seu email e senha.');
      }
    });
  }
});

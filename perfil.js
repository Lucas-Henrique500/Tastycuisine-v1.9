// Dados das receitas usadas nas abas Favoritas/Publicadas
const receitasData = {
  'bolo-chocolate-fit': { nome: 'Bolo de Chocolate Fit', categoria: 'Sobremesas', tempo: '45 min', dificuldade: 'Médio', likes: 120 },
  'brownie-fit': { nome: 'Brownie Fit Zero Açúcar', categoria: 'Sobremesas', tempo: '30 min', dificuldade: 'Fácil', likes: 95 },
  'smoothie-bowl': { nome: 'Smoothie Bowl Tropical', categoria: 'Café da Manhã', tempo: '10 min', dificuldade: 'Muito Fácil', likes: 80 },
  'panquecas-aveia': { nome: 'Panquecas de Aveia', categoria: 'Café da Manhã', tempo: '15 min', dificuldade: 'Fácil', likes: 110 },
  'suco-verde': { nome: 'Suco Verde Detox', categoria: 'Detox', tempo: '5 min', dificuldade: 'Muito Fácil', likes: 65 },
  'omelete-fit': { nome: 'Omelete Fit', categoria: 'Café da Manhã', tempo: '10 min', dificuldade: 'Fácil', likes: 75 },
  'salmao-assado': { nome: 'Salmão Assado com Legumes', categoria: 'Marmitas Fit', tempo: '35 min', dificuldade: 'Médio', likes: 140 },
  'lasanha-vegana': { nome: 'Lasanha de Abobrinha Vegana', categoria: 'Veganas', tempo: '60 min', dificuldade: 'Difícil', likes: 85 },
  'sopa-lentilha': { nome: 'Sopa de Lentilha Nutritiva', categoria: 'Veganas', tempo: '40 min', dificuldade: 'Médio', likes: 70 },
  'smoothie-verde': { nome: 'Smoothie Verde Energético', categoria: 'Detox', tempo: '5 min', dificuldade: 'Muito Fácil', likes: 55 },
  'mousse-chocolate-fit': { nome: 'Mousse de Chocolate Fit', categoria: 'Sobremesas', tempo: '20 min', dificuldade: 'Fácil', likes: 130 },
  'curry-grao-bico': { nome: 'Curry de Grão de Bico', categoria: 'Veganas', tempo: '40 min', dificuldade: 'Médio', likes: 90 },
  'sopa-creme-abobora': { nome: 'Sopa Cremosa de Abóbora', categoria: 'Vegano', tempo: '35 min', dificuldade: 'Fácil', likes: 45 },
  'wrap-frango-avocado': { nome: 'Wrap de Frango com Avocado', categoria: 'Low Carb', tempo: '20 min', dificuldade: 'Fácil', likes: 52 }
};

// Favoritos
class FavoritosManager {
  constructor() {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  }
  getFavoritos() { return this.favoritos; }
  removerFavorito(receitaId) {
    this.favoritos = this.favoritos.filter(id => id !== receitaId);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}

// Publicadas (mock)
class PublicadasManager {
  constructor(storageKey = 'publicadas') {
    this.storageKey = storageKey;
    this.receitasPublicas = this._load();
  }
  _load() {
    try { const raw = localStorage.getItem(this.storageKey); return raw ? JSON.parse(raw) : []; }
    catch (e) { console.error('Erro ao ler publicadas do storage:', e); return []; }
  }
  getReceitasPublicas() {
    if (!Array.isArray(this.receitasPublicas)) return [];
    return this.receitasPublicas;
  }
}

const favoritosManager = new FavoritosManager();
const publicadasManager = new PublicadasManager();

// Imagens para os cards
function getImagem(receitaId) {
  const map = {
    'bolo-chocolate-fit': 'assets/bolo-chocolate-fit.svg',
    'brownie-fit': 'assets/brownie-fit.svg',
    'smoothie-bowl': 'assets/smoothie-bowl.svg',
    'panquecas-aveia': 'assets/panquecas-aveia.svg',
    'suco-verde': 'assets/smoothie-verde.svg',
    'omelete-fit': 'assets/omelete-vegetais.svg',
    'salmao-assado': 'assets/salmao-legumes.svg',
    'lasanha-vegana': 'assets/lasanha-abobrinha.svg',
    'sopa-lentilha': 'assets/sopa-lentilha.svg',
    'mousse-chocolate-fit': 'assets/mousse-chocolate.svg',
    'curry-grao-bico': 'assets/curry-grao-bico.svg',
    'sopa-creme-abobora': 'assets/sopa-lentilha.svg',
    'wrap-frango-avocado': 'assets/wrap-integral.svg'
  };
  return map[receitaId] || `assets/${receitaId}.svg`;
}

// Cartões
function criarCardPublicada(receitaId) {
  const receita = receitasData[receitaId];
  if (!receita) return null;
  return `
    <div class="card" data-receita-id="${receitaId}">
      <div class="imagem" style="background-image: url('${getImagem(receitaId)}'); background-size: cover; background-position: center;"></div>
      <span class="tag rosa">${receita.categoria}</span>
      <h4>${receita.nome}</h4>
      <div class="info-receita">
        <span><i class="fas fa-clock"></i> ${receita.tempo}</span>
        <span><i class="fas fa-signal"></i> ${receita.dificuldade}</span>
        <span><i class="fas fa-heart"></i> ${receita.likes}</span>
      </div>
      <button class="btn-roxo" onclick="verReceita('${receitaId}')">Ver Receita</button>
    </div>
  `;
}

function criarCardFavorito(receitaId) {
  const receita = receitasData[receitaId];
  if (!receita) return null;
  return `
    <div class="card" data-receita-id="${receitaId}">
      <div class="imagem" style="background-image: url('${getImagem(receitaId)}'); background-size: cover; background-position: center;"></div>
      <span class="tag" style="background:#E1D5F5;color:#7a2ca0">${receita.categoria}</span>
      <h4>${receita.nome}</h4>
      <div class="info-receita">
        <span><i class="fas fa-clock"></i> ${receita.tempo}</span>
        <span><i class="fas fa-signal"></i> ${receita.dificuldade}</span>
        <span><i class="fas fa-heart"></i> ${receita.likes}</span>
      </div>
      <div class="card-actions">
        <button class="btn-roxo" onclick="verReceita('${receitaId}')">Ver Receita</button>
        <button class="btn-remover" onclick="removerFavorito('${receitaId}')" title="Remover dos favoritos">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `;
}

function carregarFavoritos() {
  const containerFavoritas = document.getElementById('favoritas');
  const favoritos = favoritosManager.getFavoritos();
  if (!containerFavoritas) return;
  if (favoritos.length === 0) {
    containerFavoritas.innerHTML = `
      <div class="sem-favoritas">
        <i class="fas fa-heart" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
        <p>Você ainda não tem receitas favoritas.</p>
        <p>Explore nossas receitas e favorite as que mais gostar!</p>
        <a href="receitas.html" class="btn-roxo">Explorar Receitas</a>
      </div>
    `;
  } else {
    const cardsHtml = favoritos.map(id => criarCardFavorito(id)).filter(Boolean).join('');
    containerFavoritas.innerHTML = `
      <h3>Suas Receitas Favoritas (${favoritos.length})</h3>
      <div class="cards-receitas">
        ${cardsHtml}
      </div>
    `;
  }
}

function carregarPublicadas() {
  const containerPublicadas = document.getElementById('publicadas');
  if (!containerPublicadas) return;
  const receitasPublicas = publicadasManager.getReceitasPublicas();
  if (!receitasPublicas || receitasPublicas.length === 0) {
    containerPublicadas.innerHTML = `
      <div class="sem-favoritas">
        <i class="fas fa-upload" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
        <p>Você ainda não publicou nenhuma receita.</p>
        <p>Publique sua primeira receita e compartilhe com a comunidade!</p>
        <button class="btn-roxo" id="btn-publicar-receita">+ Publicar Receita</button>
      </div>
    `;
  } else {
    const cardsHtml = receitasPublicas.map(id => criarCardPublicada(id)).filter(Boolean).join('');
    containerPublicadas.innerHTML = `
      <h3>Receitas Publicadas</h3>
      <div class="cards-receitas">
        ${cardsHtml}
      </div>
    `;
  }
  const btn = document.getElementById('btn-publicar-receita');
  if (btn) btn.addEventListener('click', publicarNovaReceita);
}

function verReceita(receitaId) {
  window.location.href = `receita-detalhes.html?id=${receitaId}`;
}

function removerFavorito(receitaId) {
  if (confirm('Tem certeza que deseja remover esta receita dos favoritos?')) {
    favoritosManager.removerFavorito(receitaId);
    carregarFavoritos();
  }
}

function publicarNovaReceita() {
  window.location.href = 'publicar.html';
}

// =========================
// PERFIL - UTILITÁRIOS
// =========================
const REQUIRED_FIELDS = ['profile-fullname', 'profile-username', 'profile-dob', 'profile-email', 'profile-account-type'];
const PROFILE_STORAGE_KEY = 'perfilUsuario';

function getEl(id) { return document.getElementById(id); }

function getProfileFromInputs() {
  return {
    fullname: (getEl('profile-fullname')?.value || '').trim(),
    username: (getEl('profile-username')?.value || '').trim(),
    email: (getEl('profile-email')?.value || '').trim(),
    dob: (getEl('profile-dob')?.value || '').trim(),
    restrictions: (getEl('profile-restrictions')?.value || '').trim(),
    diets: (getEl('profile-diets')?.value || '').trim(),
    accountType: (getEl('profile-account-type')?.value || '').trim(),
    password: (getEl('profile-password')?.value || ''),
  };
}

function setInputsFromProfile(p) {
  if (!p) return;
  if (getEl('profile-fullname')) getEl('profile-fullname').value = p.fullname || '';
  if (getEl('profile-username')) getEl('profile-username').value = p.username || '';
  if (getEl('profile-email')) getEl('profile-email').value = p.email || '';
  if (getEl('profile-dob')) getEl('profile-dob').value = p.dob || '';
  if (getEl('profile-restrictions')) getEl('profile-restrictions').value = p.restrictions || '';
  if (getEl('profile-diets')) getEl('profile-diets').value = p.diets || '';
  if (getEl('profile-account-type') && p.accountType) getEl('profile-account-type').value = p.accountType;
  if (getEl('profile-password')) getEl('profile-password').value = p.password || '';
}

function computeProgress(profile) {
  const checks = [
    !!profile.fullname,
    !!profile.username,
    !!profile.dob,
    !!profile.email,
    !!profile.accountType,
    !!profile.restrictions,
    !!profile.diets
  ];
  const filled = checks.filter(Boolean).length;
  return Math.round((filled / checks.length) * 100);
}

function renderDietsTags(diets) {
  const container = getEl('sidebar-diets');
  if (!container) return;
  const items = (diets || '').split(',').map(t => t.trim()).filter(Boolean);
  if (items.length === 0) { container.innerHTML = ''; return; }
  container.innerHTML = items.map(t => `<span class="tag verde">${t}</span>`).join('');
}

function updateSidebar(profile) {
  const nameEl = getEl('sidebar-name');
  const emailEl = getEl('sidebar-email');
  if (nameEl) nameEl.textContent = profile.fullname || 'Seu Nome';
  if (emailEl) emailEl.textContent = profile.email || 'seuemail@exemplo.com';
  renderDietsTags(profile.diets);
}

function updateProgressUI(percent) {
  const textEl = getEl('sidebar-progress-text');
  const barEl = getEl('sidebar-progress-bar');
  if (textEl) textEl.textContent = `Progresso do Perfil (${percent}%)`;
  if (barEl) barEl.style.width = `${percent}%`;
}

function saveProfile(profile) {
  try { localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile)); return true; }
  catch (e) { console.error('Erro ao salvar perfil:', e); return false; }
}

function loadProfile() {
  try { const raw = localStorage.getItem(PROFILE_STORAGE_KEY); if (!raw) return null; return JSON.parse(raw); }
  catch (e) { console.error('Erro ao carregar perfil:', e); return null; }
}

// =========================
// Foto de Perfil - Menu, Modal e Upload
// =========================
function createPhotoUI() {
  const card = document.querySelector('.perfil-card');
  const photoEl = card ? card.querySelector('.foto-perfil') : null;
  if (!card || !photoEl) return;

  // aplica foto salva, se houver
  const saved = loadProfile();
  if (saved && saved.photo) {
    photoEl.style.backgroundImage = `url('${saved.photo}')`;
  }

  // menu
  const menu = document.createElement('div');
  menu.id = 'foto-menu';
  Object.assign(menu.style, {
    position: 'absolute',
    top: (photoEl.offsetTop + photoEl.offsetHeight + 8) + 'px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#FFFFFF',
    border: '1px solid #eee',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    zIndex: '10',
    minWidth: '240px',
    display: 'none'
  });
  const btnVer = document.createElement('button');
  btnVer.type = 'button';
  btnVer.textContent = 'Ver Foto de Perfil';
  const btnTrocar = document.createElement('button');
  btnTrocar.type = 'button';
  btnTrocar.textContent = 'Adicionar/Trocar Foto de Perfil';
  ;[btnVer, btnTrocar].forEach(b => {
    Object.assign(b.style, {
      width: '100%', padding: '10px 14px', border: 'none', background: 'transparent',
      textAlign: 'left', cursor: 'pointer', color: '#444'
    });
    b.addEventListener('mouseover', () => b.style.background = '#F6F6F6');
    b.addEventListener('mouseout', () => b.style.background = 'transparent');
  });
  menu.append(btnVer, btnTrocar);
  card.style.position = 'relative';
  card.appendChild(menu);

  // input file
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.style.display = 'none';
  card.appendChild(input);

  // modal
  const modal = document.createElement('div');
  modal.id = 'modal-foto';
  Object.assign(modal.style, {
    display: 'none', position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.6)', zIndex: '100',
    alignItems: 'center', justifyContent: 'center'
  });
  const modalContent = document.createElement('div');
  Object.assign(modalContent.style, { background: '#FFFFFF', padding: '10px', borderRadius: '12px', maxWidth: '90vw', maxHeight: '90vh', position: 'relative' });
  const close = document.createElement('span');
  close.textContent = '\u00D7';
  Object.assign(close.style, { position: 'absolute', top: '8px', right: '12px', fontSize: '24px', cursor: 'pointer', color: '#333' });
  const img = document.createElement('img');
  Object.assign(img.style, { maxWidth: '80vw', maxHeight: '80vh', display: 'block' });
  img.alt = 'Foto de Perfil';
  modalContent.append(close, img);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  photoEl.style.cursor = 'pointer';
  photoEl.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.style.top = (photoEl.offsetTop + photoEl.offsetHeight + 8) + 'px';
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  });
  document.addEventListener('click', () => { menu.style.display = 'none'; });

  btnVer.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.style.display = 'none';
    const saved2 = loadProfile();
    let url = saved2 && saved2.photo ? saved2.photo : null;
    if (!url) {
      const bg = getComputedStyle(photoEl).backgroundImage;
      const match = bg && bg.match(/url\(["']?(.*?)["']?\)/);
      url = match && match[1] ? match[1] : null;
    }
    if (!url) { alert('Nenhuma foto de perfil definida.'); return; }
    img.src = url;
    modal.style.display = 'flex';
  });

  close.addEventListener('click', () => { modal.style.display = 'none'; });
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

  btnTrocar.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.style.display = 'none';
    input.click();
  });

  input.addEventListener('change', () => {
    const file = input.files && input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      photoEl.style.backgroundImage = `url('${dataURL}')`;
      const existing = loadProfile() || {};
      existing.photo = dataURL;
      saveProfile(existing);
    };
    reader.readAsDataURL(file);
  });
}

// =========================
// Abas e Inicialização
// =========================
const abas = document.querySelectorAll('.aba');
const conteudos = document.querySelectorAll('.conteudo');

abas.forEach(botao => {
  botao.addEventListener('click', () => {
    abas.forEach(b => b.classList.remove('ativa'));
    conteudos.forEach(c => c.classList.remove('ativa'));
    botao.classList.add('ativa');
    const alvo = document.getElementById(botao.dataset.alvo);
    if (alvo) alvo.classList.add('ativa');
    if (botao.dataset.alvo === 'favoritas') carregarFavoritos();
    else if (botao.dataset.alvo === 'publicadas') carregarPublicadas();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Abas dinâmicas quando já iniciam ativas
  const abaFavoritasAtiva = document.querySelector('.aba[data-alvo="favoritas"].ativa');
  if (abaFavoritasAtiva) carregarFavoritos();
  const abaPublicadasAtiva = document.querySelector('.aba[data-alvo="publicadas"].ativa');
  if (abaPublicadasAtiva) carregarPublicadas();

  // Perfil - carregar salvo e renderizar
  const saved = loadProfile();
  if (saved) setInputsFromProfile(saved);
  const current = getProfileFromInputs();
  updateSidebar(current);
  updateProgressUI(computeProgress(current));

  // Foto de Perfil: menu, modal e upload
  createPhotoUI();

  // Publica duas novas receitas pelo usuário (seed)
  try {
    const existentes = JSON.parse(localStorage.getItem('publicadas')) || [];
    const novas = ['sopa-creme-abobora', 'wrap-frango-avocado'];
    const merged = Array.from(new Set([...existentes, ...novas]));
    localStorage.setItem('publicadas', JSON.stringify(merged));
  } catch (e) {
    console.error('Erro ao gravar publicadas:', e);
  }

  // Botão Salvar Alterações
  const btnSalvar = document.getElementById('btn-salvar-perfil');
  if (btnSalvar) {
    btnSalvar.addEventListener('click', () => {
      const profile = getProfileFromInputs();
      const missing = [];
      if (!profile.fullname) missing.push('Nome Completo');
      if (!profile.username) missing.push('Nome de Usuário');
      if (!profile.dob) missing.push('Data de Nascimento');
      if (!profile.email) missing.push('Email');
      if (!profile.accountType) missing.push('Tipo de Conta');

      const existing = loadProfile() || {};
      const merged = { ...existing, ...profile };
      const mergedWithPassword = { ...merged };
      // mantém senha se usuário não digitou nova
      if (!profile.password && saved && saved.password) {
        mergedWithPassword.password = saved.password;
      }
      const ok = saveProfile(mergedWithPassword);
      updateSidebar(mergedWithPassword);
      updateProgressUI(computeProgress(mergedWithPassword));

      if (!ok) { alert('Não foi possível salvar seu perfil. Tente novamente.'); return; }
      if (missing.length > 0) alert('Perfil salvo, mas há campos obrigatórios vazios: ' + missing.join(', '));
      else alert('Perfil salvo com sucesso!');
    });
  }

  // Botão Sair
  const btnSair = document.getElementById('btn-sair');
  if (btnSair) {
    btnSair.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja sair?')) {
        window.location.href = 'login.html';
      }
    });
  }
});

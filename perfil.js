// Mapeamento de IDs para dados das receitas
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
  'curry-grao-bico': { nome: 'Curry de Grão de Bico', categoria: 'Veganas', tempo: '40 min', dificuldade: 'Médio', likes: 90 }
};

class FavoritosManager {
  constructor() {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  }

  getFavoritos() {
    return this.favoritos;
  }

  removerFavorito(receitaId) {
    this.favoritos = this.favoritos.filter(id => id !== receitaId);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}

class PublicadasManager {
  constructor() {
    // Simulando receitas públicas do usuário (em um app real, viria do backend)
    this.receitasPublicas = [
      'smoothie-verde',
      'curry-grao-bico',
      'mousse-chocolate-fit',
      'panquecas-aveia'
    ];
  }

  getReceitasPublicas() {
    return this.receitasPublicas;
  }
}

const favoritosManager = new FavoritosManager();
const publicadasManager = new PublicadasManager();

function criarCardPublicada(receitaId) {
  const receita = receitasData[receitaId];
  if (!receita) return null;

  return `
    <div class="card" data-receita-id="${receitaId}">
      <div class="imagem"></div>
      <div class="categoria">${receita.categoria}</div>
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
      <div class="imagem"></div>
      <div class="categoria">${receita.categoria}</div>
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
    const cardsHtml = favoritos.map(id => criarCardFavorito(id)).filter(card => card).join('');
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
  const receitasPublicas = publicadasManager.getReceitasPublicas();
  
  const cardsHtml = receitasPublicas.map(id => criarCardPublicada(id)).filter(card => card).join('');
  containerPublicadas.innerHTML = `
    <h3>Receitas Publicadas</h3>
    <div class="cards-receitas">
      ${cardsHtml}
    </div>
    <button class="btn-verde" id="btn-publicar-nova-receita">+ Publicar Nova Receita</button>
  `;
  
  // Adicionar evento de clique ao botão após ele ser criado
  document.getElementById('btn-publicar-nova-receita').addEventListener('click', publicarNovaReceita);
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

const abas = document.querySelectorAll('.aba');
const conteudos = document.querySelectorAll('.conteudo');

abas.forEach(botao => {
  botao.addEventListener('click', () => {
    abas.forEach(b => b.classList.remove('ativa'));
    conteudos.forEach(c => c.classList.remove('ativa'));

    botao.classList.add('ativa');
    const alvo = document.getElementById(botao.dataset.alvo);
    alvo.classList.add('ativa');
    
    // Carregar conteúdo quando a aba for clicada
    if (botao.dataset.alvo === 'favoritas') {
      carregarFavoritos();
    } else if (botao.dataset.alvo === 'publicadas') {
      carregarPublicadas();
    }
  });
});

// Carregar conteúdo na inicialização se as abas estiverem ativas
document.addEventListener('DOMContentLoaded', () => {
  const abaFavoritasAtiva = document.querySelector('.aba[data-alvo="favoritas"].ativa');
  if (abaFavoritasAtiva) {
    carregarFavoritos();
  }
  
  const abaPublicadasAtiva = document.querySelector('.aba[data-alvo="publicadas"].ativa');
  if (abaPublicadasAtiva) {
    carregarPublicadas();
  }
});
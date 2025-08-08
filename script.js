// Função para simular modo claro/escuro (temporário)
document.querySelector('.toggle-theme')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Rolagem horizontal em carrosséis
const carrosseis = document.querySelectorAll('.carousel, .scroll-h');
carrosseis.forEach(c => {
  c.addEventListener('wheel', e => {
    e.preventDefault();
    c.scrollLeft += e.deltaY;
  });
});

// Mapeamento de nomes de receitas para IDs
const receitaIds = {
  'Bolo de Chocolate Fit': 'bolo-chocolate-fit',
  'Brownie Fit Zero Açúcar': 'brownie-fit',
  'Smoothie Bowl Tropical': 'smoothie-bowl',
  'Panquecas de Aveia': 'panquecas-aveia',
  'Suco Verde Detox': 'suco-verde',
  'Omelete Fit': 'omelete-fit',
  'Salmão Assado com Legumes': 'salmao-assado',
  'Lasanha de Abobrinha Vegana': 'lasanha-vegana',
  'Sopa de Lentilha Nutritiva': 'sopa-lentilha',
  'Smoothie Verde Energético': 'smoothie-verde',
  'Cookies Integrais': 'cookies-integrais',
  'Frango com Batata Doce': 'frango-batata-doce',
  'Salada de Frango Grelhado': 'salada-frango',
  // Sobremesas Saudáveis
  'Mousse de Chocolate Fit': 'mousse-chocolate-fit',
  'Sorvete de Banana Fit': 'sorvete-banana-fit',
  'Pudim de Chia Zero Açúcar': 'pudim-chia-zero',
  'Trufas de Tâmara': 'trufas-tamara',
  'Picolé de Frutas Natural': 'picole-frutas',
  'Brigadeiro Fit de Cacau': 'brigadeiro-fit',
  'Cheesecake Fit de Frutas Vermelhas': 'cheesecake-fit',
  'Torta de Maçã Integral': 'torta-maca',
  // Café da Manhã
  'Vitamina Proteica': 'vitamina-proteica',
  'Overnight Oats': 'overnight-oats',
  'Tapioca Fit': 'tapioca-fit',
  'Açaí Bowl Energético': 'acai-bowl',
  'Pão de Banana Fit': 'pao-banana-fit',
  'Granola Caseira': 'granola-caseira',
  'Wrap Integral Matinal': 'wrap-matinal',
  // Marmitas Fit
  'Peito de Peru com Quinoa': 'peru-quinoa',
  'Tilápia com Arroz Integral': 'tilapia-arroz',
  'Carne Magra com Legumes': 'carne-legumes',
  'Atum com Grão de Bico': 'atum-grao-bico',
  'Hambúrguer de Lentilha': 'hamburguer-lentilha',
  'Peito de Frango Temperado': 'frango-temperado',
  'Omelete de Forno com Vegetais': 'omelete-forno',
  'Escondidinho de Batata Doce': 'escondidinho-batata',
  // Veganas
  'Curry de Grão de Bico': 'curry-grao-bico',
  'Salada de Quinoa Colorida': 'salada-quinoa',
  'Hambúrguer de Feijão Preto': 'hamburguer-feijao',
  'Risotto de Cogumelos': 'risotto-cogumelos',
  'Macarrão de Abobrinha': 'macarrao-abobrinha',
  'Tofu Refogado com Legumes': 'tofu-refogado',
  'Falafel Assado': 'falafel-assado',
  'Cuscuz Marroquino': 'cuscuz-marroquino',
  'Estrogonofe de Cogumelos': 'estrogonofe-cogumelos',
  // Snacks
  'Mix de Castanhas Temperadas': 'mix-castanhas',
  'Chips de Batata Doce': 'chips-batata-doce',
  'Hummus de Grão de Bico': 'hummus-grao-bico',
  'Barrinhas de Cereais': 'barrinhas-cereais',
  'Guacamole Caseiro': 'guacamole-caseiro',
  'Bolinhas de Coco': 'bolinhas-coco',
  'Pasta de Ricota com Ervas': 'pasta-ricota',
  'Energy Balls': 'energy-balls',
  'Crackers Integrais': 'crackers-integrais',
  // Detox
  'Água Saborizada Detox': 'agua-detox',
  'Suco de Beterraba com Gengibre': 'suco-beterraba',
  'Chá Verde Gelado': 'cha-verde-gelado',
  'Limonada de Cúrcuma': 'limonada-curcuma',
  'Smoothie de Abacaxi': 'smoothie-abacaxi',
  'Suco de Melancia': 'suco-melancia',
  'Água de Berinjela': 'agua-berinjela',
  'Suco de Pepino com Hortelã': 'suco-pepino',
  'Kombucha Caseiro': 'kombucha-caseiro',
  // Low Carb
  'Couve-flor Gratinada': 'couve-flor-gratinada',
  'Omelete de Cogumelos': 'omelete-cogumelos',
  'Berinjela Recheada': 'berinjela-recheada',
  'Salada de Atum': 'salada-atum',
  'Abobrinha Refogada': 'abobrinha-refogada',
  'Espaguete de Abobrinha': 'espaguete-abobrinha',
  'Quiche de Brócolis': 'quiche-brocolis',
  'Wrap de Alface': 'wrap-alface',
  'Pimentão Recheado': 'pimentao-recheado'
};

// Mapeamento de ingredientes para receitas
const ingredientesReceitas = {
  'aveia': ['Panquecas de Aveia', 'Cookies Integrais', 'Overnight Oats', 'Granola Caseira'],
  'chia': ['Smoothie Bowl Tropical', 'Smoothie Verde Energético', 'Pudim de Chia Zero Açúcar'],
  'banana': ['Smoothie Bowl Tropical', 'Panquecas de Aveia', 'Sorvete de Banana Fit', 'Pão de Banana Fit'],
  'castanhas': ['Brownie Fit Zero Açúcar', 'Cookies Integrais', 'Mix de Castanhas Temperadas', 'Energy Balls'],
  'cacau': ['Bolo de Chocolate Fit', 'Brownie Fit Zero Açúcar', 'Mousse de Chocolate Fit', 'Brigadeiro Fit de Cacau'],
  'linhaça': ['Smoothie Verde Energético', 'Panquecas de Aveia', 'Granola Caseira'],
  'maçã': ['Smoothie Bowl Tropical', 'Suco Verde Detox', 'Torta de Maçã Integral'],
  'cenoura': ['Bolo de Chocolate Fit', 'Sopa de Lentilha Nutritiva', 'Carne Magra com Legumes'],
  'abacate': ['Smoothie Verde Energético', 'Salada de Frango Grelhado', 'Guacamole Caseiro'],
  'brócolis': ['Salmão Assado com Legumes', 'Lasanha de Abobrinha Vegana', 'Quiche de Brócolis'],
  'gengibre': ['Suco Verde Detox', 'Smoothie Verde Energético', 'Suco de Beterraba com Gengibre'],
  'mel': ['Panquecas de Aveia', 'Smoothie Bowl Tropical', 'Granola Caseira'],
  'uva': ['Smoothie Bowl Tropical', 'Suco Verde Detox'],
  'tofu': ['Lasanha de Abobrinha Vegana', 'Sopa de Lentilha Nutritiva', 'Tofu Refogado com Legumes'],
  'peixe': ['Salmão Assado com Legumes', 'Tilápia com Arroz Integral', 'Atum com Grão de Bico'],
  'quinoa': ['Peito de Peru com Quinoa', 'Salada de Quinoa Colorida'],
  'abobrinha': ['Lasanha de Abobrinha Vegana', 'Macarrão de Abobrinha', 'Espaguete de Abobrinha'],
  'cogumelos': ['Risotto de Cogumelos', 'Omelete de Cogumelos', 'Estrogonofe de Cogumelos'],
  'grão de bico': ['Curry de Grão de Bico', 'Atum com Grão de Bico', 'Hummus de Grão de Bico'],
  'batata doce': ['Frango com Batata Doce', 'Chips de Batata Doce', 'Escondidinho de Batata Doce'],
  'coco': ['Bolinhas de Coco', 'Trufas de Tâmara'],
  'tâmara': ['Trufas de Tâmara', 'Energy Balls'],
  'açaí': ['Açaí Bowl Energético'],
  'melancia': ['Suco de Melancia'],
  'pepino': ['Suco de Pepino com Hortelã', 'Água Saborizada Detox'],
  'beterraba': ['Suco de Beterraba com Gengibre'],
  'couve-flor': ['Couve-flor Gratinada'],
  'berinjela': ['Berinjela Recheada', 'Água de Berinjela'],
  'atum': ['Salada de Atum', 'Atum com Grão de Bico'],
  'ricota': ['Pasta de Ricota com Ervas'],
  'lentilha': ['Sopa de Lentilha Nutritiva', 'Hambúrguer de Lentilha'],
  'feijão': ['Hambúrguer de Feijão Preto'],
  'abacaxi': ['Smoothie de Abacaxi'],
  'hortelã': ['Suco de Pepino com Hortelã'],
  'cúrcuma': ['Limonada de Cúrcuma'],
  'alface': ['Wrap de Alface'],
  'pimentão': ['Pimentão Recheado']
};

// Função para adicionar eventos aos botões "Ver Receita"
function adicionarEventosVerReceita() {
  document.querySelectorAll('.ver-receita').forEach(btn => {
    // Remove listeners existentes
    btn.removeEventListener('click', handleVerReceita);
    // Adiciona novo listener
    btn.addEventListener('click', handleVerReceita);
  });
}

// Handler para botões "Ver Receita"
function handleVerReceita(e) {
  e.stopPropagation();
  const card = e.target.closest('.card-receita');
  const nomeReceita = card.querySelector('h2').textContent;
  const receitaId = receitaIds[nomeReceita];
  
  if (receitaId) {
    window.location.href = `receita-detalhes.html?id=${receitaId}`;
  } else {
    console.warn('ID da receita não encontrado para:', nomeReceita);
  }
}

// Função para adicionar eventos aos cards
function adicionarEventosCard() {
  document.querySelectorAll('.card-receita').forEach(card => {
    // Remove listeners existentes
    card.removeEventListener('click', handleCardClick);
    // Adiciona novo listener
    card.addEventListener('click', handleCardClick);
  });
}

// Handler para clique no card
function handleCardClick(e) {
  // Só navega se não clicou no favorito ou no botão
  if (!e.target.closest('.favorito') && !e.target.closest('.ver-receita')) {
    const nomeReceita = this.querySelector('h2').textContent;
    const receitaId = receitaIds[nomeReceita];
    
    if (receitaId) {
      window.location.href = `receita-detalhes.html?id=${receitaId}`;
    }
  }
}

// Sistema de favoritos
class FavoritosManager {
  constructor() {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  }

  isFavorito(receitaId) {
    return this.favoritos.includes(receitaId);
  }

  toggleFavorito(receitaId) {
    if (this.isFavorito(receitaId)) {
      this.favoritos = this.favoritos.filter(id => id !== receitaId);
    } else {
      this.favoritos.push(receitaId);
    }
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    return this.isFavorito(receitaId);
  }
}

const favoritosManager = new FavoritosManager();

// Função para atualizar ícone de favorito
function atualizarIconeFavorito(elemento, receitaId) {
  const isFav = favoritosManager.isFavorito(receitaId);
  elemento.classList.toggle('ativo', isFav);
  elemento.textContent = isFav ? '❤' : '🤍';
}

// Marcar/desmarcar favoritos nos cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.favorito').forEach(btn => {
    const card = btn.closest('.card-receita');
    const nomeReceita = card.querySelector('h2').textContent;
    const receitaId = receitaIds[nomeReceita];
    
    if (receitaId) {
      atualizarIconeFavorito(btn, receitaId);
      btn.addEventListener('click', handleFavoritoClick);
    }
  });

  // Inicializar eventos
  adicionarEventosVerReceita();
  adicionarEventosCard();

  // Funcionalidade da barra de pesquisa
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  
  if (searchForm && searchInput) {
    // Criar container de sugestões
    criarContainerSugestoes(searchInput);
    
    // Evento de submit do formulário
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = searchInput.value.trim();
      
      if (searchTerm) {
        esconderSugestoes();
        mostrarCarregamento();
        
        // Pequeno delay para mostrar o carregamento
        setTimeout(() => {
          // Se estiver na página home, pesquisar nos carrosséis
          if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
            const resultado = pesquisarNaHome(searchTerm);
            if (resultado.encontrado) {
              // Rolar suavemente para o primeiro resultado
              resultado.primeiroCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
              });
              // Destacar o card encontrado
              destacarCard(resultado.primeiroCard);
            } else {
              mostrarMensagemSemResultados(searchTerm);
            }
          } else {
            // Se estiver na página receitas, pesquisar e destacar
            const resultado = pesquisarReceitas(searchTerm);
            if (resultado.encontrados > 0) {
              // Rolar para o primeiro resultado
              if (resultado.primeiroCard) {
                resultado.primeiroCard.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'center' 
                });
                destacarCard(resultado.primeiroCard);
              }
            } else {
              mostrarMensagemSemResultados(searchTerm);
            }
          }
          
          esconderCarregamento();
        }, 300); // Delay de 300ms
      }
    });
    
    // Sugestões em tempo real
    searchInput.addEventListener('input', (e) => {
      const termo = e.target.value.trim();
      if (termo.length >= 2) {
        mostrarSugestoes(termo);
      } else {
        esconderSugestoes();
      }
    });
    
    // Esconder sugestões ao clicar fora
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-form')) {
        esconderSugestoes();
      }
    });
  }

  // Funcionalidade das categorias
  document.querySelectorAll('.categoria[data-categoria]').forEach(categoria => {
    categoria.addEventListener('click', () => {
      const categoriaValue = categoria.getAttribute('data-categoria');
      window.location.href = `receitas.html?categoria=${encodeURIComponent(categoriaValue)}`;
    });
  });

  // Funcionalidade das setas dos carrosséis
  document.querySelectorAll('.carrossel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const carrosselId = btn.getAttribute('data-carrossel');
      const carrossel = document.getElementById(carrosselId);
      const scrollAmount = 280;
      
      if (btn.classList.contains('prev')) {
        carrossel.scrollLeft -= scrollAmount;
      } else {
        carrossel.scrollLeft += scrollAmount;
      }
    });
  });

  // Funcionalidade dos ingredientes da natureza
  document.querySelectorAll('.ingredientes .card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const ingrediente = card.querySelector('p').textContent.toLowerCase();
      window.location.href = `receitas.html?ingrediente=${encodeURIComponent(ingrediente)}`;
    });
  });
});

// Função para pesquisar receitas
function pesquisarReceitas(termo) {
  const termoLower = termo.toLowerCase();
  const cards = document.querySelectorAll('.card-receita');
  let resultadosEncontrados = 0;
  let primeiroCard = null;
  
  cards.forEach(card => {
    const nomeReceita = card.querySelector('h2').textContent.toLowerCase();
    const categoria = card.querySelector('.tag').textContent.toLowerCase();
    const ingredientesEncontrados = Object.keys(ingredientesReceitas).filter(ingrediente => 
      ingrediente.includes(termoLower) && 
      ingredientesReceitas[ingrediente].some(receita => 
        receita.toLowerCase() === card.querySelector('h2').textContent.toLowerCase()
      )
    );
    
    const corresponde = nomeReceita.includes(termoLower) || 
                       categoria.includes(termoLower) || 
                       ingredientesEncontrados.length > 0;
    
    if (corresponde) {
      card.style.display = 'block';
      if (!primeiroCard) primeiroCard = card;
      resultadosEncontrados++;
    } else {
      card.style.display = 'none';
    }
  });
  
  return {
    encontrados: resultadosEncontrados,
    primeiroCard: primeiroCard
  };
}

// Função para pesquisar na página home
function pesquisarNaHome(termo) {
  const termoLower = termo.toLowerCase();
  const cards = document.querySelectorAll('.card-receita');
  let resultadosEncontrados = 0;
  let primeiroCard = null;
  
  // Esconder todos os cards primeiro
  cards.forEach(card => {
    card.style.display = 'none';
  });
  
  // Mostrar apenas os que correspondem à pesquisa
  cards.forEach(card => {
    const nomeReceita = card.querySelector('h2').textContent.toLowerCase();
    const categoria = card.querySelector('.tag').textContent.toLowerCase();
    const ingredientesEncontrados = Object.keys(ingredientesReceitas).filter(ingrediente => 
      ingrediente.includes(termoLower) && 
      ingredientesReceitas[ingrediente].some(receita => 
        receita.toLowerCase() === card.querySelector('h2').textContent.toLowerCase()
      )
    );
    
    const corresponde = nomeReceita.includes(termoLower) || 
                       categoria.includes(termoLower) || 
                       ingredientesEncontrados.length > 0;
    
    if (corresponde) {
      card.style.display = 'block';
      if (!primeiroCard) primeiroCard = card;
      resultadosEncontrados++;
    }
  });
  
  // Atualizar títulos das seções
  const tituloAlta = document.querySelector('.receitas-em-alta h2');
  const tituloAmadas = document.querySelector('.mais-amadas h2');
  
  if (tituloAlta) tituloAlta.textContent = `Resultados para: "${termo}" (${resultadosEncontrados} receitas)`;
  if (tituloAmadas) tituloAmadas.style.display = 'none';
  
  // Esconder seção "Mais Amadas" se houver pesquisa
  const secaoAmadas = document.querySelector('.mais-amadas');
  if (secaoAmadas) secaoAmadas.style.display = 'none';
  
  // Mostrar botão para limpar pesquisa
  mostrarBotaoLimparPesquisa();
  
  return {
    encontrado: resultadosEncontrados > 0,
    primeiroCard: primeiroCard,
    total: resultadosEncontrados
  };
}

// Função para mostrar botão de limpar pesquisa
function mostrarBotaoLimparPesquisa() {
  let botaoLimpar = document.getElementById('limpar-pesquisa');
  if (!botaoLimpar) {
    botaoLimpar = document.createElement('button');
    botaoLimpar.id = 'limpar-pesquisa';
    botaoLimpar.textContent = 'Limpar Pesquisa';
    botaoLimpar.style.cssText = `
      background: #ff6b6b;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
      margin: 20px auto;
      display: block;
      font-weight: 500;
    `;
    
    botaoLimpar.addEventListener('click', limparPesquisa);
    
    const secaoAlta = document.querySelector('.receitas-em-alta');
    if (secaoAlta) {
      secaoAlta.appendChild(botaoLimpar);
    }
  }
}

// Função para destacar um card
function destacarCard(card) {
  // Remove destaque de outros cards
  document.querySelectorAll('.card-receita').forEach(c => {
    c.classList.remove('card-destacado');
  });
  
  // Adiciona destaque ao card encontrado
  card.classList.add('card-destacado');
  
  // Remove o destaque após 3 segundos
  setTimeout(() => {
    card.classList.remove('card-destacado');
  }, 3000);
}

// Lista de todas as receitas e ingredientes para sugestões
const todasSugestoes = [
  // Receitas
  'Bolo de Chocolate Fit', 'Brownie Fit Zero Açúcar', 'Smoothie Bowl Tropical',
  'Panquecas de Aveia', 'Suco Verde Detox', 'Omelete Fit', 'Salmão Assado com Legumes',
  'Lasanha de Abobrinha Vegana', 'Sopa de Lentilha Nutritiva', 'Smoothie Verde Energético',
  'Cookies Integrais', 'Frango com Batata Doce', 'Mousse de Chocolate Fit',
  // Ingredientes
  'aveia', 'chia', 'banana', 'castanhas', 'cacau', 'linhaça', 'maçã', 'cenoura',
  'abacate', 'brócolis', 'gengibre', 'mel', 'uva', 'tofu', 'peixe', 'quinoa',
  'abobrinha', 'cogumelos', 'grão de bico', 'batata doce', 'coco', 'tâmara',
  // Categorias
  'sobremesas saudáveis', 'café da manhã', 'marmitas fit', 'veganas', 'snacks',
  'detox', 'low carb', 'doces', 'salgados', 'rápidas', 'geladas', 'zero açúcar'
];

// Função para criar container de sugestões
function criarContainerSugestoes(searchInput) {
  const container = document.createElement('div');
  container.id = 'sugestoes-container';
  container.style.cssText = `
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 0 0 15px 15px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
    display: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  `;
  
  searchInput.parentElement.style.position = 'relative';
  searchInput.parentElement.appendChild(container);
}

// Função para mostrar sugestões
function mostrarSugestoes(termo) {
  const container = document.getElementById('sugestoes-container');
  if (!container) return;
  
  const termoLower = termo.toLowerCase();
  const sugestoesFiltradas = todasSugestoes
    .filter(sugestao => sugestao.toLowerCase().includes(termoLower))
    .slice(0, 5); // Limitar a 5 sugestões
  
  if (sugestoesFiltradas.length > 0) {
    container.innerHTML = sugestoesFiltradas
      .map(sugestao => `
        <div class="sugestao-item" style="
          padding: 0.8rem 1rem;
          cursor: pointer;
          border-bottom: 1px solid #f0f0f0;
          transition: background-color 0.2s;
        " onmouseover="this.style.backgroundColor='#f8f9fa'" 
           onmouseout="this.style.backgroundColor='white'"
           onclick="selecionarSugestao('${sugestao}')">
          <span style="color: var(--text-primary);">${sugestao}</span>
        </div>
      `).join('');
    container.style.display = 'block';
  } else {
    esconderSugestoes();
  }
}

// Função para esconder sugestões
function esconderSugestoes() {
  const container = document.getElementById('sugestoes-container');
  if (container) {
    container.style.display = 'none';
  }
}

// Função para selecionar uma sugestão
function selecionarSugestao(sugestao) {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = sugestao;
    esconderSugestoes();
    
    // Disparar evento de submit
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
      searchForm.dispatchEvent(new Event('submit'));
    }
  }
}

// Função para mostrar indicador de carregamento
function mostrarCarregamento() {
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.innerHTML = '⏳'; // Ícone de ampulheta
    searchIcon.style.animation = 'spin 1s linear infinite';
  }
}

// Função para esconder indicador de carregamento
function esconderCarregamento() {
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.innerHTML = '🔍'; // Ícone de lupa
    searchIcon.style.animation = 'none';
  }
}

// Função para mostrar mensagem quando não há resultados
function mostrarMensagemSemResultados(termo) {
  // Remove mensagem anterior se existir
  const mensagemAnterior = document.getElementById('sem-resultados');
  if (mensagemAnterior) mensagemAnterior.remove();
  
  // Criar mensagem
  const mensagem = document.createElement('div');
  mensagem.id = 'sem-resultados';
  mensagem.innerHTML = `
    <div style="
      text-align: center;
      padding: 2rem;
      background: var(--card-bg);
      border-radius: 1rem;
      margin: 2rem auto;
      max-width: 500px;
      box-shadow: 0 4px 10px var(--shadow);
    ">
      <h3 style="color: var(--accent-lilac); margin-bottom: 1rem;">🔍 Nenhum resultado encontrado</h3>
      <p style="color: var(--text-secondary); margin-bottom: 1rem;">Não encontramos receitas para "<strong>${termo}</strong>"</p>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">Tente pesquisar por:</p>
      <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-top: 1rem;">
        <span style="background: var(--accent-pink); color: #c0255c; padding: 0.3rem 0.8rem; border-radius: 1rem; font-size: 0.8rem;">ingredientes</span>
        <span style="background: var(--accent-mint); color: #2f9252; padding: 0.3rem 0.8rem; border-radius: 1rem; font-size: 0.8rem;">categorias</span>
        <span style="background: var(--lavanda); color: #6b4e9b; padding: 0.3rem 0.8rem; border-radius: 1rem; font-size: 0.8rem;">nomes de receitas</span>
      </div>
    </div>
  `;
  
  // Inserir mensagem
  if (window.location.pathname.includes('receitas.html')) {
    const gridReceitas = document.querySelector('.grid-receitas');
    if (gridReceitas) {
      gridReceitas.appendChild(mensagem);
    }
  } else {
    const secaoAlta = document.querySelector('.receitas-em-alta');
    if (secaoAlta) {
      secaoAlta.appendChild(mensagem);
    }
  }
  
  // Rolar para a mensagem
  setTimeout(() => {
    mensagem.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

// Função para limpar pesquisa
function limparPesquisa() {
  // Mostrar todos os cards
  document.querySelectorAll('.card-receita').forEach(card => {
    card.style.display = 'block';
    card.classList.remove('card-destacado');
  });
  
  // Remover mensagem de sem resultados
  const mensagemSemResultados = document.getElementById('sem-resultados');
  if (mensagemSemResultados) mensagemSemResultados.remove();
  
  // Restaurar títulos originais
  const tituloAlta = document.querySelector('.receitas-em-alta h2');
  const tituloAmadas = document.querySelector('.mais-amadas h2');
  const secaoAmadas = document.querySelector('.mais-amadas');
  
  if (tituloAlta) tituloAlta.textContent = 'Receitas em Alta';
  if (tituloAmadas) tituloAmadas.style.display = 'block';
  if (secaoAmadas) secaoAmadas.style.display = 'block';
  
  // Limpar campo de pesquisa
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  
  // Remover botão de limpar
  const botaoLimpar = document.getElementById('limpar-pesquisa');
  if (botaoLimpar) botaoLimpar.remove();
}

// Funcionalidade específica da página receitas.html
if (window.location.pathname.includes('receitas.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    const categoria = urlParams.get('categoria');
    const ingrediente = urlParams.get('ingrediente');
    const mainTitle = document.querySelector('.receitas-main h1');
    
    if (searchTerm) {
      const resultado = pesquisarReceitas(searchTerm);
      if (mainTitle) mainTitle.textContent = `Resultados para: "${searchTerm}" (${resultado.encontrados} receitas)`;
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.value = searchTerm;
        // Criar container de sugestões se não existir
        if (!document.getElementById('sugestoes-container')) {
          criarContainerSugestoes(searchInput);
        }
      }
      
      // Destacar primeiro resultado se houver
      if (resultado.primeiroCard) {
        setTimeout(() => {
          destacarCard(resultado.primeiroCard);
        }, 500);
      }
    } else if (categoria) {
      const categoriaTexto = categoria.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      if (mainTitle) mainTitle.textContent = `Receitas de ${categoriaTexto}`;
      
      document.querySelectorAll('.card-receita').forEach(card => {
        if (card.getAttribute('data-categoria') === categoria) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    } else if (ingrediente) {
      const ingredienteTexto = ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1);
      if (mainTitle) mainTitle.textContent = `Receitas com ${ingredienteTexto}`;
      
      const receitasComIngrediente = ingredientesReceitas[ingrediente.toLowerCase()] || [];
      document.querySelectorAll('.card-receita').forEach(card => {
        const nomeReceita = card.querySelector('h2').textContent;
        if (receitasComIngrediente.includes(nomeReceita)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    // Funcionalidade dos filtros
    document.querySelectorAll('.filtros button[data-filtro]').forEach(filtro => {
      filtro.addEventListener('click', () => {
        document.querySelectorAll('.filtros button').forEach(btn => btn.classList.remove('ativo'));
        filtro.classList.add('ativo');
        
        const filtroValue = filtro.getAttribute('data-filtro');
        
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
        if (mainTitle) mainTitle.textContent = 'Bombando Esta Semana';
        
        // Limpar campo de pesquisa ao usar filtros
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.value = '';
        
        document.querySelectorAll('.card-receita').forEach(card => {
          const cardFiltros = card.getAttribute('data-filtro') || '';
          if (filtroValue === 'todas' || cardFiltros.includes(filtroValue)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
    
    // Pesquisa em tempo real na página de receitas
    const searchInputReceitas = document.getElementById('search-input');
    if (searchInputReceitas && !searchTerm) {
      // Criar container de sugestões se não existir
      if (!document.getElementById('sugestoes-container')) {
        criarContainerSugestoes(searchInputReceitas);
      }
      
      searchInputReceitas.addEventListener('input', (e) => {
        const termo = e.target.value.trim();
        
        if (termo.length >= 2) {
          // Mostrar sugestões
          mostrarSugestoes(termo);
          
          const resultado = pesquisarReceitas(termo);
          if (mainTitle) mainTitle.textContent = `Resultados para: "${termo}" (${resultado.encontrados} receitas)`;
          
          // Destacar primeiro resultado se houver
          if (resultado.primeiroCard) {
            setTimeout(() => {
              destacarCard(resultado.primeiroCard);
            }, 100);
          }
          
          // Remover filtro ativo
          document.querySelectorAll('.filtros button').forEach(btn => btn.classList.remove('ativo'));
        } else if (termo.length === 0) {
          // Esconder sugestões
          esconderSugestoes();
          
          // Mostrar todas as receitas quando campo estiver vazio
          document.querySelectorAll('.card-receita').forEach(card => {
            card.style.display = 'block';
          });
          if (mainTitle) mainTitle.textContent = 'Bombando Esta Semana';
          
          // Reativar filtro "Mais Curtidas"
          const filtroTodas = document.querySelector('.filtros button[data-filtro="todas"]');
          if (filtroTodas) filtroTodas.classList.add('ativo');
        } else {
          // Esconder sugestões se termo for muito curto
          esconderSugestoes();
        }
      });
      
      // Esconder sugestões ao clicar fora na página de receitas
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-form')) {
          esconderSugestoes();
        }
      });
    }
  });
}

// Função global para recarregar eventos (útil para conteúdo dinâmico)
window.recarregarEventosReceitas = function() {
  adicionarEventosVerReceita();
  adicionarEventosCard();
  
  // Recarregar eventos de favoritos
  document.querySelectorAll('.favorito').forEach(btn => {
    const card = btn.closest('.card-receita');
    const nomeReceita = card.querySelector('h2').textContent;
    const receitaId = receitaIds[nomeReceita];
    
    if (receitaId) {
      atualizarIconeFavorito(btn, receitaId);
      
      btn.removeEventListener('click', handleFavoritoClick);
      btn.addEventListener('click', handleFavoritoClick);
    }
  });
};

function handleFavoritoClick(e) {
  e.stopPropagation();
  const card = this.closest('.card-receita');
  const nomeReceita = card.querySelector('h2').textContent;
  const receitaId = receitaIds[nomeReceita];
  
  if (receitaId) {
    favoritosManager.toggleFavorito(receitaId);
    atualizarIconeFavorito(this, receitaId);
  }
}
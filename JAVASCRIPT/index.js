// Função para criar um card de receita
function criarCardReceita(receita) {
  const card = document.createElement('div');
  card.className = 'card-receita';
  card.innerHTML = `
    <img src="${receita.imagem}" alt="${receita.nome}" class="img-receita">
    <div class="info-receita">
      <h3>${receita.nome}</h3>
      <p>${receita.descricao}</p>
      <button class="favoritar">❤</button>
    </div>
  `;
  return card;
}

// Listas de receitas mock
const receitasBombando = [
  { nome: 'Bolo de Banana Fit', descricao: 'Sem açúcar e muito sabor!', imagem: 'imagens/bolo-banana.jpg' },
  { nome: 'Salada Colorida', descricao: 'Refrescante e nutritiva.', imagem: 'imagens/salada.jpg' },
];

const receitasAlta = [
  { nome: 'Panqueca de Aveia', descricao: 'Macias e saudáveis.', imagem: 'imagens/panqueca.jpg' },
  { nome: 'Suco Detox', descricao: 'Perfeito para o verão.', imagem: 'imagens/suco-detox.jpg' },
];

const receitasAmadas = [
  { nome: 'Torta Low Carb', descricao: 'Baixo carbo e deliciosa.', imagem: 'imagens/torta.jpg' },
  { nome: 'Cookies Integrais', descricao: 'Croquantes e naturais.', imagem: 'imagens/cookies.jpg' },
];

// Injetar nos carrosséis
function popularCarrossel(id, lista) {
  const container = document.getElementById(id);
  lista.forEach(receita => {
    container.appendChild(criarCardReceita(receita));
  });
}

popularCarrossel('carrossel-bombando', receitasBombando);
popularCarrossel('carrossel-alta', receitasAlta);
popularCarrossel('carrossel-amadas', receitasAmadas);

// Rolagem horizontal suave
const carrosseis = document.querySelectorAll('.carrossel');
carrosseis.forEach(c => {
  c.addEventListener('wheel', e => {
    e.preventDefault();
    c.scrollLeft += e.deltaY;
  });
});



//sgsahdgasjdgasjhsga
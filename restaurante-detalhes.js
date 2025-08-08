// Dados dos restaurantes
const restaurantes = {
  'flor-de-sal': {
    nome: 'Flor de Sal',
    imagem: 'https://images.unsplash.com/photo-1555992336-03a23c6e96f3',
    localizacao: 'São Paulo, SP',
    endereco: 'Rua Augusta, 1234 - Consolação, São Paulo - SP',
    culinaria: 'Brasileira contemporânea',
    telefone: '(11) 3456-7890',
    descricao: 'O Flor de Sal é um restaurante que celebra a culinária brasileira contemporânea, combinando ingredientes tradicionais com técnicas modernas. Nossa proposta é oferecer uma experiência gastronômica única, valorizando os sabores regionais do Brasil em um ambiente acolhedor e sofisticado.',
    horarios: {
      'Segunda-feira': 'Fechado',
      'Terça-feira': '18:00 - 23:00',
      'Quarta-feira': '18:00 - 23:00',
      'Quinta-feira': '18:00 - 23:00',
      'Sexta-feira': '18:00 - 00:00',
      'Sábado': '12:00 - 00:00',
      'Domingo': '12:00 - 22:00'
    }
  },
  'bella-cucina': {
    nome: 'Bella Cucina',
    imagem: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    localizacao: 'Curitiba, PR',
    endereco: 'Av. Batel, 567 - Batel, Curitiba - PR',
    culinaria: 'Italiana artesanal',
    telefone: '(41) 2345-6789',
    descricao: 'A Bella Cucina traz a autêntica tradição italiana para Curitiba. Com massas frescas feitas diariamente e ingredientes importados diretamente da Itália, oferecemos uma experiência gastronômica que transporta você para as trattorias familiares da Toscana.',
    horarios: {
      'Segunda-feira': 'Fechado',
      'Terça-feira': '19:00 - 23:00',
      'Quarta-feira': '19:00 - 23:00',
      'Quinta-feira': '19:00 - 23:00',
      'Sexta-feira': '19:00 - 00:00',
      'Sábado': '18:00 - 00:00',
      'Domingo': '18:00 - 22:00'
    }
  },
  'veg-vida': {
    nome: 'Veg & Vida',
    imagem: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2',
    localizacao: 'Salvador, BA',
    endereco: 'Rua das Laranjeiras, 89 - Pelourinho, Salvador - BA',
    culinaria: 'Vegetariana & saudável',
    telefone: '(71) 3456-7890',
    descricao: 'O Veg & Vida é pioneiro em alimentação saudável em Salvador. Nosso cardápio é 100% vegetariano, com opções veganas, utilizando ingredientes orgânicos e locais. Acreditamos que comer bem é um ato de amor próprio e cuidado com o planeta.',
    horarios: {
      'Segunda-feira': '11:00 - 22:00',
      'Terça-feira': '11:00 - 22:00',
      'Quarta-feira': '11:00 - 22:00',
      'Quinta-feira': '11:00 - 22:00',
      'Sexta-feira': '11:00 - 23:00',
      'Sábado': '10:00 - 23:00',
      'Domingo': '10:00 - 21:00'
    }
  }
};

// Função para obter parâmetro da URL
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Função para carregar informações do restaurante
function carregarRestaurante() {
  const restauranteId = getUrlParameter('id');
  const restaurante = restaurantes[restauranteId];
  
  if (!restaurante) {
    document.getElementById('restaurante-info').innerHTML = `
      <div style="text-align: center; padding: 50px;">
        <h2>Restaurante não encontrado</h2>
        <p>O restaurante solicitado não foi encontrado.</p>
        <a href="restaurantes.html" style="color: #9B5DE5;">Voltar aos restaurantes</a>
      </div>
    `;
    return;
  }

  // Gerar HTML dos horários
  const horariosHtml = Object.entries(restaurante.horarios)
    .map(([dia, horario]) => `
      <div class="horario-item">
        <span><strong>${dia}:</strong></span>
        <span>${horario}</span>
      </div>
    `).join('');

  // Inserir informações do restaurante
  document.getElementById('restaurante-info').innerHTML = `
    <div class="restaurante-header">
      <img src="${restaurante.imagem}" alt="${restaurante.nome}" class="restaurante-imagem">
      <div class="restaurante-info">
        <h1>${restaurante.nome}</h1>
        <div class="info-item">
          <strong>Localização:</strong> ${restaurante.localizacao}
        </div>
        <div class="info-item">
          <strong>Endereço:</strong> ${restaurante.endereco}
        </div>
        <div class="info-item">
          <strong>Culinária:</strong> ${restaurante.culinaria}
        </div>
        <div class="info-item">
          <strong>Telefone:</strong> ${restaurante.telefone}
        </div>
        <div class="descricao">
          <p>${restaurante.descricao}</p>
        </div>
      </div>
    </div>
    
    <div class="horarios">
      <h3>Horários de Funcionamento</h3>
      ${horariosHtml}
    </div>
  `;

  // Atualizar título da página
  document.title = `${restaurante.nome} | Tasty Cuisine`;
}

// Carregar informações quando a página carregar
document.addEventListener('DOMContentLoaded', carregarRestaurante);
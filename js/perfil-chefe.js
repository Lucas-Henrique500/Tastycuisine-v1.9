// Dados dos chefes
const chefesData = {
  'maria-lima': {
    nome: 'Maria Lima',
    foto: 'img/chefe1.jpg',
    especialidade: 'Culinária Vegetariana e Saudável',
    restaurante: 'Restaurante "Sabor da Terra"',
    descricao: 'Maria Lima é uma chef renomada com mais de 15 anos de experiência em culinária vegetariana e saudável. Formada em Gastronomia pela Universidade Anhembi Morumbi, ela se especializou em criar pratos nutritivos e saborosos que promovem o bem-estar. Sua paixão pela alimentação saudável começou quando decidiu adotar um estilo de vida mais consciente e sustentável.',
    especialidades: [
      'Culinária Vegetariana',
      'Pratos Veganos',
      'Alimentação Funcional',
      'Culinária Orgânica',
      'Sobremesas Saudáveis'
    ],
    email: 'maria.lima@sabordaterra.com.br',
    telefone: '(11) 98765-4321'
  },
  'joao-prado': {
    nome: 'João Prado',
    foto: 'img/chefe2.jpg',
    especialidade: 'Culinária Contemporânea',
    restaurante: 'Restaurante "Gourmet Vital"',
    descricao: 'João Prado é um chef contemporâneo que une sabores tradicionais brasileiros com técnicas modernas de gastronomia. Com formação no Instituto Culinário da América e experiência em restaurantes estrelados, ele traz inovação e criatividade para cada prato, sempre priorizando ingredientes frescos e locais.',
    especialidades: [
      'Culinária Contemporânea',
      'Fusão de Sabores',
      'Técnicas Modernas',
      'Culinária Brasileira',
      'Pratos Autorais'
    ],
    email: 'joao.prado@gourmetvital.com.br',
    telefone: '(11) 97654-3210'
  },
  'carla-mendes': {
    nome: 'Carla Mendes',
    foto: 'img/chefe3.jpg',
    especialidade: 'Culinária Funcional Francesa',
    restaurante: 'Consultoria Gastronômica',
    descricao: 'Carla Mendes é formada pela prestigiosa Le Cordon Bleu em Paris e traz para o Brasil toda a sofisticação da culinária francesa adaptada para uma alimentação funcional e saudável. Especialista em criar menus personalizados que aliam sabor, nutrição e bem-estar, ela atua como consultora gastronômica para restaurantes e clientes particulares.',
    especialidades: [
      'Culinária Francesa',
      'Alimentação Funcional',
      'Consultoria Gastronômica',
      'Menus Personalizados',
      'Técnicas Clássicas'
    ],
    email: 'carla.mendes@consultoriagastro.com.br',
    telefone: '(11) 96543-2109'
  }
};

// Função para carregar o perfil do chefe
function carregarPerfilChefe() {
  const urlParams = new URLSearchParams(window.location.search);
  const chefeId = urlParams.get('chefe');
  
  if (!chefeId || !chefesData[chefeId]) {
    // Se não encontrar o chefe, redireciona para a página de chefes
    window.location.href = 'chefes.html';
    return;
  }
  
  const chefe = chefesData[chefeId];
  
  // Preenche os dados na página
  document.getElementById('chefe-foto').src = chefe.foto;
  document.getElementById('chefe-foto').alt = `Foto de ${chefe.nome}`;
  document.getElementById('chefe-nome').textContent = chefe.nome;
  document.getElementById('chefe-especialidade').textContent = chefe.especialidade;
  document.getElementById('chefe-restaurante').textContent = chefe.restaurante;
  document.getElementById('chefe-descricao').textContent = chefe.descricao;
  document.getElementById('chefe-email').textContent = chefe.email;
  document.getElementById('chefe-telefone').textContent = chefe.telefone;
  
  // Preenche a lista de especialidades
  const especialidadesLista = document.getElementById('chefe-especialidades-lista');
  especialidadesLista.innerHTML = '';
  chefe.especialidades.forEach(especialidade => {
    const li = document.createElement('li');
    li.textContent = especialidade;
    especialidadesLista.appendChild(li);
  });
  
  // Atualiza o título da página
  document.title = `${chefe.nome} - Tasty Cuisine`;
}

// Carrega o perfil quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarPerfilChefe);
// Dados dos nutricionistas
const nutricionistas = {
  ana: {
    nome: "Ana Clara Silva",
    especialidade: "Especialista em alimentação saudável e funcional.",
    foto: "nutri1.jpg",
    email: "ana.nutri@email.com"
  },
  rafael: {
    nome: "Rafael Lima", 
    especialidade: "Foco em dietas personalizadas para emagrecimento.",
    foto: "nutri2.jpg",
    email: "rafael.nutri@email.com"
  },
  camila: {
    nome: "Camila Rocha",
    especialidade: "Acompanhamento nutricional para atletas e veganos.",
    foto: "nutri3.jpg", 
    email: "camila.nutri@email.com"
  },
  mariana: {
    nome: "Mariana Santos",
    especialidade: "Nutrição clínica e distúrbios alimentares.",
    foto: "nutri4.jpg",
    email: "mariana.nutri@email.com"
  },
  pedro: {
    nome: "Pedro Oliveira",
    especialidade: "Nutrição esportiva e suplementação.",
    foto: "nutri5.jpg",
    email: "pedro.nutri@email.com"
  },
  julia: {
    nome: "Júlia Ferreira",
    especialidade: "Nutrição infantil e familiar.",
    foto: "nutri6.jpg",
    email: "julia.nutri@email.com"
  }
};

// Função para obter parâmetros da URL
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Carregar informações do nutricionista
function carregarNutricionista() {
  const nutriId = getUrlParameter('nutri');
  
  if (nutriId && nutricionistas[nutriId]) {
    const nutri = nutricionistas[nutriId];
    
    document.getElementById('nutri-nome').textContent = nutri.nome;
    document.getElementById('nutri-especialidade').textContent = nutri.especialidade;
    document.getElementById('nutri-foto').src = nutri.foto;
    document.getElementById('nutri-foto').alt = `Foto de ${nutri.nome}`;
  } else {
    // Redirecionar para página de consulta se nutricionista não encontrado
    window.location.href = 'consulta.html';
  }
}

// Função para enviar o formulário
function enviarFormulario(event) {
  event.preventDefault();
  
  const nutriId = getUrlParameter('nutri');
  const nutri = nutricionistas[nutriId];
  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;
  
  // Criar corpo do e-mail
  const corpoEmail = `Olá ${nutri.nome},

Meu nome é ${nome} e gostaria de entrar em contato.

Assunto: ${assunto}
${telefone ? `Telefone: ${telefone}` : ''}

Mensagem:
${mensagem}

Atenciosamente,
${nome}
E-mail: ${email}`;
  
  // Criar link mailto
  const mailtoLink = `mailto:${nutri.email}?subject=Contato via Tasty Cuisine - ${assunto}&body=${encodeURIComponent(corpoEmail)}`;
  
  // Abrir cliente de e-mail
  window.location.href = mailtoLink;
  
  // Mostrar mensagem de confirmação
  alert('Seu cliente de e-mail será aberto para enviar a mensagem!');
}

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
  carregarNutricionista();
  
  // Adicionar evento ao formulário
  document.getElementById('contatoForm').addEventListener('submit', enviarFormulario);
});
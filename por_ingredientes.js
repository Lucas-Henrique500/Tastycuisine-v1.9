// Funcionalidade para a página Por Ingredientes
document.addEventListener('DOMContentLoaded', () => {
  // Tornar os cards de ingredientes clicáveis
  document.querySelectorAll('.grid-cards .card').forEach(card => {
    card.style.cursor = 'pointer';
    card.style.transition = 'transform 0.2s ease';
    
    // Efeito hover
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
    
    // Funcionalidade de clique
    card.addEventListener('click', () => {
      const ingrediente = card.querySelector('p').textContent.toLowerCase();
      window.location.href = `receitas.html?ingrediente=${encodeURIComponent(ingrediente)}`;
    });
  });
});
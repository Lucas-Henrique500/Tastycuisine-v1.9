// Script para atualizar cores das tags baseado na categoria
document.addEventListener('DOMContentLoaded', () => {
  const categoryColors = {
    'Sobremesas Saudáveis': 'rosa',
    'Café da Manhã': 'rosa', 
    'Marmitas Fit': 'lilas',
    'Vegano': 'lavanda',
    'Snacks': 'verde',
    'Detox': 'verde',
    'Low Carb': 'lilas'
  };

  document.querySelectorAll('.tag').forEach(tag => {
    const category = tag.textContent.trim();
    if (categoryColors[category]) {
      tag.className = `tag ${categoryColors[category]}`;
    }
  });
});
// Atualizar cores das tags
(() => {
  const colors = {
    'Sobremesas Saudáveis': 'rosa', 'Café da Manhã': 'rosa', 'Marmitas Fit': 'lilas',
    'Vegano': 'lavanda', 'Snacks': 'verde', 'Detox': 'verde', 'Low Carb': 'lilas'
  };
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tag').forEach(tag => {
      const color = colors[tag.textContent.trim()];
      if (color) tag.className = `tag ${color}`;
    });
  });
})();
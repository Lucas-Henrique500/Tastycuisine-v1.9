// Atualizar cores das tags
const TagColorManager = {
  colors: new Map([
    ['Sobremesas Saudáveis', 'rosa'],
    ['Café da Manhã', 'rosa'],
    ['Marmitas Fit', 'lilas'],
    ['Vegano', 'lavanda'],
    ['Snacks', 'verde'],
    ['Detox', 'verde'],
    ['Low Carb', 'lilas']
  ]),
  
  updateTags() {
    const tags = document.querySelectorAll('.tag');
    const fragment = document.createDocumentFragment();
    
    tags.forEach(tag => {
      const text = tag.textContent.trim();
      const color = this.colors.get(text);
      if (color && !tag.classList.contains(color)) {
        tag.className = `tag ${color}`;
      }
    });
  },
  
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.updateTags());
    } else {
      this.updateTags();
    }
  }
};

TagColorManager.init();
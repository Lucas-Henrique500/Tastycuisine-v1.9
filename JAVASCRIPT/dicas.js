document.addEventListener('DOMContentLoaded', function() {
    const botoesDicas = document.querySelectorAll('.botao-dica');
    
    const dicasUrls = [
        'dica-hidratacao.html',
        'dica-vegetais.html', 
        'dica-refeicoes.html',
        'dica-lanches.html',
        'dica-bem-estar.html',
        'dica-acucar.html',
        'dica-cafe-manha.html',
        'dica-ultraprocessados.html'
    ];
    
    botoesDicas.forEach((botao, index) => {
        botao.addEventListener('click', function() {
            window.location.href = dicasUrls[index];
        });
    });
});
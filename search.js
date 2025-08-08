// Funcionalidade de pesquisa simplificada
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    if (!searchForm || !searchInput) return;
    
    // Função principal de pesquisa
    function realizarPesquisa(termo) {
        const termoLower = termo.toLowerCase().trim();
        if (!termoLower) return;
        
        // Verificar se está na página home
        const isHome = window.location.pathname.includes('index.html') || 
                      window.location.pathname === '/' || 
                      window.location.pathname === '';
        
        // Se estiver na home, redirecionar para receitas com parâmetro de pesquisa
        if (isHome) {
            window.location.href = `receitas.html?search=${encodeURIComponent(termo)}`;
            return;
        }
        
        // Se estiver na página de receitas, fazer pesquisa local
        const cards = document.querySelectorAll('.card-receita');
        let encontrados = 0;
        let primeiroCard = null;
        
        cards.forEach(card => {
            const titulo = card.querySelector('h2')?.textContent.toLowerCase() || '';
            const categoria = card.querySelector('.tag')?.textContent.toLowerCase() || '';
            
            // Verificar se corresponde à pesquisa
            const corresponde = titulo.includes(termoLower) || 
                              categoria.includes(termoLower) ||
                              verificarIngrediente(termoLower, titulo);
            
            if (corresponde) {
                card.style.display = 'block';
                if (!primeiroCard) primeiroCard = card;
                encontrados++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Atualizar título da página
        atualizarTitulo(termo, encontrados);
        
        // Destacar e rolar para o primeiro resultado
        if (primeiroCard) {
            destacarCard(primeiroCard);
            setTimeout(() => {
                primeiroCard.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 100);
        } else {
            mostrarMensagemSemResultados(termo);
        }
        
        return encontrados;
    }
    
    // Verificar se o termo corresponde a um ingrediente
    function verificarIngrediente(termo, tituloReceita) {
        const ingredientes = {
            'chocolate': ['chocolate', 'cacau', 'brownie', 'mousse'],
            'banana': ['banana'],
            'aveia': ['aveia', 'panqueca', 'overnight', 'granola'],
            'detox': ['detox', 'verde', 'suco'],
            'fit': ['fit'],
            'vegana': ['vegana', 'vegano'],
            'veganas': ['vegana', 'vegano'],
            'omelete': ['omelete'],
            'salmão': ['salmão', 'salmao'],
            'salmao': ['salmão', 'salmao'],
            'smoothie': ['smoothie', 'bowl'],
            'cookies': ['cookies'],
            'frango': ['frango'],
            'batata': ['batata'],
            'abobrinha': ['abobrinha', 'lasanha', 'macarrão', 'espaguete'],
            'lentilha': ['lentilha', 'sopa'],
            'quinoa': ['quinoa'],
            'cogumelos': ['cogumelos', 'risotto', 'estrogonofe'],
            'low carb': ['low carb', 'salada'],
            'chia': ['chia', 'pudim'],
            'castanhas': ['castanhas', 'mix'],
            'cacau': ['cacau', 'chocolate', 'brownie', 'brigadeiro'],
            'mel': ['mel'],
            'tofu': ['tofu'],
            'peixe': ['peixe', 'salmão', 'tilápia', 'atum'],
            'grão de bico': ['grão', 'bico', 'curry', 'hummus'],
            'batata doce': ['batata doce', 'chips', 'escondidinho'],
            'coco': ['coco', 'bolinhas'],
            'tâmara': ['tâmara', 'trufas'],
            'açaí': ['açaí'],
            'melancia': ['melancia'],
            'pepino': ['pepino'],
            'beterraba': ['beterraba'],
            'berinjela': ['berinjela'],
            'atum': ['atum'],
            'ricota': ['ricota'],
            'feijão': ['feijão', 'hambúrguer'],
            'abacaxi': ['abacaxi'],
            'hortelã': ['hortelã'],
            'alface': ['alface', 'wrap'],
            'pimentão': ['pimentão']
        };
        
        for (const [ingrediente, palavras] of Object.entries(ingredientes)) {
            if (termo.includes(ingrediente) || ingrediente.includes(termo)) {
                return palavras.some(palavra => tituloReceita.includes(palavra));
            }
        }
        
        return false;
    }
    
    // Destacar card encontrado
    function destacarCard(card) {
        // Remove destaque anterior
        document.querySelectorAll('.card-receita').forEach(c => {
            c.classList.remove('card-destacado');
        });
        
        // Adiciona destaque
        card.classList.add('card-destacado');
        
        // Remove após 3 segundos
        setTimeout(() => {
            card.classList.remove('card-destacado');
        }, 3000);
    }
    
    // Atualizar título da página
    function atualizarTitulo(termo, encontrados) {
        const isHome = window.location.pathname.includes('index.html') || 
                      window.location.pathname === '/' || 
                      window.location.pathname === '';
        
        if (isHome) {
            const titulo = document.querySelector('.receitas-em-alta h2');
            if (titulo) {
                titulo.textContent = `Resultados para: "${termo}" (${encontrados} receitas)`;
            }
            
            // Esconder seção "Mais Amadas"
            const secaoAmadas = document.querySelector('.mais-amadas');
            if (secaoAmadas) {
                secaoAmadas.style.display = 'none';
            }
            
            // Mostrar botão limpar
            mostrarBotaoLimpar();
        } else {
            const titulo = document.querySelector('.receitas-main h1');
            if (titulo) {
                titulo.textContent = `Resultados para: "${termo}" (${encontrados} receitas)`;
            }
        }
    }
    
    // Mostrar mensagem quando não há resultados
    function mostrarMensagemSemResultados(termo) {
        const mensagem = document.createElement('div');
        mensagem.id = 'sem-resultados';
        mensagem.innerHTML = `
            <div style="
                text-align: center;
                padding: 2rem;
                background: white;
                border-radius: 1rem;
                margin: 2rem auto;
                max-width: 500px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            ">
                <h3 style="color: #9B5DE5; margin-bottom: 1rem;">🔍 Nenhum resultado encontrado</h3>
                <p style="color: #666; margin-bottom: 1rem;">
                    Não encontramos receitas para "<strong>${termo}</strong>"
                </p>
                <p style="color: #666; font-size: 0.9rem;">
                    Tente pesquisar por ingredientes, categorias ou nomes de receitas
                </p>
            </div>
        `;
        
        // Inserir mensagem
        const container = document.querySelector('.receitas-em-alta') || 
                         document.querySelector('.grid-receitas') ||
                         document.querySelector('main');
        
        if (container) {
            // Remove mensagem anterior
            const anterior = document.getElementById('sem-resultados');
            if (anterior) anterior.remove();
            
            container.appendChild(mensagem);
            
            // Rolar para mensagem
            setTimeout(() => {
                mensagem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }
    
    // Mostrar botão limpar pesquisa
    function mostrarBotaoLimpar() {
        if (document.getElementById('limpar-pesquisa')) return;
        
        const botao = document.createElement('button');
        botao.id = 'limpar-pesquisa';
        botao.textContent = 'Limpar Pesquisa';
        botao.style.cssText = `
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
        
        botao.addEventListener('click', limparPesquisa);
        
        const container = document.querySelector('.receitas-em-alta');
        if (container) {
            container.appendChild(botao);
        }
    }
    
    // Limpar pesquisa
    function limparPesquisa() {
        // Mostrar todos os cards
        document.querySelectorAll('.card-receita').forEach(card => {
            card.style.display = 'block';
            card.classList.remove('card-destacado');
        });
        
        // Limpar campo
        searchInput.value = '';
        
        // Restaurar títulos
        const tituloAlta = document.querySelector('.receitas-em-alta h2');
        const tituloAmadas = document.querySelector('.mais-amadas h2');
        const secaoAmadas = document.querySelector('.mais-amadas');
        
        if (tituloAlta) tituloAlta.textContent = 'Receitas em Alta';
        if (secaoAmadas) secaoAmadas.style.display = 'block';
        
        // Remover elementos
        const botao = document.getElementById('limpar-pesquisa');
        const mensagem = document.getElementById('sem-resultados');
        if (botao) botao.remove();
        if (mensagem) mensagem.remove();
    }
    
    // Processar parâmetro de pesquisa da URL (para página receitas)
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
        searchInput.value = searchParam;
        realizarPesquisa(searchParam);
    }
    
    // Event listener para o formulário
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const termo = searchInput.value.trim();
        if (termo) {
            realizarPesquisa(termo);
        }
    });
    
    // Pesquisa em tempo real (opcional)
    searchInput.addEventListener('input', function(e) {
        const termo = e.target.value.trim();
        if (termo.length >= 3) {
            realizarPesquisa(termo);
        } else if (termo.length === 0) {
            limparPesquisa();
        }
    });
});
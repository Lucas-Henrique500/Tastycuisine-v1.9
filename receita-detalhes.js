const receitas = {
  'bolo-chocolate-fit': {
    nome: 'Bolo de Chocolate Fit',
    categoria: 'Sobremesas Saudáveis',
    tempo: '30 min',
    dificuldade: 'Fácil',
    favoritos: 150,
    classificacao: 4.8,
    ingredientes: [
      '2 xícaras de farinha de aveia',
      '1/2 xícara de cacau em pó',
      '1 xícara de açúcar demerara',
      '2 ovos',
      '1 xícara de leite vegetal',
      '1/2 xícara de óleo de coco',
      '1 colher de sopa de fermento',
      '1 pitada de sal'
    ],
    preparo: [
      'Pré-aqueça o forno a 180°C e unte uma forma com óleo de coco.',
      'Em uma tigela, misture todos os ingredientes secos.',
      'Em outra tigela, bata os ovos e adicione o leite vegetal e o óleo de coco.',
      'Misture os ingredientes líquidos aos secos até formar uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por 30-35 minutos.',
      'Faça o teste do palito para verificar se está assado.',
      'Deixe esfriar antes de desenformar e servir.'
    ]
  },
  'brownie-fit': {
    nome: 'Brownie Fit Zero Açúcar',
    categoria: 'Sobremesas Saudáveis',
    tempo: '40 min',
    dificuldade: 'Médio',
    favoritos: 130,
    classificacao: 4.6,
    ingredientes: [
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de cacau em pó',
      '1/2 xícara de xilitol',
      '2 ovos',
      '1/3 xícara de óleo de coco',
      '1/4 xícara de água',
      '1 colher de chá de essência de baunilha'
    ],
    preparo: [
      'Pré-aqueça o forno a 160°C.',
      'Misture todos os ingredientes secos em uma tigela.',
      'Em outra tigela, bata os ovos com o óleo de coco e a baunilha.',
      'Combine os ingredientes úmidos com os secos.',
      'Despeje em uma forma untada e asse por 35-40 minutos.',
      'Deixe esfriar completamente antes de cortar.'
    ]
  },
  'smoothie-bowl': {
    nome: 'Smoothie Bowl Tropical',
    categoria: 'Café da Manhã',
    tempo: '10 min',
    dificuldade: 'Fácil',
    favoritos: 120,
    classificacao: 4.9,
    ingredientes: [
      '1 banana congelada',
      '1/2 xícara de manga congelada',
      '1/4 xícara de leite de coco',
      '1 colher de sopa de chia',
      'Granola para cobertura',
      'Frutas frescas para decorar'
    ],
    preparo: [
      'Bata a banana e manga congeladas com o leite de coco.',
      'Despeje em uma tigela.',
      'Decore com granola, chia e frutas frescas.',
      'Sirva imediatamente.'
    ]
  },
  'panquecas-aveia': {
    nome: 'Panquecas de Aveia',
    categoria: 'Café da Manhã',
    tempo: '15 min',
    dificuldade: 'Fácil',
    favoritos: 115,
    classificacao: 4.7,
    ingredientes: [
      '1 xícara de aveia em flocos',
      '2 ovos',
      '1/2 xícara de leite vegetal',
      '1 banana madura',
      '1 colher de chá de fermento',
      'Canela a gosto'
    ],
    preparo: [
      'Bata todos os ingredientes no liquidificador.',
      'Aqueça uma frigideira antiaderente.',
      'Despeje pequenas porções da massa.',
      'Cozinhe até dourar dos dois lados.',
      'Sirva com frutas e mel.'
    ]
  },
  'suco-verde': {
    nome: 'Suco Verde Detox',
    categoria: 'Detox',
    tempo: '5 min',
    dificuldade: 'Fácil',
    favoritos: 98,
    classificacao: 4.3,
    ingredientes: [
      '1 folha de couve',
      '1/2 pepino',
      '1 maçã verde',
      'Suco de 1/2 limão',
      '200ml de água de coco',
      'Gengibre a gosto'
    ],
    preparo: [
      'Lave bem todos os ingredientes.',
      'Bata tudo no liquidificador.',
      'Coe se preferir.',
      'Sirva gelado imediatamente.'
    ]
  },
  'omelete-fit': {
    nome: 'Omelete Fit',
    categoria: 'Low Carb',
    tempo: '10 min',
    dificuldade: 'Fácil',
    favoritos: 87,
    classificacao: 4.5,
    ingredientes: [
      '3 ovos',
      '1/4 xícara de espinafre',
      '2 colheres de queijo cottage',
      'Tomate cereja',
      'Sal e pimenta a gosto',
      'Azeite para untar'
    ],
    preparo: [
      'Bata os ovos com sal e pimenta.',
      'Aqueça a frigideira com azeite.',
      'Despeje os ovos e adicione o recheio.',
      'Dobre ao meio quando firmar.',
      'Sirva quente.'
    ]
  },
  'salmao-assado': {
    nome: 'Salmão Assado com Legumes',
    categoria: 'Marmitas Fit',
    tempo: '35 min',
    dificuldade: 'Médio',
    favoritos: 105,
    classificacao: 4.8,
    ingredientes: [
      '2 filés de salmão',
      '1 abobrinha',
      '1 cenoura',
      '1 brócolis',
      'Azeite extra virgem',
      'Limão',
      'Ervas finas'
    ],
    preparo: [
      'Corte os legumes em pedaços uniformes.',
      'Tempere o salmão com sal, pimenta e limão.',
      'Disponha tudo em uma assadeira.',
      'Regue com azeite e temperos.',
      'Asse a 200°C por 25-30 minutos.'
    ]
  },
  'lasanha-vegana': {
    nome: 'Lasanha de Abobrinha Vegana',
    categoria: 'Vegano',
    tempo: '45 min',
    dificuldade: 'Médio',
    favoritos: 95,
    classificacao: 4.4,
    ingredientes: [
      '2 abobrinhas grandes',
      '2 xícaras de molho de tomate',
      '1 xícara de castanha de caju',
      'Manjericão fresco',
      'Alho e cebola',
      'Azeite'
    ],
    preparo: [
      'Corte as abobrinhas em fatias finas.',
      'Prepare o molho refogando cebola e alho.',
      'Faça o “queijo” batendo as castanhas.',
      'Monte as camadas alternando ingredientes.',
      'Asse por 30 minutos a 180°C.'
    ]
  },
  'sopa-lentilha': {
    nome: 'Sopa de Lentilha Nutritiva',
    categoria: 'Salgados',
    tempo: '45 min',
    dificuldade: 'Médio',
    favoritos: 65,
    classificacao: 4.2,
    ingredientes: [
      '1 xícara de lentilha',
      '1 cenoura',
      '1 cebola',
      '2 dentes de alho',
      'Caldo de legumes',
      'Temperos a gosto'
    ],
    preparo: [
      'Deixe a lentilha de molho por 2 horas.',
      'Refogue a cebola e alho.',
      'Adicione a lentilha e os legumes.',
      'Cubra com caldo e cozinhe por 30 minutos.',
      'Tempere e sirva quente.'
    ]
  },
  'smoothie-verde': {
    nome: 'Smoothie Verde Energético',
    categoria: 'Café da Manhã',
    tempo: '5 min',
    dificuldade: 'Muito Fácil',
    favoritos: 70,
    classificacao: 4.6,
    ingredientes: [
      '1 folha de couve',
      '1 banana',
      '1/2 maçã verde',
      '200ml de água de coco',
      'Suco de 1/2 limão',
      'Gengibre'
    ],
    preparo: [
      'Bata todos os ingredientes no liquidificador.',
      'Adicione gelo se desejar.',
      'Sirva imediatamente.'
    ]
  },
  'cookies-integrais': {
    nome: 'Cookies Integrais',
    categoria: 'Snacks',
    tempo: '25 min',
    dificuldade: 'Médio',
    favoritos: 92,
    classificacao: 4.7,
    ingredientes: [
      '1 xícara de farinha integral',
      '1/2 xícara de aveia',
      '1/3 xícara de mel',
      '1/4 xícara de óleo de coco',
      '1 ovo',
      'Gotas de chocolate 70%'
    ],
    preparo: [
      'Misture os ingredientes secos.',
      'Adicione os líquidos e misture bem.',
      'Forme bolinhas e achate.',
      'Asse a 180°C por 12-15 minutos.',
      'Deixe esfriar antes de servir.'
    ]
  },
  'frango-batata-doce': {
    nome: 'Frango com Batata Doce',
    categoria: 'Marmitas Fit',
    tempo: '40 min',
    dificuldade: 'Médio',
    favoritos: 88,
    classificacao: 4.5,
    ingredientes: [
      '2 peitos de frango',
      '2 batatas doces',
      'Brócolis',
      'Azeite',
      'Temperos naturais',
      'Alecrim'
    ],
    preparo: [
      'Tempere o frango e deixe marinar.',
      'Corte as batatas em cubos.',
      'Grelhe o frango até dourar.',
      'Asse as batatas com azeite.',
      'Refogue o brócolis rapidamente.',
      'Monte o prato e sirva.'
    ]
  },
  'salada-frango': {
    nome: 'Salada de Frango Grelhado',
    categoria: 'Low Carb',
    tempo: '20 min',
    dificuldade: 'Fácil',
    favoritos: 85,
    classificacao: 4.4,
    ingredientes: [
      '2 peitos de frango',
      'Mix de folhas verdes',
      'Tomate cereja',
      'Pepino',
      'Cenoura ralada',
      'Azeite extra virgem',
      'Limão',
      'Sal e pimenta'
    ],
    preparo: [
      'Tempere o frango com sal, pimenta e limão.',
      'Grelhe o frango até dourar completamente.',
      'Corte o frango em fatias.',
      'Prepare a salada com as folhas e legumes.',
      'Disponha o frango sobre a salada.',
      'Tempere com azeite e limão.',
      'Sirva imediatamente.'
    ]
  },
  // Sobremesas Saudáveis
  'mousse-chocolate-fit': {
    nome: 'Mousse de Chocolate Fit',
    categoria: 'Sobremesas Saudáveis',
    tempo: '15 min',
    dificuldade: 'Fácil',
    favoritos: 142,
    classificacao: 4.7,
    ingredientes: [
      '1 abacate maduro',
      '3 colheres de cacau em pó',
      '2 colheres de mel',
      '1/4 xícara de leite vegetal',
      '1 colher de chá de baunilha'
    ],
    preparo: [
      'Bata todos os ingredientes no liquidificador.',
      'Ajuste a consistência com leite vegetal.',
      'Leve à geladeira por 2 horas.',
      'Sirva gelado.'
    ]
  },
  'sorvete-banana-fit': {
    nome: 'Sorvete de Banana Fit',
    categoria: 'Sobremesas Saudáveis',
    tempo: '5 min',
    dificuldade: 'Muito Fácil',
    favoritos: 138,
    classificacao: 4.8,
    ingredientes: [
      '3 bananas congeladas',
      '2 colheres de leite de coco',
      '1 colher de mel',
      'Canela em pó'
    ],
    preparo: [
      'Bata as bananas congeladas no processador.',
      'Adicione o leite de coco e mel.',
      'Polvilhe canela.',
      'Sirva imediatamente ou congele.'
    ]
  },
  'pudim-chia-zero': {
    nome: 'Pudim de Chia Zero Açúcar',
    categoria: 'Sobremesas Saudáveis',
    tempo: '10 min',
    dificuldade: 'Fácil',
    favoritos: 125,
    classificacao: 4.5,
    ingredientes: [
      '3 colheres de chia',
      '1 xícara de leite de amêndoas',
      '2 colheres de xilitol',
      '1 colher de essência de baunilha',
      'Frutas para decorar'
    ],
    preparo: [
      'Misture todos os ingredientes.',
      'Deixe descansar por 5 minutos.',
      'Misture novamente.',
      'Leve à geladeira por 4 horas.',
      'Decore com frutas e sirva.'
    ]
  },
  'trufas-tamara': {
    nome: 'Trufas de Tâmara',
    categoria: 'Sobremesas Saudáveis',
    tempo: '20 min',
    dificuldade: 'Fácil',
    favoritos: 118,
    classificacao: 4.6,
    ingredientes: [
      '1 xícara de tâmaras sem caroço',
      '1/2 xícara de castanhas',
      '2 colheres de cacau',
      'Coco ralado para cobrir'
    ],
    preparo: [
      'Processe as tâmaras até formar pasta.',
      'Adicione castanhas e cacau.',
      'Forme bolinhas com as mãos.',
      'Passe no coco ralado.',
      'Leve à geladeira por 30 minutos.'
    ]
  },
  'picole-frutas': {
    nome: 'Picolé de Frutas Natural',
    categoria: 'Sobremesas Saudáveis',
    tempo: '10 min',
    dificuldade: 'Fácil',
    favoritos: 112,
    classificacao: 4.4,
    ingredientes: [
      '1 xícara de frutas variadas',
      '1/2 xícara de água de coco',
      '1 colher de mel',
      'Suco de 1/2 limão'
    ],
    preparo: [
      'Bata as frutas com água de coco.',
      'Adicione mel e limão.',
      'Despeje nas forminhas.',
      'Congele por 4 horas.',
      'Desenforme e sirva.'
    ]
  },
  'brigadeiro-fit': {
    nome: 'Brigadeiro Fit de Cacau',
    categoria: 'Sobremesas Saudáveis',
    tempo: '25 min',
    dificuldade: 'Médio',
    favoritos: 108,
    classificacao: 4.3,
    ingredientes: [
      '1 xícara de tâmaras',
      '3 colheres de cacau',
      '2 colheres de pasta de amendoim',
      'Granulado de cacau'
    ],
    preparo: [
      'Processe as tâmaras.',
      'Misture cacau e pasta de amendoim.',
      'Forme bolinhas.',
      'Passe no granulado.',
      'Leve à geladeira.'
    ]
  },
  'cheesecake-fit': {
    nome: 'Cheesecake Fit de Frutas Vermelhas',
    categoria: 'Sobremesas Saudáveis',
    tempo: '45 min',
    dificuldade: 'Médio',
    favoritos: 102,
    classificacao: 4.5,
    ingredientes: [
      '1 xícara de castanha de caju',
      '1/2 xícara de coco ralado',
      '1/4 xícara de mel',
      '1 xícara de frutas vermelhas',
      'Suco de limão'
    ],
    preparo: [
      'Processe castanhas com coco.',
      'Adicione mel e limão.',
      'Forme a base na forma.',
      'Cubra com frutas vermelhas.',
      'Leve à geladeira por 4 horas.'
    ]
  },
  'torta-maca': {
    nome: 'Torta de Maçã Integral',
    categoria: 'Sobremesas Saudáveis',
    tempo: '50 min',
    dificuldade: 'Médio',
    favoritos: 98,
    classificacao: 4.2,
    ingredientes: [
      '2 xícaras de farinha integral',
      '3 maçãs',
      '1/2 xícara de açúcar demerara',
      '1/4 xícara de óleo de coco',
      'Canela em pó'
    ],
    preparo: [
      'Misture farinha com óleo.',
      'Forre a forma com a massa.',
      'Corte maçãs em fatias.',
      'Disponha sobre a massa.',
      'Polvilhe canela e açúcar.',
      'Asse por 35 minutos a 180°C.'
    ]
  },
  // Café da Manhã
  'vitamina-proteica': {
    nome: 'Vitamina Proteica',
    categoria: 'Café da Manhã',
    tempo: '5 min',
    dificuldade: 'Muito Fácil',
    favoritos: 135,
    classificacao: 4.8,
    ingredientes: [
      '1 banana',
      '1 xícara de leite vegetal',
      '1 scoop de proteína',
      '1 colher de pasta de amendoim',
      'Gelo'
    ],
    preparo: [
      'Bata todos os ingredientes.',
      'Adicione gelo se desejar.',
      'Sirva imediatamente.'
    ]
  },
  'overnight-oats': {
    nome: 'Overnight Oats',
    categoria: 'Café da Manhã',
    tempo: '5 min',
    dificuldade: 'Muito Fácil',
    favoritos: 128,
    classificacao: 4.7,
    ingredientes: [
      '1/2 xícara de aveia',
      '1/2 xícara de leite vegetal',
      '1 colher de chia',
      '1 colher de mel',
      'Frutas para cobertura'
    ],
    preparo: [
      'Misture aveia, leite e chia.',
      'Adicione mel.',
      'Deixe na geladeira overnight.',
      'Cubra com frutas e sirva.'
    ]
  },
  'tapioca-fit': {
    nome: 'Tapioca Fit',
    categoria: 'Café da Manhã',
    tempo: '10 min',
    dificuldade: 'Fácil',
    favoritos: 122,
    classificacao: 4.5,
    ingredientes: [
      '3 colheres de goma de tapioca',
      '2 colheres de água',
      'Recheio: queijo cottage',
      'Tomate',
      'Orégano'
    ],
    preparo: [
      'Misture tapioca com água.',
      'Aqueça frigideira antiaderente.',
      'Despeje a massa.',
      'Adicione recheio.',
      'Dobre e sirva quente.'
    ]
  },
  'acai-bowl': {
    nome: 'Açaí Bowl Energético',
    categoria: 'Café da Manhã',
    tempo: '8 min',
    dificuldade: 'Fácil',
    favoritos: 115,
    classificacao: 4.9,
    ingredientes: [
      '1 pacote de açaí',
      '1/2 banana',
      'Granola',
      'Frutas variadas',
      'Mel'
    ],
    preparo: [
      'Bata açaí com banana.',
      'Despeje na tigela.',
      'Decore com granola e frutas.',
      'Regue com mel.',
      'Sirva imediatamente.'
    ]
  },
  'pao-banana-fit': {
    nome: 'Pão de Banana Fit',
    categoria: 'Café da Manhã',
    tempo: '35 min',
    dificuldade: 'Médio',
    favoritos: 110,
    classificacao: 4.4,
    ingredientes: [
      '3 bananas maduras',
      '1 xícara de farinha de aveia',
      '2 ovos',
      '1/4 xícara de mel',
      '1 colher de fermento'
    ],
    preparo: [
      'Amasse as bananas.',
      'Misture com ovos e mel.',
      'Adicione farinha e fermento.',
      'Despeje na forma untada.',
      'Asse por 30 minutos a 180°C.'
    ]
  },
  'granola-caseira': {
    nome: 'Granola Caseira',
    categoria: 'Café da Manhã',
    tempo: '25 min',
    dificuldade: 'Fácil',
    favoritos: 105,
    classificacao: 4.6,
    ingredientes: [
      '2 xícaras de aveia',
      '1/2 xícara de castanhas',
      '1/4 xícara de mel',
      '2 colheres de óleo de coco',
      'Frutas secas'
    ],
    preparo: [
      'Misture aveia e castanhas.',
      'Adicione mel e óleo.',
      'Espalhe na assadeira.',
      'Asse por 20 minutos a 160°C.',
      'Adicione frutas secas após esfriar.'
    ]
  },
  'wrap-matinal': {
    nome: 'Wrap Integral Matinal',
    categoria: 'Café da Manhã',
    tempo: '12 min',
    dificuldade: 'Fácil',
    favoritos: 98,
    classificacao: 4.3,
    ingredientes: [
      '1 tortilha integral',
      '2 ovos mexidos',
      'Queijo cottage',
      'Espinafre',
      'Tomate'
    ],
    preparo: [
      'Prepare os ovos mexidos.',
      'Aqueça a tortilha.',
      'Espalhe queijo cottage.',
      'Adicione ovos e vegetais.',
      'Enrole e sirva.'
    ]
  },
  // Marmitas Fit
  'peru-quinoa': {
    nome: 'Peito de Peru com Quinoa',
    categoria: 'Marmitas Fit',
    tempo: '30 min',
    dificuldade: 'Médio',
    favoritos: 132,
    classificacao: 4.7,
    ingredientes: [
      '200g de peito de peru',
      '1 xícara de quinoa',
      'Brócolis',
      'Cenoura',
      'Temperos naturais'
    ],
    preparo: [
      'Cozinhe a quinoa.',
      'Tempere e grelhe o peru.',
      'Refogue os legumes.',
      'Monte a marmita.',
      'Tempere com azeite.'
    ]
  },
  'tilapia-arroz': {
    nome: 'Tilápia com Arroz Integral',
    categoria: 'Marmitas Fit',
    tempo: '25 min',
    dificuldade: 'Fácil',
    favoritos: 125,
    classificacao: 4.5,
    ingredientes: [
      '1 filé de tilápia',
      '1/2 xícara de arroz integral',
      'Vagem',
      'Abobrinha',
      'Limão e ervas'
    ],
    preparo: [
      'Cozinhe o arroz integral.',
      'Tempere o peixe com limão.',
      'Grelhe a tilápia.',
      'Refogue os legumes.',
      'Monte e tempere.'
    ]
  },
  'carne-legumes': {
    nome: 'Carne Magra com Legumes',
    categoria: 'Marmitas Fit',
    tempo: '40 min',
    dificuldade: 'Médio',
    favoritos: 118,
    classificacao: 4.4,
    ingredientes: [
      '150g de carne magra',
      'Batata doce',
      'Cenoura',
      'Vagem',
      'Cebola e alho'
    ],
    preparo: [
      'Corte a carne em cubos.',
      'Refogue com cebola e alho.',
      'Adicione os legumes.',
      'Cozinhe em fogo baixo.',
      'Tempere e sirva.'
    ]
  },
  'atum-grao-bico': {
    nome: 'Atum com Grão de Bico',
    categoria: 'Marmitas Fit',
    tempo: '20 min',
    dificuldade: 'Fácil',
    favoritos: 112,
    classificacao: 4.3,
    ingredientes: [
      '1 lata de atum',
      '1 xícara de grão de bico',
      'Tomate',
      'Cebola roxa',
      'Azeite e limão'
    ],
    preparo: [
      'Cozinhe o grão de bico.',
      'Escorra o atum.',
      'Corte tomate e cebola.',
      'Misture todos os ingredientes.',
      'Tempere com azeite e limão.'
    ]
  },
  'hamburguer-lentilha': {
    nome: 'Hambúrguer de Lentilha',
    categoria: 'Marmitas Fit',
    tempo: '35 min',
    dificuldade: 'Médio',
    favoritos: 108,
    classificacao: 4.2,
    ingredientes: [
      '1 xícara de lentilha cozida',
      '1/2 xícara de aveia',
      '1 ovo',
      'Cebola e alho',
      'Temperos'
    ],
    preparo: [
      'Amasse a lentilha.',
      'Misture com aveia e ovo.',
      'Adicione temperos.',
      'Forme hambúrgueres.',
      'Grelhe dos dois lados.'
    ]
  },
  'frango-temperado': {
    nome: 'Peito de Frango Temperado',
    categoria: 'Marmitas Fit',
    tempo: '30 min',
    dificuldade: 'Fácil',
    favoritos: 102,
    classificacao: 4.5,
    ingredientes: [
      '2 peitos de frango',
      'Páprica doce',
      'Alecrim',
      'Alho',
      'Azeite'
    ],
    preparo: [
      'Tempere o frango com especiarias.',
      'Deixe marinar por 15 minutos.',
      'Grelhe até dourar.',
      'Corte em fatias.',
      'Sirva com acompanhamentos.'
    ]
  },
  'omelete-forno': {
    nome: 'Omelete de Forno com Vegetais',
    categoria: 'Marmitas Fit',
    tempo: '25 min',
    dificuldade: 'Fácil',
    favoritos: 95,
    classificacao: 4.1,
    ingredientes: [
      '6 ovos',
      'Brócolis',
      'Tomate cereja',
      'Queijo cottage',
      'Ervas finas'
    ],
    preparo: [
      'Bata os ovos.',
      'Adicione vegetais picados.',
      'Despeje em forma untada.',
      'Asse por 20 minutos a 180°C.',
      'Corte em porções.'
    ]
  },
  'escondidinho-batata': {
    nome: 'Escondidinho de Batata Doce',
    categoria: 'Marmitas Fit',
    tempo: '45 min',
    dificuldade: 'Médio',
    favoritos: 88,
    classificacao: 4.0,
    ingredientes: [
      '3 batatas doces',
      '300g de frango desfiado',
      'Cebola',
      'Tomate',
      'Queijo light'
    ],
    preparo: [
      'Cozinhe e amasse as batatas.',
      'Refogue frango com cebola.',
      'Monte camadas na forma.',
      'Cubra com queijo.',
      'Asse por 25 minutos.'
    ]
  },
  // Receitas Veganas
  'curry-grao-bico': {
    nome: 'Curry de Grão de Bico',
    categoria: 'Vegano',
    tempo: '30 min',
    dificuldade: 'Médio',
    favoritos: 142,
    classificacao: 4.8,
    ingredientes: [
      '2 xícaras de grão de bico',
      'Leite de coco',
      'Curry em pó',
      'Gengibre',
      'Espinafre'
    ],
    preparo: [
      'Refogue cebola e gengibre.',
      'Adicione curry e grão de bico.',
      'Despeje leite de coco.',
      'Cozinhe por 15 minutos.',
      'Adicione espinafre no final.'
    ]
  },
  'salada-quinoa': {
    nome: 'Salada de Quinoa Colorida',
    categoria: 'Vegano',
    tempo: '15 min',
    dificuldade: 'Fácil',
    favoritos: 135,
    classificacao: 4.6,
    ingredientes: [
      '1 xícara de quinoa',
      'Tomate cereja',
      'Pepino',
      'Pimentão',
      'Azeite e limão'
    ],
    preparo: [
      'Cozinhe a quinoa.',
      'Corte os vegetais.',
      'Misture tudo.',
      'Tempere com azeite e limão.',
      'Sirva fria.'
    ]
  },
  'hamburguer-feijao': {
    nome: 'Hambúrguer de Feijão Preto',
    categoria: 'Vegano',
    tempo: '25 min',
    dificuldade: 'Médio',
    favoritos: 128,
    classificacao: 4.4,
    ingredientes: [
      '1 xícara de feijão preto',
      'Aveia',
      'Cebola',
      'Alho',
      'Comínho'
    ],
    preparo: [
      'Amasse o feijão.',
      'Misture com aveia.',
      'Adicione temperos.',
      'Forme hambúrgueres.',
      'Grelhe até dourar.'
    ]
  },
  'risotto-cogumelos': {
    nome: 'Risotto de Cogumelos',
    categoria: 'Vegano',
    tempo: '35 min',
    dificuldade: 'Médio',
    favoritos: 122,
    classificacao: 4.5,
    ingredientes: [
      '1 xícara de arroz arbóreo',
      'Cogumelos variados',
      'Caldo de legumes',
      'Vinho branco',
      'Nutritional yeast'
    ],
    preparo: [
      'Refogue cogumelos.',
      'Adicione arroz e vinho.',
      'Acrescente caldo aos poucos.',
      'Mexa constantemente.',
      'Finalize com nutritional yeast.'
    ]
  },
  'macarrao-abobrinha': {
    nome: 'Macarrão de Abobrinha',
    categoria: 'Vegano',
    tempo: '20 min',
    dificuldade: 'Fácil',
    favoritos: 115,
    classificacao: 4.3,
    ingredientes: [
      '2 abobrinhas grandes',
      'Molho de tomate',
      'Manjericão',
      'Alho',
      'Azeite'
    ],
    preparo: [
      'Corte abobrinha em espirais.',
      'Refogue alho no azeite.',
      'Adicione molho de tomate.',
      'Misture com abobrinha.',
      'Finalize com manjericão.'
    ]
  },
  'tofu-refogado': {
    nome: 'Tofu Refogado com Legumes',
    categoria: 'Vegano',
    tempo: '25 min',
    dificuldade: 'Fácil',
    favoritos: 108,
    classificacao: 4.2,
    ingredientes: [
      '200g de tofu',
      'Brócolis',
      'Cenoura',
      'Shoyu',
      'Gengibre'
    ],
    preparo: [
      'Corte tofu em cubos.',
      'Doure na frigideira.',
      'Adicione legumes.',
      'Tempere com shoyu.',
      'Refogue por 10 minutos.'
    ]
  },
  'falafel-assado': {
    nome: 'Falafel Assado',
    categoria: 'Vegano',
    tempo: '30 min',
    dificuldade: 'Médio',
    favoritos: 102,
    classificacao: 4.1,
    ingredientes: [
      '1 xícara de grão de bico',
      'Salsinha',
      'Coentro',
      'Alho',
      'Comínho'
    ],
    preparo: [
      'Processe grão de bico.',
      'Adicione ervas e temperos.',
      'Forme bolinhas.',
      'Asse por 20 minutos a 180°C.',
      'Sirva com molho tahine.'
    ]
  },
  'cuscuz-marroquino': {
    nome: 'Cuscuz Marroquino',
    categoria: 'Vegano',
    tempo: '20 min',
    dificuldade: 'Fácil',
    favoritos: 98,
    classificacao: 4.0,
    ingredientes: [
      '1 xícara de cuscuz',
      'Vegetais variados',
      'Passas',
      'Amêndoas',
      'Canela'
    ],
    preparo: [
      'Hidrate o cuscuz.',
      'Refogue vegetais.',
      'Misture com cuscuz.',
      'Adicione passas e amêndoas.',
      'Tempere com canela.'
    ]
  },
  'estrogonofe-cogumelos': {
    nome: 'Estrogonofe de Cogumelos',
    categoria: 'Vegano',
    tempo: '25 min',
    dificuldade: 'Médio',
    favoritos: 92,
    classificacao: 3.9,
    ingredientes: [
      'Cogumelos variados',
      'Creme de leite de coco',
      'Mostarda',
      'Ketchup',
      'Cebola'
    ],
    preparo: [
      'Refogue cebola.',
      'Adicione cogumelos.',
      'Misture mostarda e ketchup.',
      'Adicione creme de coco.',
      'Cozinhe por 10 minutos.'
    ]
  },
  // Snacks
  'mix-castanhas': {
    nome: 'Mix de Castanhas Temperadas',
    categoria: 'Snacks',
    tempo: '10 min',
    dificuldade: 'Fácil',
    favoritos: 145,
    classificacao: 4.7,
    ingredientes: [
      'Castanhas variadas',
      'Páprica doce',
      'Alecrim',
      'Sal marinho',
      'Azeite'
    ],
    preparo: [
      'Misture castanhas com azeite.',
      'Adicione temperos.',
      'Asse por 8 minutos.',
      'Deixe esfriar.',
      'Armazene em pote hermético.'
    ]
  },
  'chips-batata-doce': {
    nome: 'Chips de Batata Doce',
    categoria: 'Snacks',
    tempo: '25 min',
    dificuldade: 'Fácil',
    favoritos: 138,
    classificacao: 4.5,
    ingredientes: [
      '2 batatas doces',
      'Azeite',
      'Sal',
      'Páprica',
      'Alecrim'
    ],
    preparo: [
      'Corte batatas em fatias finas.',
      'Tempere com azeite e sal.',
      'Asse por 20 minutos a 200°C.',
      'Vire na metade do tempo.',
      'Sirva crocante.'
    ]
  },
  'hummus-grao-bico': {
    nome: 'Hummus de Grão de Bico',
    categoria: 'Snacks',
    tempo: '15 min',
    dificuldade: 'Fácil',
    favoritos: 132,
    classificacao: 4.6,
    ingredientes: [
      '1 xícara de grão de bico',
      'Tahine',
      'Limão',
      'Alho',
      'Azeite'
    ],
    preparo: [
      'Processe grão de bico.',
      'Adicione tahine e limão.',
      'Tempere com alho.',
      'Regue com azeite.',
      'Sirva com vegetais.'
    ]
  },
  'barrinhas-cereais': {
    nome: 'Barrinhas de Cereais',
    categoria: 'Snacks',
    tempo: '20 min',
    dificuldade: 'Fácil',
    favoritos: 125,
    classificacao: 4.4,
    ingredientes: [
      'Aveia',
      'Frutas secas',
      'Mel',
      'Castanhas',
      'Chia'
    ],
    preparo: [
      'Misture ingredientes secos.',
      'Adicione mel.',
      'Pressione em forma.',
      'Leve à geladeira.',
      'Corte em barras.'
    ]
  },
  'guacamole-caseiro': {
    nome: 'Guacamole Caseiro',
    categoria: 'Snacks',
    tempo: '10 min',
    dificuldade: 'Muito Fácil',
    favoritos: 118,
    classificacao: 4.8,
    ingredientes: [
      '2 abacates',
      'Limão',
      'Tomate',
      'Cebola',
      'Coentro'
    ],
    preparo: [
      'Amasse os abacates.',
      'Adicione limão.',
      'Misture tomate e cebola.',
      'Finalize com coentro.',
      'Sirva com nachos.'
    ]
  },
  'bolinhas-coco': {
    nome: 'Bolinhas de Coco',
    categoria: 'Snacks',
    tempo: '15 min',
    dificuldade: 'Fácil',
    favoritos: 112,
    classificacao: 4.3,
    ingredientes: [
      'Coco ralado',
      'Leite condensado de coco',
      'Essência de baunilha',
      'Coco para cobrir'
    ],
    preparo: [
      'Misture coco com leite condensado.',
      'Adicione baunilha.',
      'Forme bolinhas.',
      'Passe no coco.',
      'Leve à geladeira.'
    ]
  },
  'pasta-ricota': {
    nome: 'Pasta de Ricota com Ervas',
    categoria: 'Snacks',
    tempo: '8 min',
    dificuldade: 'Muito Fácil',
    favoritos: 105,
    classificacao: 4.2,
    ingredientes: [
      'Ricota',
      'Manjericão',
      'Cebolinha',
      'Azeite',
      'Sal e pimenta'
    ],
    preparo: [
      'Amasse a ricota.',
      'Misture ervas picadas.',
      'Tempere com sal e pimenta.',
      'Regue com azeite.',
      'Sirva com torradas.'
    ]
  },
  'energy-balls': {
    nome: 'Energy Balls',
    categoria: 'Snacks',
    tempo: '12 min',
    dificuldade: 'Fácil',
    favoritos: 98,
    classificacao: 4.5,
    ingredientes: [
      'Tâmaras',
      'Castanhas',
      'Aveia',
      'Cacau',
      'Coco ralado'
    ],
    preparo: [
      'Processe tâmaras.',
      'Adicione castanhas e aveia.',
      'Misture cacau.',
      'Forme bolinhas.',
      'Passe no coco.'
    ]
  },
  'crackers-integrais': {
    nome: 'Crackers Integrais',
    categoria: 'Snacks',
    tempo: '30 min',
    dificuldade: 'Médio',
    favoritos: 92,
    classificacao: 4.1,
    ingredientes: [
      'Farinha integral',
      'Sementes variadas',
      'Azeite',
      'Sal',
      'Água'
    ],
    preparo: [
      'Misture farinha e sementes.',
      'Adicione azeite e água.',
      'Abra a massa fina.',
      'Corte em quadrados.',
      'Asse por 15 minutos.'
    ]
  },
  // Detox
  'agua-detox': {
    nome: 'Água Saborizada Detox',
    categoria: 'Detox',
    tempo: '3 min',
    dificuldade: 'Muito Fácil',
    favoritos: 155,
    classificacao: 4.9,
    ingredientes: [
      'Água',
      'Limão',
      'Pepino',
      'Hortelã',
      'Gengibre'
    ],
    preparo: [
      'Corte limão e pepino.',
      'Adicione à água.',
      'Acrescente hortelã e gengibre.',
      'Deixe na geladeira.',
      'Sirva gelado.'
    ]
  },
  'suco-beterraba': {
    nome: 'Suco de Beterraba com Gengibre',
    categoria: 'Detox',
    tempo: '8 min',
    dificuldade: 'Fácil',
    favoritos: 148,
    classificacao: 4.6,
    ingredientes: [
      '1 beterraba',
      'Gengibre',
      'Maçã',
      'Limão',
      'Água'
    ],
    preparo: [
      'Descasque a beterraba.',
      'Bata com gengibre e maçã.',
      'Adicione limão.',
      'Coe se desejar.',
      'Sirva imediatamente.'
    ]
  },
  'cha-verde-gelado': {
    nome: 'Chá Verde Gelado',
    categoria: 'Detox',
    tempo: '10 min',
    dificuldade: 'Fácil',
    favoritos: 142,
    classificacao: 4.4,
    ingredientes: [
      'Chá verde',
      'Água quente',
      'Limão',
      'Hortelã',
      'Gelo'
    ],
    preparo: [
      'Prepare o chá verde.',
      'Deixe esfriar.',
      'Adicione limão e hortelã.',
      'Acrescente gelo.',
      'Sirva gelado.'
    ]
  },
  'limonada-curcuma': {
    nome: 'Limonada de Cúrcuma',
    categoria: 'Detox',
    tempo: '5 min',
    dificuldade: 'Muito Fácil',
    favoritos: 135,
    classificacao: 4.5,
    ingredientes: [
      'Limão',
      'Cúrcuma',
      'Água',
      'Mel',
      'Pimenta preta'
    ],
    preparo: [
      'Esprema os limões.',
      'Misture com cúrcuma.',
      'Adicione água e mel.',
      'Pitada de pimenta.',
      'Sirva gelado.'
    ]
  },
  'smoothie-abacaxi': {
    nome: 'Smoothie de Abacaxi',
    categoria: 'Detox',
    tempo: '6 min',
    dificuldade: 'Fácil',
    favoritos: 128,
    classificacao: 4.7,
    ingredientes: [
      'Abacaxi',
      'Gengibre',
      'Água de coco',
      'Hortelã',
      'Gelo'
    ],
    preparo: [
      'Corte o abacaxi.',
      'Bata com gengibre.',
      'Adicione água de coco.',
      'Finalize com hortelã.',
      'Sirva com gelo.'
    ]
  },
  'suco-melancia': {
    nome: 'Suco de Melancia',
    categoria: 'Detox',
    tempo: '4 min',
    dificuldade: 'Muito Fácil',
    favoritos: 122,
    classificacao: 4.3,
    ingredientes: [
      'Melancia',
      'Limão',
      'Hortelã',
      'Gelo'
    ],
    preparo: [
      'Corte a melancia.',
      'Bata no liquidificador.',
      'Adicione limão.',
      'Decore com hortelã.',
      'Sirva gelado.'
    ]
  },
  'agua-berinjela': {
    nome: 'Água de Berinjela',
    categoria: 'Detox',
    tempo: '15 min',
    dificuldade: 'Fácil',
    favoritos: 115,
    classificacao: 4.1,
    ingredientes: [
      '1 berinjela',
      'Água',
      'Limão',
      'Gengibre'
    ],
    preparo: [
      'Corte a berinjela.',
      'Deixe na água overnight.',
      'Bata no liquidificador.',
      'Coe e adicione limão.',
      'Sirva gelado.'
    ]
  },
  'suco-pepino': {
    nome: 'Suco de Pepino com Hortelã',
    categoria: 'Detox',
    tempo: '7 min',
    dificuldade: 'Fácil',
    favoritos: 108,
    classificacao: 4.2,
    ingredientes: [
      '2 pepinos',
      'Hortelã',
      'Limão',
      'Água',
      'Gelo'
    ],
    preparo: [
      'Descasque os pepinos.',
      'Bata com hortelã.',
      'Adicione limão e água.',
      'Coe se desejar.',
      'Sirva com gelo.'
    ]
  },
  'kombucha-caseiro': {
    nome: 'Kombucha Caseiro',
    categoria: 'Detox',
    tempo: '20 min',
    dificuldade: 'Médio',
    favoritos: 102,
    classificacao: 4.0,
    ingredientes: [
      'Chá preto',
      'Açúcar',
      'SCOBY',
      'Água',
      'Frutas para sabor'
    ],
    preparo: [
      'Prepare chá açucarado.',
      'Deixe esfriar.',
      'Adicione SCOBY.',
      'Fermente por 7-10 dias.',
      'Sabore com frutas.'
    ]
  },
  // Low Carb
  'couve-flor-gratinada': {
    nome: 'Couve-flor Gratinada',
    categoria: 'Low Carb',
    tempo: '30 min',
    dificuldade: 'Médio',
    favoritos: 152,
    classificacao: 4.6,
    ingredientes: [
      '1 couve-flor',
      'Queijo ralado',
      'Creme de leite',
      'Noz-moscada',
      'Sal e pimenta'
    ],
    preparo: [
      'Cozinhe a couve-flor.',
      'Disponha em refratário.',
      'Cubra com creme e queijo.',
      'Tempere com noz-moscada.',
      'Gratine por 15 minutos.'
    ]
  },
  'omelete-cogumelos': {
    nome: 'Omelete de Cogumelos',
    categoria: 'Low Carb',
    tempo: '12 min',
    dificuldade: 'Fácil',
    favoritos: 145,
    classificacao: 4.5,
    ingredientes: [
      '3 ovos',
      'Cogumelos',
      'Queijo',
      'Cebolinha',
      'Azeite'
    ],
    preparo: [
      'Refogue cogumelos.',
      'Bata os ovos.',
      'Despeje na frigideira.',
      'Adicione recheio.',
      'Dobre e sirva.'
    ]
  },
  'berinjela-recheada': {
    nome: 'Berinjela Recheada',
    categoria: 'Low Carb',
    tempo: '40 min',
    dificuldade: 'Médio',
    favoritos: 138,
    classificacao: 4.4,
    ingredientes: [
      '2 berinjelass',
      'Carne moída',
      'Tomate',
      'Queijo',
      'Manjericão'
    ],
    preparo: [
      'Corte berinjelass ao meio.',
      'Retire a polpa.',
      'Refogue carne com tomate.',
      'Recheie as berinjelass.',
      'Asse por 25 minutos.'
    ]
  },
  'salada-atum': {
    nome: 'Salada de Atum',
    categoria: 'Low Carb',
    tempo: '10 min',
    dificuldade: 'Muito Fácil',
    favoritos: 132,
    classificacao: 4.3,
    ingredientes: [
      'Atum em lata',
      'Folhas verdes',
      'Tomate',
      'Ovo cozido',
      'Azeite'
    ],
    preparo: [
      'Escorra o atum.',
      'Misture com folhas.',
      'Adicione tomate e ovo.',
      'Tempere com azeite.',
      'Sirva fresco.'
    ]
  },
  'abobrinha-refogada': {
    nome: 'Abobrinha Refogada',
    categoria: 'Low Carb',
    tempo: '15 min',
    dificuldade: 'Fácil',
    favoritos: 125,
    classificacao: 4.2,
    ingredientes: [
      '2 abobrinhas',
      'Alho',
      'Cebola',
      'Azeite',
      'Ervas'
    ],
    preparo: [
      'Corte abobrinha em fatias.',
      'Refogue alho e cebola.',
      'Adicione abobrinha.',
      'Tempere com ervas.',
      'Cozinhe por 8 minutos.'
    ]
  },
  'espaguete-abobrinha': {
    nome: 'Espaguete de Abobrinha',
    categoria: 'Low Carb',
    tempo: '18 min',
    dificuldade: 'Fácil',
    favoritos: 118,
    classificacao: 4.4,
    ingredientes: [
      '3 abobrinhas',
      'Molho de tomate',
      'Manjericão',
      'Queijo parmesao',
      'Azeite'
    ],
    preparo: [
      'Corte abobrinha em espirais.',
      'Refogue rapidamente.',
      'Adicione molho de tomate.',
      'Finalize com manjericão.',
      'Sirva com queijo.'
    ]
  },
  'quiche-brocolis': {
    nome: 'Quiche de Brócolis',
    categoria: 'Low Carb',
    tempo: '35 min',
    dificuldade: 'Médio',
    favoritos: 112,
    classificacao: 4.1,
    ingredientes: [
      'Brócolis',
      '4 ovos',
      'Queijo',
      'Creme de leite',
      'Noz-moscada'
    ],
    preparo: [
      'Cozinhe brócolis.',
      'Bata ovos com creme.',
      'Misture queijo e brócolis.',
      'Despeje em forma.',
      'Asse por 25 minutos.'
    ]
  },
  'wrap-alface': {
    nome: 'Wrap de Alface',
    categoria: 'Low Carb',
    tempo: '8 min',
    dificuldade: 'Muito Fácil',
    favoritos: 105,
    classificacao: 4.0,
    ingredientes: [
      'Folhas de alface',
      'Frango desfiado',
      'Tomate',
      'Abacate',
      'Mostarda'
    ],
    preparo: [
      'Lave folhas de alface.',
      'Disponha recheio.',
      'Tempere com mostarda.',
      'Enrole cuidadosamente.',
      'Sirva imediatamente.'
    ]
  },
  'pimentao-recheado': {
    nome: 'Pimentão Recheado',
    categoria: 'Low Carb',
    tempo: '45 min',
    dificuldade: 'Médio',
    favoritos: 98,
    classificacao: 3.9,
    ingredientes: [
      '4 pimentões',
      'Carne moída',
      'Cebola',
      'Queijo',
      'Temperos'
    ],
    preparo: [
      'Retire sementes dos pimentões.',
      'Refogue carne com cebola.',
      'Recheie os pimentões.',
      'Cubra com queijo.',
      'Asse por 30 minutos.'
    ]
  }
};

function carregarReceita() {
  const urlParams = new URLSearchParams(window.location.search);
  const receitaId = urlParams.get('id') || 'bolo-chocolate-fit';
  const receita = receitas[receitaId];
  
  if (!receita) {
    console.error('Receita não encontrada:', receitaId);
    // Redirecionar para receita padrão se não encontrar
    window.location.href = 'receita-detalhes.html?id=bolo-chocolate-fit';
    return;
  }
  
  document.getElementById('receita-nome').textContent = receita.nome;
  document.getElementById('receita-tempo').textContent = receita.tempo;
  document.getElementById('receita-dificuldade').textContent = receita.dificuldade;
  document.getElementById('receita-favoritos').textContent = receita.favoritos;
  document.getElementById('receita-categoria').textContent = receita.categoria;
  
  // Atualizar classificação
  const classificacao = receita.classificacao || 4.5;
  document.getElementById('nota').textContent = classificacao;
  
  // Gerar estrelas baseado na classificação
  const estrelasElement = document.getElementById('estrelas');
  const estrelasCompletas = Math.floor(classificacao);
  const temMeiaEstrela = classificacao % 1 >= 0.5;
  let estrelasHtml = '';
  
  for (let i = 0; i < estrelasCompletas; i++) {
    estrelasHtml += '⭐';
  }
  if (temMeiaEstrela) {
    estrelasHtml += '🌟';
  }
  for (let i = estrelasCompletas + (temMeiaEstrela ? 1 : 0); i < 5; i++) {
    estrelasHtml += '☆';
  }
  
  estrelasElement.innerHTML = estrelasHtml;
  
  // Atualizar título da página
  document.title = `Tasty Cuisine - ${receita.nome}`;
  
  const listaIngredientes = document.getElementById('lista-ingredientes');
  listaIngredientes.innerHTML = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('');
  
  const listaPreparo = document.getElementById('lista-preparo');
  listaPreparo.innerHTML = receita.preparo.map(passo => `<li>${passo}</li>`).join('');
}

// Sistema de favoritos para página de detalhes
class FavoritosManager {
  constructor() {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  }

  isFavorito(receitaId) {
    return this.favoritos.includes(receitaId);
  }

  toggleFavorito(receitaId) {
    if (this.isFavorito(receitaId)) {
      this.favoritos = this.favoritos.filter(id => id !== receitaId);
    } else {
      this.favoritos.push(receitaId);
    }
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    return this.isFavorito(receitaId);
  }
}

const favoritosManager = new FavoritosManager();

function toggleFavorito() {
  const urlParams = new URLSearchParams(window.location.search);
  const receitaId = urlParams.get('id') || 'bolo-chocolate-fit';
  
  const btn = document.getElementById('btn-favorito');
  const icon = document.getElementById('favorito-icon');
  const text = document.getElementById('favorito-text');
  const favoritosSpan = document.getElementById('receita-favoritos');
  
  const isFavorito = favoritosManager.toggleFavorito(receitaId);
  
  btn.classList.toggle('ativo', isFavorito);
  
  if (isFavorito) {
    text.textContent = 'Remover dos Favoritos';
    icon.textContent = '❤';
    const currentFavoritos = parseInt(favoritosSpan.textContent);
    favoritosSpan.textContent = currentFavoritos + 1;
  } else {
    text.textContent = 'Adicionar aos Favoritos';
    icon.textContent = '🤍';
    const currentFavoritos = parseInt(favoritosSpan.textContent);
    favoritosSpan.textContent = Math.max(0, currentFavoritos - 1);
  }
}

function inicializarFavorito() {
  const urlParams = new URLSearchParams(window.location.search);
  const receitaId = urlParams.get('id') || 'bolo-chocolate-fit';
  
  const btn = document.getElementById('btn-favorito');
  const icon = document.getElementById('favorito-icon');
  const text = document.getElementById('favorito-text');
  
  const isFavorito = favoritosManager.isFavorito(receitaId);
  
  btn.classList.toggle('ativo', isFavorito);
  
  if (isFavorito) {
    text.textContent = 'Remover dos Favoritos';
    icon.textContent = '❤';
  } else {
    text.textContent = 'Adicionar aos Favoritos';
    icon.textContent = '🤍';
  }
}

document.getElementById('btn-favorito').addEventListener('click', toggleFavorito);
document.addEventListener('DOMContentLoaded', () => {
  carregarReceita();
  inicializarFavorito();
});
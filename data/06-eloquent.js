// Miniteste 06 — ORM Eloquent
registrarTeste({
  "id": "eloquent",
  "titulo": "ORM Eloquent",
  "questoes": [
    {
      "pergunta": "Qual alternativa descreve corretamente métodos utilizados no CRUD com Eloquent?",
      "alternativas": [
        "create() apenas cria um objeto na memória e nunca grava no banco.",
        "delete() remove a tabela inteira representada pelo Model.",
        "save() pode inserir registros, mas nunca atualizar um registro existente.",
        "create() insere e devolve o Model criado, save() pode inserir ou atualizar e delete() remove o registro representado."
      ],
      "correta": 3,
      "feedback": "create() grava na hora; save() insere um objeto novo ou atualiza um existente; delete() remove o registro, não a tabela."
    },
    {
      "pergunta": "Qual é o efeito da operação $book->categories()->sync([1, 3, 5])?",
      "alternativas": [
        "Apagar todas as categorias, exceto as categorias 1, 3 e 5.",
        "Alterar os identificadores do livro para 1, 3 e 5.",
        "Manter na pivot exatamente essas associações, criando as ausentes e removendo as demais.",
        "Apenas adicionar essas categorias, preservando obrigatoriamente todas as associações anteriores."
      ],
      "correta": 2,
      "feedback": "sync() deixa a pivot igual à lista: cria as faltantes e remove as outras, sem apagar livros ou categorias."
    },
    {
      "pergunta": "Book::all() é sempre a melhor opção para apresentar livros, mesmo quando a tabela possui milhares de registros, pois o Eloquent carrega os resultados automaticamente em pequenas páginas.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. all() traz tudo de uma vez. Filtros e paginação poupam memória e melhoram a interface."
    },
    {
      "pergunta": "Qual alternativa diferencia corretamente migration, Model e ORM?",
      "alternativas": [
        "A migration consulta registros, o Model produz HTML e o ORM cria Controllers.",
        "O Model cria fisicamente as tabelas, enquanto a migration representa cada registro.",
        "O ORM define as colunas do banco, enquanto a migration cadastra os livros.",
        "A migration define a estrutura, o Model representa a entidade e o ORM manipula os registros por meio dos Models."
      ],
      "correta": 3,
      "feedback": "Migration: tabelas e colunas. Model: a entidade. Eloquent (ORM): consulta e modifica registros usando os Models."
    },
    {
      "pergunta": "Uma página listará vários livros e mostrará o autor e as categorias de cada um. Qual consulta é mais adequada?",
      "alternativas": [
        "Book::with(['author', 'categories'])->get()",
        "Book::all()->delete()",
        "Book::where('author')->first()",
        "Book::findOrFail(['author', 'categories'])"
      ],
      "correta": 0,
      "feedback": "with() faz eager loading das relações, evitando uma nova consulta por livro."
    },
    {
      "pergunta": "Qual alternativa descreve corretamente a função de um ORM?",
      "alternativas": [
        "Substituir o banco relacional por objetos mantidos somente na memória.",
        "Fazer o mapeamento entre tabelas e registros do banco e classes e objetos da aplicação.",
        "Definir exclusivamente as tabelas e colunas que serão criadas pelas migrations.",
        "Validar automaticamente todos os dados recebidos do usuário."
      ],
      "correta": 1,
      "feedback": "O ORM aproxima o modelo relacional da orientação a objetos: converte métodos em consultas e registros em objetos."
    },
    {
      "pergunta": "Ao utilizar lazy loading para acessar o autor de cada livro dentro de um foreach, o Eloquent pode executar uma consulta inicial para os livros e uma nova consulta para o autor de cada livro.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "O lazy loading consulta a relação quando ela é acessada, o que causa o problema N + 1 em listas."
    },
    {
      "pergunta": "Qual é a diferença entre $book->categories e $book->categories()?",
      "alternativas": [
        "As duas formas sempre produzem exatamente o mesmo tipo de resultado.",
        "A propriedade devolve a coleção relacionada, enquanto o método devolve um objeto usado para consultar ou modificar a relação.",
        "A propriedade modifica a tabela pivot, enquanto o método apenas apresenta os dados.",
        "O método devolve somente a primeira categoria, enquanto a propriedade devolve o Model Book."
      ],
      "correta": 1,
      "feedback": "A propriedade traz as categorias; o método dá o objeto de relacionamento, para filtros e attach(), detach() e sync()."
    },
    {
      "pergunta": "Configurar os atributos em Fillable valida os valores recebidos e verifica se o usuário possui autorização, tornando desnecessário utilizar $request->validate().",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. Fillable só controla o preenchimento em massa; validação e autorização continuam necessárias."
    },
    {
      "pergunta": "Considere a consulta Book::where('published_year', '>=', 2000)->orderBy('title')->get(). O que acontece nesse código?",
      "alternativas": [
        "where() e orderBy() constroem a consulta, enquanto get() a executa e devolve uma coleção de livros.",
        "Cada método executa uma consulta completa, e get() cria uma nova tabela.",
        "orderBy() limita a consulta a um registro, e get() devolve um único Model.",
        "get() apenas prepara a consulta, que será executada somente durante um foreach."
      ],
      "correta": 0,
      "feedback": "where() e orderBy() acrescentam condições; get() executa e devolve uma coleção (mesmo vazia)."
    },
    {
      "pergunta": "O método paginate(10) busca até dez registros por página, e withQueryString() ajuda a preservar filtros presentes na URL ao navegar entre as páginas.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "paginate(10) limita a página atual e withQueryString() mantém parâmetros como o filtro nos links."
    },
    {
      "pergunta": "Qual alternativa apresenta corretamente os possíveis resultados dos métodos do Eloquent?",
      "alternativas": [
        "all() devolve um único Model ou null.",
        "first() sempre devolve uma coleção, mesmo quando não há registros.",
        "find() devolve um Model ou null, enquanto findOrFail() devolve um Model ou lança uma exceção.",
        "exists() devolve uma coleção contendo os registros encontrados."
      ],
      "correta": 2,
      "feedback": "find() pode devolver null; findOrFail() lança exceção se não achar, bom quando o registro precisa existir."
    }
  ]
});

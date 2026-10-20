// Miniteste 05 — Models
registrarTeste({
  "id": "models",
  "titulo": "Models",
  "questoes": [
    {
      "pergunta": "Qual alternativa descreve corretamente o papel de uma migration, de um Model e do Eloquent?",
      "alternativas": [
        "A migration armazena os registros, o Model cria as tabelas e o Eloquent produz as páginas HTML.",
        "A migration define a estrutura do banco, o Model representa dados e comportamentos, e o Eloquent faz a ligação entre Models e tabelas.",
        "O Model define exclusivamente a estrutura da tabela, enquanto a migration realiza consultas.",
        "O Eloquent substitui tanto o banco de dados quanto as classes da aplicação."
      ],
      "correta": 1,
      "feedback": "Migration: estrutura. Model: entidade e comportamentos. Eloquent: mapeia objetos e registros das tabelas."
    },
    {
      "pergunta": "Um livro pode pertencer a várias categorias, e uma categoria pode conter vários livros. Como esse relacionamento é representado?",
      "alternativas": [
        "A tabela books recebe várias colunas, como category_1_id e category_2_id.",
        "A tabela categories recebe uma coluna book_id, e Book utiliza hasMany().",
        "Uma tabela pivot, como book_category, guarda as associações, e os dois Models utilizam belongsToMany().",
        "Os registros de livros e categorias são reunidos em uma única tabela."
      ],
      "correta": 2,
      "feedback": "Muitos para muitos usa tabela intermediária (pivot); os dois Models usam belongsToMany()."
    },
    {
      "pergunta": "Qual é a finalidade da configuração #[Fillable(['title', 'isbn', 'published_year'])] no Model Book?",
      "alternativas": [
        "Criar as três colunas na tabela books.",
        "Informar todos os atributos existentes na tabela, incluindo a chave primária.",
        "Autorizar esses atributos a serem preenchidos em conjunto, por exemplo, com Book::create().",
        "Tornar esses atributos obrigatórios em todas as operações."
      ],
      "correta": 2,
      "feedback": "Fillable controla quais atributos aceitam preenchimento em massa. Não cria colunas nem descreve a tabela."
    },
    {
      "pergunta": "A tabela book_category possui as colunas adicionais featured e position. Qual solução permite criar e posteriormente acessar esses dados da associação?",
      "alternativas": [
        "Passar os valores adicionais para attach() e configurar withPivot('featured', 'position') no relacionamento.",
        "Adicionar featured e position diretamente à tabela books, sem alterar o relacionamento.",
        "Utilizar detach() para inserir os valores e hasMany() para consultá-los.",
        "Declarar featured e position apenas em Fillable, sem criar as colunas na pivot."
      ],
      "correta": 0,
      "feedback": "attach() grava os valores extras na pivot e withPivot() diz ao Eloquent quais colunas extras carregar."
    },
    {
      "pergunta": "Um livro pode possuir, no máximo, um registro em book_details, e a coluna book_id está em book_details. Qual configuração representa corretamente esse relacionamento?",
      "alternativas": [
        "Book utiliza belongsTo() e BookDetail utiliza hasMany().",
        "Book utiliza hasOne(), BookDetail utiliza belongsTo(), e book_id recebe unique().",
        "Os dois Models utilizam belongsToMany() e uma tabela pivot.",
        "Book utiliza hasMany() e book_id pode se repetir livremente."
      ],
      "correta": 1,
      "feedback": "Quem tem a chave estrangeira usa belongsTo(); o livro usa hasOne(); unique() garante no banco um só detalhe por livro."
    },
    {
      "pergunta": "Definir um método belongsTo() ou hasMany() no Model cria automaticamente a coluna da chave estrangeira e sua restrição no banco de dados.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. Os métodos só ensinam o Eloquent a usar a relação; coluna e restrição vêm de uma migration."
    },
    {
      "pergunta": "Em um relacionamento muitos para muitos, attach() cria os registros relacionados e detach() apaga definitivamente esses registros de suas tabelas principais.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. Eles só mexem nas associações da tabela pivot, sem criar nem apagar livros ou categorias."
    },
    {
      "pergunta": "Por que podemos utilizar $book->title mesmo sem declarar uma propriedade $title e seus métodos getter e setter na classe Book?",
      "alternativas": [
        "O Eloquent mantém os valores internamente como atributos dinâmicos fornecidos pela classe base Model.",
        "A migration acrescenta automaticamente propriedades PHP ao arquivo do Model.",
        "O banco de dados executa um método getTitle() oculto no navegador.",
        "A configuração Fillable cria propriedades, getters e setters durante cada requisição."
      ],
      "correta": 0,
      "feedback": "A classe base Model guarda os dados em atributos internos e intercepta acessos como $book->title."
    },
    {
      "pergunta": "Um autor pode escrever vários livros, mas cada livro pertence a um autor. Qual configuração está correta?",
      "alternativas": [
        "A chave book_id fica em authors, e os dois Models utilizam hasOne().",
        "A chave author_id fica em authors, e Book utiliza hasMany().",
        "Uma tabela pivot é obrigatória, e os dois Models utilizam belongsToMany().",
        "A chave author_id fica em books; Author utiliza hasMany() e Book utiliza belongsTo()."
      ],
      "correta": 3,
      "feedback": "Em um para muitos, a chave estrangeira fica no lado \"muitos\": books.author_id."
    },
    {
      "pergunta": "Em um relacionamento no qual um autor possui vários livros, a chave estrangeira author_id deve ficar normalmente na tabela books, que representa o lado “muitos”.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Cada livro indica a qual autor pertence, então a chave fica em books."
    },
    {
      "pergunta": "Qual alternativa cria corretamente o Model de livro e apresenta o arquivo e a tabela utilizados por convenção?",
      "alternativas": [
        "php artisan make:migration Book, criando database/Book.php e utilizando a tabela Book.",
        "php artisan make:model books, criando app/books.php e utilizando a tabela book.",
        "php artisan create:model Book, criando models/BookModel.php e utilizando a tabela library.",
        "php artisan make:model Book, criando app/Models/Book.php e utilizando a tabela books."
      ],
      "correta": 3,
      "feedback": "make:model cria em app/Models. Convenção: classe no singular em StudlyCase, tabela no plural em minúsculas."
    },
    {
      "pergunta": "Relacionamentos, transformações de atributos, cálculos e regras relacionadas à entidade podem ser implementados no Model.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Esses comportamentos pertencem à entidade. Requisições, redirecionamentos e HTML ficam em outras camadas."
    }
  ]
});

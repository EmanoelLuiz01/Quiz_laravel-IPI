// Miniteste 04 — Migrations
registrarTeste({
  "id": "migrations",
  "titulo": "Migrations",
  "questoes": [
    {
      "pergunta": "Em um sistema de biblioteca, qual alternativa relaciona corretamente migration, tabela e Model?",
      "alternativas": [
        "A migration guarda os livros, a tabela executa o Eloquent e o Model cria o banco.",
        "A tabela descreve as mudanças, o Model guarda os registros e a migration trata requisições.",
        "O Model ordena as migrations, a tabela define classes PHP e a migration consulta os livros.",
        "A migration cria ou altera books, a tabela armazena os livros e o Model Book manipula os registros."
      ],
      "correta": 3,
      "feedback": "A migration descreve a estrutura, a tabela guarda os registros e o Model os representa e manipula via Eloquent."
    },
    {
      "pergunta": "Depois que uma migration foi executada e compartilhada com outras pessoas, a prática recomendada é editar o arquivo original para incluir qualquer mudança futura.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. Crie uma nova migration; isso preserva um histórico consistente e reproduzível."
    },
    {
      "pergunta": "A tabela books já existe. A aplicação precisa adicionar uma coluna opcional de texto chamada isbn. Qual solução está correta?",
      "alternativas": [
        "Usar Schema::create('books', ...) para criar novamente a tabela com isbn.",
        "Usar Schema::table('books', ...) e declarar $table->string('isbn')->nullable().",
        "Usar Schema::table('books', ...) e executar $table->dropColumn('isbn').",
        "Usar Schema::rename('books', 'isbn') para transformar a tabela em coluna."
      ],
      "correta": 1,
      "feedback": "Schema::table() altera tabela existente; string() é texto curto e nullable() permite valor vazio."
    },
    {
      "pergunta": "A data e o horário no início do nome de uma migration ajudam o Laravel a determinar sua ordem de execução, começando normalmente pelas migrations mais antigas.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "O Laravel ordena pelo nome do arquivo; o prefixo garante que a criação de uma tabela rode antes das alterações que dependem dela."
    },
    {
      "pergunta": "O método up() de uma migration adiciona a coluna subtitle à tabela books. O que o método down() deve fazer?",
      "alternativas": [
        "Adicionar novamente a coluna subtitle.",
        "Excluir completamente a tabela books.",
        "Remover a coluna subtitle adicionada por up().",
        "Inserir um valor inicial na nova coluna."
      ],
      "correta": 2,
      "feedback": "up() aplica a mudança e down() a desfaz. Se up() adicionou uma coluna, down() a remove no rollback."
    },
    {
      "pergunta": "Qual comando cria uma migration destinada a adicionar a coluna isbn à tabela existente books?",
      "alternativas": [
        "php artisan make:migration add_isbn_to_books_table --table=books",
        "php artisan migrate add_isbn_to_books_table",
        "php artisan make:model books --migration-status",
        "php artisan make:migration create_books_table --create=books"
      ],
      "correta": 0,
      "feedback": "make:migration cria o arquivo em database/migrations; --table=books indica alteração em tabela existente."
    },
    {
      "pergunta": "Segundo as convenções do Laravel, qual é o efeito da declaração $table->foreignId('category_id')->constrained() na tabela books?",
      "alternativas": [
        "Cria a tabela categories e também o Model Category.",
        "Copia todos os dados de categories para a tabela books.",
        "Cria category_id e a associa à coluna id da tabela categories.",
        "Transforma category_id na chave primária da tabela books."
      ],
      "correta": 2,
      "feedback": "foreignId cria a coluna da chave estrangeira e, por convenção, constrained() a associa a id em categories."
    },
    {
      "pergunta": "Qual é a principal função das migrations em um projeto Laravel?",
      "alternativas": [
        "Inserir automaticamente os dados de teste utilizados pela aplicação.",
        "Descrever e versionar mudanças na estrutura do banco de forma reproduzível.",
        "Substituir o banco de dados por estruturas armazenadas em arquivos PHP.",
        "Implementar as regras de negócio executadas pelos Controllers."
      ],
      "correta": 1,
      "feedback": "Migrations registram em código criação de tabelas, colunas, índices e chaves, reproduzíveis em qualquer ambiente. Dados de teste são de seeders e factories."
    },
    {
      "pergunta": "Qual sequência apresenta, respectivamente, os comandos para executar migrations pendentes, consultar o estado das migrations e desfazer o último lote?",
      "alternativas": [
        "make:migration, migrate:fresh, migrate",
        "migrate:reset, migrate, migrate:status",
        "migrate:rollback, migrate:fresh, make:migration",
        "migrate, migrate:status, migrate:rollback"
      ],
      "correta": 3,
      "feedback": "migrate executa as pendentes, migrate:status mostra o estado e migrate:rollback desfaz o último lote."
    },
    {
      "pergunta": "O comando php artisan migrate:fresh remove todas as tabelas do banco configurado e executa novamente as migrations, apagando os dados existentes.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Verdadeiro. Ele apaga todas as tabelas antes de recriá-las; use com cuidado, de preferência só em desenvolvimento."
    }
  ]
});

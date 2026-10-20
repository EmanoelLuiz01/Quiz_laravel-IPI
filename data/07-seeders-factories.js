// Miniteste 07 — Seeders e Factories
registrarTeste({
  "id": "seeders-factories",
  "titulo": "Seeders e Factories",
  "questoes": [
    {
      "pergunta": "Ao executar novamente o LibrarySeeder, firstOrCreate() reaproveita as categorias existentes, mas as Factories acrescentam novos autores, livros e detalhes.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "firstOrCreate() evita recriar categorias repetidas, mas as Factories criam novos registros a cada execução."
    },
    {
      "pergunta": "O comando php artisan migrate:fresh --seed pode ser usado com segurança em um banco compartilhado, pois preserva os registros existentes antes de popular as tabelas.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. migrate:fresh apaga todas as tabelas e dados; só use em banco local e descartável, conferindo o .env."
    },
    {
      "pergunta": "Qual é a finalidade da trait HasFactory em um Model como Book?",
      "alternativas": [
        "Criar automaticamente a tabela e suas chaves estrangeiras.",
        "Validar os atributos produzidos pela Factory antes de cada inserção.",
        "Executar o DatabaseSeeder sempre que o Model for utilizado.",
        "Disponibilizar o método estático factory() sem substituir os relacionamentos e as demais configurações do Model."
      ],
      "correta": 3,
      "feedback": "HasFactory habilita Book::factory(). Não cria tabelas nem substitui relacionamentos."
    },
    {
      "pergunta": "O uso de fake()->unique() torna desnecessária uma constraint unique() na migration da tabela.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. fake()->unique() só evita repetição na geração atual; a constraint do banco é a garantia final."
    },
    {
      "pergunta": "Qual é o papel do método definition() de uma Factory?",
      "alternativas": [
        "Devolver os valores padrão de um registro, podendo utilizar fake() para gerar dados fictícios.",
        "Executar as migrations e criar as colunas necessárias para o Model.",
        "Informar somente a quantidade de registros que o Seeder deverá inserir.",
        "Persistir automaticamente um registro sempre que a aplicação for iniciada."
      ],
      "correta": 0,
      "feedback": "definition() descreve os atributos padrão; fake() fornece nomes, números e palavras fictícias."
    },
    {
      "pergunta": "Qual alternativa descreve corretamente a execução dos Seeders?",
      "alternativas": [
        "php artisan migrate sempre executa automaticamente todos os Seeders.",
        "php artisan db:seed --class=LibrarySeeder executa apenas o DatabaseSeeder.",
        "php artisan db:seed executa o DatabaseSeeder, enquanto a opção --class=LibrarySeeder permite executar especificamente o Seeder da biblioteca.",
        "php artisan migrate:fresh --seed preserva os dados existentes antes de executar os Seeders."
      ],
      "correta": 2,
      "feedback": "db:seed começa pelo DatabaseSeeder; --class escolhe diretamente outro Seeder."
    },
    {
      "pergunta": "No LibrarySeeder, qual alternativa relaciona corretamente for(), has() e attach()?",
      "alternativas": [
        "for() cria os detalhes, has() define o autor e attach() cria as migrations da pivot.",
        "for() associa o livro ao autor, has() cria o detalhe relacionado e attach() insere a associação com a categoria na pivot.",
        "for() e has() apenas consultam registros existentes, enquanto attach() apaga categorias não selecionadas.",
        "Os três métodos modificam a estrutura das tabelas antes da inserção dos dados."
      ],
      "correta": 1,
      "feedback": "for() liga o livro ao autor, has() cria o detalhe pela relação e attach() grava a associação muitos para muitos na pivot."
    },
    {
      "pergunta": "Por que utilizar um Seeder para montar o cenário completo da biblioteca?",
      "alternativas": [
        "Porque somente Seeders podem utilizar Models e relacionamentos do Eloquent.",
        "Porque um Seeder transforma os dados fictícios em dados reais de produção.",
        "Porque toda Factory pode gerar somente um registro durante sua existência.",
        "Porque o Seeder pode coordenar quantidades, ordem e relações, combinando dados fixos e registros gerados por Factories."
      ],
      "correta": 3,
      "feedback": "A Factory descreve um registro isolado; o Seeder organiza o cenário: ordem, quantidades e relações."
    },
    {
      "pergunta": "Qual alternativa diferencia corretamente migration, Factory e Seeder?",
      "alternativas": [
        "A migration gera dados fictícios, a Factory altera tabelas e o Seeder representa os relacionamentos do Model.",
        "A migration define a estrutura, a Factory descreve valores de exemplo para um Model e o Seeder coordena a inserção de um conjunto de dados.",
        "O Seeder cria as classes dos Models, a Factory executa as migrations e a migration escolhe a quantidade de registros.",
        "Factories e Seeders substituem as migrations quando o banco ainda não possui tabelas."
      ],
      "correta": 1,
      "feedback": "Migrations: tabelas e colunas. Factories: valores de exemplo de um registro. Seeders: cenário completo."
    },
    {
      "pergunta": "Qual alternativa descreve corretamente os métodos de uma Factory?",
      "alternativas": [
        "make() persiste o registro, enquanto create() cria somente um objeto em memória.",
        "count(10) insere imediatamente dez registros, mesmo sem chamar create().",
        "make() cria um Model não persistido, create() grava no banco e count(10)->create() insere dez registros.",
        "create() só pode ser usado quando nenhum atributo padrão foi definido em definition()."
      ],
      "correta": 2,
      "feedback": "make() monta o objeto sem gravar; create() persiste; count() define quantas vezes repetir."
    }
  ]
});

// Miniteste 01 — Primeiro contato com o Laravel
registrarTeste({
  "id": "primeiro-contato",
  "titulo": "Primeiro contato com o Laravel",
  "questoes": [
    {
      "pergunta": "Qual alternativa descreve melhor a função de um Controller?",
      "alternativas": [
        "Coordenar o trabalho necessário para responder à requisição.",
        "Armazenar exclusivamente os registros do banco de dados.",
        "Definir as versões das dependências instaladas pelo Composer.",
        "Processar o código PHP diretamente no navegador."
      ],
      "correta": 0,
      "feedback": "O Controller recebe o fluxo da rota, solicita as operações, prepara os dados e escolhe a resposta. Coordena, mas não deve concentrar todo o código do sistema."
    },
    {
      "pergunta": "CRUD representa as operações de criar, consultar, atualizar e excluir dados.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "CRUD = Create, Read, Update, Delete."
    },
    {
      "pergunta": "Por que o .env.example pode ser enviado ao repositório, enquanto o .env normalmente não deve ser versionado?",
      "alternativas": [
        "O .env.example serve como modelo seguro, enquanto o .env pode conter credenciais reais.",
        "O .env.example substitui o banco, enquanto o .env armazena as tabelas.",
        "O .env.example contém o código PHP, enquanto o .env contém as Views.",
        "O .env.example instala dependências, enquanto o .env executa migrations."
      ],
      "correta": 0,
      "feedback": "O .env guarda valores locais e sensíveis (senhas, chaves). O .env.example lista as variáveis necessárias com valores vazios ou seguros."
    },
    {
      "pergunta": "Qual alternativa diferencia corretamente autenticação e autorização?",
      "alternativas": [
        "Autenticação cria as tabelas; autorização insere os dados iniciais.",
        "Autenticação define as rotas; autorização apresenta as Views.",
        "Autenticação identifica o usuário; autorização verifica o que ele pode fazer.",
        "Autenticação registra os logs; autorização instala as dependências."
      ],
      "correta": 2,
      "feedback": "Autenticação confirma quem é o usuário; autorização define quais operações ele pode realizar."
    },
    {
      "pergunta": "Qual alternativa diferencia corretamente migrations, factories e seeders?",
      "alternativas": [
        "Migration gera dados fictícios, Factory cria tabelas e Seeder define rotas.",
        "Migration registra mudanças estruturais, Factory descreve dados fictícios e Seeder insere dados.",
        "Migration insere usuários, Factory controla permissões e Seeder cria Views.",
        "Migration configura e-mails, Factory registra logs e Seeder instala dependências."
      ],
      "correta": 1,
      "feedback": "Migration muda a estrutura do banco; factory é a receita de dados fictícios; seeder organiza a inserção de dados (e pode chamar factories)."
    },
    {
      "pergunta": "O que acontece quando o Laravel utiliza uma View Blade para gerar uma página?",
      "alternativas": [
        "O navegador recebe o código PHP e o executa localmente.",
        "O Blade cria automaticamente as tabelas necessárias no banco.",
        "O navegador transforma o arquivo Blade em um Controller.",
        "O Blade prepara o HTML no servidor e o navegador recebe o resultado."
      ],
      "correta": 3,
      "feedback": "O Blade processa valores e diretivas no servidor. O navegador recebe só o HTML e nunca executa o PHP da aplicação."
    },
    {
      "pergunta": "Toda requisição recebida por uma aplicação Laravel precisa obrigatoriamente utilizar rota, Controller, Model e View.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. Uma rota pode devolver direto texto, arquivo, redirecionamento ou JSON, e uma página sem banco pode dispensar o Model."
    },
    {
      "pergunta": "Qual alternativa descreve corretamente a relação entre Models e Eloquent?",
      "alternativas": [
        "Models criam páginas HTML, enquanto o Eloquent processa arquivos CSS.",
        "Models definem rotas, enquanto o Eloquent verifica a autenticação do usuário.",
        "Models representam e manipulam dados, enquanto o Eloquent os relaciona às tabelas do banco.",
        "Models armazenam configurações locais, enquanto o Eloquent substitui o banco de dados."
      ],
      "correta": 2,
      "feedback": "O Model é a classe PHP que consulta e modifica dados. O Eloquent é o ORM que liga Models às tabelas; o banco ainda executa SQL."
    },
    {
      "pergunta": "Em uma aplicação Laravel, qual é a principal responsabilidade de uma rota?",
      "alternativas": [
        "Definir a estrutura das tabelas do banco de dados.",
        "Preparar o CSS que será apresentado pelo navegador.",
        "Armazenar as credenciais utilizadas pela aplicação.",
        "Associar um endereço e um método HTTP a uma ação da aplicação."
      ],
      "correta": 3,
      "feedback": "Uma rota associa um endereço (/livros) e um método HTTP (GET) à ação que trata a requisição."
    },
    {
      "pergunta": "No projeto Laravel, o Composer gerencia as dependências PHP, enquanto o npm gerencia as dependências relacionadas à parte visual.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Composer instala dependências PHP em vendor/; npm instala em node_modules/ as de CSS e JavaScript."
    },
    {
      "pergunta": "Qual é uma das principais contribuições de um framework como o Laravel para o desenvolvimento de aplicações Web?",
      "alternativas": [
        "Substituir completamente a linguagem PHP.",
        "Organizar a aplicação e oferecer recursos prontos para tarefas comuns.",
        "Executar todo o código PHP diretamente no navegador.",
        "Eliminar a necessidade de utilizar banco de dados."
      ],
      "correta": 1,
      "feedback": "Um framework dá estrutura e recursos reutilizáveis. O Laravel não substitui o PHP: é usado para desenvolver em PHP."
    },
    {
      "pergunta": "Depois que uma migration foi executada e compartilhada, a prática recomendada é editar silenciosamente o arquivo anterior sempre que a estrutura precisar mudar.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. O histórico deve ser preservado; novas mudanças estruturais vão em outra migration."
    }
  ]
});

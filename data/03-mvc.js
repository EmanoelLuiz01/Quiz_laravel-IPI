// Miniteste 03 — MVC
registrarTeste({
  "id": "mvc",
  "titulo": "MVC",
  "questoes": [
    {
      "pergunta": "Um back-end Laravel fornece uma API utilizada por uma interface Web e por um aplicativo móvel. Qual afirmação está correta?",
      "alternativas": [
        "Cada interface precisa duplicar todas as regras de negócio do back-end.",
        "As interfaces podem compartilhar dados e regras do back-end, usando a API como contrato de comunicação.",
        "Cada interface precisa possuir seu próprio banco de dados e seu próprio Model.",
        "Um mesmo back-end não pode atender mais de uma forma de apresentação."
      ],
      "correta": 1,
      "feedback": "A API define endereços, dados e respostas; diferentes Views reutilizam as mesmas regras e dados, mudando só a apresentação."
    },
    {
      "pergunta": "Em um sistema de biblioteca, é necessário calcular uma multa, receber a solicitação de devolução e mostrar o resultado ao usuário. Qual divisão está correta?",
      "alternativas": [
        "A View calcula a multa, o Model recebe a requisição e o Controller altera o HTML.",
        "O Controller calcula sozinho a multa, a View consulta o banco e o Model mostra o resultado.",
        "A View altera o banco, o Controller contém todas as regras e o Model gera os botões.",
        "O Model calcula a multa, o Controller recebe e coordena a solicitação e a View apresenta o resultado."
      ],
      "correta": 3,
      "feedback": "A regra de cálculo é do Model, o Controller coordena e a View apresenta."
    },
    {
      "pergunta": "Uma View Blade pode ser processada no servidor, e o HTML resultante é enviado ao navegador para apresentação.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Em um Laravel tradicional, Controller, Model e View Blade rodam no servidor; o navegador recebe o HTML."
    },
    {
      "pergunta": "Qual alternativa descreve corretamente uma arquitetura em camadas?",
      "alternativas": [
        "Cada camada precisa obrigatoriamente executar em um servidor diferente.",
        "A aplicação deve possuir exatamente quatro pastas, uma para cada camada.",
        "A aplicação é dividida logicamente por responsabilidades, mesmo que todas as camadas executem no mesmo servidor.",
        "Cada parte do sistema pode acessar diretamente qualquer outra parte sem caminhos definidos."
      ],
      "correta": 2,
      "feedback": "Camadas são grupos lógicos de responsabilidades e podem rodar no mesmo servidor; separação física é outra decisão."
    },
    {
      "pergunta": "O que é MVC?",
      "alternativas": [
        "Um framework criado exclusivamente para aplicações desenvolvidas em PHP.",
        "Um padrão que separa apresentação, controle das interações e dados e regras da aplicação.",
        "Uma convenção que exige colocar todo o sistema em exatamente três arquivos.",
        "Um protocolo utilizado para transmitir requisições entre cliente e servidor."
      ],
      "correta": 1,
      "feedback": "MVC é um padrão de organização (Model, View, Controller), não uma linguagem, framework ou protocolo."
    },
    {
      "pergunta": "Criar três arquivos ou pastas chamados Model, View e Controller garante que a aplicação esteja corretamente organizada em MVC.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. O que importa são as responsabilidades atribuídas; nomes de pastas não impedem regras no HTML, SQL na View ou Controller inchado."
    },
    {
      "pergunta": "O Model é apenas outro nome para uma tabela do banco de dados e não deve possuir regras ou comportamentos da aplicação.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. O banco armazena dados; o Model representa dados, conceitos, regras e comportamentos (ex.: calcular multa)."
    },
    {
      "pergunta": "Qual alternativa apresenta uma avaliação realista do MVC?",
      "alternativas": [
        "O MVC garante automaticamente que todo código será organizado e fácil de testar.",
        "O MVC reduz sempre a quantidade de arquivos e torna qualquer script mais simples.",
        "O MVC elimina a necessidade de controlar dependências entre as partes do sistema.",
        "O MVC facilita organização, testes e manutenção, mas acrescenta arquivos, caminhos e necessidade de disciplina."
      ],
      "correta": 3,
      "feedback": "Há ganhos em manutenção, testes e reutilização, mas também mais componentes. Em scripts muito pequenos pode não compensar."
    },
    {
      "pergunta": "Qual sequência representa o fluxo simplificado para listar livros em uma aplicação MVC?",
      "alternativas": [
        "Navegador → Controller → Model → Controller → View → navegador.",
        "Navegador → View → banco de dados → Model → Controller.",
        "Model → navegador → Controller → View → banco de dados.",
        "Controller → View → navegador → Model → Controller."
      ],
      "correta": 0,
      "feedback": "O navegador pede, o Controller solicita dados ao Model, recebe e entrega à View, que monta a resposta ao navegador."
    },
    {
      "pergunta": "Qual alternativa diferencia corretamente MVC e arquitetura cliente-servidor?",
      "alternativas": [
        "MVC define os servidores físicos, enquanto cliente-servidor define as pastas do projeto.",
        "Os dois conceitos são nomes diferentes para exatamente a mesma organização.",
        "Cliente-servidor trata de localização e comunicação; MVC trata da organização das responsabilidades.",
        "MVC existe somente no navegador, enquanto cliente-servidor existe somente no banco."
      ],
      "correta": 2,
      "feedback": "Cliente-servidor: onde estão os componentes e como se comunicam. MVC: como a aplicação organiza apresentação, controle, regras e dados."
    }
  ]
});

// Miniteste 02 — Frameworks
registrarTeste({
  "id": "frameworks",
  "titulo": "Frameworks",
  "questoes": [
    {
      "pergunta": "Um site pequeno, com poucas páginas e quase nenhuma interação, pode não precisar de um framework completo.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Nem todo projeto precisa de framework completo; uma ferramenta grande sem necessidade só aumenta a complexidade."
    },
    {
      "pergunta": "Por que o primeiro projeto com um framework pode ser mais lento, embora a ferramenta aumente a produtividade posteriormente?",
      "alternativas": [
        "O framework perde recursos à medida que o desenvolvedor aprende a utilizá-lo.",
        "A produtividade só aumenta quando o projeto deixa de seguir as convenções.",
        "O framework precisa ser substituído por outro depois do primeiro projeto.",
        "Existe um custo inicial para aprender estrutura, comandos e convenções, mas esse conhecimento agiliza tarefas futuras."
      ],
      "correta": 3,
      "feedback": "No início é preciso entender termos, arquivos e convenções; com a prática, tarefas comuns ficam mais rápidas."
    },
    {
      "pergunta": "Qual é a abordagem mais adequada para escolher um framework para um projeto?",
      "alternativas": [
        "Escolher sempre o framework mais novo divulgado nas redes sociais.",
        "Escolher a ferramenta com a maior quantidade de recursos, independentemente do projeto.",
        "Avaliar problema, equipe, documentação, comunidade, manutenção e infraestrutura, podendo testar um protótipo.",
        "Escolher exclusivamente pela posição da tecnologia em uma pesquisa de popularidade."
      ],
      "correta": 2,
      "feedback": "Não existe framework ideal para tudo. A escolha considera o projeto, a equipe, o suporte, a manutenção e a infraestrutura; um protótipo reduz riscos."
    },
    {
      "pergunta": "Qual alternativa define corretamente um framework?",
      "alternativas": [
        "Uma linguagem de programação criada para substituir PHP ou JavaScript.",
        "Uma estrutura reutilizável com ferramentas e convenções que serve de base para aplicações.",
        "Uma aplicação completa que não precisa receber código específico do desenvolvedor.",
        "Uma ferramenta destinada somente a escolher cores e fontes de uma interface."
      ],
      "correta": 1,
      "feedback": "Um framework oferece organização, convenções e componentes reutilizáveis, mas o desenvolvedor ainda implementa o que é específico da aplicação."
    },
    {
      "pergunta": "Uma equipe adota um framework consolidado e segue suas convenções. Qual benefício pode ser esperado?",
      "alternativas": [
        "Todas as decisões de arquitetura e segurança deixam de ser responsabilidade da equipe.",
        "Os integrantes conseguem localizar componentes com mais facilidade e reutilizar soluções para problemas comuns.",
        "A aplicação deixa de precisar de manutenção, testes e atualizações.",
        "Qualquer novo integrante compreenderá todo o sistema sem estudar o framework."
      ],
      "correta": 1,
      "feedback": "A padronização facilita localizar componentes e reaproveitar soluções, mas não elimina decisões, testes e manutenção."
    },
    {
      "pergunta": "Quando um framework oferece mecanismos de segurança, a aplicação torna-se automaticamente segura, mesmo que esses recursos sejam utilizados incorretamente ou estejam desatualizados.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. As proteções precisam ser usadas corretamente, os dados validados e a ferramenta mantida atualizada."
    },
    {
      "pergunta": "Qual alternativa diferencia corretamente frameworks de front-end e de back-end?",
      "alternativas": [
        "Frameworks de front-end acessam exclusivamente bancos, enquanto os de back-end definem apenas estilos.",
        "Ambos são executados somente no navegador e possuem exatamente as mesmas responsabilidades.",
        "Os de front-end ajudam a organizar interfaces; os de back-end auxiliam no tratamento de requisições, regras e dados.",
        "Frameworks de back-end não podem oferecer rotas, autenticação nem construção de APIs."
      ],
      "correta": 2,
      "feedback": "Front-end: interface e interação no navegador. Back-end: rotas, validação, autenticação, banco e APIs no servidor."
    },
    {
      "pergunta": "Qual afirmação descreve corretamente a relação entre Laravel e PHP?",
      "alternativas": [
        "Laravel substitui o PHP por uma nova linguagem de programação.",
        "PHP é usado somente para configurar o Laravel, não para programar a aplicação.",
        "Laravel elimina a necessidade de conhecer funções, classes e objetos em PHP.",
        "A aplicação continua sendo programada em PHP, enquanto o Laravel organiza e simplifica o desenvolvimento."
      ],
      "correta": 3,
      "feedback": "Laravel é um framework que usa PHP; o código da aplicação continua em PHP e depende dos fundamentos da linguagem."
    },
    {
      "pergunta": "Fundamentos como lógica, HTTP, orientação a objetos, SQL e segurança continuam úteis mesmo quando o desenvolvedor muda de framework.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Frameworks mudam de sintaxe, mas resolvem problemas parecidos; uma base sólida facilita aprender novos."
    },
    {
      "pergunta": "Qual alternativa diferencia corretamente uma biblioteca de um framework?",
      "alternativas": [
        "Nosso código normalmente chama a biblioteca, enquanto o framework também controla parte do fluxo e chama nosso código.",
        "Uma biblioteca determina toda a estrutura do projeto, enquanto um framework resolve apenas uma tarefa isolada.",
        "Bibliotecas e frameworks possuem sempre o mesmo alcance e controlam a aplicação da mesma maneira.",
        "Um framework contém somente funções chamadas manualmente e não estabelece convenções para o projeto."
      ],
      "correta": 0,
      "feedback": "Inversão de controle: a biblioteca é chamada pelo nosso código; no framework, parte do fluxo é coordenada por ele, que executa nosso código nos momentos certos."
    }
  ]
});

# Treino Laravel

Telinha de treino dos minitestes de Laravel (IFPE Igarassu). Funciona offline: basta abrir o `index.html` no navegador.

## Estrutura

```
treino-laravel/
├── index.html          # página única; carrega CSS, dados e lógica
├── css/
│   └── style.css       # visual, tema claro/escuro e responsivo
├── js/
│   ├── banco.js        # registrarTeste(): lista central de minitestes
│   └── app.js          # telas, embaralhar, placar, refazer erradas
└── data/               # um arquivo por miniteste (01 a 09)
    ├── 01-primeiro-contato.js
    └── ...
```

## Progresso salvo

A rodada em andamento, os minitestes marcados e a opção de embaralhar ficam salvos no navegador (`localStorage`). Ao reabrir, a questão em que você parou aparece direto; em "← Início" há o botão "Continuar". O progresso vale por navegador/aparelho.

## Como adicionar um miniteste

1. Crie `data/10-nome.js` com `registrarTeste({ id, titulo, questoes: [...] })`.
2. Cada questão: `{ pergunta, alternativas: [...], correta: <índice 0..n>, feedback }`.
3. Inclua `<script src="data/10-nome.js"></script>` no `index.html`, antes do `app.js`.

## Observação

Em `08-controllers.js` e `09-views-blade.js`, o gabarito e o feedback foram definidos pelo Claude (o Forms não mostrou as respostas). Confira com a apostila.

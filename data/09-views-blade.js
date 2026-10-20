// Miniteste 09 — Views e Blade
// Atenção: gabarito e feedback definidos por Claude (não vieram do Forms). Conferir com a apostila.
registrarTeste({
  "id": "views-blade",
  "titulo": "Views e Blade",
  "questoes": [
    {
      "pergunta": "Como old() reapresenta valores e @error mostra mensagens, a validação no servidor pode ser removida dos formulários.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. old() e @error só cuidam da apresentação depois de uma falha. Quem valida de fato é o servidor (ex.: $request->validate())."
    },
    {
      "pergunta": "Qual alternativa descreve corretamente o Blade em uma aplicação Laravel?",
      "alternativas": [
        "É uma biblioteca JavaScript que executa as diretivas da View no navegador.",
        "É o mecanismo de templates do Laravel, processado no servidor para gerar o HTML enviado ao navegador.",
        "É uma ferramenta usada para criar tabelas e relacionamentos no banco de dados.",
        "É uma linguagem de estilos que substitui o CSS das páginas da aplicação."
      ],
      "correta": 1,
      "feedback": "O Blade é o mecanismo de templates do Laravel. Ele é processado no servidor e o navegador recebe apenas o HTML resultante."
    },
    {
      "pergunta": "Para simplificar o Controller, é recomendável fazer consultas, inserções e exclusões diretamente nos arquivos Blade.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. A View deve cuidar da apresentação. Consultas e alterações de dados ficam no Controller/Model, mantendo as responsabilidades separadas."
    },
    {
      "pergunta": "Qual estrutura é apropriada para o formulário Blade que atualiza um livro existente?",
      "alternativas": [
        "Usar method='GET', a rota books.create e somente @csrf.",
        "Usar method='PUT' diretamente no HTML, sem @csrf, e a rota books.index.",
        "Usar method='POST', a rota books.update, @csrf e @method('PUT').",
        "Usar method='POST', a rota books.destroy e @method('DELETE')."
      ],
      "correta": 2,
      "feedback": "O HTML envia POST; @method('PUT') representa o método de atualização, @csrf inclui o token e a rota books.update trata a requisição."
    },
    {
      "pergunta": "O Laravel pode renderizar páginas com Blade sem um starter kit e também pode fornecer uma API para um front-end mantido em outro projeto.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Verdadeiro. O Laravel funciona com Blade tradicional ou como back-end de API para um front-end separado; um starter kit não é obrigatório."
    },
    {
      "pergunta": "Qual recurso do Blade é mais adequado para percorrer uma coleção de livros e também apresentar uma mensagem quando ela estiver vazia?",
      "alternativas": [
        "@foreach com @yield, pois o layout identifica automaticamente a coleção vazia.",
        "@forelse com @empty, pois combina a repetição com o tratamento da ausência de registros.",
        "@section com @endsection, pois cada registro deve ocupar uma seção do layout.",
        "@csrf com @method, pois essas diretivas controlam a exibição de listas."
      ],
      "correta": 1,
      "feedback": "@forelse percorre a coleção e @empty define o que mostrar quando não há registros."
    },
    {
      "pergunta": "Cadastro e edição de livros compartilham os mesmos campos. Qual solução reaproveita o formulário e ajuda após uma falha de validação?",
      "alternativas": [
        "Duplicar todos os campos nas duas páginas e remover o atributo name dos inputs.",
        "Usar old() para salvar diretamente no banco e dispensar o Controller.",
        "Usar @error para validar os dados no navegador e eliminar a validação no servidor.",
        "Incluir um parcial com @include, usar old() para recuperar entradas e @error para apresentar a mensagem do campo."
      ],
      "correta": 3,
      "feedback": "Um parcial com @include evita duplicação; old() devolve o que o usuário digitou e @error mostra a mensagem de cada campo. A validação continua no servidor."
    },
    {
      "pergunta": "Como um layout e uma página se relacionam na herança de templates do Blade?",
      "alternativas": [
        "@include define o layout principal, e @error reserva a área de conteúdo.",
        "@section cria uma rota, e @extends executa o Controller dessa rota.",
        "O layout reserva áreas com @yield; a página usa @extends e preenche áreas correspondentes com @section.",
        "Cada página precisa repetir cabeçalho, menu e rodapé para que o Blade funcione."
      ],
      "correta": 2,
      "feedback": "O layout define áreas com @yield. A página declara @extends('layout') e preenche essas áreas com @section."
    },
    {
      "pergunta": "Ao executar return view('books.index', ['books' => $books]), o que o Controller faz?",
      "alternativas": [
        "Cria automaticamente a rota books.index e a tabela books.",
        "Envia o objeto para o navegador executar diretamente o código Blade.",
        "Procura uma View chamada books e transforma a variável em uma rota.",
        "Renderiza books.index e disponibiliza os dados na variável $books da View."
      ],
      "correta": 3,
      "feedback": "view('books.index', [...]) renderiza resources/views/books/index.blade.php e torna $books disponível na View."
    },
    {
      "pergunta": "Qual é a forma mais segura de apresentar no Blade o título de um livro informado por um usuário?",
      "alternativas": [
        "Usar {{ $book->title }}, que escapa caracteres especiais do HTML.",
        "Usar {!! $book->title !!}, porque essa sintaxe sempre remove códigos perigosos.",
        "Executar uma consulta ao banco dentro da View antes de apresentar o título.",
        "Inserir o valor diretamente em uma tag script para o navegador validá-lo."
      ],
      "correta": 0,
      "feedback": "{{ }} escapa o HTML, ajudando a evitar XSS. {!! !!} imprime sem escape e só deve ser usado com conteúdo confiável."
    },
    {
      "pergunta": "A View pode apresentar os links com $books->links('partials.pagination'), enquanto withQueryString() no Controller mantém o filtro de busca ao trocar de página.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Verdadeiro. links() renderiza a paginação (inclusive com uma View personalizada) e withQueryString() preserva parâmetros como o filtro nos links das páginas."
    },
    {
      "pergunta": "Qual alternativa representa corretamente os relacionamentos na interface da biblioteca?",
      "alternativas": [
        "O formulário pode enviar author_id; featured e position pertencem ao vínculo livro–categoria; desassociar remove o vínculo, não a categoria.",
        "O usuário deve digitar book_id para criar detalhes, mesmo quando o livro já veio pela URL.",
        "Os campos featured e position devem pertencer sempre à tabela books, pois não variam conforme a categoria.",
        "Remover uma categoria de um livro deve excluir a categoria e suas associações com todos os outros livros."
      ],
      "correta": 0,
      "feedback": "author_id fica em books; featured e position são dados da pivot (variam por livro e categoria); desassociar (detach) remove só o vínculo."
    }
  ]
});

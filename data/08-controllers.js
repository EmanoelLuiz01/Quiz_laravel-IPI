// Miniteste 08 — Controllers
// Atenção: gabarito e feedback definidos por Claude (não vieram do Forms). Conferir com a apostila.
registrarTeste({
  "id": "controllers",
  "titulo": "Controllers",
  "questoes": [
    {
      "pergunta": "Durante a atualização de um livro, qual abordagem permite manter o próprio ISBN e ainda rejeitar o ISBN de outro livro?",
      "alternativas": [
        "Remover qualquer verificação de unicidade e utilizar diretamente $request->all().",
        "Validar somente no formulário HTML e enviar todos os dados ao Eloquent.",
        "Usar Rule::unique('books', 'isbn')->ignore($book) e atualizar o Model apenas com os dados validados.",
        "Excluir o livro atual antes de validar e criar um novo registro com o mesmo identificador."
      ],
      "correta": 2,
      "feedback": "Rule::unique(...)->ignore($book) ignora o registro atual na checagem de unicidade, mas ainda rejeita o ISBN de outro livro. A validação deve ocorrer no servidor e só os dados validados devem atualizar o Model."
    },
    {
      "pergunta": "O que acontece em public function show(Book $book) quando a rota contém /books/{book}?",
      "alternativas": [
        "O Laravel cria um novo livro e o insere antes de executar a action.",
        "O Laravel procura o registro correspondente, entrega o Model à action e responde com 404 se não o encontrar.",
        "O parâmetro sempre recebe apenas um texto, sendo obrigatório chamar new Book().",
        "A action pode receber qualquer nome de variável, mesmo sem correspondência com {book}."
      ],
      "correta": 1,
      "feedback": "É o route model binding: o Laravel busca o Book pelo valor da URL, injeta o Model na action e devolve 404 se não existir. O nome da variável deve corresponder ao parâmetro da rota."
    },
    {
      "pergunta": "Qual alternativa descreve corretamente o papel de um Controller em uma aplicação Laravel?",
      "alternativas": [
        "Definir fisicamente as tabelas, colunas e chaves estrangeiras do banco.",
        "Receber os dados da requisição, coordenar a operação e devolver uma resposta adequada.",
        "Armazenar todo o HTML, as regras da entidade e os dados persistidos pela aplicação.",
        "Executar no navegador para capturar diretamente os eventos da interface."
      ],
      "correta": 1,
      "feedback": "O Controller coordena: recebe a requisição, aciona Models/validações e escolhe a resposta. Estrutura do banco é das migrations; HTML é das Views; regras da entidade, do Model."
    },
    {
      "pergunta": "Quando o route model binding encontra um livro, isso também comprova automaticamente que o usuário atual possui permissão para editá-lo ou excluí-lo.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. O binding apenas localiza o registro. Autorização é outra responsabilidade (policies, gates, etc.) e precisa ser verificada à parte."
    },
    {
      "pergunta": "Em formulários Blade, @csrf inclui a proteção CSRF e @method('PUT') ou @method('DELETE') permite representar métodos que o formulário HTML não envia diretamente.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 0,
      "feedback": "Verdadeiro. Formulários HTML só enviam GET e POST. @method faz o spoofing de PUT/PATCH/DELETE, e @csrf inclui o token de proteção."
    },
    {
      "pergunta": "Ao acessar /books?title=Laravel, qual abordagem é adequada dentro da action index?",
      "alternativas": [
        "Receber Request $request, ler $request->input('title') e usar filled('title') antes de aplicar o filtro.",
        "Criar manualmente new Request() e acessar o título por uma propriedade pública.",
        "Ler obrigatoriamente $_GET e ignorar o objeto fornecido pelo Laravel.",
        "Buscar o título na migration, pois parâmetros da URL não chegam ao Controller."
      ],
      "correta": 0,
      "feedback": "O Laravel injeta o objeto Request na action. input() lê o parâmetro e filled() confirma que ele existe e não está vazio antes de filtrar."
    },
    {
      "pergunta": "Ao declarar Route::resource(), o Laravel implementa automaticamente as operações, cria as Views e gera as migrations do CRUD.",
      "alternativas": [
        "Verdadeiro",
        "Falso"
      ],
      "correta": 1,
      "feedback": "Falso. Route::resource() só registra as rotas convencionais apontando para as actions. Controller, Views e migrations continuam sendo criados e escritos por você."
    },
    {
      "pergunta": "Qual alternativa relaciona corretamente formas de resposta que uma action pode devolver?",
      "alternativas": [
        "view() solicita que o navegador apague um registro, enquanto redirect() produz exclusivamente JSON.",
        "compact() redireciona o navegador, enquanto response()->json() procura um arquivo Blade.",
        "view() prepara uma View com dados, redirect()->route() direciona o navegador e response()->json() devolve JSON.",
        "Toda action precisa devolver uma página HTML e não pode retornar texto, redirecionamento ou JSON."
      ],
      "correta": 2,
      "feedback": "view() renderiza uma View com dados, redirect()->route() manda o navegador para outra rota e response()->json() devolve JSON. compact() só empacota variáveis em array."
    },
    {
      "pergunta": "Qual alternativa descreve corretamente as actions convencionais de um resource controller?",
      "alternativas": [
        "create salva o novo livro, edit atualiza seus dados e index exclui registros.",
        "store exibe o formulário de cadastro, update mostra o formulário de edição e destroy lista os livros.",
        "show cadastra o livro, create consulta um registro e edit remove o livro.",
        "create e edit exibem formulários; store e update persistem dados; destroy realiza a exclusão."
      ],
      "correta": 3,
      "feedback": "index lista, show exibe um, create/edit mostram formulários, store/update gravam dados e destroy exclui."
    },
    {
      "pergunta": "Qual alternativa cria corretamente BookController e liga GET /books à action index?",
      "alternativas": [
        "php artisan make:model BookController e Route::post('/books', 'index').",
        "php artisan make:route BookController e Route::resource('/books', 'index').",
        "php artisan make:controller books e Route::view('/books', BookController::class).",
        "php artisan make:controller BookController e Route::get('/books', [BookController::class, 'index'])."
      ],
      "correta": 3,
      "feedback": "make:controller cria o Controller e Route::get('/books', [BookController::class, 'index']) liga o endereço e o método HTTP à action."
    }
  ]
});

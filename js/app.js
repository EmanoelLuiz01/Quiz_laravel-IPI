(() => {
  const $ = (s) => document.querySelector(s);
  const app = $("#app");

  const escapar = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const embaralhar = (a) => {
    a = [...a];
    for (let k = a.length - 1; k > 0; k--) {
      const j = (Math.random() * (k + 1)) | 0;
      [a[k], a[j]] = [a[j], a[k]];
    }
    return a;
  };
  // Verdadeiro/Falso mantém a ordem original das alternativas
  const ehVF = (o) => o.length === 2 && o[0] === "Verdadeiro";

  const estado = {
    selecionados: new Set(TESTES.map((t) => t.id)),
    embaralhar: true,
    fila: [],
    i: 0,
    acertos: 0,
    erradas: [],
  };

  function telaInicial() {
    app.innerHTML = `<h1>Treino — Laravel</h1>
      <p class="s">Escolha os minitestes e comece.</p>
      <div class="grid">${TESTES.map((t) => `
        <button class="t ${estado.selecionados.has(t.id) ? "on" : ""}" data-id="${t.id}">
          <span>${t.titulo}</span><small>${t.questoes.length} questões</small>
        </button>`).join("")}</div>
      <label><input type="checkbox" id="emb" ${estado.embaralhar ? "checked" : ""}> Embaralhar questões e alternativas</label>
      <div class="row"><button class="btn" id="go" ${estado.selecionados.size ? "" : "disabled"}>Começar</button></div>`;

    app.querySelectorAll(".t").forEach((b) => (b.onclick = () => {
      const id = b.dataset.id;
      estado.selecionados.has(id) ? estado.selecionados.delete(id) : estado.selecionados.add(id);
      telaInicial();
    }));
    $("#emb").onchange = (e) => (estado.embaralhar = e.target.checked);
    $("#go").onclick = () => iniciar(
      TESTES.filter((t) => estado.selecionados.has(t.id)).flatMap((t) => t.questoes)
    );
  }

  function iniciar(lista) {
    estado.fila = estado.embaralhar ? embaralhar(lista) : lista;
    estado.i = 0;
    estado.acertos = 0;
    estado.erradas = [];
    mostrarQuestao();
  }

  function mostrarQuestao() {
    const q = estado.fila[estado.i];
    const total = estado.fila.length;
    let opcoes = q.alternativas.map((texto, n) => ({ texto, certa: n === q.correta }));
    if (estado.embaralhar && !ehVF(q.alternativas)) opcoes = embaralhar(opcoes);

    app.innerHTML = `<div class="topo">
        <p class="s">Questão ${estado.i + 1} de ${total} · Acertos: ${estado.acertos}</p>
        <button class="btn g" id="inicio">← Início</button>
      </div>
      <div class="bar"><i style="width:${(estado.i / total) * 100}%"></i></div>
      <div class="card"><b>${escapar(q.pergunta)}</b></div>
      <div id="opcoes"></div><div id="feedback"></div>`;
    $("#inicio").onclick = telaInicial;

    const caixa = $("#opcoes");
    opcoes.forEach((op) => {
      const b = document.createElement("button");
      b.className = "o";
      b.textContent = op.texto;
      b.onclick = () => responder(b, op, opcoes, q);
      caixa.appendChild(b);
    });
  }

  function responder(botao, op, opcoes, q) {
    $("#opcoes").querySelectorAll("button").forEach((x, n) => {
      x.disabled = true;
      if (opcoes[n].certa) x.classList.add("ok");
    });
    if (op.certa) estado.acertos++;
    else { botao.classList.add("er"); estado.erradas.push(q); }

    const ultima = estado.i + 1 >= estado.fila.length;
    $("#feedback").innerHTML = `<div class="fb ${op.certa ? "ok" : "er"}">
        <b>${op.certa ? "Correto." : "Errou."}</b> ${escapar(q.feedback)}</div>
      <div class="row sticky"><button class="btn" id="prox">${ultima ? "Ver resultado" : "Próxima"}</button></div>`;
    $("#prox").onclick = () => {
      estado.i++;
      ultima ? mostrarResultado() : mostrarQuestao();
    };
  }

  function mostrarResultado() {
    const total = estado.fila.length;
    const pct = Math.round((estado.acertos / total) * 100);
    app.innerHTML = `<h1>Resultado</h1>
      <div class="big">${estado.acertos}/${total}</div>
      <p class="s">${pct}% de acertos</p>
      <div class="row">
        ${estado.erradas.length ? `<button class="btn" id="refazer">Refazer as ${estado.erradas.length} que errei</button>` : ""}
        <button class="btn g" id="inicio">Voltar ao início</button>
      </div>`;
    if (estado.erradas.length) $("#refazer").onclick = () => iniciar(estado.erradas);
    $("#inicio").onclick = telaInicial;
  }

  telaInicial();
})();

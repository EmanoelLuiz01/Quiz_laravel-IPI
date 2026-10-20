// Registro central dos minitestes. Cada arquivo em data/ chama registrarTeste().
window.TESTES = [];
function registrarTeste(teste) {
  window.TESTES.push(teste);
}

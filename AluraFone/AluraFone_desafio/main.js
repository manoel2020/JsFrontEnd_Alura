const teclas = document.querySelectorAll(".tecla");
let telefone = document.querySelector("#telefone");

function MontarNumeroTelefone(teclaPresionada) {
  qtdeCaracteres = telefone.value;
  if (qtdeCaracteres.length <= 11) {
    telefone.value += teclaPresionada;
  }
}

teclas.forEach((tecla) => {
  tecla.onclick = function () {
    MontarNumeroTelefone(tecla.value);
  };
});

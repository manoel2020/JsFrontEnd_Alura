function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento de Audio não encontrado!");
  }
}

/*
	Obtem uma lista de elementos que possui a classe '.tecla',
	no caso abaixo, pegou todos os botões.
*/
const listaDeTeclas = document.querySelectorAll(".tecla");

listaDeTeclas.forEach((tecla) => {
  let classeSom = tecla.classList[1];

  let idAudio = `#som_${classeSom}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.key === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };

  tecla.onkeypress = function (e) {};
});

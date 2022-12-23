/* 
  Listar todos os btn que tem o DATA-CONTROLE 
  O data-controle é uma propriedade que existe no botão aonde pode ser criado n identificadores.
*/
const btnMaisMenos = document.querySelectorAll("[data-controle]");

btnMaisMenos.forEach((btnUnico) => {
  btnUnico.addEventListener("click", (evento) => {
    /* 
      evento é o proprio botão e todas as suas propriedades
    */

    // Pegar o valor Atribuido a propriedade Data-??? do btn
    let valorPropriedadeDatadoBtn = evento.target.dataset.controle;

    // retorna o elemento ancestral(Parent)
    let ParentDoBtn = evento.target.parentNode;

    manipularDados(valorPropriedadeDatadoBtn, ParentDoBtn);
  });
});

function manipularDados(ValorDaPropriedadeDatadoBtn, controle) {
  // Atraves do parent é possivel pegar o input text especifico para manipular seu valor
  const inputComPropriedadeDataContador =
    controle.querySelector("[data-contador]");

  if (ValorDaPropriedadeDatadoBtn == "-") {
    inputComPropriedadeDataContador.value =
      parseInt(inputComPropriedadeDataContador.value) - 1;
  } else {
    inputComPropriedadeDataContador.value =
      parseInt(inputComPropriedadeDataContador.value) + 1;
  }
}

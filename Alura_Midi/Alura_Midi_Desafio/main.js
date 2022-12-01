const btnPom = document.querySelector('.tecla_pom');
const btnClap = document.querySelector('.tecla_clap');
const btnTim = document.querySelector('.tecla_tim');
const btnPuff = document.querySelector('.tecla_puff');
const btnSplash = document.querySelector('.tecla_splash');
const btnToim = document.querySelector('.tecla_toim');
const btnPsh = document.querySelector('.tecla_psh');
const btnTic = document.querySelector('.tecla_tic');
const btnTom = document.querySelector('.tecla_tom');

const PosicaoDaClasse = 1;

btnPom.addEventListener("click", ()=> {
    tocarPlay(retornarClassePosicao(btnPom,PosicaoDaClasse));        
})
btnClap.addEventListener("click", ()=> {
    tocarPlay(retornarClassePosicao(btnClap,PosicaoDaClasse));        
})
btnTim.addEventListener("click", ()=> {
    tocarPlay(retornarClassePosicao(btnTim,PosicaoDaClasse));        
})
btnPuff.addEventListener("click", ()=> {
    tocarPlay(retornarClassePosicao(btnPuff,PosicaoDaClasse));        
})
btnSplash.addEventListener("click", ()=> {
    tocarPlay(retornarClassePosicao(btnSplash,PosicaoDaClasse));        
})
btnToim.addEventListener("click", ()=> {
    tocarPlay(retornarClassePosicao(btnToim,PosicaoDaClasse));        
})
btnPsh.addEventListener("click", ()=> {
    tocarPlay(retornarClassePosicao(btnPsh,PosicaoDaClasse));        
})
btnTic.addEventListener("click", ()=> {
    tocarPlay(retornarClassePosicao(btnTic,PosicaoDaClasse));        
})
btnTom.addEventListener("click", ()=> {
    tocarPlay(retornarClassePosicao(btnTom,PosicaoDaClasse));        
})

function tocarPlay(classebtn) {
    document.querySelector(`#som_${classebtn}`).play();
}

function retornarClassePosicao(value,posicao){
  return value.classList[posicao];
}
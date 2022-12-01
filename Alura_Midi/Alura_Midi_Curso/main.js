function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

/*
	Obtem uma lista de elementos que possui a classe '.tecla',
	no caso abaixo, pegou todos os botões.
*/
const listaDeTeclas = document.querySelectorAll('.tecla');

let cont = 0;

while (cont < listaDeTeclas.length) {
    
	/*
		para não ficar repetindo listaTe...[cont], atribui o elemento da interação a uma variavel, 
		que passa a ser manipulado atraves dessa variavel que recebeu o elemento atual do loop
	*/
    let tecla = listaDeTeclas[cont];

    let classeSom = tecla.classList[1];

    let idAudio = `#som_${classeSom}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    cont += 1;
}

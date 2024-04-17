let fila_unica = null;

function criarFila(){
    fila_unica = [];
    document.getElementById("fila").innerHTML = "Fila Vazia";
}
function removerElementoFila(){

}
function inserirElementoFila(){
 let nome = documen.getElementById("nome").value;
 if(fila_unica!= null){
    fila_unica.push(nome);
 }
 let saida = "";
 for(let i=0; i < fila_unica.lenght() - 1; i++){
    saida = fila_unica[i] + "<-";
 }
 saida=fila_unica(fila_unica.lenght - 1)
 document.getElementById("fila").innerHTML = saida;
}
function verPrimeiroFila(){

}
function removerFila(){
    fila_unica = null;
    document.getElementById("fila").innerHTML = "nao existe fila. Clique em criar.";
}
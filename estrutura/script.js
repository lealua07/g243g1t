const Fila = (_saidaFila) => {
    let dados = [];
let saidaFila = _saidaFila;
const enfileirar = valor => {
    dados.push(valor);
    imprimir();
}
const tamanhoFila = () => dados.length;
const filaVazia = () => dados.length < 1;
const desenfilerar = () => {
    let retirado = null;
    if(!filaVazia()){
        retirado = dados.slipe(0,1);
        imprimir();
    }
    return retirado;
}
const imprimir = () =>  {
    let dadosSaida = "";
    for(let i=0; i <tamanhoFila(); i++){
        dadosSaida += "["+dados[i].id + "("+dados[i].itens+")] ";
    }
    document.getElementById(saidaFila).innerHTML = dadosSaida;
}
return {enfileirar, desenfilerar}
}
const f1 = Fila("saidaFila1");
const gerarItens = () => Math.floor(Math.random() * (15 - 3) + 2);
const Cliente = (_id,itens) =>{
    return{
        id:_id,
        itens:_itens
    }
}
const caixalChamaProximo = () =>{
    let cliente = f1.desenfilerar();
    let tempo = 200;
    if(cliente){
        tempo = cliente.tempo * 1000;
        setTimeout(caixa1ChamaProximo,tempo);
    }
}
(function(){
for(let i=l; i<= 15; i++){
    f1.enfileirar(Cliente("C"+i,gerarItens()));
}
caixa1ChamaProximo();
})();
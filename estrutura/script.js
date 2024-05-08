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
    document.getElementById(saidaFila).innerHTML = dados
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
(function(){
for(let i=l; i<= 15; i++){
    f1.enfileirar(i);
}
})();
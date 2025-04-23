// funcao idealmente deve ter responsabilidade única 
// nome = soma
// dois parâmetros: n1 e n2
// retorna uma variavel: soma
function soma(n1, n2){   
    let resultado = n1 + n2;
    return resultado;
}

function subtracao(n1, n2){
    let resultado = n1 - n2;
    return resultado;
}

function multiplicacao(n1, n2){
    let resultado = n1 * n2;
    return resultado;
}

module.exports = { 
    soma,
    subtracao,
    multiplicacao,
};
//O elemento input_numero1
const inputNum1 = document.getElementById("input_numero1");

//O elemento input_numero2
const inputNum2 = document.getElementById("input_numero2");

//O elemento input_resultado
const inputResultado = document.getElementById("input_resultado");

function somarNumeros() {
    // resultado da soma entre input 1 e 2
    let resultadoSoma = Number(inputNum1.value) + Number(inputNum2.value); // pega o valor da variavel
    inputResultado.value = resultadoSoma; // retorna o valor dentro do input
}

function subtrairNumeros() {
    // resultado da subtracao entre o input 1 e 2
    let resultadoSubtracao = Number(inputNum1.value) - Number(inputNum2.value);
    inputResultado.value = resultadoSubtracao;
}

function multiplicarNumeros() {
    // resultado da subtracao entre o input 1 e 2
    let resultadoMultiplicacao = Number(inputNum1.value) * Number(inputNum2.value);
    inputResultado.value = resultadoMultiplicacao;
}

function dividirNumeros() {
    // resultado da subtracao entre o input 1 e 2
    let resultadoDivisao = Number(inputNum1.value) / Number(inputNum2.value);
    inputResultado.value = resultadoDivisao;
}

function limparInputs() {
    inputNum1.value = '';
    inputNum2.value = '';
    inputResultado.value = '';
}
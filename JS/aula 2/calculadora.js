function calcularMedia() {
    var numeroUm = parseFloat(prompt("Digite o primeiro numero:"))
var numeroDois = parseFloat(prompt("Digite o segundo numero:"))

var resultadoMedia = (numeroUm + numeroDois) / 2

// alert("O resultado da média entre os números " + numeroUm + " e " + numeroDois + " é " + resultadoMedia)
alert(`O resultado da média entre os números ${numeroUm} e ${numeroDois} é ${resultadoMedia}`) 
console.log("o resultado da media é:" + resultadoMedia)

console.log("o tipo da variavel é 1:" + typeof(numeroUm));
console.log("o tipo da variavel é 1:" + typeof(numeroDois));
}
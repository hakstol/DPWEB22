const { BlockList } = require("net")

function calcularIMC (){

    // Mensagem ao abrir o alerta (clicar no botão para calcular )
    alert("Obrigado por abrir a calculadora IMC!")

    // Definir a variável peso para armazenar o valor informado no prompt, já transformado em número
    var peso = Number(prompt("Qual é o seu peso?"))
    alert(`O peso informado é de ${peso}kg.`)

    // Definir a variável altura para armazenar o valor informado no prompt, já transformado em número
    var altura = Number(prompt("Qual é a sua altura?"))
    alert(`A altura informada é de ${altura}m.`)

    // Definir a variável que realizará o cálculo
    var imc = peso / (altura ** 2)

    // Definir a quantidade de casas decimais do valor
    imc = imc.toFixed(2)

    // Mostrar a variável no alerta
    alert(`O resultado do valor calculado entre o peso ${peso}kg e a altura ${altura}m é ${imc}.`)

    document.getElementById("titulo_resultado_imc").style.display = "block"
    document.getElementById("resultado_imc").innerHTML = imc
} 
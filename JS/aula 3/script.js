function somarNumeros() {
    var num1 = document.getElementById("input_numero1").value;
    var num2 = document.getElementById("input_numero2").value;

    var resultadoSoma = num1 + num2; // resultado da soma entre input 1 e 2
    
    document.getElementById("input_resultado").value = resultadoSoma;
}
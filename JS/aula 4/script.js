const secaoParagrafos = document.getElementById("secao_paragrafos")

//Botão 2 - Muda o tamanho fonte
function mudarTamanhoFonte() {
    secaoParagrafos.style.fontSize = "30px";
}

// Botão 3 - Muda a cor da fonte
function mudarCorFonte() {
    secaoParagrafos.style.color = "#fff";
}

// Botão 4 - Muda a cor de fundo
function mudarCorFundo() {
    secaoParagrafos.style.backgroundColor = "#000";
}

// Botão 5 - Adiciona o estilo itálico para os parágrafos que estão na seção parágrafos
function mudarFonteItalico() {
    secaoParagrafos.style.fontStyle = "italic";
}

//Botão 6 - Adiciona o peso negrito para os parágrafos que estão na seção parágrafos
function mudarFonteNegrito() {
    secaoParagrafos.style.fontWeight = "bold";
}

//Botão 7 - Adiciona uma borda na div seção parágrafos
function adicionarBorda() {
    // o elemento border tem que ter 3 valores:
    // 1. grossura em pixels;
    // 2. estilo da borda;
    //  2.1 solid - sólida
    //  2.2 dashed - tracejada
    //  2.3 dotted - pontinhos
    // 3. cor da borda (pode ser com hexadecimal ou não);
    secaoParagrafos.style.border = "3px solid #ff0000";
}

function removerBorda() {
    secaoParagrafos.style.border = "none";
}

// Botão 9 - Esconde a div seção paragrafos
function esconderSecao() {
    secaoParagrafos.style.display = "none";
}

// Botão 10 - Aparece a div seção parágrafos
function mostrarSecao() {
    secaoParagrafos.style.display = "block";
}

// Botão 11 - Inserir um texto HTML no segundo elemento que possui a classe "texto"
function mudarSegundoTitulo() {
    document.getElementsByClassName("texto")[1].innerHTML = "Texto alterado pela class";
}

// Botão 12 - Muda a cor de fundo no primeiro elemento que possui a classe "paragrafo"
function mudarCorFundoParagrafo() {
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "brown";
}

// Botão 13 - Muda a cor do fundo um único botão
function mudarCorFundoBotao() { 
    document.getElementsByTagName("button")[2].style.backgroundColor = "lightblue"
}

// Botão 14 - Muda a cor de fundo de todos botões
function mudarCorFundoBotoes() {

    //"contador++" é igual a "contador = contador + 1"

    //repetir (contador = 0; contador = qtdBtn - 1; contador++){
    //  botao[contador].style.backgroundColor = "verder";
    //}

    let botoes = document.getElementsByTagName("button");

    for(let contador = 0; contador < botoes.length; contador++){
        botoes[contador].style.backgroundColor = "lightgreen";
    }
}

// Botão Dark Mode
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#toggle')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})
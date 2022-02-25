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

// Botão 8 - Remove a borda da div seção paragrafos
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
    document.getElementsByClassName("texto")[1].innerHTML = "TEXTO ALTERADO PLEA CLASSE"
}

// Botão 12 - Muda a cor de fundo no primeiro elemento que possui a classe "paragrafo"
function mudarCorFundoParagrafo() {
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "brown";
}

// Botão 13 - Muda a cor do fundo um único botão
function mudarCorFundoBotao() {
    // Definindo a quantidade de botões independendo das alterações
    let indiceBotoes = document.getElementsByTagName("button").length - 1;

    // Gerando um número aleatório para mudar a cor de fundo entre o mínimo (0) e o máximo do número de botões de forma arredondada
    let numeroAleatorio = Math.round(Math.random() * (indiceBotoes - 0) + 0);

    // Define dentro do Array a varável de "numeroAleatorio" para executar 
    document.getElementsByTagName("button")[numeroAleatorio].style.backgroundColor = "lightblue";

    // Altera o h2 (terceiro texto) para exibir o número aleatório sorteado
    document.getElementsByTagName("h2")[2].innerHTML = `O NÚMERO ALEATÓRIO É: ${numeroAleatorio}`;
}

// Botão 14 - Muda a cor de fundo de todos botões
function mudarCorFundoBotoes() {

    //"contador++" é igual a "contador = contador + 1"

    //repetir (contador = 0; contador = qtdBtn - 1; contador++){
    //  botao[contador].style.backgroundColor = "verder";
    //}

    let botoes = document.getElementsByTagName("button");

    for (let contador = 0; contador < botoes.length; contador++) {
        botoes[contador].style.backgroundColor = "lightgreen";
    }
}

// Botão 15 - Contar número de botões
function contarBotoes() {
    let quantidadeBotoes = document.getElementsByTagName("button").length;
    document.getElementsByTagName("h2")[0].innerHTML = `O NÚMERO DE BOTÕES DO SITE É: ${quantidadeBotoes}`;
}

// Botão 16 - Muda o conteúdo interno do primeiro elemento com a classe "parágrafo"
function alterarTextoParagrafo(entradaTexto) {
    document.querySelector(".paragrafo").innerHTML = entradaTexto;
}

// Botão 17 - Muda a cor de fundo da página
function mudarCorPagina() {
    document.querySelector("body").style.backgroundColor = "#ffff00"
    // document.getElementsByTagname("body")[0].style.backgroundColor = "#ffff00"
    // document.getElementsByClassName("body")[0].style.backgroundColor = "ffff00"
}

// Botão 18 - Altera a imagem do PC da Xuxa
function mudarImagem() {
    let imagem = document.querySelector("img");
    imagem.src = "./img/alien.jpg";
    imagem.alt = "Imagem de um Notebook Gamer";
}

// Botão 19 - Aciona quase todas as funções
function acionarTudo() {
    // Não vai colocar as funções 8, 9 , 10, 13

    // Função botão 2
    mudarTamanhoFonte();
    // Função botão 3
    mudarCorFonte();
    // Função botão 4
    mudarCorFundo();
    // Função botão 5
    mudarFonteItalico();
    // Função botão 6
    mudarFonteNegrito();
    // Função botão 7
    adicionarBorda();
    // Função botão 11
    mudarSegundoTitulo();
    // Função botão 12
    mudarCorFundoParagrafo();
    // Função botão 14
    mudarCorFundoBotoes();
    // Função botão 15
    contarBotoes();
    // Função botão 16
    alterarTextoParagrafo();
    // Função botão 17
    mudarCorPagina();
    // Função botão 18
    mudarImagem();
}

// Botão Dark Mode
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#toggle')

$checkbox.addEventListener('change', function () {
    $html.classList.toggle('dark-mode')
})
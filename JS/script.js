function Alerta() {
    alert("Hello world, at a external font!")
}

function mostrarData() {
    document.getElementById("data").innerHTML = Date()
}

function atualizarData() {
    setInterval(mostrarData, 1000)
    mostrarData()
}

function mudarP() {
    document.getElementById("paragrafo").innerHTML = "Texto alterado"
}

function clicarP() {
    document.getElementById("paragrafo").innerHTML = "Você está segurando o mouse"
}

function soltarP() {
    document.getElementById("paragrafo").innerHTML = "Você soltou o clique do mouse"
}

function mudarCorDiv() {
    //1º acessa o documento
    //2º falar como vai selecionar o documento
    //3º flar oque vai ser mudado no elemento, nesse caso o estilo
    //4º falar qual propriedade vai mudar
    //5º falar qual vai ser o valor da propriedade
    document.getElementById("quadrado").style.backgroundColor = "blueviolet"
}

function outraCor() {
    document.getElementById("quadrado").style.backgroundColor = "black"
}
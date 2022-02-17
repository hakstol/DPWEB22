function Alerta(){
    alert("Hello world, at a external font!")
}

function mostrarData(){
    document.getElementById("data").innerHTML = Date()
}

function atualizarData(){
    setInterval(mostrarData, 1000)
    mostrarData()
}

function mudarP(){
    document.getElementById("paragrafo").innerHTML = "Texto alterado"
}

function clicarP(){
    document.getElementById("paragrafo").innerHTML = "Você está segurando o mouse"
}

function soltarP(){
    document.getElementById("paragrafo").innerHTML = "Você soltou o clique do mouse"
}
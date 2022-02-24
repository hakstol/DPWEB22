// Botão Dark Mode
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#toggle')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('light-mode')
})
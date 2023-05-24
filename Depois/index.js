

const cores = ['green', 'grey', 'black','yellow', 'purple', 'blue', 'red']
const botao = document.getElementById('botao')
const cor = document.querySelector('.color')

botao.addEventListener('click', function() {
    const randomCor = getRandomCor()
    document.body.style.background = cores[randomCor]
    cor.textContent = cores[randomCor]
})

function getRandomCor() {
    return Math.floor(Math.random() * cores.length)
}
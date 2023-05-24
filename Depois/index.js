

const colors = ['green', 'yellow', 'purple', 'blue', 'red']
const botao = document.getElementById('botao')
const color = document.querySelector('.color')


botao.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    color.textContent = colors[randomColor]
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}
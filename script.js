let num = 0

function mostrarNaTela() {
    const mostrar = document.getElementById("counter")
    mostrar.innerText = num
}

mostrarNaTela()

function aumentar() {
    num++
    mostrarNaTela()
}

function diminuir() {
    num--
    mostrarNaTela()
}


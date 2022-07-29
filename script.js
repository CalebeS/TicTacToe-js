let boxes = document.querySelectorAll('.box');
boxes = Array.from(boxes);                      
let jogadorAtual = "X"
let acabou = false

const matriz = [[null, null, null], [null, null, null], [null, null, null]];

function verificaVencedor() {
    // retorna um boolean se ganhou ou não
    // validando na horizontal
    if (matriz[0][0] == jogadorAtual && matriz[1][0] == jogadorAtual && matriz[2][0] == jogadorAtual) return true
    if (matriz[0][1] == jogadorAtual && matriz[1][1] == jogadorAtual && matriz[2][1] == jogadorAtual) return true
    if (matriz[0][2] == jogadorAtual && matriz[1][2] == jogadorAtual && matriz[2][2] == jogadorAtual) return true
    // validando na vertical
    if (matriz[0][0] == jogadorAtual && matriz[0][1] == jogadorAtual && matriz[0][2] == jogadorAtual) return true
    if (matriz[1][0] == jogadorAtual && matriz[1][1] == jogadorAtual && matriz[1][2] == jogadorAtual) return true
    if (matriz[2][0] == jogadorAtual && matriz[2][1] == jogadorAtual && matriz[2][2] == jogadorAtual) return true
    // validando na diagonal
    if (matriz[0][0] == jogadorAtual && matriz[1][1] == jogadorAtual && matriz[2][2] == jogadorAtual) return true
    if (matriz[2][0] == jogadorAtual && matriz[1][1] == jogadorAtual && matriz[0][2] == jogadorAtual) return true
    return false
}

boxes.forEach(function(box) {       
    box.addEventListener('click', function(){  
        if (box.innerText) return
        if (acabou) return
        box.innerText = jogadorAtual
        const x = Number(box.dataset.x);
        const y = Number(box.dataset.y);
        matriz[x][y] = jogadorAtual
        let vencedor = verificaVencedor();
        if (vencedor) {
            window.alert(`o vencedor é ${jogadorAtual}`);
            acabou = true
        }
        jogadorAtual = jogadorAtual == "X" ? "O" : "X"
    })
})

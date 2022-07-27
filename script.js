let box = document.querySelectorAll('.box'); 
box = Array.from(box);                       

let jogadorAtual = "X"

box.forEach(function(box) {       
    box.addEventListener('click', function(){   
        box.innerText = jogadorAtual
        jogadorAtual = jogadorAtual == "X" ? "O" : "X"
    })
})
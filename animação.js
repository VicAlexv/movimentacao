let canvas = document.getElementById("meucanvas")
let ctx = canvas.getContext("2d")
let tecla = 0

var retangulo1 = {
    x: 0,
    y: 0,
    largura: 30,
    altura: 20,
    cor: "red"
}
document.addEventListener("keydown",function(evento){
    tecla = evento.keyCode

})
function desenhar(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = retangulo1.cor
    ctx.fillRect(retangulo1.x, retangulo1.y, retangulo1.largura, retangulo1.altura)

    if(tecla === 37){
        retangulo1.x = retangulo1.x - 1
    }
    else if (tecla === 38){
        retangulo1.y = retangulo1.y - 1
    }
    else if (tecla === 39){
        retangulo1.x = retangulo1.x + 1
    }
    else if (tecla === 40){
        retangulo1.y = retangulo1.y + 1
    }

    requestAnimationFrame(desenhar)
}

desenhar()
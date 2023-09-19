// pega o Id canvas do html
let canvas = document.getElementById("canvas");
// pegamos o contexto do desenho , esse éo metodo que  retorma um desenho, usar o parametro 2dsignifica que o objeto que sera renderizado sera bidimensional
let contexto = canvas.getContext("2d")
// Variavel que vamos usar para indentificar se estamos desenhando
let desenhando = false,
larguraPincel = 10;

canvas.addEventListener("mousedown", function (event) {
    // vamos usar i metidi addenventlistener para ouvir nosso mouse, ele ira identificar quando clicarmos
    desenhando = true
    contexto.beginPath();
    // a variavel contexto recebe o metodo beginpath(), esse metodo significa que um novo caminho sera criado
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    // nessa função vamos dizer como o contexto ira funcionar, o client ira fornecer cordenadas horizontais enquanto o canvas.offsetleft vai retornar a medida em pixel, a mesma coisa acontece com o y de forma vertical.
    contexto.lineWidth =  larguraPincel

})

canvas.addEventListener("mousemove", function (event) {
    // essa funçao identifica quando movemos o mouse
    if (desenhando) {
        // esse if vai identificar se estamos clicando o mouse enquanto movemos o mouse
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
        // ele vai identificar toda a linha que estamos tracando enquanto clicamos e  e movemos o mouse
        contexto.stroke();
        
    }
});

canvas.addEventListener("mouseup", function(event){

    desenhando = false;
   
})

function cor1(){
    contexto.strokeStyle = "red";
}

function cor2(){
    contexto.strokeStyle = "black";
}

function cor3(){
    contexto.strokeStyle = "blue";
}
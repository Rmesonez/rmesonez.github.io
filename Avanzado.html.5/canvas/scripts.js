    //dibujar figuras geomatricas y texto
// window.addEventListener('load', init);
// function init() {
//     var canvas = document.getElementById('c');
//     var ctx = canvas.getContext('2d');



        //ctx.fillstyle = 'red';
    //ctx.strokeRect(10, 10, 100, 100); solo borde
    //ctx.fillRect(100, 100, 200, 200); rectangulo
    //ctx.clearRect(150, 150, 100, 100); borra el rectangulo
        //ctx.beginPath();
    // ctx.arc(100, 80, 50, 0, Math.PI * 2);//circulo
    //ct.closePath(); //cierra el circulo donde se dejo de dibujar
        //ctx.fill();
    //ctx.stroke(); solo borde
    //ctx.strokeStyle = 'blue'; color del borde
    //ctx.lineWidth = 5; grosor del borde
    //ctx.lineCap = 'round'; redondea el borde
        // ctx.moveTo(50, 50);
        // ctx.lineTo(150, 50);
        // ctx.lineTo(150, 100);
        // ctx.closePath();

        // ctx.strokeStyle = 'blue';
        // ctx.lineWidth = 2;
        // ctx.font = '30pt Arial';
        // ctx.fillText('Hola', 150, 100);
        // ctx.strokeText('Hola', 150, 100);

    //console.log(ctx);

//}

//requestAnimationFrame
var ctx, canvas;
var x=40, y=10, v_x=5, v_y=5;

window.addEventListener('load', init);
window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame 
    || window.mozRequestAnimationFrame 
    || window.webkitRequestAnimationFrame 
    || window.msRequestAnimationFrame
    || function(f){
        window.setTimeout(f, 1000/60);
        };
    })();
function init() {
    canvas = document.getElementById('c')
    ctx = canvas.getContext('2d');
    draw();
}
    function draw () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);// width y height del canvas
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2); 
        ctx.closePath();
        ctx.fill();
        x += v_x;
        y += v_y;
        //para rebotar
        if(x > canvas.width || x < 0) v_x = -v_x;
        if(y > canvas.height || y < 0) v_y = -v_y;
        requestAnimationFrame(draw);
    }

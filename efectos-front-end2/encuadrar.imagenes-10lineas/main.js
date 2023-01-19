let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

//fondo
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let image = new Image();
image.src = './foto.jpg';

image.onload = function() {
    //console.log(this);

    let scale = this.height / this.width;
    let height = canvas.height * scale;
    let Y = (canvas.height / 2) - (height / 2);


    ctx.drawImage(this, 0, Y, canvas.width, height);
}


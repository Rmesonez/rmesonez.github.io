let playerState = 'idle';//estado inicial
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change', function(e){
    playerState = e.target.value;
});



const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

const spriteWidth = 575;//dividir el ancho total de la imagen por el numero de frames
const spriteHeight = 523;//dividir el alto total de la imagen por el numero de frames

// let frameX = 0;
// let frameY = 0;cambiar el numero cambia la linea de la animacion vertical

let gameFrame = 0;
const staggerFrames = 5;//mayor numeero mas lento
const spriteAnimations = [];
const animationStates = [
    { name: 'idle', frames: 7 },
    { name: 'jump', frames: 6 },
    { name: 'fall', frames: 7 },
    { name: 'run', frames: 9 },
    { name: 'dizzy', frames: 11 },
    { name: 'sit', frames: 5 },
    { name: 'roll', frames: 7 },
    { name: 'bite', frames: 7 },
    { name: 'ko', frames: 12 },
    { name: 'getHit', frames: 4 },
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let i = 0; i < state.frames; i++) {
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;

});



function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) 
        % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;


    //   ctx.fillRect(100, 50, 100, 100);
    //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    ctx.drawImage(playerImage, frameX, frameY,
    spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

        //metodo sencillo para animar
        //  if(gameFrame % staggerFrames == 0){
        //     if(frameX < 6) frameX++;
        //     else frameX = 0;
        //  }

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();
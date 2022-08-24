const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

const bgLayer1 = new Image();
bgLayer1.src = 'images/layer-1.png';
const bgLayer2 = new Image();
bgLayer2.src = 'images/layer-2.png';
const bgLayer3 = new Image();
bgLayer3.src = 'images/layer-3.png';
const bgLayer4 = new Image();
bgLayer4.src = 'images/layer-4.png';
const bgLayer5 = new Image();
bgLayer5.src = 'images/layer-5.png';

let x = 0;

const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(bgLayer4, x, 0);
    x -= 5;
    requestAnimationFrame(animate);
}

animate();
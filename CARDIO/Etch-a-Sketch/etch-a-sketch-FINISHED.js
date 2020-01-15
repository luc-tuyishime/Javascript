// SELECT OUR ELEMENT ON THE PAGE => CANVAS, SHAKE BUTTON
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// SETUP OUR CANVAS FOR DRAWING
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
console.log(x, y);
// CREATE RANDOM X AND Y STARTING POINTS ON THE CANVAS

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// WRITE A DRAW FUNCTION
function draw({ key }) {
        hue += 1;
        ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        console.log('here is the key...', key);
        // START THE PATH
        ctx.beginPath();
        ctx.moveTo(x, y);
        // Move our x and y values depending on what the user
        switch (key) {
                case 'ArrowUp':
                        y -= MOVE_AMOUNT;
                        break;
                case 'ArrowRight':
                        x += MOVE_AMOUNT;
                        break;
                case 'ArrowDown':
                        y += MOVE_AMOUNT;
                        break;
                case 'ArrowLeft':
                        x -= MOVE_AMOUNT;
                        break;

                default:
                        break;
        }
        ctx.lineTo(x, y);
        ctx.stroke();
}

// WRITE A HANDLER FOR THE KEYS
function handlekeys(e) {
        if (e.key.includes('Arrow')) {
                e.preventDefault();
                draw({ key: e.key });
        }
}
// CLEAR SHAKE function
function clearCanvas() {
        canvas.classList.add('shake');
        ctx.clearRect(0, 0, width, height);
        canvas.addEventListener(
                'animationend',
                function() {
                        console.log('Done the shake');
                        canvas.classList.remove('shake');
                },
                { once: true }
        );
}

// LISTEN FOR ARROWS KEYS
window.addEventListener('keydown', handlekeys);
shakeButton.addEventListener('click', clearCanvas);

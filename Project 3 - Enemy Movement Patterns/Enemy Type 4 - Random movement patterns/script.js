/** @type {HTMLCanvasElement} */
/* Tells VS code this is a canvas project and it will suggest built-in canvas methods */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = 12;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = '../images/enemy4.png';
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.newX = Math.random() * (canvas.width - this.width);
    this.newY = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }

  update() {
    if (gameFrame % this.interval === 0) {
      this.newX = Math.random() * (canvas.width - this.width);
      this.newY = Math.random() * (canvas.height - this.height);
    }
    /* Distance between old and new position on the axis */
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    /* Make the character move to new position using distance value 
    creates an instant movement between frames 
    this.x -= dx;
    this.y -= dy;
    Make the characters travel to the position by dividing the distance value 
    the more the distance is divided the slower they travel */
    this.x -= dx/50;
    this.y -= dy/50;

    if (this.x + this.width < 0) this.x = canvas.width;

    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

// const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

console.log(enemiesArray);

function animate() {
  /* Need to clear the canvas every time in a loop for proper animation */
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  /* This method creates an animation loop */
  requestAnimationFrame(animate);
}

animate();

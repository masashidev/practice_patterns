const app = document.getElementById('app');
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
app.appendChild(canvas);

const ctx = canvas.getContext('2d');

function drawBackground () {
  ctx.fillStyle = 'lightgray';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

class Dot {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
class EntityManager {
  constructor() {
    this.entities = [];
    this.centerOfMass = new Dot(0, 0, 5, 'red');
  }

  generateDots(amount, color = 'red', radius = 10) {
    for (let i = 0; i < amount; i++) {
      const padding = 50;
      const x = padding + Math.floor(Math.random() * (canvas.width - padding * 2));
      const y = padding + Math.floor(Math.random() * (canvas.height - padding * 2));
      const r = radius;
      const dot = new Dot(x, y, r, color);
      this.add(dot);
    }
  }

  add(entity) {
    this.entities.push(entity);
  }

  update() {
    this.entities.forEach(entity => {
      entity.update();
    })
  }

  draw() {
    this.entities.forEach(entity => {
      entity.draw();
    })
  }

  drawUpToIndex(index) {
    for (let i = 0; i < index; i++) {
      this.entities[i].draw();
    }
  }

  calcCenterOfMass(index) {
    let sumX = 0;
    let sumY = 0;
    for (let i = 0; i < index; i++) {
      sumX += this.entities[i].x;
      sumY += this.entities[i].y;
    }
    this.centerOfMass.x = sumX / index;
    this.centerOfMass.y = sumY / index;

  }
}

const entityManager = new EntityManager();
const numberOfDots = 100;
entityManager.generateDots(numberOfDots, 'black', 5);


window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawBackground();
})
window.addEventListener('load', () => {
  drawBackground();

})

let entityIndex = 0;
let lastTime = 0;
const interval = 1000;
function loop(timestamp){
  drawBackground();
  if(timestamp - lastTime > interval) {
    entityIndex = (entityIndex + 1) % entityManager.entities.length;
    entityManager.calcCenterOfMass(entityIndex);
    lastTime = timestamp;
    console.log(entityIndex);
  }
  entityManager.drawUpToIndex(entityIndex);
  entityManager.centerOfMass.draw();

  requestAnimationFrame(loop);
}

// requestAnimationFrame(loop);

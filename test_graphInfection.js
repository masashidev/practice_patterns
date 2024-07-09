const app = document.getElementById('app');

class Display {
  constructor() {
    this.dom = document.createElement('div');
    this.dom.style.height = '400px';
    this.dom.style.width = '400px';
    this.dom.style.border = '1px solid black';
    this.dom.style.padding = '10px';
    this.dom.style.backgroundColor = 'lightgray';
    app.appendChild(this.dom);

    this.dom.parentElement.style.display = 'flex';
    this.dom.parentElement.style.height = '100vh';
    this.dom.parentElement.style.justifyContent = 'center';
    this.dom.parentElement.style.alignItems = 'center';

  }

  displayPosition() {
    return {
      x: this.dom.getBoundingClientRect().x,
      y: this.dom.getBoundingClientRect().y,
      width: this.dom.getBoundingClientRect().width,
      height: this.dom.getBoundingClientRect().height,
    }
  }
}

class Node {
  constructor(value, display) {
    this.value = value;
    this.children = [];

    this.dom = document.createElement('div');
    this.dom.style.height = '30px';
    this.dom.style.width = '30px';
    this.dom.style.border = '1px solid black';
    this.dom.style.padding = '10px';
    this.dom.style.backgroundColor = 'lightgray';
    // place them within the display
    this.dom.innerHTML = this.value;
    display.dom.appendChild(this.dom);

    this.displayPosition = display.displayPosition();
    const initialPosition = {
      x: this.displayPosition.x + Math.floor(Math.random() * this.displayPosition.width),
      y: this.displayPosition.y + Math.floor(Math.random() * this.displayPosition.height),
    }
    this.x = initialPosition.x;
    this.y = initialPosition.y;

    this.dom.style.position = 'absolute';
    this.dom.style.top = this.y + 'px';
    this.dom.style.left = this.x + 'px';

    window.addEventListener('resize', (e) => {
      this.displayPosition = display.displayPosition();
    })
  }

  updatePosition(display) {
    this.dom.style.top = this.y + 'px';
    this.dom.style.left = this.x + 'px';
  }

  calcPosition() {
    return {
      x: this.dom.getBoundingClientRect().x,
      y: this.dom.getBoundingClientRect().y
    }
  }
}

const display = new Display();
const nodes = [];
const nodeValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

nodeValues.forEach((value) => {
  nodes.push(new Node(value, display));
});

console.log(display.displayPosition());

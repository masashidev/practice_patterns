const app = document.getElementById('app');
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
app.appendChild(canvas);
const ctx = canvas.getContext('2d');

const slidersDisplay = document.createElement('div');
slidersDisplay.style.position = 'absolute';
slidersDisplay.style.top = '0';
slidersDisplay.style.right = '0';
slidersDisplay.style.width = '200px';
slidersDisplay.style.height = '200px';
slidersDisplay.style.border = '1px solid black';
slidersDisplay.style.padding = '10px';
slidersDisplay.style.backgroundColor = 'lightgray';
app.appendChild(slidersDisplay);

class DataManager {
  constructor() {
    this.data = [];
  }

  addData(data) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
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

class Slider {
  constructor({name, min, max, step}) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.step = step;
    this.value = Math.floor((this.min + this.max) / 2);
  }

  render() {
  }
}

const sliders = [
  new Slider({name: 'area', min: 1, max: 100, step: 1}),
  new Slider({name: 'amount', min: 1, max: 100, step: 1}),
  new Slider({name: 'averageDistance', min: 1, max: 100, step: 1}),
  new Slider({name: 'speed', min: 1, max: 100, step: 1}),
  new Slider({name: 'radius', min: 1, max: 100, step: 1}),
]

const eventListeners = {
  sliders: {
    change: (e) => {
      console.log(e.target.value);
    },
  },
  dots: [],
  data: []
}

const initializers = {
  sliders: () => {
    sliders.forEach((slider) => {
      const sliderElement = document.createElement('input');
      sliderElement.type = 'range';
      sliderElement.min = slider.min;
      sliderElement.max = slider.max;
      sliderElement.step = slider.step;
      sliderElement.value = slider.value;
      sliderElement.addEventListener('input', eventListeners.sliders.change);
      slidersDisplay.appendChild(sliderElement);
    })
  },

}
const initializersArray = [
  {
    name: 'sliders',
    init: () => {
      sliders.forEach((slider) => {
        const sliderElement = document.createElement('input');
        sliderElement.type = 'range';
        sliderElement.min = slider.min;
        sliderElement.max = slider.max;
        sliderElement.step = slider.step;
        sliderElement.value = slider.value;
        sliderElement.addEventListener('input', eventListeners.sliders.change);
        slidersDisplay.appendChild(sliderElement);
      })
    }
  },
  {
    name: 'dots',
    init: () => {
      const dots = new EntityManager();
      dots.generateDots(100);
      dots.draw();
    }
  },
  {
    name: 'data',
    init: () => {
      const data = new DataManager();
      data.addData('1');
      data.addData('2');
      data.addData('3');
      data.addData('4');
      data.addData('5');
      console.log(data.getData());
    }
  }
]

const dataManager = new DataManager();

window.addEventListener("DOMContentLoaded", () => {
  initializers.sliders();
  // initializers.dots();
  // initializers.data();


  // initializersArray.forEach((initializer) => {
  //   initializer.init();
  // })
})

 
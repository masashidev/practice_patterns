class App {
  constructor() {
    this.container = document.getElementById('app');
  }

  addElement(elementContainer) {
    this.container.appendChild(elementContainer);
  }
}

class List {
  constructor() {
    this.data = [];

    this.container = document.createElement('div');

    this.list = document.createElement('div');
    // this.list.style.height = '200px';
    this.list.style.width = '200px';
    this.list.style.border = '1px solid black';
    this.list.style.padding = '10px';
    this.list.style.backgroundColor = 'lightgray';

    this.container.appendChild(this.list);

  }

  add(data) {
    this.data.push(data);
    this.list.innerHTML = this.data.join("<br>");
  }


}

class Slider {
  constructor(discreteData, unit = null,) {
    this.discreteData = discreteData;
    this.unit = unit;

    this.container = document.createElement('div');
    // this.container.style.height = '200px';
    this.container.style.width = '200px';
    this.container.style.border = '1px solid black';
    this.container.style.padding = '10px';
    this.container.style.backgroundColor = 'lightgray';

    this.slider = document.createElement('input');
    this.slider.style.width = '100%';
    this.slider.type = 'range';
    this.slider.min = 0;
    this.slider.max = 100;
    this.slider.step = 1;
    this.slider.value = 50;

    this.display = document.createElement('div');
    this.display.innerHTML = this.slider.value;
    this.display.style.border = '1px solid black';
    this.display.style.padding = '10px';
    this.display.style.backgroundColor = 'lightgray';

    this.display.innerHTML = this.translateIntoDiscreteData();

    this.slider.addEventListener('input', () => {
      this.display.innerHTML = this.translateIntoDiscreteData();
    })

    this.container.appendChild(this.slider);
    this.container.appendChild(this.display);
  }

  getValue() {
    return this.slider.value;
  }

  translateIntoDiscreteData() {
    const value = this.getValue();
    const numberOfElements = this.discreteData.length;
    const discreteValue = Math.min(Math.floor((value) / 100 * numberOfElements), numberOfElements - 1);
    return `${this.unit ? this.unit : ''}: ${this.discreteData[discreteValue]}`;
  }

}



const app = new App();
const list = new List();
const discreteData = ['small', 'medium', 'large'];
const numberOfPeople = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const places = ['inside', 'on Edge', 'outside'];
const time = ['moment', 'one hour', 'one day', 'one week', 'one month', 'one year', 'one lifetime'];
const movement = ['at rest', 'within reach', 'walkable', 'bikeable', 'driveable', 'flyable', 'teleportable']


const sliders = [];
sliders.push(new Slider(numberOfPeople, 'people'));
sliders.push(new Slider(discreteData, 'size'));
sliders.push(new Slider(places, 'place'));
sliders.push(new Slider(movement, 'movement'));
sliders.push(new Slider(time, 'time'));

const variables = ['size', 'time', "space", "distance", "speed"];
variables.forEach((variable) => {
  list.add(variable);
})
app.addElement(list.container);

sliders.forEach((slider) => {
  app.addElement(slider.container);
})

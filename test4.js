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
    this.list.style.height = '200px';
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
  constructor(discreteData, ) {
    this.discreteData = discreteData;

    this.container = document.createElement('div');
    this.container.style.height = '200px';
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
    const discreteValue = Math.floor(value / 100 * numberOfElements);
    return this.discreteData[discreteValue];
  }

}



const app = new App();
const list = new List();
const discreteData = ['small', 'medium', 'large'];
const slider = new Slider(discreteData);

const variables = ['size', 'time', "space", "distance", "speed"];
variables.forEach((variable) => {
  list.add(variable);
})
app.addElement(list.container);
app.addElement(slider.container);

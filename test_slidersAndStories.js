class App {
  constructor() {
    this.container = document.getElementById('app');
    this.container.style.display = 'flex';
    this.container.style.height = '100vh';
    this.container.style.justifyContent = 'left';
    this.container.style.alignItems = 'center';
    this.container.style.alignContent = 'center';

    // make children wrap
    this.container.style.flexWrap = 'wrap';
    // make gap between children zero

    // this.container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 3fr))';
    // this.container.style.gap = 0;

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
    // this.list.style.height = '100px';
    this.list.style.width = '200px';
    this.list.style.border = '1px solid black';
    this.list.style.padding = '10px';
    this.list.style.backgroundColor = 'lightgray';

    this.list.style.position = 'absolute';
    this.list.style.top = '0';

    this.container.appendChild(this.list);

    this.background = document.createElement('div');
    this.background.style.height = '100px';
    this.background.style.width = '200px';

    this.container.appendChild(this.background);

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

    this.container = document.createElement("div");
    // this.container.style.height = '200px';
    this.container.style.width = "200px";
    this.container.style.border = "1px solid black";
    this.container.style.padding = "10px";
    this.container.style.backgroundColor = "lightgray";

    this.slider = document.createElement("input");
    this.slider.style.width = "100%";
    this.slider.type = "range";
    this.slider.min = 0;
    this.slider.max = 100;
    this.slider.step = 1;
    this.slider.value = 50;

    this.display = document.createElement("div");
    this.display.innerHTML = this.slider.value;
    this.display.style.border = "1px solid black";
    this.display.style.padding = "10px";
    this.display.style.backgroundColor = "lightgray";

    this.display.innerHTML = this.translateIntoDiscreteData();

    this.slider.addEventListener("input", () => {
      this.display.innerHTML = this.translateIntoDiscreteData();
    });

    this.container.appendChild(this.slider);
    this.container.appendChild(this.display);

    const containerX = this.container.getBoundingClientRect().x;
    const containerY = this.container.getBoundingClientRect().y;
    const randomX = Math.floor(Math.random() * 40);
    const randomY = Math.floor(Math.random() * 40);
    // this.slider.style.transform = `translate(${containerX + randomX}px, ${containerY + randomY}px)`;


    const randomDegree = () => (Math.floor(Math.random() * 5) - 2.5);
    // const randomDegree360 = Math.floor(Math.random() * 10) - 5;
    this.container.style.transform = `rotate(${randomDegree()}deg)`;
    this.slider.style.transform = `rotate(${randomDegree()}deg)`;

  }

  getValue() {
    return this.slider.value;
  }

  renderString(){
    this.display.innerHTML = this.translateIntoDiscreteData();
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

const data = [
  {
    values: ['full Pov', 'tracking third person', 'independent third person', 'omniscient'],
    unit: 'perspective'
  },
  {
    values: ['monologue', 'pair', 'triangle', 'group', 'crowd', 'the people'],
    unit: 'people'
  },
  {
    values: ['moment', 'one hour', 'one day', 'one week', 'one month', 'one year', 'one lifetime'],
    unit: 'time'
  },
  {
    values: ['room', 'home', 'neighborhood', 'city', 'region', 'country', 'continent', 'world', 'solar system', 'galaxy', 'universe'],
    unit: 'space'
  },
  {
    values: ['small', 'medium', 'large'],
    unit: 'size'
  },
  {
    values: ['inside', 'on Edge', 'outside'],
    unit: 'boundary'
  },
  {
    values: ['at rest', 'within reach', 'walkable', 'bikeable', 'driveable', 'flyable', 'teleportable'],
    unit: 'movement'
  },
  {
    values: ['touch', 'arm length', 'shout', 'whisper', 'phone call', 'email', 'letter', 'messenger', 'telepathy'],
    unit: 'communication'
  },
  {
    values: ['inside head', 'conversation', 'giving order', 'public speech'],
    unit: 'voice'
  },
  {
    values: ['before Born', 'new born', 'toddler', 'child', 'teenager', 'adult', 'elder', 'after death'],
    unit: 'age'
  },
  {
    values: ['slave', 'employee', 'employer', 'owner', 'ruler', 'god'],
    unit: 'position'
  },
  {
    values: ['disabled', 'sick', 'healthy', 'athlete', 'superpower'],
    unit: 'health'
  },

]

const sliders = [];
data.forEach((data) => {
  sliders.push(new Slider(data.values, data.unit));
})

const variables = ['size', 'time', "space", "distance", "speed"];
variables.forEach((variable) => {
  list.add(variable);
})
app.addElement(list.container);

sliders.forEach((slider) => {
  slider.slider.value = Math.floor(Math.random() * 100);
  slider.renderString();
  app.addElement(slider.container);
})

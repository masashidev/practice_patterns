class App {
  constructor() {
    this.container = document.getElementById('app');
  }

  addElement(element) {
    this.container.appendChild(element.dom);
  }
}

class List {
  constructor() {
    this.data = [];
    this.dom = document.createElement('div');
    this.dom.style.height = '200px';
    this.dom.style.width = '200px';
    this.dom.style.border = '1px solid black';
    this.dom.style.padding = '10px';
    this.dom.style.backgroundColor = 'lightgray';

  }

  add(data) {
    this.data.push(data);
    this.dom.innerHTML = this.data.join("<br>");
  }


}

const app = new App();
const list = new List();

const variables = ['size', 'time', "space", "distance", "speed"];
variables.forEach((variable) => {
  list.add(variable);
})
app.addElement(list);

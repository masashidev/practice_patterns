const lang = "en";

const resource = {
  name: "Test Object",
  description: "This is a test object.",
};

const sentences = {
  [lang]: {
    title: resource.name,
  },
};

console.log(sentences[lang].title); // Test Object

const config = {
  name: "Test Object",
  description: "This is a test object.",
};

const data = {
  value: 10,
  content: "This is a test object.",
  status: "active",
}

const obj = {
  ...config,
  ...data,
};

const cache ={
  input: "result"
}

const frequencyCounter = {
  input: 1,
  result: 2,
}

const morseLookupTable = {
  "A": ".-",
  "B": "-...",
}

const state = {
  score: 0,
  level: 1,
  lives: 3,
  isPaused: false,

}

const methods = {
  increaseScore: function() {
    this.score++;
  },
  decreaseLives: function() {
    this.lives--;
  },
  togglePause: function() {
    this.isPaused = !this.isPaused;
  },
}

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

const result = operations.add(1, 2);

const keyValuePairs = [
  {key: "input", value: "result"},
  {key: "output", value: "result"},
]
const data = Object.fromEntries(keyValuePairs);

function fromObjectToArray(obj) {
  const arr = [];
  for(const key in obj) {
    arr.push([key, obj[key]]);
  }
}
function fromArrayToObject(arr) {
  const obj = {};
  arr.forEach(([key, value], index) => {
    obj[key] = value;
    obj[key].index = index;
  })
}

const array2 = [

]

const stateMachine = {
  state: "idle",
  transition: function(action) {
    switch(this.state) {
      case "idle":
        if(action === "start") {
          this.state = "running";
        }
        break;
      case "running":
        if(action === "stop") {
          this.state = "idle";
        }
        break;
      default:
        break;
    }
  },
}
stateMachine.transition("start");

const stateMachine = {
  content: 1,
  up: () => {
    this.content++;
  },
  down: () => {
    this.content--;
  },
  jump: () => {
    this.content += 10;
  },
}

const stateMachine = {
  data: 1,
  change: () => {
    switch(this.data) {
      case 1:
        this.data = 2;
        break;
      case 2:
        this.data = 3;
        break;
      case 3:
        this.data = 1;
        break;
    }
  }
}

//variable

const time = 0;
const position = {x: 0, y: 0};
const name = "name";

// obj

const obj = {
  time,
  position,
  id: 1,
}

// array

const elements = [obj, obj2, obj3];



// function

const initialize = () => {
  time = 0;
  position.x = 0;
  position.y = 0;
}

function move(currentPosition) {
  return currentPosition + 1;
}

function sortByFrequency(array){
  const frequency = {};
  array.forEach((element) => {
    frequency[element] = frequency[element] ? frequency[element] + 1 : 1;
  });
  return frequency;
}


// call function

const frequencyData = sortByFrequency(elements, 'id');
position.x = move(position.x);
position.y = move(position.y);

// function calling

display.addEventListener('pointerdown', function() {
  initialize();
})


//////////////////////////////

const input = document.getElementById('input');

// trigger function only after user stops typing
let timeoutID = null;
input.addEventListener('keyup', function() {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(() => {
    console.log(input.value);
  }, 500);
})

////////////////////////////

class Database {
  constructor() {
    this.data = [];
  }

  addData(data) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = [];
  }

  static createDatabase() {
    return new Database();
  }

  static createDatabaseWithInitialData(initialData) {
    const database = new Database();
    database.data = initialData;
    return database;
  }
}

const database = Database.createDatabase();
database.addData('data1');
database.addData('data2');
console.log(database.getData());

////////////////////////////


const whereUserClicked = {x: 0, y: 0};
const whereUserDraggedTo = {angle: 0, distance: 0};
let isDragging = false;

window.addEventListener('pointerdown', function(event) {
  whereUserClicked.x = event.clientX;
  whereUserClicked.y = event.clientY;
  isDragging = true;
})

window.addEventListener('pointermove', function(event) {
  if(isDragging) {
    whereUserDraggedTo.angle = Math.atan2(event.clientY - whereUserClicked.y, event.clientX - whereUserClicked.x);
    whereUserDraggedTo.distance = Math.sqrt(Math.pow(event.clientY - whereUserClicked.y, 2) + Math.pow(event.clientX - whereUserClicked.x, 2));
  }
})



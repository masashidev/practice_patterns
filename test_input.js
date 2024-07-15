window.addEventListener('keydown', () => {
  if(event.key === "Enter") {
    display.innerHTML = input.value;
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const res = fetch("https://data.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
})

function getInput(){
  const dataInForm = document.getElementById('form');
  const inputs = dataInForm.querySelectorAll('input');
  const values = {};
  inputs.forEach((input) => {
    values[input.id] = input.value;
  });
  return values;
}

const startTIme = new Date().getTime();

buttona.addEventListener('click', () => {
  const elapsedTime = new Date().getTime() - startTime;
  timeHistory.push(elapsedTime);
})

cards.addEventListener('click', (event) => {
  const chosenCard = event.target;
  chosenCard.style.backgroundColor = 'red';
})

const typed  = document.getElementById('typed').innerHTML;
const inputValue = document.getElementById('input').value;

const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');

function createObject(keys, values) {
  const obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}

const obj = {
  [inputA.value]: inputB.value
}

const objectsList = []

 

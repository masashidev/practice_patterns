const app = document.getElementById('app');

app.style.display = 'flex';
//make children center
app.style.height = '100vh';
app.style.justifyContent = 'center';
app.style.alignItems = 'center';


const display = document.createElement('div');
display.style.height = '200px';
display.style.width = '200px';
display.style.border = '1px solid black';
display.style.padding = '10px';
display.style.backgroundColor = 'lightgray';

app.appendChild(display);

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));

const patterns = (amount) => {
  const data = []
  for(let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    data.push(alphabet[randomIndex]);
  }
  return data;
}

patterns(10);
console.log(patterns(100));

const frequencyList = sortByFrequency(patterns(300));
console.log(frequencyList);
const sortedFrequencyList = keyForHeightValue(frequencyList);
console.log(sortedFrequencyList);

function keyForHeightValue(object){
  let highestKeys = [];
  let highestValue = 0;
  for (const key in object) {
    if (object[key] > highestValue) {
      highestValue = object[key];
      highestKeys = [key];
    } else if (object[key] === highestValue) {
      highestKeys.push(key);
    }
  }
  return highestKeys;
}


function sortByFrequency(array) {
  const frequency = {};
  array.forEach((element) => {
    frequency[element] = frequency[element] ? frequency[element] + 1 : 1;
  });
  return frequency;
}

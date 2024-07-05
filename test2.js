const app = document.getElementById('app');

const input = document.createElement('input');
app.appendChild(input);

const output = document.createElement('div');
output.style.height = '30px';
output.style.border = '1px solid black';
output.style.padding = '10px';
output.style.backgroundColor = 'lightgray';
app.appendChild(output);

const randomizeButton = document.createElement('button');
randomizeButton.innerHTML = 'Randomize';
app.appendChild(randomizeButton);


const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));

// input.addEventListener('keyup', function() {
//   const inputValue = input.value;
//   output.innerHTML = inputValue;
// })

let inputString = randomString(3);

function randomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

let outputString = "";
let alphabetIndex = 0;
let stringPosition = 0;
let intervalID = startSearch();
function startSearch () {
  setInterval(() => {
  if (stringPosition >= inputString.length) {
    clearInterval(intervalID);
    return;
  }



  if(alphabet[alphabetIndex] === inputString[stringPosition]) {
    outputString += alphabet[alphabetIndex];
    stringPosition++;
    alphabetIndex = 0;
  } else {
    alphabetIndex = (alphabetIndex + 1) % alphabet.length;
  }

  // if(alphabetIndex >= alphabet.length - 1) {
  //   alphabetIndex = 0;
  // } else {
  //   alphabetIndex++;
  // }

  if (stringPosition < inputString.length) {
    output.innerHTML = outputString + alphabet[alphabetIndex];
  } else {
    output.innerHTML = outputString;
  }

}, 100);
}

randomizeButton.addEventListener('click', function() {
  const randomLength = Math.floor(Math.random() * 10) + 1;
  inputString = randomString(randomLength);
  outputString = "";
  alphabetIndex = 0;
  stringPosition = 0;
  output.innerHTML = "";

  clearInterval(intervalID);
  intervalID = startSearch();
})

/*
position++
count++

position = 0
count = 0

string[0]
string[i]
string[position]

result += string[position]



*/

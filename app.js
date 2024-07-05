

//DOM selection

const app = document.getElementById('app');

//DOM creation
const stringInput = document.createElement('input');
stringInput.id = 'input';
stringInput.placeholder = 'Enter a string';
app.appendChild(stringInput);

const outputDisplay = document.createElement('div');
outputDisplay.id = 'output';
app.appendChild(outputDisplay);
outputDisplay.innerHTML = 'Output will be displayed here';
outputDisplay.style.border = '1px solid black';
outputDisplay.style.padding = '10px';
outputDisplay.style.backgroundColor = 'lightgray';

//Event listener
stringInput.addEventListener('keyup', function() {
  const inputValue = stringInput.value;
  const array = inputValue.split('');
  const output = process(array);
  console.log(output);

  output.forEach((letter) => {
    console.log(fromCharCodeToCharacter(letter));
  })
  outputDisplay.innerHTML = output.join('');
});


const generateReplacementRules = (start, end) => {
  const rules = {};
  for (let i = start; i <= end; i++) {
    rules[String.fromCharCode(i)] = String.fromCharCode(25 - i + start);
  }
  return rules;
}

const replacementRules = {
  ...generateReplacementRules(97, 122),
  ...generateReplacementRules(65, 90),
};

console.log(replacementRules);

const process = (array) => {
  const output = array.map((letter) => {
    return obj[letter] ? obj[letter] : letter;
  });
  return output;
}

const fromCharCodeToCharacter = (charCode) => {
  return String.fromCharCode(charCode);
}


const obj = {};
obj['a'] = 'z';

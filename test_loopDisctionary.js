const dictionary = {
  a: ['b', 'e'],
  b: ['a', 'c'],
  c: ['b', 'd'],
  d: ['c', 'e'],
  e: ['a', 'd'],
};

const choicesDisplay = document.createElement('div');
choicesDisplay.style.display = 'flex';
choicesDisplay.style.justifyContent = 'center';
choicesDisplay.style.alignItems = 'center';
choicesDisplay.style.height = '100vh';
choicesDisplay.style.width = '100vw';
choicesDisplay.style.backgroundColor = 'lightgray';
document.body.appendChild(choicesDisplay);

let chosen = ['a'];

const chosenDisplay = document.createElement('div');
chosenDisplay.innerHTML = chosen;
choicesDisplay.appendChild(chosenDisplay);
chosenDisplay.style.margin = "10px";
chosenDisplay.style.padding = "10px";
chosenDisplay.style.border = "1px solid black";
chosenDisplay.style.fontSize = "20px";
function showChosen(){
  chosenDisplay.innerHTML = chosen;
  choicesDisplay.appendChild(chosenDisplay);
}

function showButtons() {
  choicesDisplay.innerHTML = '';
  showChosen();
  const chosenElements = dictionary[chosen];
  chosenElements.forEach((choice) => {
    const button = document.createElement('button');
    button.classList.add('choice');
    button.innerHTML = choice;
    button.addEventListener('click', () => {
      chosen = [choice];
      showButtons();
    });
    choicesDisplay.appendChild(button);
  });
}
showButtons();

const choiceButtons = document.querySelectorAll('.choice');
choiceButtons.forEach((button) => {
  button.style.margin = "10px";
  button.style.padding = "10px";
})

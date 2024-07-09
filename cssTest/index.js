const app = document.getElementById('app');

const inputs = [];
const rows = 5;
const columns = 5;
const numberOfInputs = rows * columns;


for (let i = 0; i < numberOfInputs; i++) {
  const input = document.createElement('input');
  input.id = 'input';
  input.type = 'text';
  input.placeholder = 'Enter a string';
  app.appendChild(input);

  inputs.push(input);
}


const getNextRowIndex = (currentIndex) => (currentIndex + rows) % numberOfInputs;
const getPreviousRowIndex = (currentIndex) => (currentIndex - rows + numberOfInputs) % numberOfInputs;
const getNextColumnIndex = (currentIndex) => {
  const currentRow = Math.floor(currentIndex / columns);
  return currentRow * columns + (currentIndex + 1) % columns;
}
const getPreviousColumnIndex = (currentIndex) => {
  const currentRow = Math.floor(currentIndex / columns);
  return currentRow * columns + (currentIndex - 1 + columns) % columns;
}

inputs.forEach((input, index) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      // back to first row
      event.preventDefault();
      inputs[getNextRowIndex(index)].focus();
    }
    // if event.key is shift + enter
    if (event.key === 'Enter' && event.shiftKey) {
      // back to last row
      event.preventDefault();
      inputs[getPreviousRowIndex(index)].focus();
    }

    if(event.key === 'Tab' && !event.shiftKey) {
      // go to next input
      event.preventDefault();
      inputs[getNextColumnIndex(index)].focus();
    }

    if(event.key === 'Tab' && event.shiftKey) {
      // go to previous input
      event.preventDefault();
      inputs[getPreviousColumnIndex(index)].focus();
    }
  });
});

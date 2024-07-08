const app = document.getElementById('app');

const inputs = [];

for (let i = 0; i < 25; i++) {
  const input = document.createElement('input');
  input.id = 'input';
  input.type = 'text';
  input.placeholder = 'Enter a string';
  app.appendChild(input);

  inputs.push(input);
}

inputs.forEach((input) => {
  input.addEventListener('enter', function() {

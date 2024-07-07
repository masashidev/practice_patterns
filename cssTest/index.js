const app = document.getElementById('app');

for (let i = 0; i < 26; i++) {
  const input = document.createElement('input');
  input.id = 'input';
  input.type = 'text';
  input.placeholder = 'Enter a string';
  app.appendChild(input);
}

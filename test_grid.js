const app = document.getElementById('app');
document.body.style.color = "white";

const table = document.createElement('table');
app.appendChild(table);
table.style.border = '1px solid white';
table.style.color = 'white';
// draw grid inside table
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.height = '100%';
// draw border for each cells



const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));
const vowel = [
  'o', 'a', 'e', "i", "u",]
const consonant = [
  "m", "l", "t", "q", "c", "k", "s", "sh", "y", "n", "r", "w", "h"]
const special = [
  "p", "b", "f", "v", "d", "g", "z", "x", "j"]

const all = [...vowel, ...consonant, ...special];
console.log(all.length)
const missing = alphabet.filter((letter) => !all.includes(letter));
console.log(missing);

const rows = 27;
const columns = 27;

const tableHeaders = document.createElement('tr');
const emptyHeader = document.createElement('th');
emptyHeader.innerHTML = '';
tableHeaders.appendChild(emptyHeader);
table.appendChild(tableHeaders);

alphabet.forEach((letter) => {
  const th = document.createElement('th');
  th.innerHTML = letter;
  tableHeaders.appendChild(th);
})
alphabet.forEach((letter, index) => {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  for (let i = 0; i < columns; i++) {
    const td = document.createElement('td');
    if (i === 0) {
      td.innerHTML = letter;
    } else {
      td.innerHTML = alphabet[index] + alphabet[i - 1];
      td.id = alphabet[index] + alphabet[i - 1];
    }
    tr.appendChild(td);
  }
})

// draw border for each cells
const cells = document.querySelectorAll('td');
cells.forEach((cell) => {
  cell.style.border = '1px solid white';
  cell.style.padding = '4px';
  cell.style.textAlign = 'center';
  cell.style.backgroundColor = 'black';
  cell.style.color = 'white';
  // cell.style.width = '50px';
  // cell.style.height = '50px';
})

const qi = document.getElementById('qi');
qi.style.backgroundColor = 'red';


const lang = 'en';

const resource = {
  name: 'Test Object',
  description: 'This is a test object.'
}

const sentences = {
  [lang]: {
    title: resource.name,
  }
}

console.log(sentences[lang].title); // Test Object

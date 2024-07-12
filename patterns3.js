
// window object
  //examples

// document object
document.body
document.children
document.links
document.images
document.location
document.url
document.createElement('div')
document.getElementsById('app')
document.getElementsByClassName('app')
document.querySelector('app')
document.querySelectorAll('.app')

window.console.log('Hello World')
window.alert('Hello World')
window.devicePixelRatio
window.indexedDB
window.innerHeight
window.innerWidth
window.localStorage
window.sessionStorage

window.setInterval()
window.setTimeout()
window.clearInterval()
window.clearTimeout()
window.close()
window.confirm()
window.fetch()
window.scrollBy()

window.addEventListener('copy', function() {
window.addEventListener('cut', function() {
window.addEventListener('offline', function() {
window.addEventListener('online', function() {
window.addEventListener('resize', function() {
window.addEventListener('blur'), function() {
window.addEventListener('focus', function() {
window.addEventListener('load', function() {


  const window = {
    innerWidth: 1920,
    innerHeight: 1080,
    scrollX: 0,
    scrollY: 0,
    location: {
      href: 'https://www.google.com',
      origin: 'https://www.google.com',
      protocol: 'https:',
      host: 'www.google.com',
      hostname: 'www.google.com',
      port: '',
      pathname: '',
      search: '',
      hash: ''
    },
    navigator: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      platform: 'Win32',}
    }

    const currentURL = window.location.href;
    const browser = window.navigator.userAgent;
    const isWindows = browser.includes('Windows');
    const isMac = browser.includes('Macintosh');


const page = 0;
const itemsPerPage = 10;
const windowSize = {
  width: 1920,
  height: 1080
};

const center = {
  x: windowSize.width / 2,
  y: windowSize.height / 2
};
}

const element = document.getElementById('app');
const element = document.querySelector('#app');
const element = document.querySelectorAll('.app');
const listElements = document.querySelectorAll('li > ul');
const allParagraph = document.querySelectorAll('p');


const windowRatio = () => windowSize.width / windowSize.height;
const isLandscape = () => windowRatio() > 1;
const isPortrait = () => windowRatio() < 1;
const isSquare = () => windowRatio() === 1;

const currentWindowWidth = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1920) {
    return 'large';
  } else if (windowWidth < 1920) {
    return 'small';
  } else {
    return 'medium';
  }
}

const requestedPage = (method, url, id) => {
  // asynchronous function using fetch
  // returns a promise
  return fetch(requestedPage.url)
}

const word = {
  definition: 'a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.',
  synonyms: ['term', 'name', 'expression', 'designation', 'locution', 'turn of phrase', 'idiom', 'set phrase', 'word group', 'word combination', 'group of words', 'collocation', 'formula', 'formulation', 'verbalism', 'vocabulary item', 'lexical item', 'terminology', 'nomenclature', 'jargon', 'argot', 'cant', 'patois', 'slang', 'vernacular', 'patter', 'patois', 'slang', 'vernacular', 'patter'],
  antonyms: ['silence', 'quiet'],
  partOfSpeech: 'noun',
  syllables: 1,
  pronunciation: 'wərd',
  examples: ['a word of advice', 'the word "hut" is monosyllabic', 'I just want a word with you'],
  wordForms: ['words', 'worded', 'wording'],
  wordOrigin: 'Old English; of Germanic origin, from an Indo-European root shared by Latin verbum "word"',
  wordLength: 4,
  wordFrequency: 10000,
  wordRank: 1,
  wordFrequencyRank: 1,
  wordRankByFrequency: 1,
  wordRankByLength: 1,
  connectedFrom: ['a', 'the', ]
  connectedTo: ['']
}


let currentPosition = {x: 0, y: 0};

const dom = document.createElement('div');
app.appendChild(dom);
dom.classList.add('element');
dom.classList.add('show')
dom.classList.remove('show')

// show css dom
dom.style.display = 'block';
dom.style.display = 'flex';
dom.style.display = 'inline';
dom.style.display = 'inline-block';
dom.style.display = 'none';
// hide css dom
dom.style.visibility = 'visible';
dom.style.visibility = 'hidden';


class User {
}
class Product {
}
class Element {
  constructor(value){
    this.value = value;
    this.animationID = null;
    this.dom = null;
    this.instantiateDOM();
  }

  instantiateDOM(){
    this.dom = document.createElement('div');
    this.dom.innerHTML = this.value;
    document.body.appendChild(this.dom);
  }

  animateShake(){
    const duration = 1000;
    const animationID = requestAnimationFrame(() => {
      const start = performance.now();
      const shake = (timestamp) => {
        const elapsed = timestamp - start;
        if (elapsed < duration) {
          this.dom.style.transform = `translate(${Math.sin(elapsed / 100) * 10}px, 0)`;
          requestAnimationFrame(shake);
        } else {
          this.dom.style.transform = 'translate(0, 0)';
        }
      }
      requestAnimationFrame(shake);
    })
  }
}



const obj1 ={
  key: 'value'
}
const obj2 = new Object();
obj2.key = 'value';
const obj3 = Object.create(null);
obj3.key = 'value';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const obj4 = new Person('John', 30);

Object.defineProperties(obj1, {
  key: {
    value: 'value',
    writable: true,
    enumerable: true,
    configurable: true
  },
  key2: {
    value: 'value2',
    writable: true,
    enumerable: true,
    configurable: true
  }
});

const keyName = 'key';
obj1[keyName] = 'value';

class Element {
  constructor(value, parent, children) {
    this.value = value;
    this.parent = parent;
    this.children = children;
  }
}
const node1 = new Element("1", null, []);
const node2 = new Element("2", node1, []);
const node3 = new Element("3", node1, []);
const node4 = new Element("4", node1, [node2, node3]);
node1.children.push(node2, node3);

const elements = [node1, node2, node3];

console.log(node1.children[0].value);

const connections = [
  [node1, node2],
  [node1, node3],
  [node1, node4],
  [node2, node3],
  [node2, node4],
  [node3, node4],
];
const nodeValues2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const totalNodes = 10;
const connectionsPatterns = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
]
const connectionWeight = [
  [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [10, 20, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 10, 10, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 10, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 10, 10, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 10, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 10, 10, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 10, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 10, 10],
]

connectionsPatterns.forEach((pattern, index) => {
  const children = [];
  pattern.forEach((connection, index2) => {
    if (connection === 1) {
      children.push(elements[index2]);
    }
  });
  const node = new Element(nodeValues2[index], null, children);
});


const sequencesOfCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
sequencesOfCharacters.map((character) => character.toUpperCase());

const newArray = [...Array(n)]
const newArray = Array(n)

const a = Array(10)
console.log(a);
const b = [...Array(10)]
console.log(b);
const c = Array.from({length: 10});
console.log(c);

const map = new Map();
map.set('key', 'value');
map.get('key');
map.delete('key');
map.clear();

const set = new Set();
set.add('value');
set.has('value');
set.delete('value');
set.clear();

array.map((element, index) => array[index][array[index].length - 1]);
array.reduce((acc, ele) => acc + ele, 0);
array.filter((ele) => ele > 0);
array.filter((ele) => ele.state === 'active');
array.filter((ele) => condition(ele));
array.find((ele) => ele.id === 1);
matrix.find((row) => row.includes('a'));
grid.find((row) => row.every((cell) => cell === 'x'));
array.every((ele) => ele > 0);

const array = [...Array(10)].map((_, i) => Math.floor(Math.random() * 100));
const matrix = [...Array(10)].map(() => [...Array(10)].map(() => Math.floor(Math.random() * 100)));
const differenceBetweenFirstAndRest = array.map((ele, index) => ele - array[index]);


const inputArray = document.querySelectorAll('input');
const inputObject = inputArray.map((input) => {
  input.id: input.value
});

const inputSequences;
document.addEventListener('change' () => {
  inputSequences = document.querySelectorAll('input').map((input) => input.value);
})

const keySequences;
document.addEventListener('keydown', (event) => {
  keySequences.push(event.key);
})


function action() {
  if(possible) {
    doSomething();
  }
}
function attemptAction(){
  if(valid){
    doSomething();
  }
}
function tenSecondLater(){
  setTimeout(() => {
    doSomething();
  }, 10000);
  return 'done';
}


function handleAddButtonClicked() {
  const user = new User();
  const product = new Product();
  const purchase = {
    user,
    product,
    timestamp: Date.now()
  };
  purchases.push(purchase);
  console.log(purchases);
}
function handleDeleteButtonClicked() {
  purchases.pop();
  console.log(purchases);
}

function createNewData(){
  requestedPage('GET', 'https://jsonplaceholder.typicode.com/posts', 1)
}
async function fetchData() {
  const response = await fetch('https://data.com/content');
  const data = await response.json();
  console.log(data);
  return data;
}
async function tryFetchingData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function saveData(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
function loadData(data) {
  try {
    const data = JSON.parse(localStorage.getItem('data'));
    return data;
  } catch (error) {
    console.error(error);
  }
}
function cookieData(data) {
  document.cookie = `data=${data}`;
}
function getCookieData(data) {
  const cookieData = document.cookie;
  return cookieData;
}

function downloadData(data) {
  const blob = new Blob([data], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.txt';
  a.click();
  URL.revokeObjectURL(url);
}
function requestFile() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.txt';
  input.click();
}

const tag = 'div';
const content = 'Hello World';
const idName = 'app';
const className = 'container';
const html = `<${tag} id="${idName}" class="${className}">${content}</${tag}>`;

function createHTMLTag(tag, content, idName, className) {
  return `<${tag} id="${idName}" class="${className}">${content}</${tag}>`;
}
function createHTMLtag(tag, content, options = {}) {
  const { id, classes } = options;

  let attributes = '';

  if(id) {
    attributes += `id="${id}"`;



addButton.addEventListener('click', function() {
  handleAddButtonClicked();
})
deleteButton.addEventListener('click', function() {
  handleDeleteButtonClicked();
})
draggableObject.addEventListener('pointerdown', (e) => {
  draggableObject.style.position = 'absolute';
  draggableObject.style.left = e.clientX + 'px';
  draggableObject.style.top = e.clientY + 'px';
  isDragging = true;

  draggableObject.addEventListener('pointermove', (e) => {
    if (isDragging) {
      draggableObject.style.left = e.clientX + 'px';
      draggableObject.style.top = e.clientY + 'px';
    }

    draggableObject.addEventListener('pointerup', () => {
      isDragging = false;

      draggableObject.style.position = 'static';

    });
  });
});



if (elapsed < duration) {
  this.animationID = requestAnimationFrame(shake);
} else {
  this.dom.style.transform = 'translate(0, 0)';
  this.animationID = null;
}
if(this.animationID){
  cancelAnimationFrame(this.animationID);
  this.animationID = null;
}
if( i === j ){
  grid[i][j] = "diagonal";
}
if( i !== j ){
  grid[i][j] = "not diagonal";
}
if( left < right ){
  grid[i][j] = "left";
})

for(let i = 0; i < 10; i++){
  console.log(i);
}
element.id = i;
element.x = container.x + i * elemnetSize;




elapsed = timestamp - start;
duration = 1000;
timePassedPercentage = elapsed / duration;


displaySize = parcentageToDisplaySize * windowSize;
centerX = windowSize.width / 2;
displayX = centerX - displaySize / 2;
const displayX = () => {
  const displaySize = parcentageToDisplaySize * windowSize;
  const centerX = windowSize.width / 2;
  return centerX - displaySize / 2;
}
display.x = displayX();
window.addEventListener('resize', () => {
  display.x = displayX();
})

function scrollImages() {
  const images = document.querySelectorAll('.image');
  images.forEach((image) => {
    image.scrollLeft += 10;
  });
}

function openMenu() {
  const menu = document.querySelector('.menu');
  menu.style.display = 'block';
}
function closeMenu() {
  const menu = document.querySelector('.menu');
  menu.style.display = 'none';
}

const pagesURL = {
  home: '/',
  about: '/about',
  contact: '/contact',
  services: '/services',
}

function navigateTo(page) {
  window.location = pagesURL[page];
}


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


class User {
}
class Product {
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

addButton.addEventListener('click', function() {
  handleAddButtonClicked();
}
deleteButton.addEventListener('click', function() {
  handleDeleteButtonClicked();
}

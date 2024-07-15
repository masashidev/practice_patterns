// sequence

const array = [];
const object = {};
let string = '';
const next = 'next';
const nextKey = 'nextKey';
const nextValue = 'nextValue';
array.push(next)
object[nextKey] = nextValue
string += ` ${next}`

// count

const length = array.length;
const objectLength = Object.keys(object).length;
const stringLength = string.length;


const randomNums = [...Array(10)].map(() => Math.floor(Math.random() * 100));

const randomNumsMoreThanHalf = randomNums.filter(num => num > 50);


// count of times

function toggle(state, count){
  const returnObject = {};
  returnObject[state] = !state;
  returnObject.count = count + 1;
  return returnObject;
}
let state = false;
let count = 0;
let result = toggle(state, count);
result = toggle(result[state], result.count);

// timing

let start = new Date().getTime();
const timeoutID = setTimeout(() => {
  const end = new Date().getTime();
  // console.log(end - start);
}, 1000);

let clickCount = 0;
let timeSequence = [];
window.addEventListener('click', () => {
  const clickedTime = new Date().getTime();
  // console.log(clickedTime - start);
  timeSequence.push(clickedTime - start);
  if(timeSequence.length > 10) {
    timeSequence.shift();
  }
  // console.log(timeSequence);
  start = clickedTime;
  clickCount++;
  if(clickCount === 5) {
    clearTimeout(timeoutID);
    // console.log('timeout cleared');
  }
})


// ratio


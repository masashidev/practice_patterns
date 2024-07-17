const drawDot = (x, y) => {
  const dot = document.createElement("div");
  dot.style.position = "absolute";
  dot.style.width = "10px";
  dot.style.height = "10px";
  dot.style.borderRadius = "50%";
  dot.style.backgroundColor = "black";
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  document.body.appendChild(dot);
};
const drawLine = (fromX, fromY, toX, toY) => {
  const line = document.createElement("div");
  line.style.position = "absolute";
  line.style.width = "1px";
  line.style.height =
    Math.sqrt(Math.pow(toY - fromY, 2) + Math.pow(toX - fromX, 2)) + "px";
  line.style.backgroundColor = "black";
  line.style.left = fromX + "px";
  line.style.top = fromY + "px";
  line.style.transform = `rotate(${Math.atan2(toY - fromY, toX - fromX)}rad)`;
  document.body.appendChild(line);
};

// sequence

const array = [];
const object = {};
let string = "";
const next = "next";
const nextKey = "nextKey";
const nextValue = "nextValue";
array.push(next);
object[nextKey] = nextValue;
string += ` ${next}`;

// count

const length = array.length;
const objectLength = Object.keys(object).length;
const stringLength = string.length;

const randomNums = [...Array(10)].map(() => Math.floor(Math.random() * 100));

const randomNumsMoreThanHalf = randomNums.filter((num) => num > 50);

// count of times

function toggle(state, count) {
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
window.addEventListener("click", () => {
  const clickedTime = new Date().getTime();
  // console.log(clickedTime - start);
  timeSequence.push(clickedTime - start);
  if (timeSequence.length > 10) {
    timeSequence.shift();
  }
  // console.log(timeSequence);
  start = clickedTime;
  clickCount++;
  if (clickCount === 5) {
    clearTimeout(timeoutID);
    // console.log('timeout cleared');
  }
});

// ratio

const ratio = window.addEventListener("mousemove", (e) => {
  const xRatio = e.clientX / window.innerWidth;
  const yRatio = e.clientY / window.innerHeight;
  return { xRatio, yRatio };
});
console.log(ratio);
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const center = { x: windowWidth / 2, y: windowHeight / 2 };
const angle = (e) => Math.atan2(center.y - e.clientY, center.x - e.clientX);
const valueMap = (value, min1, max1, min2, max2) => {
  return min2 + ((value - min1) * (max2 - min2)) / (max1 - min1);
};
//const valueMap = (value, min1, max1, min2, max2) => {
//  const ratio = (value - min1) / (max1 - min1);
//  return min2 + ratio * (max2 - min2);
window.addEventListener("mousemove", (e) => {
  const angle360 = valueMap(angle(e), -Math.PI, Math.PI, 0, 360);
  console.log(Math.floor(angle360));
  // drawLine(center.x, center.y, e.clientX, e.clientY);
  document.body.style.backgroundColor = `hsl(${angle360}, 10%, 80%)`;
});

drawDot(center.x, center.y);


// sort standard

// sort by count
const appearanceCount = {};
const patternElements = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pattern = [...Array(100)].map(
  () => patternElements[Math.floor(Math.random() * patternElements.length)]
);
pattern.forEach((element) => {
  appearanceCount[element] = appearanceCount[element]
    ? appearanceCount[element] + 1
    : 1;
});
const sortedPattern = Object.keys(appearanceCount).sort(
  (a, b) => appearanceCount[b] - appearanceCount[a]
);
console.log(Object.keys(appearanceCount));
console.log(appearanceCount);
console.log(sortedPattern);

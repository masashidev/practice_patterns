


// const array = [...Array(10)].map((_, i) => Math.floor(Math.random() * 100));
const matrix = [...Array(10)].map(() =>
  [...Array(10)].map(() => Math.floor(Math.random() * 100))
);
const differenceBetweenFirstAndRest = (array) => {
  const first = array[0];
  const rest = array.slice(1);
  return rest.map((element) => element - first);
};
const test = [76, 79, 59, 29, 99, 76, 71, 32, 10, 95];
const diff = differenceBetweenFirstAndRest(test);
const diff2 = differenceBetweenFirstAndRest(diff);
const diff3 = differenceBetweenFirstAndRest(diff2);

console.log(test);
console.log(diff);
console.log(diff2);
console.log(diff3);

function repeatArrayTransformation(array, times) {
  for (let i = 0; i < times; i++) {
    array = differenceBetweenFirstAndRest(array);
    console.log(array);
  }
}

repeatArrayTransformation(test, test.length - 1);

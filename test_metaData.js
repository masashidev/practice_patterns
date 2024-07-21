// data for generating and constructing objects
// object patters are the space for all possible state of human experience
// user are given a set of sliders to choose from and object interact with each other based on input
// as long as user stay at the level of interface, they can't see the underlying structure and cannot reach to state where existing objects cannnot exist


const sequence = [...Array(10)].map((_, i) => i + 1);

const numberOfData = 100;
const minValue = 1;
const maxValue = 100
const average = 30;
const standardDeviation = 10;
const data = generateData(numberOfData, minValue, maxValue, average, standardDeviation);

function generateData(numberOfData, minValue, maxValue, average, standardDeviation) {
  const data = [];
  for(let i = 0; i < numberOfData; i++) {
    data.push(gaussianRandom(minValue, maxValue, average, standardDeviation));
  }
  return data;
}

function gaussianRandom(min, max, average, standardDeviation) {
  let result = 0;
  for(let i = 0; i < 12; i++) {
    result += Math.random();
  }
  result = (result - 6) * standardDeviation + average;
  return Math.min(Math.max(result, min), max);
}

const units = {
  space: ["distance", "angle"],
  time: ["second", "minute", "hour", "day", "week", "month", "year"],
  weight: ["gram", "kilogram", "ton"],
  temperature: ["celsius", "fahrenheit", "kelvin"],
  volume: ["milliliter", "liter", "gallon"],
}

const distribution = {
  average: 30,
  standardDeviation: 10,
  numberOfData: 100,
}

const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));

const knownToUnknownRatio = 0.5;
const knownData = data.slice(0, numberOfData * knownToUnknownRatio);
const unknownData = data.slice(numberOfData * knownToUnknownRatio);

const dimensions = ["x", "y", "z", "speed", "acceleration", "force", "mass", "temperature", "volume", "lifespan", "size", "initialValue", "currentValue", "name", "category"]

const types = {
  boolean: (threshold) => Math.random() > threshold,
  integer: (min, max) => Math.floor(Math.random() * (max - min) + min),
  float: (min, max) => Math.random() * (max - min) + min,
  string: (length) => randomString(length),
  array: (length, type) => [...Array(length)].map(() => type()),
  object: (properties) => {
    const object = {};
    for(const property in properties) {
      object[property] = properties[property]();
    }
    return object;
  }

}

const shapeData = {
  type: "object",
  properties: {
    shape: {
      type: "string",
      value: "rectangle",
    },
    width: {
      type: "integer",
      value: 100,
    },
    height: {
      type: "integer",
      value: 100,
    },
    color: {
      type: "string",
      value: "red",
    },
    position: {
      type: "object",
      properties: {
        x: {
          type: "integer",
          value: 0,
        },
        y: {
          type: "integer",
          value: 0,
        }
      }
    }
  }
}
const dataForGeneratingShape = {
  lineLength: 100,
  lineWidth: 10,
  color: "blue",
  centerPosition: {
    x: 0,
    y: 0,
  },
  startingPosition: {
    x: 0,
    y: 0,
  },
  numberOfLines: 10,
  lengthRatioDistribution: []


}


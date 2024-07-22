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
  lengthRatioDistribution: [],
  turnAnglesAtEachLines: [],

}

function lengthRatioDistribution(totalLineLength, numberOfLines, min, max) {
  const lengthRatioDistribution = [];
  let remainingLength = totalLineLength;
  for(let i = 0; i < numberOfLines; i++) {
    const length = Math.random() * (max - min) + min;
    const ratioOverTotalLength = length / totalLineLength;
    lengthRatioDistribution.push(ratioOverTotalLength);
    remainingLength -= length;
  }
  const totalRatio = lengthRatioDistribution.reduce((total, ratio) => total + ratio, 0);
  if(totalRatio !== 1) {
    lengthRatioDistribution[lengthRatioDistribution.length - 1] += 1 - totalRatio;
  }
  return lengthRatioDistribution;
}


const htmlDocument = {
  type: "object",
  properties: {
    doctype: {
      type: "string",
      value: "html",
    },
    head: {
      type: "object",
      properties: {
        title: {
          type: "string",
          value: "title",
        },
        meta: {
          type: "object",
          properties: {
            charset: {
              type: "string",
              value: "utf-8",
            },
            name: {
              type: "string",
              value: "viewport",
            },
            content: {
              type: "string",
              value: "width=device-width, initial-scale=1.0",
            }
          }
        },
        link: {
          type: "object",
          properties: {
            rel: {
              type: "string",
              value: "stylesheet",
            },
            type: {
              type: "string",
              value: "text/css",
            },
            href: {
              type: "string",
              value: "styles.css",
            }
          }
        }
      }
    },
    body: {
      type: "object",
      properties: {
        div: {
          type: "object",
          properties: {
            id: {
              type: "string",
              value: "app",
            },
            style: {
              type: "object",
              properties: {
                display: {
                  type: "string",
                  value: "flex",
                },
                height: {
                  type: "string",
                  value: "100vh",
                },
                justifyContent: {
                  type: "string",
                  value: "center",
                },
                alignItems: {
                  type: "string",
                  value: "center",
                }
              }
            }
          }
        },
        script: {
          type: "object",
          properties: {
            src: {
              type: "string",
              value: "app.js",
            }
          }
        }
      }
    }
  }
}

const adjacencyList = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
]

const edgeWeight = [
  [0, 0, 3, 0],
  [0, 0, 2, 1],
  [3, 2, 0, 1],
  [0, 1, 1, 0],
]

const nodeValues = [10, 20, 30, 40];

const nodeGroups = [
  [0, 1],
  [2, 3],
]

const nodeColors = ["red", "green", "blue", "yellow"];

const nodePositions = [
  {x: 0, y: 0},
  {x: 100, y: 0},
  {x: 0, y: 100},
  {x: 100, y: 100},
]

const nodeSizes = [10, 20, 30, 40];

const nodeShapes = ["circle", "square", "triangle", "star"];

const nodeLabels = ["A", "B", "C", "D"];

const nodeImages = ["image1", "image2", "image3", "image4"];


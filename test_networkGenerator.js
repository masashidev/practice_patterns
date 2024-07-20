class Node {
  constructor(value){
    this.value = value;
    this.connectedTo = [];
  }
}

const numberOfNodes = 10;
const adjacencyList = [...Array(numberOfNodes)].map(() => [...Array(numberOfNodes)].map(() => Math.floor(Math.random() * 2)));

const nodes = new Map();
const edges = new Map();

for(let i = 0; i < numberOfNodes; i++){
  nodes.set(i, new Node(i));
}

for(let i = 0; i < numberOfNodes; i++){
  for(let j = 0; j < numberOfNodes; j++){
    if(adjacencyList[i][j] === 1){
      edges.set(`${i}-${j}`, Math.floor(Math.random() * 100));
      nodes.get(i).connectedTo.push(j);
    }
  }
}

console.log(nodes);

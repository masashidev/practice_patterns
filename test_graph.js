class Node {
  constructor(value){
    this.value = value;
    this.edge = [];
  }
}

class Edge {
  constructor(source, target, weight){
    this.source = source;
    this.target = target;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this.nodes = new Map();
  }

  addNode(value){
    if(!this.nodes.has(value)){
      this.nodes.set(value, new Node(value));
    }
    return this.nodes.get(value);
  }

  addEdge(source, target, weight){
    const sourceNode = this.addNode(source);
    const targetNode = this.addNode(target);
    const edge = new Edge(sourceNode, targetNode, weight);
    sourceNode.edge.push(edge);
  }
}

class GraphFactory {
  static createFromAdjacencyList(nodeValues, adjacencyList, connectionWeight){
    const graph = new Graph();

    adjacencyList.forEach((node, sourceIndex) => {
      node.forEach((connection, targetIndex) => {
        if(connection === 1){
          graph.addEdge(
            nodeValues[sourceIndex],
            nodeValues[targetIndex],
            connectionWeight[sourceIndex][targetIndex]
          );
        }
      });
    });

    return graph;
  }
}

const amountOfInitialNodes = 10;
const nodeValues = Array.from({length: amountOfInitialNodes}, (v, i) => Math.floor(Math.random() * 100));
const adjacencyList = Array.from({length: amountOfInitialNodes}, (v, i) => Array.from({length: amountOfInitialNodes}, (v, i) => Math.floor(Math.random() * 2)));
const connectionWeight = Array.from({length: amountOfInitialNodes}, (v, i) => Array.from({length: amountOfInitialNodes}, (v, i) => Math.floor(Math.random() * 100)));

import { Node } from './Node';

export enum DIRECTION {
  DIRECTED = 1,
  UNDIRECTED
}

export class Graph {
  public nodes = new Map<any, Node>();
  public edgeDirection = DIRECTION.DIRECTED;

  constructor(direction: DIRECTION) {
    this.edgeDirection = direction;
  }

  addVertex(value): Node {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      console.log(`Creating a new node`);
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }

  removeVertex(value) {
    const current = this.nodes.get(value);
    if (current) {
      this.nodes.forEach((v: Node, k: any) => {
        value.removeAdjacent(v);
      });
    }

    return this.nodes.delete(value);
  }

  addEdge(source: any, destination: any) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if (this.edgeDirection === DIRECTION.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }

  removeEdge(source: Node, destination: Node) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);

      if (this.edgeDirection === DIRECTION.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, destinationNode];
  }

  *dfs(first: Node, searchFor: any) {
    const visited = new Set();
    const visitList = new Array<Node>();

    visitList.push(first);

    while (visitList.length !== 0) {
      const node = visitList.pop();
      if (node && !visited.has(node)) {
        yield node;
        visited.add(node);
        if (node.value.toString() === searchFor.toString()) {
          return;
        }
        node.adjacents.forEach(adj => {
          visitList.push(adj);
        });
      }
    }
  }

  *bfs(first: Node, searchFor: any) {
    const visited = new Set();
    const visitList = new Array<Node>();

    visitList.push(first);

    while (visitList.length !== 0) {
      const node = visitList.shift();
      if (node && !visited.has(node)) {
        yield node;
        visited.add(node);
        if (node.value.toString() === searchFor.toString()) {
          return;
        }
        node.adjacents.forEach(adj => {
          visitList.push(adj);
        });
      }
    }
  }

  toStringArray(): Array<string> {
    const returnArray = new Array<string>();

    this.nodes.forEach((v, k) => {
      const s = `${k}: Adjacents: ${v.toString()}`;
      returnArray.push(s);
    });

    return returnArray;
  }
}

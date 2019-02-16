import { Node } from './Node';

export class Graph {
  public UNDIRECTED = Symbol('undirected graph');
  public DIRECTED = Symbol('directed graph');
  public nodes = new Map<any, Node>();
  public edgeDirection = this.DIRECTED;

  addVertex(value): Node {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
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

  addEdge(source: Node, destination: Node) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if (this.edgeDirection === this.UNDIRECTED) {
      destination.addAdjacent(source);
    }

    return [sourceNode, destinationNode];
  }

  removeEdge(source: Node, destination: Node) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);

      if (this.edgeDirection === this.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, destinationNode];
  }
}

export class Node {
  public adjacents = new Array<Node>();

  constructor(public value: any) {}

  addAdjacent(node: Node) {
    this.adjacents.push(node);
  }

  removeAdjacent(node: Node): Node {
    const index = this.adjacents.indexOf(node);
    if (index > -1) {
      this.adjacents.splice(index, 1);
    }

    return node;
  }

  isAdjacent(node: Node) {
    return this.adjacents.indexOf(node) > -1;
  }

  toString() {
    let s = ``;

    this.adjacents.forEach(n => {
      s += n.value + `,`;
    });
    s = s.substring(0, s.length - 1); // * remove last ,

    return s;
  }
}

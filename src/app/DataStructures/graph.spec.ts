import { Graph, DIRECTION } from './Graph';

fdescribe('graph class tests', () => {

  it('should create', () => {
    const g = new Graph(DIRECTION.UNDIRECTED);
    expect(g).toBeTruthy();
  });


  it('can correctly create graph with nodes', () => {
    console.log(`Starting to create graph`);
    const g = new Graph(DIRECTION.UNDIRECTED);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);

    console.dir(g);

    expect(g).toBeTruthy();
  });
});
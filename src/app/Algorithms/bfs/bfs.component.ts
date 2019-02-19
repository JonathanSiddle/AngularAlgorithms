import { Graph, DIRECTION } from './../../DataStructures/Graph';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bfs',
  templateUrl: './bfs.component.html',
  styleUrls: ['./bfs.component.css']
})
export class BFSComponent implements OnInit {

  public graph: Graph;

  constructor() { }

  ngOnInit() {
    this.graph = new Graph(DIRECTION.UNDIRECTED);
    this.graph.addEdge(1, 2);
    this.graph.addEdge(1, 3);
    this.graph.addEdge(1, 4);
    this.graph.addEdge(2, 5);
    this.graph.addEdge(3, 6);
    this.graph.addEdge(3, 7);
    this.graph.addEdge(4, 8);
    this.graph.addEdge(5, 9);
    this.graph.addEdge(6, 10);

    console.dir(this.graph);
    console.log(this.graph.toString());
  }

}

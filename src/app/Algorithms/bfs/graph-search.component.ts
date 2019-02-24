import { Graph, DIRECTION } from './../../DataStructures/Graph';
import { Component, OnInit } from '@angular/core';
import { Node } from 'src/app/DataStructures/Node';
import { debug } from 'util';

@Component({
  selector: 'app-graph-search',
  templateUrl: './graph-search.component.html',
  styleUrls: ['./graph-search.component.css']
})
export class GraphSearchComponent implements OnInit {
  public graph: Graph;
  public first: Node;

  public node1: any;
  public node2: any;
  public valueToSearch: string;

  public graphOutput: Array<string>;
  public debug: Array<string>;

  constructor() {}

  ngOnInit() {
    this.graph = new Graph(DIRECTION.UNDIRECTED);
    [this.first] = this.graph.addEdge(1, 2);
    this.graph.addEdge(1, 3);
    this.graph.addEdge(1, 4);
    this.graph.addEdge(5, 2);
    this.graph.addEdge(6, 3);
    this.graph.addEdge(7, 3);
    this.graph.addEdge(8, 4);
    this.graph.addEdge(9, 5);
    this.graph.addEdge(10, 6);

    // [this.first] = this.graph.addEdge(1, 8);
    // this.graph.addEdge(1, 6);
    // this.graph.addEdge(1, 7);
    // this.graph.addEdge(2, 8);
    // this.graph.addEdge(3, 6);
    // this.graph.addEdge(5, 6);
    // this.graph.addEdge(4, 2);

    console.dir(this.graph);
    console.log(this.graph.toString());

    this.graphOutput = this.graph.toStringArray();

    // const bfsFromFirst = this.graph.bfs(this.first);
    // const asArray = Array.from(bfsFromFirst);
    // asArray.forEach(n => {
    //   console.log(n.value);
    // })
  }

  addNodes() {
    console.log(`Adding (${this.node1}, ${this.node2})`);
    this.graph.addEdge(+this.node1, +this.node2);
    this.graphOutput = this.graph.toStringArray();
  }

  searchForValueBF() {
    console.log(`Searching for value: ${this.valueToSearch}`);
    const bfsFromFirst = this.graph.bfs(this.first, this.valueToSearch);
    const asArray = Array.from(bfsFromFirst);

    this.debug = new Array<string>();
    this.debug.push(`Checked:`);
    for (const n of asArray) {
      this.debug.push(n.value);
    }
  }

  searchForValueDF() {
    console.log(`Searching for value: ${this.valueToSearch}`);
    const bfsFromFirst = this.graph.dfs(this.first, this.valueToSearch);
    const asArray = Array.from(bfsFromFirst);

    this.debug = new Array<string>();
    this.debug.push(`Checked:`);
    for (const n of asArray) {
      this.debug.push(n.value);
    }
  } 
}

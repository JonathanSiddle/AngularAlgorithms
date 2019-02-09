import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})
export class MergeSortComponent implements OnInit {
  public inputListRaw = ``;
  public sortedList = '';
  public debug = new Array<string>();

  constructor() {}

  ngOnInit() {}

  // method called from Angular component that initiates the sorting
  sortInput() {
    this.debug = new Array<string>();
    const list = this.inputListRaw.split(';').map(s => +s);
    // const newList = this.selectionSort(list);
    // this.sortedList = newList.join(';');
    const sorted = this.mergeSort(list);
    this.sortedList = sorted.join(';');
  }

  mergeSort(input: Array<number>): Array<number> {
    this.debug.push(`Input: ${input}`);
    if (input.length <= 1) {
      return input;
    }

    // split list into two
    const mid = Math.round(input.length / 2);

    const l = new Array<number>();
    const r = new Array<number>();

    for (let x = 0; x < mid; x++) {
      l.push(input[x]);
    }
    for (let x = mid; x < input.length; x++) {
      r.push(input[x]);
    }

    // still > 2 elements in input so call merge sort again
    this.debug.push(`Split input to: (left) ${l} | (right) ${r}`);
    const lSorted = this.mergeSort(l);
    const rSorted = this.mergeSort(r);
    return this.merge(lSorted, rSorted);
  }

  // method merges left and right sides of a list in order
  merge(left: Array<number>, right: Array<number>): Array<number> {
    const result = new Array<number>();

    this.debug.push(`Merging: (left) ${left} | (right) ${right}`);
    // keep going to both left and right have no elements
    while (left.length > 0 || right.length > 0) {
      // if both lists have > 0 keep check both for which
      // element needs to come next
      if (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
          result.push(left[0]);
          left.splice(0, 1);
        } else {
          result.push(right[0]);
          right.splice(0, 1);
        }
      } else if (left.length > 0) {
        result.push(left[0]);
        left.splice(0, 1);
      } else if (right.length > 0) {
        result.push(right[0]);
        right.splice(0, 1);
      }
    }

    this.debug.push(`Merged: ${result}`);
    return result;
  }

  getDebugStyle(i: string): string {
    let returnStyle = '';

    if (i.includes(`input`)) {
      returnStyle = `input`;
    } else if (i.includes(`output`)) {
      returnStyle = `output`;
    } else if (i.includes(`Merg`) || i.includes(`split`)) {
      returnStyle = `info`;
    }

    return returnStyle;
  }
}

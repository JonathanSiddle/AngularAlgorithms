import { Component, OnInit } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {
  public inputListRaw = ``;
  public sortedList = '';
  public debug = new Array<string>();

  constructor() {}

  ngOnInit() {}

  // method called from Angular component that initiates the sorting
  sortInput() {
    const list = this.inputListRaw.split(';').map(s => +s);
    // const newList = this.selectionSort(list);
    // this.sortedList = newList.join(';');
    this.bubbleSort(list);
    this.sortedList = list.join(';');
  }

  bubbleSort(input: Array<number>) {
    this.debug = new Array<string>();

    let swap = true;

    let listPass = 0;
    while (swap) {
      listPass += 1;
      swap = false;
      let swapDebug = ``;

      this.debug.push(`List Pass(${listPass}) input: ${input.toString()}`);
      swapDebug += `Swaps: `;
      for (let x = 0; x < input.length; x++) {
        // if not on last element
        // swap items if needed
        if (x !== input.length - 1 && input[x] > input[x + 1]) {
          swap = true;
          swapDebug += `(${input[x]}->${input[x + 1]}) `;
          const temp = input[x];
          input[x] = input[x + 1];
          input[x + 1] = temp;
        }
      }

      this.debug.push(swapDebug);
      this.debug.push(`List Pass(${listPass}) output: ${input.toString()}`);
    }
  }

  getDebugStyle(i: string): string {
    let returnStyle = '';

    if (i.includes(`input`)) {
      returnStyle = `input`;
    } else if (i.includes(`output`)) {
      returnStyle = `output`;
    } else if (i.includes(`Swap`)) {
      returnStyle = `info`;
    }

    return returnStyle;
  }
}

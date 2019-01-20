import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css']
})
export class QuickSortComponent implements OnInit {

  public inputListRaw = ``;
  public sortedList = '';
  public debug = new Array<string>();

  constructor() { }

  ngOnInit() {
  }

  generateNums() {
    const nums = new Array<number>();

    // generate 10 unique numbers
    while (nums.length < 10) {
      const n = Math.floor(Math.random() * 255);
      if (nums.filter(number => number === n).length === 0) {
        nums.push(n);
      }
    }

    this.inputListRaw = nums.join(`;`);
  }

  // method called from Angular component that initiates the sorting
  sortInput() {
    this.debug = new Array<string>();
    const list = this.inputListRaw.split(';').map(s => +s);
    this.quickSort(list, 0, list.length - 1);
    this.sortedList = list.join(';');
  }

  quickSort(input: Array<number>,
                left: number, right: number) {
    if (left < right) {
      this.debug.push(`Input: ${input}`);
      console.log(`Input: ${input}`);
      // get pivot point and put pivot element in
      // the correct location
      const pivPoint = this.partition(input, left, right);
      this.debug.push(`Pivot: ${input[pivPoint]} | output: ${input}`);

      this.quickSort(input, left, pivPoint - 1);
      this.quickSort(input, pivPoint + 1, right);
    }
  }

  // this function sorts the elements to the left
  // and right of the pivot point
  partition(a: Array<number>,
    left: number, right: number): number {
    const pivot = a[right];

    let i = left;

    for (let x = i; x < right; x++) {
      if (a[x] <= pivot) {
        this.swapElement(a, i, x);
        i += 1;
      }
    }

    this.swapElement(a, i, right);
    return i;
  }

  swapElement(arr: Array<number>, i1: number, i2: number) {
    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }

  getDebugStyle(i: string): string {
    let returnStyle = '';

    if (i.includes(`Input`)) {
      returnStyle = `input`;
    } else if (i.startsWith(`Sorted`)) {
      returnStyle = `output`;
    } else if (i.includes(`Pivot`) || i.startsWith(`L/R`)) {
      returnStyle = `info`;
    }

    return returnStyle;
  }
}

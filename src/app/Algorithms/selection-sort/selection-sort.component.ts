import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css']
})
export class SelectionSortComponent implements OnInit {

  public inputListRaw = ``;
  public sortedList = '';

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
    const list = this.inputListRaw.split(';').map(s => +s);
    // const newList = this.selectionSort(list);
    // this.sortedList = newList.join(';');
    this.selectionSortInPlace(list);
    this.sortedList = list.join(';');
  }

  // simplified version of selection sort that uses a second list
  selectionSort(oldList: Array<number>): Array<number> {
    const newList = new Array<number>();

    const oldListLength = oldList.length;
    for (let x = 0; x < oldListLength; x++) {
      const smallestIndex = this.getSmallestItemIndex(oldList);
      newList.push(oldList[smallestIndex]);
      oldList.splice(smallestIndex, 1);
    }

    return newList;
  }

  // version of the selection sort that does not create a new list
  selectionSortInPlace(list: Array<number>) {

    const oldListLength = list.length;
    for (let x = 0; x < oldListLength; x++) {
      let smallestIndex = x;

      for (let y = x + 1; y < oldListLength; y++) {
        if (list[y] < list[smallestIndex]) {
          smallestIndex = y;
        }
      }

      // swap min index value with current value
      const temp = list[smallestIndex];
      list[smallestIndex] = list[x];
      list[x] = temp;
    }
  }

  // utility method to get the smallest item of an array
  getSmallestItemIndex(list: Array<number>): number {
    if (list.length <= 0) { return -1; }

    let smallestElement = list[0];
    let smallestIndex = 0;
    for (let x = 0; x < list.length; x++) {
      const item = list[x];
      if (item < smallestElement) {
        smallestElement = item;
        smallestIndex = x;
      }
    }

    return smallestIndex;
  }
}

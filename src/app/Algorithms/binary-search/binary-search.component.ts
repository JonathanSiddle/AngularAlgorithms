import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.css']
})
export class BinarySearchComponent implements OnInit {

  public listSizeValue = ``;
  public numberOfChecks = ``;
  public inputListRaw = ``;
  public sortedList = new Array<number>();
  public findItem = ``;
  public itemsChecked = ``;
  public foundItem = ``;

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

  findItemInList() {
    // convert string back into array and convert to numbers
    const items = this.inputListRaw.split(`;`).map(s => +s);
    this.sortedList = items.sort((a, b) => a - b);

    this.foundItem = this.binarySearch(+this.findItem, this.sortedList);
  }

  clickedCalculate() {
    this.calculateMaximumNumberOfChecks(this.listSizeValue);
  }

  calculateMaximumNumberOfChecks(listSize: string) {
    this.numberOfChecks = this.getBaseLog(2, +listSize);
  }

  getBaseLog(x: number, y: number): string {
    const n = Math.log(y) / Math.log(x);
    return Math.round(n).toString();
  }

  // This is where the fun happens!!
  binarySearch(itemToFind: number, listOfItems: Array<number>) {
    this.itemsChecked = ``;
    const itemsChecked = new Array<number>();

    let low = 0;
    let high = listOfItems.length -1;

    while(low <= high) {
      const mid = Math.round((low + high)/2);
      const guess = listOfItems[mid];

      itemsChecked.push(guess);
      if (guess === itemToFind) {
        this.itemsChecked = `${itemsChecked.join(` ; `)} - Checked ${itemsChecked.length} items`;
        return guess.toString();
      } else if (guess > itemToFind) {
        high = mid -1;
      } else {
        low = mid +1;
      }
    }

    return ``;
  }
}

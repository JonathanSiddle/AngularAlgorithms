import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-gen',
  templateUrl: './number-gen.component.html',
  styleUrls: ['./number-gen.component.css']
})
export class NumberGenComponent implements OnInit {
  @Input() public itemCount = 10;
  @Input() public inputListRaw = ``;
  @Output() public inputListRawChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  generateNums() {
    const nums = new Array<number>();

    // generate 10 unique numbers
    while (nums.length < this.itemCount) {
      const n = Math.floor(Math.random() * 500);
      if (nums.filter(number => number === n).length === 0) {
        nums.push(n);
      }
    }

    this.inputListRaw = nums.join(`;`);
    this.inputListRawChange.emit(this.inputListRaw);
  }
}

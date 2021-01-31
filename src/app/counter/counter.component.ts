import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  result = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setResult(num): void {
    // let updatedResult = this.result + num;
    // if (updatedResult < 0) {
    //   updatedResult = 0;
    // }
    let updatedResult;
    (this.result + num) > 0
      ? updatedResult = this.result + num
      : updatedResult = 0;
    if (!num) {
      updatedResult = 0;
    }
    this.result = updatedResult;
  }



}

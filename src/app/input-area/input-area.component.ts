import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {

  @Output()
  surfacing = new EventEmitter();

  inputNumber: number;

  constructor() { }

  ngOnInit(): void {
  }

  getNumber(e): void {
    this.inputNumber = e.target.valueAsNumber;
  }

  carryValue(num): void {
    this.surfacing.emit(num);
     this.inputNumber = null; // don't know how to zero my input's value correctly
  }
}

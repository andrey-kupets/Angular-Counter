import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {buttonsData} from '../../data/data';

@Component({
  selector: 'app-buttons-array',
  templateUrl: './buttons-array.component.html',
  styleUrls: ['./buttons-array.component.css']
})
export class ButtonsArrayComponent implements OnInit {

  @Output()
  surfacing = new EventEmitter();

  buttonsArray = buttonsData;

  constructor() { }

  ngOnInit(): void {
  }

  carryValue(num): void {
    this.surfacing.emit(num);
  }



}

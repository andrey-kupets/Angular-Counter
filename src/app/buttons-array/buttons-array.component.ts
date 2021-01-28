import { Component, OnInit } from '@angular/core';
import {buttonsData} from '../../data/data';

@Component({
  selector: 'app-buttons-array',
  templateUrl: './buttons-array.component.html',
  styleUrls: ['./buttons-array.component.css']
})
export class ButtonsArrayComponent implements OnInit {

  buttonsArray = buttonsData;

  constructor() { }

  ngOnInit(): void {
  }


}

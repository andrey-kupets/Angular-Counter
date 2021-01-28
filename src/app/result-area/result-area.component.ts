import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent implements OnInit {

  @Input()
  result = 0;


  constructor() { }

  ngOnInit(): void {
  }

}

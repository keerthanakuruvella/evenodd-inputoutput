import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
 
  @Input() data1: any;
  @Output() childata = new EventEmitter<any>();

  getArraydata() {
    let result = [];
    for (var i = 0; i < this.data1.length; i++) {
      if (this.data1[i] % 2 == 0) {
        result.push("even");
      }
      else {
        result.push("odd");
      }
    }
    this.childata.emit(result);
  }
  

  ngOnInit(): void {
  }

}

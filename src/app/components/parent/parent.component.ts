import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  data = [7, 3, 4, 9, 2];

  ngOnInit(): void {
  }
  getchilddata(event: any) {
    // event = this.data;
    console.log(event);
    //event = [];
  }

}

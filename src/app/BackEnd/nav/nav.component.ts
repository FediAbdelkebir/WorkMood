import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  stats=false;
  management=true;
  constructor() { }
  ngOnInit(): void {
    this.ShowManagement();
  }
  ShowStats(){
    this.stats=true;
    this.management=false;
  }
  ShowManagement(){
    this.management=true;
    this.stats=false;
  }

}

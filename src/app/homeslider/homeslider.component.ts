import { state, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.css']
})
export class HomesliderComponent implements OnInit {
  componentLoaded = false;
  constructor() { }

  ngOnInit(): void {
    this.componentLoaded = true;
  }

}

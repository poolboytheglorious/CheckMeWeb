import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle = 'CheckThat';
  constructor() { }
  x: Element;

  ngOnInit() {
  }

  showMenu() {
    this.x = document.getElementById('myTopNav');
    if (this.x.className === 'topnav') {
      this.x.className += 'responsive';
    } else {
      this.x.className = 'topnav';
    }

  }


}

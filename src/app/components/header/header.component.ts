import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public mobile = false;

  ngOnInit() {
    // this.mobile = true;
          if (window.screen.width <= 420) { // 768px portrait
            this.mobile = true;
          }

  }

}

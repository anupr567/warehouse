import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  template: `<h1>Welcome to Warehouse</h1>
  <button routerLink='/inventory'>Get started</button>
  <router-outlet></router-outlet>`,
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

}

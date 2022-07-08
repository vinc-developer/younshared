import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  item = false;
  menu = false;
  constructor() {}

  addPost($event: any) {
    this.item = !this.item;
  }

  openMenu($event: any) {
    this.menu = !this.menu;
  }
}

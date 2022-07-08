import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Output() menu = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  openMenu() {
    this.menu.emit(true);
  }
}

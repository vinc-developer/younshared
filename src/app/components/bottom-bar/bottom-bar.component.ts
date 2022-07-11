import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {

  @Output() views = new EventEmitter<any>();

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  home() {
    this.navCtrl.navigateRoot('home');
  }

  profile(){
    this.navCtrl.navigateRoot('account/profile');
  }

  newPost() {
    this.views.emit(true);
  }
}

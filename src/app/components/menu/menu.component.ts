import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/user';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() menu = new EventEmitter<any>();
  user: User;

  constructor(private userService: UserService, private navCtrl: NavController) { }

  ngOnInit() {
    this.userService.currentUser().subscribe(
      (response) => {
        this.user = response;
      }
    );
  }

  goTo(link: string) {
    this.menu.emit(true);
    this.navCtrl.navigateRoot(link);
  }
}

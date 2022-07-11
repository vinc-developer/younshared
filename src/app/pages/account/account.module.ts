import {ProfilUserComponent} from './containers/profil-user/profil-user.component';
import {NgModule} from '@angular/core';
import {CardUserComponent} from './components/card-user/card-user.component';
import {AccountRoutingModule} from './account-routing.module';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProfilUserComponent,
    CardUserComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class AccountModule {}

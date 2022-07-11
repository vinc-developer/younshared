import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfilUserComponent} from './containers/profil-user/profil-user.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}

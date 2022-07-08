import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {BottomBarComponent} from './components/bottom-bar/bottom-bar.component';
import {NewPostComponent} from './pages/posts/new-post/new-post.component';
import {FormsModule} from '@angular/forms';
import {CardUserComponent} from './components/card-user/card-user.component';
import {ProfilUserComponent} from './pages/account/profil-user/profil-user.component';
import {MenuComponent} from './components/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
      AppComponent,
      ToolbarComponent,
      BottomBarComponent,
      NewPostComponent,
      CardUserComponent,
      ProfilUserComponent,
      MenuComponent
    ],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,  HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

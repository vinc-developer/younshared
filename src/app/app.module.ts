import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {BottomBarComponent} from './components/bottom-bar/bottom-bar.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './components/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import {PostsModule} from './pages/posts/posts.module';
import {AccountModule} from './pages/account/account.module';

@NgModule({
    declarations: [
      AppComponent,
      ToolbarComponent,
      BottomBarComponent,
      MenuComponent
    ],
    imports: [BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      PostsModule,
      AccountModule
    ],
  providers: [{
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}

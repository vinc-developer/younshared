import {NgModule} from '@angular/core';
import {NewPostComponent} from './containers/new-post/new-post.component';
import {PostsRoutingModule} from './posts-routing.module';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        NewPostComponent,
    ],
    exports: [
        NewPostComponent
    ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    IonicModule,
    FormsModule
  ]
})

export class PostsModule {}

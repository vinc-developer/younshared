import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NewPostComponent} from './containers/new-post/new-post.component';

const routes: Routes = [
  {
    path: 'new-post',
    component: NewPostComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  PostsRoutingModule {}

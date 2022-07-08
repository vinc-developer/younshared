import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  @Output() views = new EventEmitter<any>();
  user = {
  id: 1,
  firstname: 'Vincent',
  lastname: 'Colas',
  pictureProfil: 'profile.png',
  work: 'developpeur'
};
  text = '';

  constructor(private postService: PostsService) { }

  ngOnInit() {}

  close() {
    this.views.emit(true);
  }

  addPhoto() {

  }

  addPost() {
    this.postService.addNewPost(this.text);
    this.views.emit(true);
  }
}

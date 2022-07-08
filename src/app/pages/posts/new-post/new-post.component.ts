import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostsService} from '../../../services/posts.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import {Posts} from '../../../models/posts';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  @Output() views = new EventEmitter<any>();
  user: User;
  text = '';

  constructor(private postService: PostsService, private serviceUser: UserService) { }

  ngOnInit() {
    this.serviceUser.currentUser().subscribe(
      (data) => {
        this.user = data;
      }
    );
  }

  close() {
    this.views.emit(true);
  }

  addPhoto() {

  }

  addPost() {
    const date = new Date();
    const post = new Posts(null, this.user, this.text, 'default.jpg', date.toString(), [], []);
    this.postService.addNewPost(post).subscribe(
      (response) => this.views.emit(true)
    );
  }
}

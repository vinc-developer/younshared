import {Component, Input, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Posts} from '../../models/posts';
import {PostsService} from '../../services/posts.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {
  @Input() postsUser: Posts[];
  text = '';
  public hideme: any = [];
  currentUser: User;

  constructor(private postService: PostsService, private userService: UserService) {}

  ngOnInit() {
    this.currentUser = this.userService.currentUser();
  }

  addLike(post: Posts) {
    this.postService.addLikeUserProfile(post);
  }

  checkLike(post: Posts) {
    let isLiked = false;
    const dislike = '';
    const like = 'isLiked';

    // eslint-disable-next-line guard-for-in,@typescript-eslint/prefer-for-of
    for (let i = 0; i < post.likes.length; i++){
      if(post.likes[i].idUser === this.currentUser.id){
        isLiked = !isLiked;
      }
    }

    if(isLiked){
      return like;
    }else{
      return dislike;
    }
  }

  deleteLike(post: Posts) {
    this.postService.deleteLikeUserProfile(post);
  }

  addComment(post: Posts) {
    this.postService.addCommentUserProfile(post, this.text);
    this.text = '';
  }

}

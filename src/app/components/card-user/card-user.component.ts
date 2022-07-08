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
     this.userService.currentUser().subscribe(
      (response) => {
        this.currentUser = response;
      }
    );
  }

  addLike(post: Posts) {
    const like = {
      idUser: this.currentUser.id,
      idPost: post.id
    };
    this.postService.addLike(like).subscribe();
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
   // this.postService.deleteLikeUserProfile(post);
  }

  deleteComment(post: Posts){

  }

  addComment(post: Posts) {
    const com = {
      id: null,
      idPost: post.id,
      text: this.text,
      user: this.currentUser
    };
    this.postService.addComment(com).subscribe(
      (response) =>  this.text = ''
    );
  }
}

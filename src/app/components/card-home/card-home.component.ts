import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {Posts} from '../../models/posts';
import {PostsService} from '../../services/posts.service';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss'],
})
export class CardHomeComponent implements OnInit {
  @Input() posts: Posts[];
  text = '';
  user: User;
  public hideme: any = [];

  constructor(private postService: PostsService, private userService: UserService) {}

  ngOnInit() {
    this.userService.currentUser().subscribe(
      (response) => {
        this.user = response;
      }
    );
  }

  addLike(post: Posts) {
    const like = {
      idUser: this.user.id,
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
      if(post.likes[i].idUser === this.user.id){
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
    this.postService.deleteLike(post);
  }

  deleteComment(post: Posts){

  }

  addComment(post: Posts) {
    const com = {
      id: null,
      idPost: post.id,
      text: this.text,
      user: this.user
    };
    this.postService.addComment(com).subscribe(
      (response) =>  this.text = ''
    );
  }
}

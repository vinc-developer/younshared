import {Component, Input, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Posts} from '../../models/posts';
import {PostsService} from '../../services/posts.service';
import {User} from '../../models/user';
import {Comment} from '../../models/comment';

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
  public modal: any = [];
  public modalPost: any = [];

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
    this.postService.addLike(like).subscribe(
      (response) => {
        this.postsUser.forEach(el => {
          if(el.id === post.id){
            const likes = {
              idUser: this.currentUser.id,
              idPost: post.id
            };
            el.likes.push(likes);
          }
        });
      }
    );
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
    const like = {
      idUser: this.currentUser.id,
      idPost: post.id
    };
    this.postService.deleteLike(like).subscribe(
      (response) => {
        this.postsUser.forEach(el => {
          if(el.id === post.id){
            el.likes.forEach(ele => {
              if(ele.idUser === 1){
                el.likes.splice(el.likes.findIndex(v => v.idUser === 1), 1);
              }
            });
          }
        });
      }
    );
  }

  deleteComment(com: Comment){
    this.postService.deleteComment(com.id).subscribe(
      (response) => {
        this.postsUser.forEach(el => {
          if(el.id === com.idPost){
            el.comments.forEach(ele => {
              if(ele.user.id === this.currentUser.id){
                el.comments.splice(el.comments.findIndex(v => v.id === com.id), 1);
              }
            });
          }
        });
      }
    );
  }

  addComment(post: Posts) {
    const com = {
      id: null,
      idPost: post.id,
      text: this.text,
      user: this.currentUser
    };
    this.postService.addComment(com).subscribe(
       (response) => {
        this.postsUser.forEach(el => {
          if (el.id === post.id){
            el.comments.push(response);
          }
        });
        this.text = '';
      }
    );
  }

  deletePost(post: Posts) {
    this.postService.deletePost(post).subscribe(
      (response) => {
        this.postsUser.forEach(el => {
          if(el.id === post.id && el.user.id === this.currentUser.id){
            this.postsUser.splice(this.postsUser.findIndex(v => v.id === post.id), 1);
          }
        });
      });
  }
}

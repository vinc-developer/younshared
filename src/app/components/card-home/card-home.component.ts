import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {Posts} from '../../models/posts';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss'],
})
export class CardHomeComponent implements OnInit {
  @Input() posts: Posts[];
  text = '';
  public hideme: any = [];
  currentUser = {
    id: 1,
    firstname: 'Vincent',
    lastname: 'Colas',
    pictureProfil: 'profile.png',
    work: 'developpeur'
  };

  constructor(private postService: PostsService) {}

  ngOnInit() {
  }

  addLike(post: Posts) {
    this.postService.addLike(post);
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
    this.postService.deleteLike(post);
  }

  addComment(post: Posts) {
    this.postService.addComment(post, this.text);
    this.text = '';
  }
}

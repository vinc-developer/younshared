import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts/services/posts.service';
import {Posts} from '../posts/models/posts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  posts: Posts[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.posts = response;
      }
    );
  }

}

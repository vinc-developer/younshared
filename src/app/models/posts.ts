import {User} from './user';
import {Comment} from './comment';
import {Like} from './like';

export class Posts {
  id: number | null;
  user: User;
  text: string;
  picturePost: string;
  date: string;
  comments: Comment[];
  likes: Like[];

  constructor(id: number | null, user: User, text: string, picturePost: string, date: string, comments: any[], likes: any[]) {
    this.id = id;
    this.user = user;
    this.text = text;
    this.picturePost = picturePost;
    this.date = date;
    this.comments = comments;
    this.likes = likes;
  }
}

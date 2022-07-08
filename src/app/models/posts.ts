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
}

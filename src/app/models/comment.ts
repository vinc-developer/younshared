import {User} from './user';

export class Comment {
  id: number | null;
  idPost: number;
  text: string;
  user: User;
}

import {User} from '../../account/models/user';

export class Comment {
  id: number | null;
  idPost: number;
  text: string;
  user: User;
}

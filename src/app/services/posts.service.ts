import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Posts} from '../models/posts';
import {UserService} from './user.service';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = environment.baseUrl;
  postService = [
    {
      id: 1,
      user: {
        id: 1,
        firstname: 'Vincent',
        lastname: 'Colas',
        pictureProfil: 'profile.png',
        work: 'développeur'
      },
      // eslint-disable-next-line max-len
      text: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. ',
      picturePost: 'bureau.jpg',
      date: '2022-07-04T15:00:00',
      comments: [
        {
          id: 1,
          idPost: 1,
          // eslint-disable-next-line max-len
          text: 'Le commentaire de paul dupont, il va etre un peu long, exprèes pour voir un resultat, mais je doit encore ajouter des mots pour qu\'il soit vraiment très très long.',
          user: {
            id: 2,
            firstname: 'Paul',
            lastname: 'Dupont',
            pictureProfil: 'profile.png',
            work: 'commercial'
          }
        }
      ],
      likes: [
        {
          idUser: 2,
          idPost: 1
        },
        {
          idUser: 3,
          idPost: 1
        }
      ],
    },
    {
      id: 2,
      user: {
        id: 3,
        firstname: 'Alex',
        lastname: 'Terrieur',
        pictureProfil: 'profile.png',
        work: 'Testeur'
      },
      // eslint-disable-next-line max-len
      text: 'Voyage au centre de la Terre est un roman d\'aventures, écrit en 1864 par Jules Verne. Cette fiction souterraine ' +
        'fut publiée en édition originale in-18 le 25 novembre 1864, puis en grand in-octavo le 13 mai 1867. Le texte de 1867 ' +
        'comporte deux chapitres de plus (45 au lieu de 43) que celui de 18641. Voyage au centre de la Terre est le troisième roman ' +
        'd\'aventure que publie Jules Verne après Cinq Semaines en ballon paru en 1863. ',
      date: '2022-07-03T15:00:00',
      picturePost: 'victor.jpg',
      comments: [
        {
          id: 2,
          idPost: 2,
          // eslint-disable-next-line max-len
          text: 'magnifique illustration, victore hugo est un super ecrivain',
          user: {
            id: 1,
            firstname: 'Vincent',
            lastname: 'Colas',
            pictureProfil: 'profile.png',
            work: 'développeur'
          }
        },
        {
          id: 3,
          idPost: 2,
          // eslint-disable-next-line max-len
          text: 'whooooo telement beau cet elephant qui vole !!!!!',
          user: {
            id: 2,
            firstname: 'Paul',
            lastname: 'Dupont',
            pictureProfil: 'profile.png',
            work: 'commercial'
          }
        }
      ],
      likes: [
        {
          idUser: 1,
          idPost: 2
        },
        {
          idUser: 2,
          idPost: 2
        },
      ],
    }
  ];
  postUser = [
    {
      id: 1,
      user: {
        id: 1,
        firstname: 'Vincent',
        lastname: 'Colas',
        pictureProfil: 'profile.png',
        work: 'développeur'
      },
      // eslint-disable-next-line max-len
      text: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. ',
      picturePost: 'bureau.jpg',
      date: '2022-07-04T15:00:00',
      comments: [
        {
          id: 1,
          idPost: 1,
          // eslint-disable-next-line max-len
          text: 'Le commentaire de paul dupont, il va etre un peu long, exprèes pour voir un resultat, mais je doit encore ajouter des mots pour qu\'il soit vraiment très très long.',
          user: {
            id: 2,
            firstname: 'Paul',
            lastname: 'Dupont',
            pictureProfil: 'profile.png',
            work: 'commercial'
          }
        }
      ],
      likes: [
        {
          idUser: 2,
          idPost: 1
        },
        {
          idUser: 3,
          idPost: 1
        }
      ],
    },
    {
      id: 5,
      user: {
        id: 1,
        firstname: 'Vincent',
        lastname: 'Colas',
        pictureProfil: 'profile.png',
        work: 'développeur'
      },
      // eslint-disable-next-line max-len
      text: 'Mon future ordinateur portable, Omen I7 16Go de ram, clavier retro éclairer',
      picturePost: 'laptop.jpg',
      date: '2022-07-05T15:00:00',
      comments: [
      ],
      likes: [
        {
          idUser: 2,
          idPost: 1
        },
        {
          idUser: 3,
          idPost: 1
        }
      ],
    },
  ];

  constructor(private serviceUser: UserService, private http: HttpClient) { }

  /* home */

  getAllPosts(): Observable<Posts[]>{
    return of(this.postService);
   // return this.http.get<any>(`${this.baseUrl}/posts/get-all-home`);
  }

  addLike(post: Posts){
    this.postService.forEach(el => {
      if(el.id === post.id){
        const like = {
          idUser: 1,
          idPost: post.id
        };
        el.likes.push(like);
      }
    });
  }

  deleteLike(post: Posts) {
    this.postService.forEach(el => {
      if(el.id === post.id){
        el.likes.forEach(ele => {
          if(ele.idUser === 1){
            el.likes.splice(el.likes.findIndex(v => v.idUser === 1), 1);
          }
        });
      }
    });
  }

  addComment(post: Posts, text: string){
    this.postService.forEach(el => {
      if (el.id === post.id){
        const com = {
          id: 100,
          idPost: post.id,
          // eslint-disable-next-line max-len
          text,
          user: {
            id: 1,
            firstname: 'Vincent',
            lastname: 'Colas',
            pictureProfil: 'profile.png',
            work: 'developpeur'
          }
        };
        el.comments.push(com);
      }
    });
  }

  /* profil user */

  getAllPostsByUser(): Observable<Posts[]>{
    const user = this.serviceUser.currentUser();
    return of(this.postUser);
  }

  addLikeUserProfile(post: Posts){
    this.postUser.forEach(el => {
      if(el.id === post.id){
        const like = {
          idUser: 1,
          idPost: post.id
        };
        el.likes.push(like);
      }
    });
  }

  deleteLikeUserProfile(post: Posts) {
    this.postUser.forEach(el => {
      if(el.id === post.id){
        el.likes.forEach(ele => {
          if(ele.idUser === 1){
            el.likes.splice(el.likes.findIndex(v => v.idUser === 1), 1);
          }
        });
      }
    });
  }

  addCommentUserProfile(post: Posts, text: string){
    this.postUser.forEach(el => {
      if (el.id === post.id){
        const com = {
          id: 100,
          idPost: post.id,
          // eslint-disable-next-line max-len
          text,
          user: {
            id: 1,
            firstname: 'Vincent',
            lastname: 'Colas',
            pictureProfil: 'profile.png',
            work: 'developpeur'
          }
        };
        el.comments.push(com);
      }
    });
  }

  /* posts */
  addNewPost(text: string) {
    const date = new Date();
    const post = {
        id: 1,
        user: {
          id: 1,
          firstname: 'Vincent',
          lastname: 'Colas',
          pictureProfil: 'profile.png',
          work: 'developpeur'
        },
        // eslint-disable-next-line max-len
        text,
        picturePost: 'default.jpg',
        date: date.toString(),
        comments: [],
        likes: [],
    };
    this.postService.push(post);
  }
}

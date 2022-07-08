import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  currentUser(){
    return {
      id: 1,
      firstname: 'Vincent',
      lastname: 'Colas',
      pictureProfil: 'profile.png',
      work: 'développeur'
    };
  }
}

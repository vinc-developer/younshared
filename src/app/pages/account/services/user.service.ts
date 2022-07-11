import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { Observable } from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  currentUser(): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/get-by-id/` + 1);
   /* return {
      id: 1,
      firstname: 'Vincent',
      lastname: 'Colas',
      pictureProfil: 'profile.png',
      work: 'développeur'
    };*/
  }
}

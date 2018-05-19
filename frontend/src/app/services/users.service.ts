import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  usersUrl = 'http://localhost:3000/api/users';

  getUsers() {
    return this.http.get(this.usersUrl);
  }

}

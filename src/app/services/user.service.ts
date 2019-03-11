import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
    getUsers(): Observable<User[]>  {
        return this.http.get('/users?_sort=id&_order=desc').pipe(map((resp: User[]) => {
              return resp;
        }));
    }
    getUser(id: number): Observable<User>  {
        return this.http.get(`/users/${id}`).pipe(map((resp: User) => {
              return resp;
        }));
    }
    createUser(data: User): Observable<User>  {
        return this.http.post('/users', data).pipe(map((resp: User) => {
              return resp;
        }));
    }
    updateUser(data: User, id: number): Observable<User>  {
        return this.http.put(`/users/${id}`, data).pipe(map((resp: User) => {
              return resp;
        }));
    }
}

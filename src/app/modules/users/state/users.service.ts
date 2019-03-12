import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersStore } from './users.store';
import { User } from './users.model';

@Injectable({providedIn: 'root'})
export class UsersService {

    constructor(
        private http: HttpClient,
        private usersStore: UsersStore,
        private router: Router,
    ) {}

    getUsers() {
        this.http.get('/users').subscribe((data: User[]) => {
            this.usersStore.set(data);
        });
    }

    getUser(id) {
        this.http.get(`/users/${id}`).subscribe((data: User) => {
            this.usersStore.add(data);
        });
    }

    addUser(country: User) {
        this.http.post('/users', country).subscribe((data: User) => {
            this.usersStore.add(data);
            this.router.navigate(['/users/list']);
        });
    }

    updateUser(name: string, id: number) {
        this.http.put(`/users/${id}`, name).subscribe((data: User) => {
            this.usersStore.update(data.id, {name: data.name});
            this.router.navigate(['/users/list']);
        });
    }
}

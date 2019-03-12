import { Component, OnInit } from '@angular/core';
import { animations } from '../../../animations/animations';
import { UsersService } from '../state/users.service';
import { User } from '../state/users.model';
import { Observable } from 'rxjs';
import { UsersQuery } from '../state/users.query';
import { Router } from '@angular/router';


@Component({
    selector   : 'app-profile-info',
    templateUrl: './users-list.component.html',
    styleUrls  : ['./users-list.component.scss'],
    animations
})
export class UsersListComponent implements OnInit {
    users$: Observable<User[]>;
    selectLoading$: Observable<boolean>;
    constructor(
        private usersService: UsersService,
        private usersQuery: UsersQuery,
        private router: Router) {
    }

    ngOnInit() {
        this.users$ = this.usersQuery.selectAll();
        this.selectLoading$ = this.usersQuery.selectLoading();
        this.getUsers();
    }

    getUsers() {
        if (this.usersQuery.isPristine) {
            this.usersService.getUsers();
        }
    }

    editUser(id) {
        this.router.navigate(['/users/edit', id]);
    }
}
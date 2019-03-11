import { Component, OnInit, ViewChild } from '@angular/core';
import {animations} from '../../../animations/animations';
import { User } from '../../../models/User';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserService } from '../../../services/user.service';



@Component({
    selector   : 'app-profile-info',
    templateUrl: './users-list.component.html',
    styleUrls  : ['./users-list.component.scss'],
    animations
})
export class UsersListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    users: User[] = [];
    dataSource = new MatTableDataSource<User>(this.users);

    constructor(private userService: UserService) {
    }

    displayedColumns: string[] = ['index', 'id', 'name', 'actions'];

    ngOnInit() {
        this.userService.getUsers().subscribe(data => {
            this.users = data;
            this.dataSource.data = this.users;
            this.dataSource.paginator = this.paginator;
        });
    }
}
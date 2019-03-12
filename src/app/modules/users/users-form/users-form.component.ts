import { Component, OnInit} from '@angular/core';
import { animations } from '../../../animations/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersQuery } from '../state/users.query';
import { UsersService } from '../state/users.service';

@Component({
    selector   : 'app-user-form',
    templateUrl: './users-form.component.html',
    styleUrls  : ['./users-form.component.scss'],
    animations,
})
export class UsersFormComponent implements OnInit {
    userForm: FormGroup;
    pageType: string;
    user$ = this.userQuery.selectEntity(this.userId);
    constructor(private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private userQuery: UsersQuery,
                private userService: UsersService) {
        this.userForm = this.createUserForm();
    }

    ngOnInit() {
        if (this.userId) {
            this.pageType = 'edit';
            if (this.userQuery.hasEntity(this.userId) === false) {
                this.userService.getUser(this.userId);
            }
        }
    }

    createUserForm() {
        return this.formBuilder.group({
            name: ['', Validators.required],
        });
    }

    addUser() {
        this.userService.addUser(this.userForm.value);
    }

    saveUser() {
        this.userService.updateUser(this.userForm.value, this.userId);
    }

    get userId() {
        return this.activatedRoute.snapshot.params.id;
    }
}

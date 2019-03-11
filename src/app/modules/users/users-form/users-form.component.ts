import { Component, OnInit } from '@angular/core';
import { animations } from '../../../animations/animations';
import { User } from '../../../models/User';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
    selector   : 'app-users-form',
    templateUrl: './users-form.component.html',
    styleUrls  : ['./users-form.component.scss'],
    animations
})
export class UsersFormComponent implements OnInit {
    user = new User();
    userForm: FormGroup;
    pageType: string;
    userId: number;
    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
        this.userId = route.snapshot.params.id;
        if (this.userId) {
            this.pageType = 'edit';
            this.userService.getUser(this.userId).subscribe(res => {
                this.user = new User(res);
                this.userForm = this.createUserForm();
            });
        } else {
            this.pageType = 'new';
            this.user = new User();
        }
        this.userForm = this.createUserForm();
    }

    ngOnInit() {
    }

    createUserForm() {
        return this.formBuilder.group({
            name: [this.user.name]
        });
    }

    addUser() {
        this.userService.createUser(this.userForm.value)
            .subscribe(res => {
                console.log(res);
                this.router.navigate(['/users/list']);
            }, (error) => {
                console.log(error);
            });
    }

    saveUser() {
        const body = this.userForm.value;
        this.userService.updateUser(body, this.userId)
            .subscribe(res => {
                console.log(res);
                this.router.navigate(['/users/list']);
            }, (error) => {
               console.log(error);
            });
    }
}
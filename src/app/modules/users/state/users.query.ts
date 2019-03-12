import { Injectable } from '@angular/core';
import { QueryEntity, ID } from '@datorama/akita';
import { UsersState, UsersStore } from './users.store';
import { User } from './users.model';

@Injectable({providedIn: 'root'})
export class UsersQuery extends QueryEntity<UsersState, User> {
    constructor(protected store: UsersStore) {
        super(store);
    }
}

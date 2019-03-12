import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from './users.model';


export interface UsersState extends EntityState<User> {}

@StoreConfig({ name: 'users' })
export class UsersStore extends EntityStore<UsersState, User> {
    constructor() {
        super();
    }
}

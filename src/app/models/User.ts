export class User {
    id: number;
    name: string;
    constructor(user?) {
        user = user || {};
        this.id = user.id || null;
        this.name = user.name || '';
    }
}

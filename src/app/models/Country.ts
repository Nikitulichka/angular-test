export class Country {
    id: number;
    name: string;
    constructor(country?) {
        country = country || {};
        this.id = country.id || null;
        this.name = country.name || '';
    }
}
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Country } from './country.model';


export interface CountryState extends EntityState<Country> {}

@StoreConfig({ name: 'counties' })
export class CountryStore extends EntityStore<CountryState, Country> {
    constructor() {
        super();
    }
}

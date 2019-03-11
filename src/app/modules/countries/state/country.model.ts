import { ID, guid } from '@datorama/akita';

export interface Country {
    id: ID;
    name: string;
}

export function createCountry({ name }: Partial<Country>) {
    return {
        id: guid(),
        name
    } as Country;
}

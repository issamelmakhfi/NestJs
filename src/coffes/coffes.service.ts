import { Injectable } from '@nestjs/common';
import { type } from 'os';

@Injectable()
export class CoffesService {
    private coffes = [
        {id: 1 , type: 'black'},
        {id: 2, type: 'Normal'},
    ];

    getCoffes(type?: 'black' | 'Normal') {
        if (type) {
            return this.coffes.filter((coffe) => coffe.type === type);
        }
        return this.coffes;
    }
}

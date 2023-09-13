import { Injectable , HttpException, HttpStatus, ConsoleLogger} from '@nestjs/common';
import { type } from 'os';
import { Coffe } from './Entties/coffe-entiy';
import { CreatCoffeDto } from './dto/creat-coffe.dto/creat-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto/update-coffe.dto';

@Injectable()
export class CoffesService {
    private coffes: CreatCoffeDto[] = [
        {
            id: 1,
            name: "hhhh",
            brand: "nike",
            flavor: ['chocolat', 'vanilla'],
        },
    ];

    findAll() {
        return this.coffes;
    }
    findOne(id: string) {
        const coofe = this.coffes.find(item => item.id === +id);
        if (!coofe) {
            throw new HttpException(`This #id ${id} not found`, HttpStatus.NOT_FOUND);
        }
        console.log(coofe);
        return coofe;
    }

    removeOne(id: string) {
        const res = this.coffes.findIndex(item => item.id === +id);
        console.log(res);
        if (res >= 0) {
            this.coffes.splice(res, 1);
            throw new HttpException(`This #id ${id} was removed`, HttpStatus.OK);
        }
        if (res < 0) {
            throw new HttpException(`This #id ${id} not found`, HttpStatus.NO_CONTENT);
        }
    }

    create(newCoffes: CreatCoffeDto) {
        this.coffes.push(newCoffes);
    }

    update(id: string, updateCoffe: UpdateCoffeDto) {
        const idx = this.coffes.findIndex(item => item.id === +id);

        this.coffes

    }
}

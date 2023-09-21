import { Injectable , HttpException, HttpStatus, ConsoleLogger, NotFoundException} from '@nestjs/common';
import { type } from 'os';
import { Coffee } from './Entties/coffe-entiy';
import { CreatCoffeDto } from './dto/creat-coffe.dto/creat-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto/update-coffe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoffesService {
    constructor (
        @InjectRepository(Coffee)
        private readonly coffeRepo: Repository<Coffee>,
    ) {}

    findAll() {
        return this.coffeRepo.find();
    }
    async findOne(id: any) {
        const coofe = await this.coffeRepo.findOne({where: {id}});
        if (!coofe) {
            throw new HttpException(`This #id ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return coofe;
    }

    async removeOne(id: any) {
        const res = await this.coffeRepo.findOne({where: {id}});
        return this.coffeRepo.remove(res);
    }

    create(newCoffes: CreatCoffeDto) {
        const coffee = this.coffeRepo.create(newCoffes);
        return this.coffeRepo.save(coffee);
    }

    async update(id: string, updateCoffe: UpdateCoffeDto) {
        const coffee = await this.coffeRepo.preload({
            id: +id,
            ...UpdateCoffeDto,
        });
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return this.coffeRepo.save(coffee);
    }
}

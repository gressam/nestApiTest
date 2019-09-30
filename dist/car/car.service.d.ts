import { Repository } from 'typeorm';
import { CarEntity } from './car.entity';
import { CarDTO } from './car.dto';
export declare class CarService {
    private carRepository;
    constructor(carRepository: Repository<CarEntity>);
    showAll(): Promise<CarEntity[]>;
    create(data: CarDTO): Promise<CarEntity>;
    read(id: string): Promise<CarEntity>;
    update(id: string, data: Partial<CarDTO>): Promise<CarEntity>;
    destroy(id: string): Promise<{
        deleted: boolean;
    }>;
}

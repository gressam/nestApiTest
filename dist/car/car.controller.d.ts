import { CarService } from './car.service';
import { CarDTO } from './car.dto';
export declare class CarController {
    private carService;
    constructor(carService: CarService);
    showAllCars(): Promise<import("./car.entity").CarEntity[]>;
    createCar(data: CarDTO): Promise<import("./car.entity").CarEntity>;
    readCar(id: string): Promise<import("./car.entity").CarEntity>;
    updateCar(id: string, data: Partial<CarDTO>): Promise<import("./car.entity").CarEntity>;
    destroy(id: string): void;
}

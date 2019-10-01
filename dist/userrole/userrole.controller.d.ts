import { UserroleService } from './userrole.service';
import { UserroleDTO } from './userrole.dto';
export declare class UserroleController {
    private userroleService;
    constructor(userroleService: UserroleService);
    getAll(): Promise<import("./userrole.entity").UserroleEntity[]>;
    create(data: UserroleDTO): Promise<import("./userrole.entity").UserroleEntity>;
    getOne(id: string): Promise<import("./userrole.entity").UserroleEntity>;
    update(id: string, data: Partial<UserroleDTO>): Promise<import("./userrole.entity").UserroleEntity>;
    delete(id: string): void;
}

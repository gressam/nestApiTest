import { UserroleEntity } from './userrole.entity';
import { Repository } from 'typeorm';
import { UserroleDTO } from './userrole.dto';
export declare class UserroleService {
    private userroleRepository;
    constructor(userroleRepository: Repository<UserroleEntity>);
    getAll(): Promise<UserroleEntity[]>;
    create(data: UserroleDTO): Promise<UserroleEntity>;
    getOne(id: string): Promise<UserroleEntity>;
    update(id: string, data: Partial<UserroleDTO>): Promise<UserroleEntity>;
    delete(id: string): Promise<UserroleEntity>;
}

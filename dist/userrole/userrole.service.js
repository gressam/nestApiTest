"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const userrole_entity_1 = require("./userrole.entity");
const typeorm_2 = require("typeorm");
let UserroleService = class UserroleService {
    constructor(userroleRepository) {
        this.userroleRepository = userroleRepository;
    }
    async getAll() {
        return await this.userroleRepository.find();
    }
    async create(data) {
        const userrole = await this.userroleRepository.create(data);
        await this.userroleRepository.save(userrole);
        return userrole;
    }
    async getOne(id) {
        const userrole = await this.userroleRepository.findOne({ where: { id } });
        if (!userrole) {
            throw new common_1.HttpException('Role with that id not exists', common_1.HttpStatus.NOT_FOUND);
        }
        return userrole;
    }
    async update(id, data) {
        let userrole = this.userroleRepository.findOne({ where: { id } });
        if (!userrole) {
            throw new common_1.HttpException('Role with that id not exists', common_1.HttpStatus.NOT_FOUND);
        }
        await this.userroleRepository.update({ id }, data);
        userrole = this.userroleRepository.findOne({ where: { id } });
        return userrole;
    }
    async delete(id) {
        const userrole = this.userroleRepository.findOne({ where: { id } });
        if (!userrole) {
            throw new common_1.HttpException('Role with that id not exists', common_1.HttpStatus.NOT_FOUND);
        }
        await this.userroleRepository.delete({ id });
        return userrole;
    }
};
UserroleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(userrole_entity_1.UserroleEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserroleService);
exports.UserroleService = UserroleService;
//# sourceMappingURL=userrole.service.js.map
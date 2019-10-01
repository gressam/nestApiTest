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
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async showAll() {
        const users = await this.userRepository.find({ relations: ['userRole'], cache: true });
        return users.map(user => user.toResponseObject(false));
    }
    async login(data) {
        const { username, password } = data;
        const user = await this.userRepository.findOne({
            where: { username },
            relations: ['userRole'],
            cache: true,
        });
        if (!user || !(await user.comparePassword(password))) {
            throw new common_1.HttpException('Invalid username/ password', common_1.HttpStatus.BAD_REQUEST);
        }
        return user.toResponseObject();
    }
    async register(data) {
        const { username } = data;
        let user = await this.userRepository.findOne({ where: { username } });
        if (user) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        user = await this.userRepository.findOne({ where: { id: user.id }, relations: ['userRole'], cache: true });
        return user.toResponseObject();
    }
    async delete(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.HttpException('User not exists', common_1.HttpStatus.NOT_FOUND);
        }
        await this.userRepository.delete({ id });
        return user;
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['userRole'], cache: true });
        if (!user) {
            throw new common_1.HttpException('User not exists', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async getUserRoleByUsername(username) {
        const user = await this.userRepository.findOne({ where: { username }, relations: ['userRole'], cache: true });
        if (!user) {
            throw new common_1.HttpException('User not exists', common_1.HttpStatus.NOT_FOUND);
        }
        return user.userRole;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
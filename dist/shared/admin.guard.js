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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const user_service_1 = require("../user/user.service");
let AdminGuard = class AdminGuard {
    constructor(userService) {
        this.userService = userService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { username } = Object(await this.validateToken(request.headers.authorization));
        const currentUserRole = Object(await this.userService.getUserRoleByUsername(username));
        return currentUserRole.name === 'Admin';
    }
    async validateToken(auth) {
        if (!auth) {
            throw new common_1.HttpException('Authorization header is empty', common_1.HttpStatus.NOT_FOUND);
        }
        if (auth.split(' ')[0] !== 'Bearer') {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.FORBIDDEN);
        }
        const token = auth.split(' ')[1];
        try {
            const decode = jwt.verify(token, process.env.SECRET);
            return decode;
        }
        catch (err) {
            const message = 'Token error: ' + (err.message || err.name);
            throw new common_1.HttpException(message, common_1.HttpStatus.FORBIDDEN);
        }
    }
};
AdminGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AdminGuard);
exports.AdminGuard = AdminGuard;
//# sourceMappingURL=admin.guard.js.map
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
const userrole_service_1 = require("./userrole.service");
const userrole_dto_1 = require("./userrole.dto");
const admin_guard_1 = require("../shared/admin.guard");
let UserroleController = class UserroleController {
    constructor(userroleService) {
        this.userroleService = userroleService;
    }
    getAll() {
        return this.userroleService.getAll();
    }
    create(data) {
        return this.userroleService.create(data);
    }
    getOne(id) {
        return this.userroleService.getOne(id);
    }
    update(id, data) {
        return this.userroleService.update(id, data);
    }
    delete(id) {
        this.userroleService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserroleController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(admin_guard_1.AdminGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userrole_dto_1.UserroleDTO]),
    __metadata("design:returntype", void 0)
], UserroleController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserroleController.prototype, "getOne", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(admin_guard_1.AdminGuard),
    common_1.UsePipes(new common_1.ValidationPipe()),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserroleController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(admin_guard_1.AdminGuard),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserroleController.prototype, "delete", null);
UserroleController = __decorate([
    common_1.Controller('userrole'),
    __metadata("design:paramtypes", [userrole_service_1.UserroleService])
], UserroleController);
exports.UserroleController = UserroleController;
//# sourceMappingURL=userrole.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const userrole_service_1 = require("./userrole.service");
const userrole_controller_1 = require("./userrole.controller");
const typeorm_1 = require("@nestjs/typeorm");
const userrole_entity_1 = require("./userrole.entity");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
let UserroleModule = class UserroleModule {
};
UserroleModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([userrole_entity_1.UserroleEntity, user_entity_1.UserEntity])],
        controllers: [userrole_controller_1.UserroleController],
        providers: [userrole_service_1.UserroleService, user_service_1.UserService],
    })
], UserroleModule);
exports.UserroleModule = UserroleModule;
//# sourceMappingURL=userrole.module.js.map
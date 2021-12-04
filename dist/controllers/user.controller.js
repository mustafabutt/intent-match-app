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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const users_schema_1 = require("../schemas/users.schema");
const users_service_1 = require("../services/users.service");
const exceptions_1 = require("../exceptions/exceptions");
const constant_1 = require("../constant");
let UserController = class UserController {
    constructor(userService, exceptions) {
        this.userService = userService;
        this.exceptions = exceptions;
    }
    async createUser(response, user) {
        try {
            const users = await this.userService.readAll();
            const match = await this.userService.match(user, users);
            return response.status(common_1.HttpStatus.CREATED).json({
                match,
            });
        }
        catch (err) {
            this.exceptions.generateGeneralException(err);
        }
    }
    async fetchAll(response) {
        try {
            const users = await this.userService.readAll();
            return response.status(common_1.HttpStatus.OK).json({
                users,
            });
        }
        catch (err) {
            this.exceptions.generateGeneralException(err);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, users_schema_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "fetchAll", null);
UserController = __decorate([
    (0, common_1.Controller)(constant_1.globalConstants.USERS),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        exceptions_1.Exceptions])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
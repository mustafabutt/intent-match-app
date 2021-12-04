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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const constant_1 = require("../constant");
const utils_1 = require("../utils/utils");
let UsersService = class UsersService {
    constructor() { }
    async match(user, users) {
        const Get_Gender_Interest_Based_Users = (0, utils_1.Get_Gender_Interest_Based_List)(user, users);
        const Get_Age_Based_Users = (0, utils_1.Get_Age_Based_List)(user, Get_Gender_Interest_Based_Users);
        const Get_Race_Based_Users = (0, utils_1.Get_Race_Based_List)(user, Get_Age_Based_Users);
        const Get_Location_Based_Users = (0, utils_1.Get_Location_Based_List)(user, Get_Race_Based_Users);
        const Get_Hobies_Based_Users = (0, utils_1.Get_Hobbies_Based_List)(user, Get_Location_Based_Users);
        if (Get_Hobies_Based_Users.length > 0)
            return Get_Hobies_Based_Users;
        else
            return constant_1.globalConstants.NO_MATCH_FOUND;
    }
    async readAll() {
        const data = await fs_1.promises.readFile(process.cwd() + constant_1.globalConstants.DATAFILE, 'utf8');
        return JSON.parse(data);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
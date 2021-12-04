"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get_Hobbies_Based_List = exports.Get_Location_Based_List = exports.Get_Race_Based_List = exports.Get_Age_Based_List = exports.Get_Gender_Interest_Based_List = void 0;
const constant_1 = require("../constant");
function Get_Gender_Interest_Based_List(user, users) {
    const tempArray = [];
    for (const u of users) {
        if (user.interest == constant_1.globalConstants.FEMALE) {
            if (u.interest == constant_1.globalConstants.FEMALE)
                tempArray.push(u);
        }
        if (user.interest == constant_1.globalConstants.MALE) {
            if (u.interest == constant_1.globalConstants.MALE)
                tempArray.push(u);
        }
    }
    return tempArray;
}
exports.Get_Gender_Interest_Based_List = Get_Gender_Interest_Based_List;
function Get_Age_Based_List(user, users) {
    const tempArray = [];
    for (const u of users) {
        if (user.age <= 20) {
            if (u.age < 20)
                tempArray.push(u);
        }
        else if (user.age >= 20 && user.age <= 30) {
            if (u.age >= 20 && u.age <= 30)
                tempArray.push(u);
        }
    }
    return tempArray;
}
exports.Get_Age_Based_List = Get_Age_Based_List;
function Get_Race_Based_List(user, users) {
    const tempArray = [];
    for (const u of users) {
        if (user.race == constant_1.globalConstants.BLACK) {
            if (u.race == constant_1.globalConstants.BLACK)
                tempArray.push(u);
        }
        if (user.race == constant_1.globalConstants.WHITE) {
            if (u.race == constant_1.globalConstants.WHITE)
                tempArray.push(u);
        }
    }
    return tempArray;
}
exports.Get_Race_Based_List = Get_Race_Based_List;
function Get_Location_Based_List(user, users) {
    const tempArray = [];
    for (const u of users) {
        if (user.location == constant_1.globalConstants.USA) {
            if (u.location == constant_1.globalConstants.USA)
                tempArray.push(u);
        }
        if (user.location == constant_1.globalConstants.CANADA) {
            if (u.location == constant_1.globalConstants.CANADA)
                tempArray.push(u);
        }
        if (user.location == constant_1.globalConstants.UK) {
            if (u.location == constant_1.globalConstants.UK)
                tempArray.push(u);
        }
        if (user.location == constant_1.globalConstants.PAK) {
            if (u.location == constant_1.globalConstants.PAK)
                tempArray.push(u);
        }
    }
    return tempArray;
}
exports.Get_Location_Based_List = Get_Location_Based_List;
function Get_Hobbies_Based_List(user, users) {
    const tempArray = [];
    if (user.hobbies.length > 0) {
        for (const u of users) {
            for (const userHobies of u.hobbies) {
                if (user.hobbies.includes(userHobies))
                    tempArray.push(u);
            }
        }
        return tempArray;
    }
    else
        return users;
}
exports.Get_Hobbies_Based_List = Get_Hobbies_Based_List;
//# sourceMappingURL=utils.js.map
"use strict";
var e_1, _a;
exports.__esModule = true;
var tslib_1 = require("tslib");
var str = 'Hello!';
try {
    // @ts-ignore
    for (var str_1 = tslib_1.__values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
        var s = str_1_1.value;
        console.log(s);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (str_1_1 && !str_1_1.done && (_a = str_1["return"])) _a.call(str_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var missing = [0, , 1];
var spreaded = tslib_1.__spreadArray([], tslib_1.__read(missing));
var concated = [].concat(missing);

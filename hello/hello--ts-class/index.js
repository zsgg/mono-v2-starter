var HelloTsClassA = /** @class */ (function () {
    function HelloTsClassA() {
        this.name = 'class hello';
    }
    HelloTsClassA.prototype.method = function () {
        console.log("< hello method >", this.name);
    };
    return HelloTsClassA;
}());
var HelloTsClassB = /** @class */ (function () {
    function HelloTsClassB() {
        this.name = 'class hello';
        this.method = this.method.bind(this);
    }
    HelloTsClassB.prototype.method = function () {
        console.log("< hello method >", this.name);
    };
    return HelloTsClassB;
}());
var HelloTsClassC = /** @class */ (function () {
    function HelloTsClassC() {
        var _this = this;
        this.name = 'class hello';
        this.method = function () {
            console.log("< hello method >", _this.name);
        };
    }
    return HelloTsClassC;
}());

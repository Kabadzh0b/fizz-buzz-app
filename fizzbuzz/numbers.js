"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberToString = exports.Numbers = void 0;
var Numbers = /** @class */ (function () {
    function Numbers(start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = 100; }
        this.start = start;
        this.end = end;
        this.data = [];
        if (start > end) {
            throw new Error("Start should be less than end");
        }
        if (start <= 0) {
            throw new Error("Start should be greater than 0");
        }
        this.data = this.generateData();
        return this;
    }
    Numbers.prototype.generateData = function () {
        var _this = this;
        return Array.from({ length: this.end - this.start + 1 }, function (_, i) { return i + _this.start; });
    };
    Numbers.prototype.useFunction = function (func) {
        return this.data.map(func);
    };
    Numbers.prototype.useFunctions = function (funcs) {
        var _this = this;
        return funcs.map(function (func) { return _this.data.map(func); });
    };
    return Numbers;
}());
exports.Numbers = Numbers;
var NumberToString = /** @class */ (function () {
    function NumberToString() {
    }
    NumberToString.prototype.serialize = function (data) {
        return data.toString();
    };
    return NumberToString;
}());
exports.NumberToString = NumberToString;

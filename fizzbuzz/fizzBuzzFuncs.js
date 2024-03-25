"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFunc = exports.FizzBuzzFunc = exports.BuzzFunc = exports.FizzFunc = void 0;
var FizzFunc = /** @class */ (function () {
    function FizzFunc(fizzCondition) {
        this.condition = fizzCondition;
    }
    FizzFunc.prototype.work = function (data) {
        return this.condition(data) ? "Fizz" : null;
    };
    return FizzFunc;
}());
exports.FizzFunc = FizzFunc;
var BuzzFunc = /** @class */ (function () {
    function BuzzFunc(buzzCondition) {
        this.condition = buzzCondition;
    }
    BuzzFunc.prototype.work = function (data) {
        return this.condition(data) ? "Buzz" : null;
    };
    return BuzzFunc;
}());
exports.BuzzFunc = BuzzFunc;
var FizzBuzzFunc = /** @class */ (function () {
    function FizzBuzzFunc(fizzBuzzCondition) {
        this.fizzBuzzCondition = fizzBuzzCondition;
    }
    FizzBuzzFunc.prototype.work = function (data) {
        return this.fizzBuzzCondition(data) ? "FizzBuzz" : null;
    };
    return FizzBuzzFunc;
}());
exports.FizzBuzzFunc = FizzBuzzFunc;
var DefaultFunc = /** @class */ (function () {
    function DefaultFunc() {
    }
    DefaultFunc.prototype.work = function (data) {
        return data.toString();
    };
    return DefaultFunc;
}());
exports.DefaultFunc = DefaultFunc;

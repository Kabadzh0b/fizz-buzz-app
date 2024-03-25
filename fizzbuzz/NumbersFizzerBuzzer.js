"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersFizzerBuzzer = exports.DataWorker = void 0;
var DataWorker = /** @class */ (function () {
    function DataWorker(data, funcs, toType) {
        this.funcs = [];
        this.data = data;
        this.funcs = funcs;
        this.toType = toType;
        return this;
    }
    DataWorker.prototype.work = function () {
        var _this = this;
        return this.data.useFunction(function (num) {
            for (var _i = 0, _a = _this.funcs; _i < _a.length; _i++) {
                var func = _a[_i];
                var result = func.work(num);
                if (result) {
                    return result;
                }
            }
            return _this.toType.serialize(num);
        });
    };
    return DataWorker;
}());
exports.DataWorker = DataWorker;
var NumbersFizzerBuzzer = /** @class */ (function (_super) {
    __extends(NumbersFizzerBuzzer, _super);
    function NumbersFizzerBuzzer(data, funcs, toType) {
        var _this = _super.call(this, data, funcs, toType) || this;
        return _this;
    }
    return NumbersFizzerBuzzer;
}(DataWorker));
exports.NumbersFizzerBuzzer = NumbersFizzerBuzzer;

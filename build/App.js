"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App(appInit) {
        this.app = express_1.default();
        this.port = appInit.port;
        this.setMiddlewares(appInit.middleWares);
        this.setRoutes(appInit.controllers);
    }
    App.prototype.setMiddlewares = function (middleWares) {
        var _this = this;
        middleWares.forEach(function (middleWare) {
            _this.app.use(middleWare);
        });
    };
    App.prototype.setRoutes = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use(controller.router);
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('App is listening to this port:', _this.port);
        });
    };
    return App;
}());
exports.default = App;

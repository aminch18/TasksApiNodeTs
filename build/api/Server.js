"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
var mongoose_1 = __importDefault(require("mongoose"));
var Server = /** @class */ (function () {
    function Server(controllers, middleWares) {
        var _this = this;
        this.port = 3000;
        this.initConfig = function () {
            mongoose_1.default.connect('mongodb://localhost/TasksDb', { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false })
                .then(function () {
                console.log('MongoDB is connected');
            })
                .catch(function (err) {
                console.log(err);
            });
            ;
        };
        this.initApp = function (controllers, middleWares) { return new App_1.default({
            port: _this.port,
            controllers: controllers,
            middleWares: middleWares
        }); };
        this.initServer = function () { return _this.app.listen(); };
        this.initConfig();
        this.app = this.initApp(controllers, middleWares);
    }
    return Server;
}());
exports.default = Server;

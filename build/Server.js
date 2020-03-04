"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
var bodyParser = __importStar(require("body-parser"));
var TaskController_1 = __importDefault(require("./controllers/TaskController"));
var mongoose_1 = __importDefault(require("mongoose"));
// import loggerMiddleware from './middleware/logger'
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect('mongodb://localhost/TasksDb', { useNewUrlParser: true, useUnifiedTopology: true });
var app = new App_1.default({
    port: 3000,
    controllers: [
        new TaskController_1.default(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
});
app.listen();
var Server = /** @class */ (function () {
    function Server(app, config, taskController) {
        var _this = this;
        this.port = 3000;
        this.taskController = new TaskController_1.default();
        this.initApp = function (app, config) {
            app = new App_1.default({
                port: _this.port,
                controllers: [
                    _this.taskController
                ],
                middleWares: [
                    bodyParser.json(),
                    bodyParser.urlencoded({ extended: true })
                ]
            });
            app.listen();
        };
        this.initApp(app, config);
    }
    return Server;
}());

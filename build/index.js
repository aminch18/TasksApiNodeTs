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
var TaskController_1 = __importDefault(require("./controllers/TaskController"));
var Server_1 = __importDefault(require("./api/Server"));
var bodyParser = __importStar(require("body-parser"));
//import loggerMiddleware from './middleware/logger'
var controllers = [];
controllers.push(new TaskController_1.default());
var middleWares = [];
middleWares.push(bodyParser.json());
middleWares.push(bodyParser.urlencoded({ extended: true }));
var server = new Server_1.default(controllers, middleWares);
server.initServer();

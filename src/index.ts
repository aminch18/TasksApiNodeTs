import IControllerBase from "./interfaces/IControllerBase";
import TaskController from "./controllers/TaskController";
import Server from "./api/Server";
import * as bodyParser from 'body-parser';
//import loggerMiddleware from './middleware/logger'

let controllers: Array<IControllerBase> = [];
controllers.push(new TaskController());

let middleWares:Array<any> = [];
middleWares.push(bodyParser.json())
middleWares.push(bodyParser.urlencoded({ extended: true }));
        
let server = new Server(controllers, middleWares);
server.initServer();
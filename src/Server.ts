import App from './App';
import * as bodyParser from 'body-parser';
import TaskController from './controllers/TaskController';
// import loggerMiddleware from './middleware/logger'

const app = new App({
    port: 3000,
    controllers:[
        new TaskController(),
    ],
    middleWares:[
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
});

app.listen();
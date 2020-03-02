import App from './App';
import * as bodyParser from 'body-parser';
// import loggerMiddleware from './middleware/logger'

const app = new App({
    port: 3000,
    controllers:[

    ],
    middleWares:[

    ]
});

app.listen();
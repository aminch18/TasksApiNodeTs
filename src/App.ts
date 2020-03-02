import express from 'express';
import { Application } from 'express';

class App {
    public app: Application;
    public port: number;

    constructor(appInit: {port:number, middleWares:any, controllers:any }) {
        this.app = express();
        this.port = appInit.port;
        this.setMiddlewares(appInit.middleWares);
        this.setRoutes(appInit.controllers);
    }

    private setMiddlewares(middleWares: { forEach : (arg0: (middleWare:any) => void) => void }): void {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    private setRoutes(controllers: { forEach : (arg0: (controller:any) => void) => void }): void {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log('App is listening to this port:', this.port);
        });
    }
}

export default App;
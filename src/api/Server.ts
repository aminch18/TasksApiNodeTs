import App from './App';
import mongoose from 'mongoose';

class Server {
    private port:number = 3000;
    private app:App;

    constructor(controllers:Array<any>, middleWares:Array<any>) {
        this.initConfig();
        this.app = this.initApp(controllers, middleWares);
    }

    private initConfig = ():void => {
        mongoose.connect('mongodb://localhost/TasksDb', { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false })
        .then( () => {
            console.log('MongoDB is connected');
          })
          .catch( (err: any) => {
            console.log(err);
          });;
    }

    private initApp = (controllers:Array<any>, middleWares:Array<any>):App =>  new App({
            port: this.port,
            controllers:controllers,
            middleWares: middleWares
    });

    public initServer = ():void => this.app.listen();
}

export default Server;

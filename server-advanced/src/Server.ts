

import { Utils } from "./Utils";
import * as express from 'express';
import { UserRouter } from "./routes";


export class Server{
    app: express.Express;
    port: number;

    constructor() {
        this.app = express();
        this.port = process.env.PORT ? Number(process.env.PORT) : 8080;
        
        this.initilizeAppMiddleWares()
        this.initilizeAppRoutes();
    }

    initilizeAppMiddleWares() { 
        this.app.use(express.json())
    }
    
    initilizeAppRoutes() {
        this.app.use('/api', new UserRouter().router);    
    }

    start(): void{
        this.app.listen(this.port, () => {
            console.log('listening on port 8080')
        })

    }
}
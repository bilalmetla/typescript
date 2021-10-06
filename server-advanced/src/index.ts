
import { Server } from './Server'

class Launch {
    private server: Server;
    
    constructor() {
        this.server = new Server()
    }
    LauchServer(): void{
        this.server.start()
    }
}

new Launch().LauchServer()
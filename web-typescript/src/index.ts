
import {Router} from "./Router";

export class Main{

    private router: Router = new Router()
    constructor() {
        console.log('main class')
    }

    launched() {
        this.router.handleRequest()
    }
}

new Main().launched();
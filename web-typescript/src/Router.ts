
import { MainController } from "./controllers/MainController";
import { LoginController } from "./controllers/LoginController";

export class Router {

    private mainElement = document.getElementById('main-container')


    public handleRequest() {
        console.log('handling rout: ', this.getRoute())
        switch (this.getRoute()) {
            case '/login':
                if (this.mainElement) {
                    const loginController = new LoginController();
                    this.mainElement.append(loginController.creatView())
                }
                break;
        
            default:
                if (this.mainElement) {
                    const mainController = new MainController()
                    this.mainElement.append(mainController.createView());
                }
                break;
        }
    }

    private getRoute() {
        return window.location.pathname;
    }
}
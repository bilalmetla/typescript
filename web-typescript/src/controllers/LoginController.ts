import { BaseController } from "./BaseController";

export class LoginController extends BaseController {

    public creatView():HTMLDivElement {
        

        const title = this.createElement('h2', "Please Login")
        const userNameLabel = this.createElement('label', "UserName:")
        const userNameInput = this.createElement('input')
        const passwordLabel = this.createElement('label', "Password:")
        const passwordInput = this.createElement('input')
        const button = this.createElement('button', "Login")
        const breakElement = this.createElement('br');

        this.container.append(
            title,
            userNameLabel,
            userNameInput,
            breakElement,
            passwordLabel,
            passwordInput,
            breakElement,
            button
        )

        return this.container;
    }
}


export class MainController {
    public createView(): HTMLDivElement{
        const container = document.createElement('div');
        const title = document.createElement('h2');
        title.innerHTML = "Welcome to Typescript";
        const article = document.createElement('div');
        article.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Feugiat in fermentum posuere urna. Amet nisl purus in mollis nunc. Tellus orci ac auctor augue mauris augue. Dolor morbi non arcu risus quis varius quam quisque id. Et malesuada fames ac turpis egestas sed tempus. Eget mi proin sed libero enim sed faucibus. Turpis massa sed elementum tempus. Congue eu consequat ac felis donec.";
        const button = document.createElement('button')
        button.innerHTML = "Login"

        container.append(title, article, button);
        return container;
    }
}
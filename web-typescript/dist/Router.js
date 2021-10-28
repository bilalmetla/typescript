export class Router {
    handleRequest() {
        console.log('handling rout: ', this.getRoute());
    }
    getRoute() {
        return window.location.pathname;
    }
}
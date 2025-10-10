export default class Router {
    validRoutes;
    routeHandlers;
    constructor(validRoutes) {
        this.validRoutes = validRoutes;
        this.routeHandlers = new Map();
    }
    registerRoute = (route, handler) => {
        this.routeHandlers.set(route, handler);
    };
    init = () => {
        window.addEventListener('hashchange', this.handleRouteChange);
        this.handleRouteChange();
    };
    handleRouteChange = () => {
        const hash = window.location.hash.slice(1) || 'rentals';
        console.log('Ruta detectada:', hash);
        if (this.validRoutes.includes(hash)) {
            const handler = this.routeHandlers.get(hash);
            if (handler) {
                handler();
            }
        }
        else {
            console.warn('Ruta inválida:', hash);
            const errorHandler = this.routeHandlers.get('error');
            if (errorHandler) {
                errorHandler();
                window.location.hash = 'error';
            }
        }
    };
    navigate = (route) => {
        window.location.hash = route;
    };
}

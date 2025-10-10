export default class Router {
  private readonly validRoutes: string[]
  private routeHandlers: Map<string, () => void>

  constructor(validRoutes: string[]) {
    this.validRoutes = validRoutes
    this.routeHandlers = new Map()
  }

  readonly registerRoute = (route: string, handler: () => void) => {
    this.routeHandlers.set(route, handler)
  }

  readonly init = () => {
    window.addEventListener('hashchange', this.handleRouteChange)
    this.handleRouteChange()
  }

  private readonly handleRouteChange = () => {
    const hash = window.location.hash.slice(1) || 'rentals'
    
    console.log('Ruta detectada:', hash)
    
    if (this.validRoutes.includes(hash)) {
      const handler = this.routeHandlers.get(hash)
      if (handler) {
        handler()
      }
    } else {
      console.warn('Ruta inválida:', hash)
      const errorHandler = this.routeHandlers.get('error')
      if (errorHandler) {
        errorHandler()
        window.location.hash = 'error'
      }
    }
  }

  readonly navigate = (route: string) => {
    window.location.hash = route
  }
}

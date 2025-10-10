export default class HomeModel {
    home;
    constructor() {
        this.home = {
            title: "Bienvenido a Movie Rental UPB",
            subtitle: "Tu plataforma favorita de alquiler de películas",
            featuredMessage: "Descubre las mejores películas del momento",
            stats: {
                totalMovies: 95,
                newThisWeek: 12,
                topRated: 8
            },
            quickLinks: [
                { text: "Ver catálogo completo", action: "rental" },
                { text: "Películas mejor valoradas", action: "top-rated" },
                { text: "Novedades 2020s", action: "new-releases" }
            ]
        };
    }
    getHome = () => this.home;
    initComponent = () => { };
}

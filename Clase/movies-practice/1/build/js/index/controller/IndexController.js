export default class IndexController {
    model;
    view;
    // private readonly movie: MovieController;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        //this.movie = MovieFactory(view.getMain())
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        // this.movie.initComponent()
    };
}

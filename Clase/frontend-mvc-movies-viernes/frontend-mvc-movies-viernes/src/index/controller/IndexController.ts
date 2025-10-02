import MovieController from "../../movies/controller/MovieController.js";
import MovieFactory from "../../movies/factory/MovieFactory.js";
import IndexModel from "../model/IndexModel.js"
import IndexView from "../view/IndexView.js"

export default class IndexController{

    private readonly movie: MovieController;

    constructor(
        private readonly model: IndexModel,
        private readonly view: IndexView
    ){
        this.movie = MovieFactory.create(this.view.getMain())
    }

    readonly initComponent = () =>{
        this.model.initComponent()
        this.view.initComponent()
        this.movie.initComponent()
    }
}
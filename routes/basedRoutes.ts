import {Router, Request, Response} from "express";

abstract class basedRoutes {
    router:Router
    constructor() {
        this.router = Router()
        this.routes()
    }
    abstract routes():void
}

export default basedRoutes
import {Router, Request, Response} from "express";
import  Controller  from "../controllers/controllers";
import IRoutes from "./IRoutes"
import basedRoutes from "./basedRoutes";

class Routes extends basedRoutes {
    public routes():void{
        this.router.post("/student", Controller.postStudent)
        this.router.get("/student", Controller.findAllStudent)
        this.router.get("/student/:id", Controller.GetStudentId)

    }
}
export default new Routes().router

// class studentRoutes implements IRoutes{
//     public router:Router
//     constructor(){
//         this.router = Router()
//         this.routes()
//     }
//     routes():void{
//         this.router.get("/student", (req:Request, res:Response)=>{
//             res.send("halo student")

//         })
//     }
// }
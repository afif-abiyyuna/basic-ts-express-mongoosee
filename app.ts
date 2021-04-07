import express,{Application, Request, Response} from "express"
import morgan from  "morgan"
import compression from "compression"
import helmet from "helmet"
import cors from "cors"
import Routes from "./routes/routes"
import MongooDB from "./configs/db"
import dotenv  from "dotenv";

class App {
    public app: Application
    constructor(){
        this.app = express()
        this.plugin()
        this.routes()
        dotenv.config()
        
    }
    protected plugin(): void {
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(morgan("dev"))
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use(compression())
        MongooDB();
    }
    protected routes(): void{
        this.app.get("/", (req:Request, res:Response)=>{
            res.send("Saya")
            
        })
        this.app.post("/",(req:Request, res:Response)=>{
            res.send(req.body)
        })
        this.app.use("/", Routes)
    }

}
const app = new App().app
app.listen(process.env.Port, ()=>{
    
    console.log(`Server is running on http://localhost:${process.env.Port}`); 
})


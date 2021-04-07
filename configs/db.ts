import mongoose from "mongoose";

class MongooDB {
    constructor(){
        this.connenct()
    }
    public connenct():void{
        mongoose.connect('mongodb://localhost:27017/test-express-ts', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
        }, () => {
        console.log('connected to database')
        })
    }

}
export default new MongooDB().connenct
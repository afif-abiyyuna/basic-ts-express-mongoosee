import mongoose, { mongo } from "mongoose";

interface IStudent {
    fullname: string,
    email: string,
    password: string,
    telp: string,
    grades: string[]
}

// function test(name:IStudent){
    
// }
const studentSchema = new mongoose.Schema({
    fullname: { type: String, default: "noname", required: true},
    email: String,
    password: String,
    telp: String,
    grades: [{type: mongoose.Types.ObjectId, ref: "Grade"}]
})
const Student = mongoose.model("Student", studentSchema)

//fungsi untuk membuat database sesuai dengan interface
const build = (attr:IStudent)=>{
    return new Student(attr)

}
// studentSchema.statics.build = (attr:IStudent)=>{
//     return new Student(attr)

// }
build({
    fullname: "jaajja",
    email: "ajajaja",
    password: "jsjsjsj",
    telp: "jsjsjs",
    grades: ["kskskskk"]
})

export {Student}
import { Request, Response } from "express";
import IController from "../controllers/IController"
import {Student} from "../models/Students"

class Controller {
    static postStudent (req:Request, res:Response){ 
        Student.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
            telp: req.body.telp
        })
        .then((result) => {
            res.status(201).json({ message: "data Student berhasil dibuat", data: result });
        })
        .catch((err) => {
            res.status(500).json({ message: "Data gagal dibuat", data: err });
        });
    
    }
    static findAllStudent  (req:Request, res:Response) {
        Student.find()
          .then((result) => {
            if (result.length > 0) {
              res
                .status(200)
                .json({ message: "berhasil find all data student", data: result });
            } else {
              res.status(404).json({ message: "not found all data student" });
            }
          })
          .catch((err) => {
            res.status(500).json({ message: "gagal find all data student" });
          });
    }
    static GetStudentId (req:Request, res:Response)  {
        Student.findById(req.params.id)
          .then((result) => {
            res.status(200).json({
              message: "berhasil find specific data student",
              data: result,
            });
          })
          .catch((err) => {
            res.status(500).json({ message: "gagal find specific data student" });
          });
    }
}



export default Controller

// class studentController implements IController{
//     index(req:Request, res:Response):Response{
//         return res.send("haloo")
//     }
//     create(req:Request, res:Response):Response{
//         return res.send(req.body)
//     }
//     get(req:Request, res:Response):Response{
//         return res.send("haloo")
//     }
//     update(req:Request, res:Response):Response{
//         return res.send("haloo")
//     }
//     delete(req:Request, res:Response):Response{
//         return res.send("haloo")
//     }

// }
import express from 'express';
import passport from 'passport';
import departmentController from './department.controller';
import { isEmployee } from '../../middlewares/is-employee';

export const router = express.Router();

//export const departmentRouter = express.Router();
const employeePolicy = [passport.authenticate('jwt', { session: false }), isEmployee];
router.route('/')
        .post(employeePolicy , function(req, res) {
            departmentController.create;
        });
// // GET ALL Departments & post a department
// router.route('/departments') 
//     .get((req, res, next) => {
//         Department.find({}, (err, departments) => {
//             res.json({
//                 success: true,
//                 message: "Successful",
//                 departments: departments
//             }) 
//         })    
//     })
//     .post((req, res, next) => {
//         let department = new Department();
//         department.title = req.body.title;
//         department.description = req.body.description;
//         department.save();
//         res.json({
//             success: true,
//             message: "Successful"
//         });
//     });

// // GET Department by id
// router.get('/department:id', (req, res, next) => {
//     Department.findById({ _id: req.params.id })
//                 .exec((err, department) => {
//                     if(err) {
//                         res.json({
//                             success: false,
//                             message: 'Department is not found'
//                         });
//                     } else {
//                         if(department) {
//                             res.json({
//                                success: true,
//                                department: department 
//                             });
//                         }
//                     }
//                 })
//             });

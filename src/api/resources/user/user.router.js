import express from 'express';
import passport from 'passport';
import userController from './user.controller';

export const userRouter = express.Router();
userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login);
// const router = require('express').Router();
// const jwt = require('jsonwebtoken');
// const Employee = require('../employee/employee.model');
// const config = require('../../../config');

// router.post('/signup', (req, res, next) => {
//   let employee = new Employee();
//   employee.hoten = req.body.fullname,
//   employee.email = req.body.email,
//   employee.password = req.body.password,
//   employee.sdt = req.body.phone,
//   employee.avatar = employee.gravatar()
//   Employee.findOne({
//       email: req.body.email
//   }, (err, existingEmployee) => {
//       if(existingEmployee) {
//           res.json({
//             success: false,
//             message: "Email đã tồn tại!"
//           });
//       } else {
//         employee.save().then((employee) => {
//             res.send(employee);
//           }, (e) => {
//             res.status(400).send(e);
//           });
//           // gen token
//           var token = jwt.sign({
//             employee: employee
//         }, config.secret, {
//             expiresIn: '7d'
//         });
//         res.json({
//             success: true,
//             message: 'Enjoy!',
//             token: token
//         });
//       }
//   })
// })

// router.post('/signin', (req, res, next) => {
//   Employee.findOne({ email: req.body.email }, (err, employee) => {
//     if(err !== null ) {
//       res.status(500).json({"error":err});
//             return;
//     } else {
//       if(!employee) {
//         res.json({
//           success: false,
//           message: 'Xác thực thất bại, không tồn tại tài khoản!'
//       });
//       } else if(employee) {
//         var validPassword = employee.comparePassword(req.body.password);
//         if(!validPassword) {
//           res.json({
//             success: false,
//             message: 'Xác thực thất bại, sai mật khẩu!'
//           })
//         }
//       } else {
//         var token = jwt.sign({
//             employee: employee
//         }, config.secret, {
//             expiresIn: '7d'
//         })
//         res.json({
//             success: true,
//             message: 'Enjoy!',
//             token: token
//         });
//       }
//     }
//   })
// })

// module.exports = router;

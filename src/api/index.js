import express from 'express';
//import { departmentRouter } from '../api/resources/department';
import { userRouter } from '../api/resources/user/user.router';

export const restRouter = express.Router();
restRouter.use('/user', userRouter);
//restRouter.use('/department', departmentRouter);

module.exports = restRouter;
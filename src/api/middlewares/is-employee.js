import { EMPLOYEE_ROLE } from '../resources/user/user.model';

export const isEmployee = (req, res, next) => {
  if (req.user.role !== EMPLOYEE_ROLE) {
    return res.json({ err: 'unauthorized, not an employee' });
  }
  next();
};

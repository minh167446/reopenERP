import Department from './department.model';
import DepartmentService from './department.service'
// Handle create contact actions
export default {
    async create(req, res) {
        try {
            const schema = Joi.object().keys({
              title: Joi.string().required(),
              description: Joi.string().required(),
            });
            const { value, error } = Joi.validate(req.body, schema);
            if (error && error.details) {
              return res.status(400).json(error);
            }
            const department = await Department.create();
            return res.json(department);
          } catch (err) {
            console.error(err);
            return res.status(500).send(err);
          }
    },
    // async findAll(req, res) {
    //   try {
    //     const playlists = await Department.find()
    //       .populate('songs')
    //       .populate('user', 'firstName lastName');
    //     return res.json(playlists);
    //   } catch (err) {
    //     console.error(err);
    //     return res.status(500).send(err);
    //   }
    // },
  };
import Joi from 'joi';

export default {
  validateBody(body) {
    const schema = Joi.object().keys({
      departments: Joi.array()
        .items()
        .required(),
      title: Joi.string().required(),
    });
    const { value, error } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
};
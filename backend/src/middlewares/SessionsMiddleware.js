const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  index: celebrate({
    [Segments.BODY]: Joi.object({
      id: Joi.string().required()
    })
  })
};

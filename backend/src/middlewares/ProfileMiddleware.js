const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  index: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  })
};

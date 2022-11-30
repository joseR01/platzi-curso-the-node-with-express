const join = require('joi');

const id = join.string().uuid();
const name = join.string().alphanum().min(3).max(15);
const price = join.number().integer().min(10);

const createProductScheman = join.object({
  name: name.required(),
  price: price.required(),
});

const updateProductScheman = join.object({
  name: name,
  price: price,
});

const getProductScheman = join.object({
  id: id.required(),
});

module.exports = {
  createProductScheman,
  updateProductScheman,
  getProductScheman,
};

const join = require('joi');

const id = join.string().uuid();
const name = join.string().min(3).max(15);
const price = join.number().integer().min(10);
const image = join.string().uri();

const createProductScheman = join.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductScheman = join.object({
  name: name,
  price: price,
  image: image,
});

const getProductScheman = join.object({
  id: id.required(),
});

module.exports = {
  createProductScheman,
  updateProductScheman,
  getProductScheman,
};

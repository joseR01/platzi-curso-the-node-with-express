const faker = require("faker")
const boom = require("@hapi/boom")

class ProductsService {

  constructor() {
    this.products = [];
    this.generate()
  }
  generate() {
    const size = 10;
    for (let index = 0; index < size; index++) {
      this.products.push({
        // id: index + 1,
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      })
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    const product = this.products.find(items => items.id == id)
    if (!product) {
      throw boom.notFound("product not found")
    }
    if (product.isBlock) {
      throw boom.conflict("produc is block")
    }
    return product
  }

  async update(id, changes) {
    const index = this.products.findIndex(items => items.id === id);
    if (index === -1) {
      throw boom.notFound("product not found")
    }
    this.products[index] = { id, ...changes };
    return this.products[index]
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound("product not found")
    }
    this.products.splice(index, 1)
    return id
  }
}

module.exports = ProductsService

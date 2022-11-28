const faker = require("faker")


class ProductsService {

  constructor() {
    this.products = [];
    this.generate()
  }
  generate() {
    const size = 100;
    for (let index = 0; index < size; index++) {
      this.products.push({
        id: index + 1,
        // id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      })
    }
  }
  create() { }
  find() {
    return this.products
  }
  findOne(id) {
    return this.products.find(items => items.id == id)
  }
  update() { }
  delete() { }
}

module.exports = ProductsService

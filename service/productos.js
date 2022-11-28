const faker = require("faker")


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
        image: faker.image.imageUrl()
      })
    }
  }
  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(items => items.id == id)
  }

  update(id, changes) {
    const index = this.products.findIndex(items => items.id === id);
    if (index === -1) {
      throw new Error("product not found")
    }
    this.products[index] = { id, ...changes };
    return this.products[index]
  }
  delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error("product not found")
    }
    this.products.splice(index, 1)
    return id
  }
}

module.exports = ProductsService

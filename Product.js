
class Product {
    static count = 0;
    // Constructor for create object
    constructor (name, description, price, quantity) {
        this.id = Product.count;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        Product.count += 1;
    }
}

module.exports = Product;


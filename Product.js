
class Product {
    // Constructor for create object
    constructor (name, description, price, quantity, id) {
        this.id = new Date();
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}

module.exports = Product;


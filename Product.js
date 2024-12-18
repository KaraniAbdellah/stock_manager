
class Product {
    // Make a Attribute Private
    _id
    _name
    _desription
    _price
    _quantity
    // Constructor for create object
    constructor (name, description, price, quantity) {
        this._id = new Date();
        this._name = name;
        this._description = description;
        this._price = price;
        this._quantity = quantity;
    }
}

module.exports = Product;


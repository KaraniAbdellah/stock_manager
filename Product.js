
class Product {
    // Make a Attribute Private
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

    // // Setters & Getters
    // getId() {
    //     return this._id;
    // }
    // setId(NewId) {
    //     this._id = NewId;
    // }
    getName() {
        return this.name;
    }
    setName(NewName) {
        this.name = NewName;
    }
    // getDescription() {
    //     return this._description;
    // }
    // setDescription(NewDescription) {
    //     this._description = NewDescription;
    // }
    // getQuantity() {
    //     return this._quantity;
    // }
    // setQuantity(NewQuantity) {
    //     this._quantity = NewQuantity;
    // }
    // getPrice() {
    //     return this._price;
    // }
    // setPrice(NewPrice) {
    //     this._price = NewPrice; 
    // }

}

module.exports = Product;


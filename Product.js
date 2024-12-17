class Product {

    constructor (name, price, description, quantity, id) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    Menu() {
        console.log("1. Add Product");
        console.log("2. Display All Product");
        console.log("3. Update  Product");
        console.log("4. Delete Product");
        console.log("5. Exit");
    }
    

    
} 

module.exports = Product;


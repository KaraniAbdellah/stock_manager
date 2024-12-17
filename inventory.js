// Import Product & prompt-sync modulo
const Product = require("./Product");
const prompt = require("./packages/node_modules/prompt-sync")();

/*
    addProduct(name, description, quantity, price)
    listProducts()
    updateProduct(id, quantity, price)
    deleteProduct(id)
*/


// Decalare Variables
let choose;
const ProductObj = new Product("zz", 12, "dkdkd", 33);
ProductObj.Menu();

do {
    ProductObj.Menu();
    choose = paresInt(prompt("Enter Your Operations: "));

    switch(choose) {
        case 1:
            
    }

} while(choose != 5);








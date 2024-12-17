// Import Product & prompt-sync & File System Modulo
const Product = require("./Product");
const prompt = require("./packages/node_modules/prompt-sync")();
const fs = require("fs");


// Colors Declaration
const green = '\x1b[32m';
const red = '\x1b[31m';
const blue = '\x1b[34m';
const yellow = '\x1b[33m';
const reset = '\x1b[0m';


/*
    addProduct(name, description, quantity, price)
    listProducts()
    updateProduct(id, quantity, price)
    deleteProduct(id)
*/


// Variables Decalaration
let choose, name, description, price, quantity;
const JsonFile = "application/dataProduct.json";


// Save Product in JSON File
function SaveProduct(name, description, quantity, price) {

    // Get The Products
    fs.readFile(JsonFile, (err, data) => {
        
    })
    let ProductObj = {
        name: name,
        description: description,
        quantity: quantity,
        price: price
    };
    let JsonProduct = JSON.stringify(ProductObj);



}


// Add Product Function
function addProduct() {
    name = prompt("Enter Product Name: ");
    description = prompt("Enter Product Description: ");
    price = Number(prompt("Enter Product Price: "));
    quantity = Number(prompt("Enter Product Quantity: "));
    SaveProduct(name, description, quantity, price);
}

// Display The Menu
function Menu() {
    console.log("1. Add Product");
    console.log("2. Display All Product");
    console.log("3. Update  Product");
    console.log("4. Delete Product");
    console.log("5. Exit");
}


do {
    Menu();
    choose = Number(prompt("Enter Your Operations: "));

    switch(choose) {
        case 1: {
            addProduct();
            console.log(green, "--------------------------");
            console.log("Product Add Succefully");
            console.log("--------------------------", reset);
        }
    }

} while(choose != 5);








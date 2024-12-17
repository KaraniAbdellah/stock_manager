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


// Variables Decalaration
let choose, name, description, price, quantity;
const JsonFile = "application/dataProduct.json";


// Save Product in JSON File
function SaveProduct(name, description, quantity, price) {
    let NewProduct = {
        name: name,
        description: description,
        quantity: quantity,
        price: price
    };
    let ArrayOfProduct;
    
    // Get All Product From File
    fs.readFile(JsonFile, function(err, data) {
        // Check If There is an Error
        if (err) {
            console.log("There is an Error in Json File");
            return;
        }

        ArrayOfProduct = JSON.parse(data);
        ArrayOfProduct.push(NewProduct);
        console.log(ArrayOfProduct);

        // Write The Data in JSON File
        fs.writeFile(JsonFile, JSON.stringify(ArrayOfProduct), function(err) {
            if (err) {
                console.log("There is an Error");
            }
        });
    });
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


// List All Products
function listProduct() {

}


// Update Product
function updateProduct() {

}


// Delete Product
function DeleteProduct() {

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
        case 2: {
            listProduct();
        }
        case 3: {
            updateProduct();
        }
        case 4: {
            DeleteProduct();
        }
        default: {
            console.log(yellow, "--------------------------");
            console.log("Invalid Number");
            console.log("--------------------------", reset);
        }
    }
} while(choose != 5);








// Import Product & prompt-sync & File System Modulo
const { error } = require("console");
const Product = require("./Product");
const prompt = require("./packages/node_modules/prompt-sync")();
const fs = require("fs");
const { hostname } = require("os");


// Colors Declaration
const green = '\x1b[32m';
const red = '\x1b[31m';
const blue = '\x1b[34m';
const yellow = '\x1b[33m';
const reset = '\x1b[0m';


// Variables Decalaration
let choose, name, description, price, quantity;
const JsonFile = "application/dataProduct.json";


// For Store Json Object to JSOn File
function AddToJsonFile(NewProduct) {
    let ArrayOfProduct;
    fs.readFile(JsonFile, function(err, data) {
        if (err) {
            console.log("Problem in Json File");
            return;
        }

        try {
            ArrayOfProduct = JSON.parse(data);
            ArrayOfProduct.push(NewProduct);
            fs.writeFile(JsonFile, JSON.stringify(ArrayOfProduct), function(err) {
                if (err) console.log("There is an Error");
            });
        } catch(err) {
            // Empty JSON File
            ArrayOfProduct = "[]";
            // Write The Data in JSON File
            fs.writeFile(JsonFile, ArrayOfProduct, function(err) {
                if (err) console.log("There is an Error");
            });
            AddToJsonFile(NewProduct);
        }

        
    });
}


// Save Product in JSON File
function SaveProduct(name, description, quantity, price) {
    // Create a JS Object
    let NewProduct = {
        name: name,
        description: description,
        quantity: quantity,
        price: price
    };

    AddToJsonFile(NewProduct);
    
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
    console.log("🛒 1. Add Product");
    console.log("📦 2. Display All Product");
    console.log("✏️ 3. Update  Product");
    console.log("🗑️ 4. Delete Product");
    console.log("🚪 5. Exit");
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
    choose = Number(prompt("➡️ Enter Your Operations: "));

    switch(choose) {
        case 1: {
            addProduct();
            console.log(green, "--------------------------");
            console.log("Product Add Succefully");
            console.log("--------------------------", reset);
            break;
        }
        case 2: {
            listProduct();
            break;
        }
        case 3: {
            updateProduct();
            break;
        }
        case 4: {
            DeleteProduct();
            break;
        }
        case 5: {
            console.log(blue, "--------------------------");
            console.log("Thank Your For Using This Application");
            console.log("--------------------------", reset);
            return 0;
        }
        default: {
            console.log(yellow, "--------------------------");
            console.log("⚠️ Invalid Number");
            console.log("--------------------------", reset);
        }
    }
} while(choose != 5);








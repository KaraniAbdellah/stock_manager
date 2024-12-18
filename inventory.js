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

// Get Old Products
let ArrayOfProduct = fs.readFileSync(JsonFile, "utf-8")
if (ArrayOfProduct == "") {
    fs.writeFileSync(JsonFile, "[]");
} else {
    // Get The Data Here
    ArrayOfProduct = [];
    console.log(ArrayOfProduct);
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

    // Add Product To Array Of Products
    ArrayOfProduct.push(NewProduct);
    fs.writeFileSync(JsonFile, ArrayOfProduct);
    
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
    /*
        readFile(): It is asynchronous, meaning it reads the file in the background
            and the program does not wait for it to finish before moving on.
    */
    try {
        let ProductData = JSON.parse(JsonData);
        console.log("--------------------------");
        for (let i = 0; i < ProductData.length; i++) {
            let Product = ProductData[i];
            console;log(i + 1, "[name: " + Product.name, "description: " + Product.name +
                "price: " + Product.price, "quantity: " + Product.quantity + "]");
        }
        console.log("--------------------------", reset);
    } catch(err) {
        console.log(red, "--------------------------");
        console.log("Empty File");
        console.log("--------------------------", reset);
    }
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
            console.log(blue, "----------------------------------------------------");
            console.log("Thank Your For Using This Application");
            console.log("----------------------------------------------------", reset);
            return 0;
        }
        default: {
            console.log(yellow, "--------------------------");
            console.log("⚠️ Invalid Number");
            console.log("--------------------------", reset);
        }
    }
} while(choose != 5);








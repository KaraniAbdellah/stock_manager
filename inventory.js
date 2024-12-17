// Import Product & prompt-sync & File System Modulo
const Product = require("./Product");
const prompt = require("./packages/node_modules/prompt-sync")();
const fs = require("fs");


/*
    addProduct(name, description, quantity, price)
    listProducts()
    updateProduct(id, quantity, price)
    deleteProduct(id)
*/


// Variables Decalaration
let choose, name, description, price, quantity;

// Add Product Function
function addProduct(name, description, quantity, price) {
    fs.readFile("application/dataProduct.json", (data, err) => {
        // Check If There an Error
        if (err) {
            console.log(err); return;
        }
        // Get The Data From Json
        let DataProduct = JSON.parse(data);
        console.log(DataProduct);
        // Add Product into the Json Object
        DataProduct.push({
                name: name,
                price: price,
                quantity: quantity,
                description: description
        });
        // Convert Js Object to Json Object
        let DataProductAsJson = JSON.stringify(DataProduct);
        // Save Data into dataProduct.json
        fs.writeFile("application/dataProduct.json", DataProductAsJson, err => {
            if (err) {
                console.log(err); return;
            }
            console.log("Data Saved Succffully");
        });
    });
}

// Method For Display The Menu
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
        case 1:
            name = prompt("Enter Product Name: ");
            description = prompt("Enter Product Description: ");
            price = Number(prompt("Enter Product Price: "));
            quantity = Number(prompt("Enter Product Quantity: "));
            console.log("Hello from inventory.js");
            addProduct(name, description, quantity, price);
    }

} while(choose != 5);








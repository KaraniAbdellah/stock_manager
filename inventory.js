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


// Get Old Products
let ArrayOfProduct = fs.readFileSync(JsonFile, "utf-8");
if (ArrayOfProduct == "") {
    fs.writeFileSync(JsonFile, "[]");
    ArrayOfProduct = []; // Init the Array
} else {
    // Convert Json Object To JS Object
    ArrayOfProduct = JSON.parse(ArrayOfProduct);
}


class Inventory {
    // Save Product in JSON File
    static SaveProduct() {
        // Create a JS Object
        let NewProduct = new Product(name, description, price, quantity);

        // Add Product To Array Of Products
        ArrayOfProduct.push(NewProduct);
    }

    // Function To Display No Product Exit in Json File
    static displayNoProduct() {
        console.log(red, "------------------------------------");
        console.log("❌ No Product In The File");
        console.log("------------------------------------", reset);
    }

    // Add Product Function
    addProduct() {
        name = prompt("Enter Product Name: ");
        description = prompt("Enter Product Description: ");
        do {
            price = Number(prompt("Enter Product Price: "));

        } while(isNaN(price) || price < 0);
        do  {
            quantity = Number(prompt("Enter Product Quantity: "));
        } while(isNaN(quantity) || quantity < 0);

        Inventory.SaveProduct(name, description, quantity, price);
    }

    // Display The Menu
    Menu() {
        console.log("🛒 1. Add Product");
        console.log("📦 2. Display All Product");
        console.log("✏️ 3. Update  Product");
        console.log("🗑️ 4. Delete Product");
        console.log("🚪 5. Exit");
    }

    // List All Products
    listProduct() {
        /*
            readFile(): It is asynchronous, meaning it reads the file in the background
                and the program does not wait for it to finish before moving on.
        */
        if (ArrayOfProduct.length != 0) {
            console.log("------------------------------------");
            for (let i = 0; i < ArrayOfProduct.length; i++) {
                console.log(green, (i + 1), reset,": [name: " + 
                    ArrayOfProduct[i]["name"], ", description: " + 
                    ArrayOfProduct[i]["description"] + ", price: " + 
                    ArrayOfProduct[i]["price"], ", quantity: " 
                    + ArrayOfProduct[i]["quantity"] + "]"
                );
            }
            console.log("------------------------------------", reset);
        } else {
                Inventory.displayNoProduct();
        }
        
    }

    // Update Product
    updateProduct() {
        if (ArrayOfProduct.length == 0) {
            Inventory.displayNoProduct();
            return -1;
        } else {
            let id = Number(prompt("Enter The Number Of The Product: "));
            if (id > ArrayOfProduct.length || id <= 0) {
                console.log(red, "------------------------------------");
                console.log("⛔️ Incorrect Number Of The Product");
                console.log("------------------------------------", reset);
                return -1;
            } else {
                name = prompt("Enter New Product Name: ");
                description = prompt("Enter New Product Description: ");
                do {
                    price = Number(prompt("Enter New Product Price: "));
        
                } while(isNaN(price) || price < 0);
                do  {
                    quantity = Number(prompt("Enter New Product Quantity: "));
                } while(isNaN(quantity) || quantity < 0);
                
                ArrayOfProduct[id - 1]["name"] = name;
                ArrayOfProduct[id - 1]["description"] = description;
                ArrayOfProduct[id - 1]["price"] = price;
                ArrayOfProduct[id - 1]["quantity"] = quantity;
            }
        }
    }

    // Delete Product
    DeleteProduct() {
        if (ArrayOfProduct.length == 0) {
            Inventory.displayNoProduct();
            return -1;
        } else {
            let id = Number(prompt("Enter The Number Of The Product: "));
            if (id > ArrayOfProduct.length || id <= 0) {
                console.log(red, "------------------------------------");
                console.log("⛔️ Incorrect Number Of The Product");
                console.log("------------------------------------", reset);
                return -1;
            } else {
                ArrayOfProduct.splice(id - 1, 1);
            }
            return 1;
        }
    }
}

// Create Inventory Objet
let inventory = new Inventory(); 

do {
    inventory.Menu();
    choose = Number(prompt("➡️ Enter Your Operations: "));

    switch(choose) {
        case 1: {
            inventory.addProduct();
            console.log(green, "------------------------------------");
            console.log("✅ Product Add Succefully");
            console.log("------------------------------------", reset);
            break;
        }
        case 2: {
            inventory.listProduct();
            break;
        }
        case 3: {
            let check = inventory.updateProduct();
            if (check != -1) {
                console.log(green, "------------------------------------");
                console.log("✅ Product Updated Succefully");
                console.log("------------------------------------", reset);
            }
            break;
        }
        case 4: {
            let check = inventory.DeleteProduct();
            if (check != -1) {
                console.log(green, "------------------------------------");
                console.log("✅ Product Deleted Succefully");
                console.log("------------------------------------", reset);
            }
            break;
        }
        case 5: {
            console.log(blue, "-----------------------------------------------");
            console.log("🤝 Thank Your For Using This Application");
            console.log("------------------------------------------------------");
            fs.writeFileSync(JsonFile, JSON.stringify(ArrayOfProduct, null, 4));
            return 0;
        }
        default: {
            console.log(yellow, "------------------------------------");
            console.log("⚠️ Invalid Number");
            console.log("------------------------------------", reset);
        }
    }
} while(choose != 5);








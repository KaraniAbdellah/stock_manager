
// JSon Operattions
/*
    const fs = require("fs"); // file system
    console.log(fs); // print all function that exit in fs modulo 

    - readFile function in "fs" modulo
        The method accepts three parameters as mentioned
        above and described below:  

        - file_path: json file

        - callback_function: A callback function is called after
            reading the file. It takes two parameters:
            err: If any error occurred.
            data: Contents of the file.

    - there is a lot of methods:
        fs.readFile(path, [options], callback)
        fs.readFileSync(path, [options])
        fs.writeFile(path, data, [options], callback): // remove the old content
        fs.writeFileSync(path, data, [options]):
        fs.appendFile(path, data, [options], callback)

    // - JSON.parse => Convert JSON To JS Object || Array of Object
    // - JSON.stringify => Convert JS Object To JSON || Array of Object
*/

const fs = require("fs"); // file system
const Product = require("./Product");

// console.log(fs); // get all functions

// fs.readFile(JsonFile, function(err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         // get the json object
//         console.log(data);
//         let DataObject = JSON.parse(data); 
//         console.log(DataObject);

//         // Add The data in Js Object
//         DataObject.push({ name: 'ahmed', age: 20 });

//         // get the js object
//         let JsonObject = JSON.stringify(DataObject);
//         console.log(JsonObject);

//         // write thgought the file
//         fs.writeFile(JsonFile, JsonObject, function(err) {
//             console.log(err);
//         });
//     }
// });



// function SaveProduct(name, description, quantity, price) {
    
//     let ArrayProduct;
//     // Create Product as JSON Object
//     let ProductObj = {   
//         name: name,
//         description: description,
//         quantity: quantity,
//         price: price
//     };
//     console.log(ProductObj);

//     // Get The Old Products & Add New Product
//     fs.readFile("application/test.json", (err, data) => {
//         if (err) {
//             console.log("There is An Error");
//         }
//         // Get the Old Products
//         let ArrayProduct = JSON.parse(data);
//         console.log("array of products", ArrayProduct);
//         if (ArrayProduct.length == 0) {
//             console.log("Empty Json File");
//         }

//         // Push New Product
//         ArrayProduct.push(ProductObj);
//         console.log(ArrayProduct);
//         console.log(typeof ArrayProduct);

//         // Write The Products in JSON file
//         fs.writeFile("application/test.json", JSON.stringify(ArrayProduct), (err) => {
//             if (err) {
//                 console.log("There Is An Error Here");
//             }
//         });

//     });


// }

// // SaveProduct("AMolo", "delicie", 10202, 2);


// let pro = new Product("Ahmed", "ded", 23, 23);
// console.log(pro.getName()); 













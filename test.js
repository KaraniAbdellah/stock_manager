
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



function SaveProduct(name, description, quantity, price) {
    
    let ArrayProduct = [];
    let ProductObj = {   
        name: name,
        description: description,
        quantity: quantity,
        price: price
    };
    ProductObj = JSON.stringify(ProductObj);
    console.log(ProductObj);

    fs.readFile("application/test.json", (err, data) => {
        if (err) {
            console.log("There is An Error");
        }
        ArrayProduct = JSON.parse(data);
        ArrayProduct = JSON.stringify(ArrayProduct);
        console.log("1", ArrayProduct);
        ArrayProduct.push(ProductObj);
        console.log(ArrayProduct);
    });


    // fs.writeFile("application/test.json", JSON.stringify(ArrayProduct), function(err) {
    //     if (err) {
    //         console.error(err);
    //         return 1;
    //     }
    // });

}

SaveProduct("AMolo", "delicie", 10202, 2);



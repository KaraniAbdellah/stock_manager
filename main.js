// - JSON.parse => Convert JSON To JS Object
// - JSON.stringify => Convert JS Object To JSON

/*
    The method accepts three parameters as mentioned
    above and described below:  

    - file_path: It holds the file’s name to read or the 
        entire path if stored at another location.
    - encoding: It holds the encoding of the file.
        Its default value is ‘utf8’.

    - callback_function: A callback function is called after
        reading the file. It takes two parameters:
        err: If any error occurred.
        data: Contents of the file.
*/

const fs = require("./application/test.json");
console.log(fs);

// fs.readFile("./application/test.json", "utf8", callback_fucntion) {

// }





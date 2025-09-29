const fs = require("fs");
function read(){
    return new Promise(function(resolve){
        fs.readFile("hello.txt", "utf-8", function(err,data){
            resolve(data);
        });
    })
}
(async ()=>{
    const val = await read();
    console.log(val); 
}) ();

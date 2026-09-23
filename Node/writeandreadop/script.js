// console.log("Hey Bhaii");
// console.log("Wassup BhAAi")
const fs=require("fs");

fs.writeFile("Hello.txt",("Hello world"),(err)=>{
    if(err) throw err
    console.log("The file has sucessfuly created");
    
})

fs.readFile("Hello.txt","utf-8",(err,data)=>{
    if(err) throw err
    // console.log(data.toString());
    console.log(data);
    // console.log(data.toJSON());
});

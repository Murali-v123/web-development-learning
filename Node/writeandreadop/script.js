// console.log("Hey Bhaii");
// console.log("Wassup BhAAi")
// const fs=require("fs");
import fs from "fs"

fs.writeFile("Hello1.txt",("Hello world, hey wassup how are you guys doing"),(err)=>{
    if(err) throw err
    console.log("The file has sucessfuly created");
    
    fs.readFile("Hello1.txt","utf-8",(err,data)=>{
        if(err) throw err
        // console.log(data.toString());
        console.log(data);
        // console.log(data.toJSON());
    })
});

// fs.writeFile("Hello.txt",("Hello world"),(err)=>{
//     if(err) throw err
//     console.log("The file has sucessfuly created");
    
// })

// fs.readFile("Hello.txt","utf-8",(err,data)=>{
//     if(err) throw err
//     // console.log(data.toString());
//     console.log(data);
//     // console.log(data.toJSON());
// });

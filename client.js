
const http=require("http")
const fs = require("ts")

const url="http://www.lpu.in"
http.get(url,(responce)=>{
responce.on("data",(chunk)=>{

    fs.writeFile("index.txt",chunk.toString(), ()=>
{


})
   
    
})
responce.on("end",()=>{
    console.log("End of the response from server")
})
}).on("error",(err)=>{
    console.error(err.message)
})



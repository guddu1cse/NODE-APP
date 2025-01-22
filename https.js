const http = require('http');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');
const path = require('path');
const PORT = 5000;

http.createServer((req , res)=>{
    console.log(req.url);
    if(req.url == "/home"){
        htmlBody(res);
    } else if(req.url == "/json"){
        jsonBody(res);
    }else if(req.url == "/uuid"){
        uuidBody(res);
    } else if(req.url.includes("delay")){
      const time = parseInt(req.url.substring(req.url.lastIndexOf("/")+1));
      delay(res , time);
    }
    else{
       help(res);
    }
}).listen(PORT , ()=> console.log("server is running now"));

async function htmlBody(res){

    const htmlContent = await fs.readFile(path.join(__dirname , "/index.html") , 'utf-8');
    res.writeHead(400 , {"content-type" : "text/html"});
    res.end(htmlContent);
}

async function jsonBody(res){
    const jsonData = await fs.readFile(path.join(__dirname , "/jsonBody.json") , 'utf-8');
    res.writeHead(200);
    res.end(JSON.stringify(JSON.parse(jsonData) , null , 2));
}

function uuidBody(res){
    const uuidBody = {
      uuidv4 : uuidv4()
    }
    console.log(uuidBody.uuidv4);
    res.writeHead(300);
    res.end(JSON.stringify(uuidBody , null , 2));
}

function help(res){
    const obj1 = {
        Home: "/home",
        JSON: "/json",
        UUID: "/uuid"
    }

    res.writeHead(404);
    res.end(JSON.stringify(obj1 , null , 2));
}

function delay(res , time){
  
  new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(`response delay ${time}`) , time * 1000);
  }).then((time)=>{
    res.writeHead(200);
    res.end(time);
  });
}
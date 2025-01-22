const http = require('http');
const { v4: uuidv4 } = require('uuid');
const PORT = 5000;

http.createServer((req , res)=>{
    console.log(req.url);
    if(req.url == "/home"){
        htmlBody(res);
    } else if(req.url == "/json"){
        jsonBody(res);
    }else if(req.url == "/uuid"){
        uuidBody(res);
    } else {
       help(res);
    }
}).listen(PORT , ()=> console.log("server is running now"));

function htmlBody(res){

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
        </head>
        <body style="color: orange; background-color: grey">
            <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
            <br>
            <p> - Martin Fowler</p>

        </body>
        </html>
    `;


    res.writeHead(400 , {"content-type" : "text/html"});
    res.end(htmlContent);
}

function jsonBody(res){

    const jsonData = `{
  "slideshow": {
    "author": "Yours Truly",
    "date": "date of publication",
    "slides": [
      {
        "title": "Wake up to WonderWidgets!",
        "type": "all"
      },
      {
        "items": [
          "Why <em>WonderWidgets</em> are great",
          "Who <em>buys</em> WonderWidgets"
        ],
        "title": "Overview",
        "type": "all"
      }
    ],
    "title": "Sample Slide Show"
  }}`;

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
const http = require('http');
const { v4: uuidv4 } = require('uuid');


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
}).listen(5000 , ()=> console.log("server is running now"));

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


    res.writeHead(200 , {"content-type" : "text/html"});
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
    const uniqueId = uuidv4();
    console.log(uniqueId);
    res.end(uniqueId);
}

function help(res){
    const obj1 = {
        Home: "/home",
        JSON: "/json",
        UUID: "/uuid"
    }

    res.end(JSON.stringify(obj1 , null , 2));
}
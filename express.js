
require('dotenv').config();
const express = require('express');

const app = express();

app.get('/home/:message/:now' , (req , res)=>{
    const prams = req.params
    const requestParam = req.query;
    console.log(requestParam);
    console.log(prams);
    res.end(`path variables => ${Object.values(prams)} \n request prams => ${Object.values(requestParam)}`);
});

const PORT = process.env.PORT || 4041;
const PORT2 = process.env.PORT2 || 4043;
app.listen(PORT , ()=> console.log(`server started at ${PORT}`));
app.listen(PORT2 , ()=> console.log(`server started at ${PORT2}`));
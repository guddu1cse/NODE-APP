require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/home/:message/:now' , (req , res)=>{
    const prams = req.params
    const requestParam = req.query;
    const reqData = req.body || {Body :[req.body]};
    console.log(reqData);
    console.log(requestParam);
    console.log(prams);
    res.end(`path variables => ${Object.values(prams)} \nrequest prams => ${Object.values(requestParam)} \n Body => ${Object.entries(reqData)}`);
});

const PORT = process.env.PORT || 4041;
const PORT2 = process.env.PORT2 || 4043;
app.listen(PORT , ()=> console.log(`server started at ${PORT}`));
app.listen(PORT2 , ()=> console.log(`server started at ${PORT2}`));
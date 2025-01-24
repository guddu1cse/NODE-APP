require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/home/:id/:name' , (req , res)=>{
    console.log(`${req.protocol}//${req.get('host')}${req.originalUrl}`);
    const prams = req.params
    const requestParam = req.query;
    const reqData = req.body || {Body :[req.body]};
    console.log(reqData);
    console.log(requestParam);
    console.log(prams);
    setTimeout(()=>{
        
        res.status(requestParam.status);
        res.json({
            pathParams: prams,
            queryParams: requestParam,
            bodyData: reqData,
            fullUrl: `${req.protocol}//${req.get('host')}${req.originalUrl}`,
        });

    }, requestParam.delay * 1000);
});

const PORT = process.env.PORT || 4041;
const PORT2 = process.env.PORT2 || 4043;
app.listen(PORT , ()=> console.log(`server started at ${PORT}`));
app.listen(PORT2 , ()=> console.log(`server started at ${PORT2}`));
var express = require('express')
var app = express()
'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('customer.json');
let customer = JSON.parse(rawdata);
console.log(customer);

app.get('/', function (_req, res){
    res.send("Cafe - Sweet Desserts")
})

app.get('/customers', function (_req, res){
    res.end(JSON.stringify(customer))
})

app.get('/customers/:id/addons', function (req, res){
    var id = req.params.id
    console.log(customer["customer"+id]);
    const customerDtls = customer["customer"+id];
    const addons = customerDtls.addons;
    console.log(addons);
    res.end(JSON.stringify(addons));
   // response.send["users"+resquest.params.id]
    

})

app.get('/customers/:id', function (req, res){
    var customers = JSON.parse(rawdata)
    var customer = customers["customer"+req.params.id]

    res.end(JSON.stringify(customer))
})
app.get('/customers/:id/addons/:addId', function (req, res){
    var id = req.params.id;
    var addId = req.params.addId;
    console.log("This is home",id, addId);

    
    const customerDtls = customer["customer"+id];
    const addons = customerDtls.addons;
    const addName = addons[addId.toString()];
    if(addName){
        res.end(addName);
    }else{
        res.end("No dessert available for today!");
    }
    
})
app.listen(3000, function(){
    console.log("server has been started")
})
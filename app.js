const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");

const app = express();
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){

   
    /*res.render("index", {abc: "hello"});*/
    request("https://api.wazirx.com/api/v2/tickers", function(error, response, body){
     
        var data = JSON.parse(body);
        var name = data.btcinr.name;
        var last = data.btcinr.last;
        var buy = data.btcinr.buy;
        var sell = data.btcinr.sell;
        var volume = data.btcinr.volume;
        var base_unit = data.btcinr.base_unit;
        var name1 = data.xrpinr.name;
        var last1 = data.xrpinr.last;
        var buy1 = data.xrpinr.buy;
        var sell1 = data.xrpinr.sell;
        var volume1 = data.xrpinr.volume;
        var base_unit1 = data.xrpinr.base_unit;
         res.render("index", {name: name, last : last, buy: buy, sell: sell, volume: volume, base_unit: base_unit,
            name1: name1, last1 : last1, buy1: buy1, sell1: sell1, volume1: volume1, base_unit1: base_unit1});
         
    });
});


app.listen(3000,function()
{
    console.log("server is running on port 3000");
});
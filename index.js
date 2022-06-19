const express = require('express');
const ejs = require("ejs");

const app= express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );




    // -------------Certificate section----------------- 
  
  

app.get("/",function(req,res){
    res.render(__dirname + "/views/index")
})


app.listen(process.env.PORT || 3000,function(){
    console.log ("connected to port 3000")
});



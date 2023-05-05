var express = require('express');
var app = express();
var hbs = require('hbs');

const path = require('path');
const port = 5000;

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

// built-in middleware
app.use(express.static(staticPath));

app.set('view engine', 'hbs')

app.set("views", templatePath);

hbs.registerPartials(partialPath);

app.get("/" , (req,res)=>{
    res.render("index" ,{
        channelName : "elonify"
    });
});

app.get('/about',(req,res)=>{
   res.render("about");
});

app.get('/contact',(req,res)=>{
    res.render("contact");
 });

app.get('/video',(req,res)=>{
    res.render("video");
 });

app.get('*',(req,res)=>{
    res.render("404");
 });

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})
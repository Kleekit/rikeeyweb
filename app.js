const express = require('express')
var path = require('path');
const app = express();
const port = 7000;
// view engine setup
 
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/asset'));
app.use(express.static(__dirname + '/node_modules'));

 

app.get('/',function (req, res) {
    res.locals.title = "RIKEEY'S HOME";  
    res.render('landing')
});






app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));
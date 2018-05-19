const express = require('express');
const path = require('path');

const app = express();

//Configure port for both Heroku and localhost
const port = process.env.PORT || 5000;

//Create path to public folder
const publicPath = path.join(__dirname, '../public');

//Configure express static middleware to use public folder
app.use(express.static(publicPath));

//console.log(__dirname + '/../public');
//console.log(publicPath);

//Start up express server on port 5000
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});


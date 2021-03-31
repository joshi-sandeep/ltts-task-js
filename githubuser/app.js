const express = require('express');
const axios = require('axios');
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
app.use(express.static(__dirname + '/public'));
app.use( express.static( "views" ) );


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); 

app.get('/', (req, res)=>{
    axios.get('https://api.github.com/users')
      .then(response=>{
        res.render('gituser', {posts : response.data})

      })
  })

  

app.listen(3000);
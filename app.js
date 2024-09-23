const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extender:true}));
app.use('/', routes);
app.use(express.static('public'));

app.listen(8001, ()=>{
    console.log('server initialized on http://localhost:8001');

})
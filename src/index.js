const express = require('express')
const app = express()
const port = 3001

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/images')); //

app.get('/', function(req, res){
    express.static(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + '/dist/feenixia'));
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/feenixia/index.html'));
})

app.listen(process.env.PORT);

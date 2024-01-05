var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("welcome");
});


app.listen(8000);
console.log("Server is running");       
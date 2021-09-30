const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

// Index 

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("the result of the calculation is " + result);
})

// BMI calculator

app.get("/bmicalculator", function(req, res) {
  res.sendfile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var result = weight + height;
  res.send("Your BMI is: " + result);

});

app.listen(3000, function() {
  console.log("server started on port 3000");
});

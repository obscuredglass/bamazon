// imports
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.DB_PW,
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  start();

});

function start() {
  inquirer
    .prompt({
      name: "buySomething",
      type: "list",
      message: "Would you like to like to buy today",
      choices: ["BUY", "EXIT"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.buySomething === "BUY") {
        buyItem();
      }
      else if(answer.buySomething === "EXIT") {
        connection.end();;
      }
    });
}








// // variables

// var table = new table;

// results.forEach (function(product)
//   table.cell()


// )
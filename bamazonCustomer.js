// imports
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

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

  // Displays list of available products.
  displayItems();

});

// Displays all available Items.
function displayItems() {

  //show all ids/names/products from database.

  connection.query('SELECT * FROM Products', function(error, response) {
      if (error) { console.log(error) };
      
      var displayTable = new Table({
          //declare categories
          head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
          //set widths to scale
          colWidths: [10, 30, 18, 10, 14]
      });
      //for each row of the loop
      for (i = 0; i < response.length; i++) {
          //push data to table
          displayTable.push(
              [response[i].ItemID, response[i].ProductName, response[i].DepartmentName, response[i].Price, response[i].StockQuantity]
          );
      }
      //log the completed table to console
      console.log(displayTable.toString());
      buySomething();
  });


};

function buySomething() {
  inquirer
  .prompt([
    {
      name: "item",
      type: "input",
      message: "Please enter the item number"
    },
    {
      name: "item",
      type: "input",
      message: "Please enter the quantity"
    },
}







// // variables

// var table = new table;

// results.forEach (function(product)
//   table.cell()


// )
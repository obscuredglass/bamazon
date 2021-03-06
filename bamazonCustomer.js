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
  password: "",
  
  database: "bamazon_db"
});

// connection.connect(function(err) {
//   if (err) throw err;

//   // Displays list of available products.
//   displayItems();

// });

// Displays all available Items.
function displayItems() {

  //show all ids/names/products from database.

  connection.query('SELECT * FROM Products', function(error, response) {
      if (error) { console.log(error) };
      
      var displayTable = new Table({
          //declare categories
          head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
          //set widths of displays
          colWidths: [10, 24, 20, 15, 19]
      });
      //for each row of the loop
      for (i = 0; i < response.length; i++) {
          //push data
          displayTable.push(
              [response[i].ItemIDs, response[i].product_name, response[i].department_name, response[i].price, response[i].stock_quantity]
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
      name: "ID",
      type: "input",
      message: "Please enter the item number"
    },
    {
      name: "quantity",
      type: "input",
      message: "Please enter how many you would like to buy"
    },
  ]).then(function(answer) {
    var quantityWant = answer.quantity;
    var IDWant = answer.ID;
    buyFromStore(IDWant, quantityWant);
  });

// end buySomething
};
// check to make sure we have enough in stock and also total cost
function buyFromStore(ID, quantityHave) {
connection.query ("SELECT * FROM products WHERE ItemIDs =" + ID, function(error, response) {
if (error) throw err;

if (quantityHave <= response[0].stock_quantity) {
// calc cost
var total = response[0].price * quantityHave;

console.log("Thanks for choosing this item! Great choice!");
console.log("Your total cost for " + quantityHave + " " + response[0].product_name + " is " + total + ". Thank you for purchase!"); 
connection.query('UPDATE Products SET stock_quantity = stock_quantity - ' + quantityHave + ' WHERE ItemIDs = ' + ID);
        } else {
            console.log("Our apologies. We don't have enough " + response[0].product_name + " to fulfill your order.");
        };
        displayItems();
    });

}; //end of buyFromStore
displayItems();
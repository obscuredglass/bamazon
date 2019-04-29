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

  // Displays list of available products.
  displayItems();

});

// Displays list of all available Items.
var displayItems = function() {
	var query = "Select * FROM products";
	connection.query(query, function(err, res) {

		if (err) throw err;

		for (var i = 0; i < res.length; i++) {
			console.log("Product ID: " + res[i].item_id + " || Product Name: " +
						res[i].product_name + " || Price: " + res[i].price);
		}

		// Requests product and number of product items user wishes to purchase.
  		requestProduct();
	});
};



function placeOrder() {
  inquirer
    .prompt({
      name: "buySomething",
      type: "list",
      message: "Please enter the product ID",
      choices: ["BUY", "HOW MANY", "EXIT"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.buySomething === "BUY") {
        buyItem(answer.buySomething === "HOW MANY");
      }
      else if(answer.buySomething === "EXIT") {
        connection.end();;
      }
    });
}

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
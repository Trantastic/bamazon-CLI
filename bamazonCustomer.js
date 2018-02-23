var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon_db"
});

connection.connect(function(error){
	if(error){
		console.log("Error occurred: " + error);
	}
});

function displayInv(){
	connection.query("SELECT * FROM inventory", function(err, res){
		// Console.logs all the products in bamazon_db in an easier to read format
		for(var i = 0; i < res.length; i++){
			console.log("====================================\n");
			console.log("Product ID: " + res[i].id);
			console.log("Product: " + res[i].products);
			console.log("Catergory: " + res[i].department_name);
			console.log("Price: $" + res[i].price);
			console.log("Quantity Left: " + res[i].stock_quantity + "\n");
		}
		
	});

// Prompts user for what product they wish to purchase and quantity
function start(){
	inquirer.prompt([
		{
			type: "input",
			message: "Specify the ID of the product you wish to purchase",
			name: "id",
			validate: function(value){
				if(isNaN(value) === false){
					return true;
				}
				else{
					return false;
				}
			}
		},
		{
			type: "input",
			message: "How many units?",
			name: "qty",
			validate: function(value){
				if(isNaN(value) === false){
					return true;
				}
				else{
					return false;
				}
			}
		}
	]).then(function(answer){
		connection.query("SELECT * FROM inventory WHERE ?", [{id: answer.id}], function(err, res){
			if(err){
				console.log("Error occurred: " + err);
			}
			// If product quantity is sufficient console.logs purchase success and the purchase total
			else if(res[0].stock_quantity >= answer.qty){
				var newQty = (res[0].stock_quantity - answer.qty);
				var total = parseFloat(res[0].price * answer.qty).toFixed(2);

				// Updates bamazon_db to reflect user purchasing the product
				connection.query("UPDATE inventory SET ? WHERE ?", [{stock_quantity: newQty}, {id: answer.id}], function(err, res){
					console.log("Purchase successful!");
					console.log("Your total is: $" + total);
				});
				promptUser();
			}
			else{
				console.log("Insufficient stock!");
			}
		});
	});
}

// Prompts user if they wish to buy more products or exit the program
function promptUser(){
	inquirer.prompt([
		{
			type: "list",
			message: "Would you like to buy more products?",
			name: "userAnswer",
			choices: ["yes", "no"]

		}
	]).then(function(answer){
		switch(answer.userAnswer){
			case "yes":
				showInv();
				start();
				break;
			case "no":
				console.log("Good Bye.");
				connection.end();
				break;
			default:
				console.log("Please enter yes or no");
				promptUser();
				break;
		}
	});
}








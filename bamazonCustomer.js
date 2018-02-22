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
	showInv();
});

function showInv(){
	connection.query("SELECT * FROM inventory", function(err, res){
		console.log(res);
	});
}

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
		// Conditional to check if product is in stock
			// If in stock run function to UPDATE 
			// Console.log(success + their cost total)
			// If not in stock console.log(insufficient stock)
		else if(res[0].stock_quantity >= answer.qty){
			purchase();
			console.log("This product is available!");
		}
		else{
			console.log("Insufficient stock!");
		}
	});
});

function purchase(){
	connection.query("UPDATE ")
}










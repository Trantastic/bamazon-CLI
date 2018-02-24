# bamazon-CLI
This is a command-line interface (CLI) app that displays an inventory that users can view and purchase products from. I built this to learn about Node.js.

## Getting Started

__Requirements__

To install the necessary node packages, navigate to the folder where you cloned this and type into your terminal: 
```
node install
```

Populate the database by typing into your terminal (input your own login and password if you know it):
```
mysql -u root -p
```
then run the schema file...
```
source schema.sql
```
and lastly type _exit_ to exit out of mysql


To run app, type into your terminal:
```
node bamazon-CLI.js
```

__Demo of Bamazon__

![](https://github.com/Trantastic/bamazon-CLI/blob/master/images/bamazon1.gif)

## Built With

* Node.js
* [MySQL](https://www.npmjs.com/package/mysql)
* [Inquirer](https://www.npmjs.com/package/inquirer)

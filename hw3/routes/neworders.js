/*
responds to /neworders by creating and insert sql query command
HW5 by Stelios Papoutsakis CS 341 02/10/2020
*/
var express = require('express');
var router = express.Router();
const db = require('./dbms');
const intl = require('intl');
router.post('/', function(req, res, next) {
	//get number of entries in database, used to generate orderid param
	let query_str = 'SELECT COUNT(*) FROM ORDERS'  
	let orderid;
	db.dbquery(query_str, (err, result) => {
		if (!err) {
			orderid = result[0]['COUNT(*)'];;
			let day = new Intl.DateTimeFormat("en-US",{day: 'numeric'}).format(new Date());
			let month =  new Intl.DateTimeFormat("en-US",{month: 'short'}).format(new Date()).toUpperCase();
			let topping_uppercase = req.body.topping.toUpperCase();
			let notes = (req.body.notes)? '"'+ req.body.notes + '"' : '""';
			query_str = `INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES)
						VALUES (${orderid}, \"${month}\", ${day}, ${req.body.quanity}, \"${topping_uppercase}\", ${notes});`
		db.dbquery(query_str, (err, result) => { if (err) { console.log(err); } else {res.json('success');} });
		} else {
			console.log(err);
		}
	});		
			
});

module.exports = router;

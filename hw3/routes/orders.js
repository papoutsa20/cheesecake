/*
responds to /orders with a static json
HW4 by Stelios Papoutsakis CS 341 02/10/2020
*/
var express = require('express');
var router = express.Router();
const db = require('./dbms');
router.post('/', function(req, res, next) {
	let query_str = "SELECT * FROM ORDERS WHERE Month = '"+ req.body.month + "';";
	db.dbquery(query_str, (err, result) => {
		if (!err) {
			res.send(result);	
		} else {
			console.log(err);
		}
	});			
});

module.exports = router;

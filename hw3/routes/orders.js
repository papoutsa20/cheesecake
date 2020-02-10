/*
responds to /orders with a static json
HW4 by Stelios Papoutsakis CS 341 02/07/2020
*/
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.json(
   [
		{ 
			"topping": "cherry",
			"quantity": 2
		},
	    { 
			"topping": "chocolate",
			"quantity": 8
		},
	    { 
			"topping": "cherry",
			"quantity": 90
		},
	    { 
			"topping": "plain",
			"quantity": 4
		},
	    { 
			"topping": "cherry",
			"quantity": 1
		},
	    { 
			"topping": "cherry",
			"quantity": 3
		}

  ]);
 });

module.exports = router;

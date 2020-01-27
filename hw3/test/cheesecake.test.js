/**
CS 341 HW 3 Spring 2020
by Stelios Papoutsakis
Test that if order button is clicked,
the table tag that has the selector and radio buttons
**/

var fs = require('fs');

test('test header 1 value', () => {
	var html = fs.readFileSync('public/index.html', 'utf8')
	expect(html).toEqual(expect.anything());

	//test 1
	document.body.innerHTML = html;
	const $ = require('jquery');
	expect($('h1').html()).toBe("Cheesecake Order Form");

});

test('pressing order button', () => {
	var html = fs.readFileSync('public/index.html', 'utf8')
	expect(html).toEqual(expect.anything());
	document.body.innerHTML = html;
	const $ = require('jquery');
	//test 2
	expect($("table").length === 1);
	$("#order").click();
	expect($("table").length === 0);
});

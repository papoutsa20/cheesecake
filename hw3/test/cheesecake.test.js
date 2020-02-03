/**
CS 341 HW 3 02/04/2020 
by Stelios Papoutsakis
tests that check the text of the h1 and button
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

test('check button text', () => {
	var html = fs.readFileSync('public/index.html', 'utf8')
	expect(html).toEqual(expect.anything());
	document.body.innerHTML = html;
	const $ = require('jquery');
	//test 2
	expect($("#order").text()).toBe("Order");
});

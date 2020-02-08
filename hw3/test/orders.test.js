//CS 341 HW4 By Stelios Papoutsakis 02/07/2020
// Test json reponse and sees if it matches the expected json  
const http = require('http');
let server;
let options = {
	host: 'localhost',
	path: '/orders',
	port: 3000,
	method: 'POST'
}
/**
External Citation
	Date: 2/07/2020
	Problem: Need a way to start and end server for testing 
	Resource: https://jestjs.io/docs/en/setup-teardown
	Solution: Used the code here to learn about the beforeAll() and afterAll() functions
**/

beforeAll( () => {
	server = app.listen(3000);
});
afterAll(() => {
	if (server !== null) {
		server.close();
	}
});

const app  = require('../app');
test('Return Json should match expected Json', done  => {
	let expected_json = [
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

  ];
		
		 http.get(options, (resp) => {
			   expect(resp.statusCode).toBe(200);
		 	   let data = '';
		 	   	//chunk of data has been received 
		 	   	resp.on('data', (chunk) => {
		 	   		data += chunk;
		 	   	});
				//when this fires, all the data has been received
		 	   	resp.on('end', () => {
					// only care about data parameter in json
		 	   		let data_recived = JSON.parse(data);
					// tests to see if shape of response matches expected
					//expect(data_recived.data).toBe(expect.anything());
			 		expect(data_recived.data.length).toBe(expected_json.length);
					for (let i = 0; i < data_recived.data.length; i++) {
						expect(expected_json[i].topping).toBe(data_recived.data[i].topping);
						expect(expected_json[i].quantity).toBe(data_recived.data[i].quantity);
					}
		 	   	 	done();
		 	   	});
 	 });
});





		


			

const operations = require('./arith');

test('adds 2 + 3 to get 5', () => {
	expect(operations.addition(2, 3)).toBe(5);
});

test('subtracts 5-2 to get 3', () => {
	expect(operations.subtraction(5, 2)).toBe(3);
});

test('multiplies 5*3 to get 15', () => {
	expect(operations.multiplication(5, 3)).toBe(15);
});

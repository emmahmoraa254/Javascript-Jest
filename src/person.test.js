const Person = require('./person');

describe('Person', () => {
	const person = new Person('tt', 'dd');

	test('defines fullName()', () => {
		expect(typeof person.fullName).toBe('function');
	});

	test('full name returns the correct value', () => {
		expect(person.fullName()).toBe('tt dd');
	});

	test('fullName() is called with arguments', () => {
		// prepare a spy for the person.fullName() method.
		const fullNameSpy = jest.spyOn(person, 'fullName');

		// create a mock rule for use as a function argument
		const trueName = jest.fn(() => true);

		const result = person.fullName('true', trueName);

		// expect(result).toBeUndefined();

		// check the spy if the method was called correctly
		expect(fullNameSpy).toHaveBeenCalledWith('true', trueName);

		// restore the mock and revert the original implementation
		fullNameSpy.mockClear();
	});
});

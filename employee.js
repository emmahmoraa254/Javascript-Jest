const Person = require('./person');

class Employee extends Person {
	constructor(firstName, lastName, employeeNo) {
		super(firstName, lastName);
		this.employeeNo = employeeNo;
	}
}

let emp = new Employee('Emmah', 'Moraa', '1234');

console.log(emp.fullName());

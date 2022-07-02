const Person = require('./person');

class Student extends Person {
	constructor(firstName, lastName, studentId) {
		super(firstName, lastName);
		this.studentId = studentId;
	}
}

s1 = new Student('Emmah', 'Moraa', '02');

console.log(s1.fullName());

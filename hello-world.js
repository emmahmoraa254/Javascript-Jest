// function consoleMarks() {
// 	let marks = 55;

// 	if (marks > 50) {
// 		console.log('Pass');
// 	} else {
// 		console.log('fail');
// 	}

// 	marks = [65, 70, 85, 90];

// 	for (let i = 0; i < marks.length; i++) {
// 		console.log(marks[i]);
// 	}

// 	marks.forEach((mark) => {
// 		console.log(mark);
// 	});
// }

const consoleMarks = () => {
	let marks = 55;

	if (marks > 50) {
		console.log('Pass');
	} else {
		console.log('fail');
	}

	marks = [65, 70, 85, 90];

	for (let i = 0; i < marks.length; i++) {
		console.log(marks[i]);
	}

	marks.forEach((mark) => {
		console.log(mark);
	});
};

// show the results
consoleMarks();

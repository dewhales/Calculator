function Addition () {
	let first = prompt ("Enter First Number");
	let second = prompt ("Enter Second Number");
	let sum = Number (first) + Number (second);
	alert ("Sum\n\t= " + sum);
}

function Subtraction () {
	let first = prompt ("Enter First Number");
	let second = prompt ("Enter Second Number");
	let subtraction = Number (first) - Number (second);
	alert ("Subtraction\n\t= " + subtraction);
}

function Multiplication () {
	let first = prompt ("Enter First Number");
	let second = prompt ("Enter Second Number");
	let multiplication = Number (first) * Number (second);
	alert ("multiplication\n\t= " + multiplication);
}

function Division () {
	let first = prompt ("Enter First Number");
	let second = prompt ("Enter Second Number");
	let division = Number (first) / Number (second);
	alert ("Division\n\t= " + division);
}

function power () {
	let first = prompt ("Enter Number Below:");
	let power = prompt ("Enter Power Below:");
	let result = Number (first) ** Number(power);
	alert (first + " raised to power of " + power + "\n\t= " + result);
}


function Modulus () {
	let first = prompt ("Enter First Number");
	let second = prompt ("Enter Second Number");
	let remainder = Number (first) % Number (second);
	let quotient = (Number (first) % 2);
	let modulus1 = (Number (first) / Number (second));
	let divide = ((first - remainder) % 2);
	let modulus2 = (Number (first - remainder) / Number (second))
	if (quotient === 0) {
	alert ("Quotient is:\n= " + modulus1 + "\n Remainder = " + remainder);
	} else {
	alert ("Quotient is:\n\t= " + modulus2 + "\n Remainder = " + remainder);
	}
}

function launchCalculator() {
	alert("Welcome to the Multipurpose Scientific Calculator\n\tNote:\nThis Calculator is Designed by Adewale\n This Calculator is designed to only Add, Subtract, Multiply, Divide, calculate the value of numbers raised to certain 'power' and for Modulus/Remainders.");

	let operator = prompt("Enter the appropriate Symbol from the options below to; 'Add', 'Subtract', 'Multiply', 'Divide', 'power' and 'Modulus/Remaideer', Respectively;\n ' + '   for    Addition\n ' - '    for   Subtraction\n ' * '    for   Multiplication\n ' / '    for   Division\n 'pow'  -   power\n ' % '    for   Modulus");

	if (operator === "+") {
		Addition ()
		alert ("Thanks for Using my Calculator for Addition!");
	} else if (operator === "-") {
		Subtraction ()
		alert ("Thanks for Using my Calculator for Subtraction!");
	} else if (operator === "*") {
		Multiplication ()
		alert ("Thanks for Using my Calculator for Multiplication!");
	} else if (operator === "/") {
		Division ()
		alert ("Thanks for Using my Calculator for Division!");
	} else if (operator === "%") {
		Modulus ()
		alert ("Thanks for Using my calculator for Modulus/Remainder");
	} else if (operator === "pow") {
		power ()
		alert ("Thanks for Using my Calculator for power!");
	} else {
		alert ("Syntax Error!\n Please 'Refresh page' and try entering any of the symbols provided...\nThanks!!!");
	}
}


let button = document.querySelector('.animated');
button.addEventListener('click', launchCalculator);
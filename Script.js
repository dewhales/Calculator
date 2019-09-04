/*Color picker for background generator*/
let blockQuote = document.querySelector('blockquote');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body');

const SETGRADIENT = () => {
	body.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
	blockQuote.textContent = body.style.background;
}

color1.addEventListener('input', SETGRADIENT);
color2.addEventListener('input', SETGRADIENT);









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

	let operator = prompt("Enter the appropriate Symbol from the options below to; 'Add', 'Subtract', 'Multiply', 'Divide', 'calculate value of Numbers power' and 'calculate Modulus/Remaideer', Respectively;\n ' + '   for    Addition\n ' - '    for   Subtraction\n ' * '    for   Multiplication\n ' / '    for   Division\n 'pow'  -   power\n ' % '    for   Modulus");

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
		alert ("Syntax Error!\n Please click the 'launch calculator' and try entering any of the symbols provided...\nThanks!!!");
	}
}


let button = document.querySelector('.animated');
button.addEventListener('click', launchCalculator);






const PI = document.querySelector('#input1').value;
let answerButton = document.querySelectorAll('button')[4];

/*Calculate Area formular(PI.r2)*/
const findValueOfArea = () => {
	let radius = document.querySelector('#input2').value;
	let val = Number(PI) * (Number(radius **2));
	let area = document.querySelector('#input3').setAttribute('value', val);
}

/*Find Radius of the Circle Using the value of Area*/
const findValueOfRadiusA = () => {
	let area = document.querySelector('#input3').value;
	let val = Math.sqrt(Number(area) / Number(PI));
	let radius = document.querySelector('#input2').setAttribute('value', val);
}

/*Find Circumference of the Circle using formular(2.PI.r)*/
const findValueOfCircumference = () => {
	let radius = document.querySelector('#input2').value;
	let area = document.querySelector('#input3').value;
	let val = 2 * (Number(PI) * Number(radius));
	let circumference = document.querySelector('#input4').setAttribute('value', val);
}

/*Find Radius of the Circle Using the value of Circumference*/
const findValueOfRadiusC = () => {
	let circumference = document.querySelector('#input4').value;
	let val = Number(circumference) / Number(2 * Number(PI));
	let radius = document.querySelector('#input2').setAttribute('value', val)
}

/*Find the missing variable in the given Circle ON CLICK.*/
const finalAnserOnClick = () => {
	let radius = document.querySelector('#input2').value;
	let area = document.querySelector('#input3').value;
	let circumference = document.querySelector('#input4').value;
	if (Number(radius) > 0) {;
		findValueOfArea();
		findValueOfCircumference();
	} else if (Number(area) > 0) {
		findValueOfRadiusA();
		findValueOfCircumference();
	} else if (Number(circumference) > 0) {
		findValueOfRadiusC();
		findValueOfArea();
	}
}

answerButton.addEventListener('click', finalAnserOnClick);
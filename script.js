function add(a, b) {
	console.log(a + b)
	return a + b
}

function subtract(a, b) {
	console.log(a - b)
	return a - b
}

function multiply(a, b) {
	console.log(a * b)
	return a * b
}

function divide(a, b) {
	console.log(a / b)
	return a / b
}

function operate(operator, firstNumber, secondNumber) {
	switch (operator) {
		case "+":
			add(firstNumber, secondNumber)
			break
		case "-":
			subtract(firstNumber, secondNumber)
			break
		case "*":
			multiply(firstNumber, secondNumber)
			break
		case "/":
			divide(firstNumber, secondNumber)
			break
	}
}

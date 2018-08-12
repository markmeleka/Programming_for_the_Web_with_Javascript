/*
 * Implement all your JavaScript in this file!
 */

var mostRecentInputs = {input1: "", 
						input2: "", 
						operator: ""};

var input1 = "";
var input2 = "";
var operator = null;

$('[id^=button]').click(function(){
	if (operator === null) {
		input1 += $(this).val();
		$('#display').val(input1);
	}
	else {
		input2 += $(this).val();
		$('#display').val(input2);
	};
});

$('#clearButton').click(function(){
	input1 = "";
	input2 = "";
	operator = null;
	$('#display').val(input1);
});

function calculateDisplayReset(input1,input2,operator){
	result = operator(input1,input2);
	$('#display').val(result);
	if(isFinite(result)){
		return {input1: result, 
				input2: "", 
				mostRecentInputs: {input1: input1, 
								   input2: input2, 
								   operator: operator}
		};
	}
	else {
		return {input1: "", 
				input2: "", 
				mostRecentInputs: {input1: input1,
								   input2: input2,
								   operator: operator}};
	};
};

$('#addButton').click(function(){
	if(operator !== null && input2 !== ""){
		inputs = calculateDisplayReset(input1,input2,operator);
		input1 = inputs.input1;
		input2 = inputs.input2;
		mostRecentInputs = inputs.mostRecentInputs;
	};
	// operator = (input1,input2) => Number(input1) + Number(input2);
	operator = function add(input1,input2){
		return Number(input1) + Number(input2);
	};
});

$('#subtractButton').click(function(){
	if(operator !== null && input2 !== ""){
		inputs = calculateDisplayReset(input1,input2,operator);
		input1 = inputs.input1;
		input2 = inputs.input2;
		mostRecentInputs = inputs.mostRecentInputs;
	};
	// operator = (input1,input2) => input1 - input2;
	operator = function subtract(input1,input2){
		return Number(input1) - Number(input2);
	};
});

$('#multiplyButton').click(function(){
	if(operator !== null && input2 !== ""){
		inputs = calculateDisplayReset(input1,input2,operator);
		input1 = inputs.input1;
		input2 = inputs.input2;
		mostRecentInputs = inputs.mostRecentInputs;
	};
	// operator = (input1,input2) => input1 * input2;
	operator = function multiply(input1,input2){
		return Number(input1) * Number(input2);
	};
});

$('#divideButton').click(function(){
	if(operator !== null && input2 !== ""){
		inputs = calculateDisplayReset(input1,input2,operator);
		input1 = inputs.input1;
		input2 = inputs.input2;
		mostRecentInputs = inputs.mostRecentInputs;
	};
	// operator = (input1,input2) => input1 / input2;
	operator = function divide(input1,input2){
		return Number(input1) / Number(input2);
	};
});

$('#equalsButton').click(function(){
	if(operator !== null){
		if(input2 !== ""){
			inputs = calculateDisplayReset(input1,input2,operator);
			input1 = inputs.input1;
			input2 = inputs.input2;
			mostRecentInputs = inputs.mostRecentInputs;
		}
		//if user clicks "=", repeat last operation
		else if(mostRecentInputs.input2 !== ""){
			inputs = calculateDisplayReset(input1,mostRecentInputs.input2,operator);
			input1 = inputs.input1;
			input2 = inputs.input2;
			mostRecentInputs = inputs.mostRecentInputs;
		};
	};
});
const inputDate = document.querySelector("#input-date");
const inputNumber = document.querySelector("#input-number");
const checkButton = document.querySelector("#input-button");
const errMsg = document.querySelector(".err");
const resMsg = document.querySelector(".result-text");

const dateProcessor = (date) => date.replaceAll("-", "");
const dateSum = (date) => {
	var sum = 0;
	for (let i = 0; date != 0; i++) {
		sum += date % 10;
		date = Math.trunc(date / 10);
	}
	return sum;
};
const luckyDateChecker = (number, date) => {
	const sumOfDate = dateSum(date);
	if (sumOfDate % number === 0) {
		return true;
	} else {
		return false;
	}
};

const clickHandler = () => {
	const luckynumber = inputNumber.value;
	if (!(luckynumber==="") || !isNaN(luckynumber) ) {
		errMsg.innerText = "";
		const birthdate = dateProcessor(inputDate.value);
		if (luckyDateChecker(Number(luckynumber), Number(birthdate))) {
			resMsg.innerText = "Congratulations You have a Lucky Birthday!!";
		} else {
			resMsg.innerText = "Ah! You don't have a Lucky Birthday!!";
		}
	} else {
		errMsg.innerText = "!! Please enter Lucky number in digits !!";
	}
};

checkButton.addEventListener("click", clickHandler);

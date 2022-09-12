"use strict";

class Roman {
	constructor() {
		this.romanNumbers = ['',
		['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], 
		['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
		['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
		['', 'M', 'MM', 'MMM', 'MMMM']
	];
	}

	toRoman(numb) {
		let roman = [];
		let number = numb.toString();
	
		for (let i = number.length; i > 0; i--) {
			roman.push(this.romanNumbers[i][number[number.length - i]]);
		}
	
		return roman.join('');
	}

	fromRoman(roman) {

		let rezultNumber = '';
		let romanStr = roman.toUpperCase();
		let iDontKnowHowToUseBindMethod = this.romanNumbers;

		function oneOfGrade(string, index) {
			let grade = '';
			let str = '';
			for (let i = 0; i < string.length; i++) {
				str += string[i];
				iDontKnowHowToUseBindMethod[index].forEach(elem => {
					if (str === elem) grade = elem;
				})
			}
			return grade;
		}

		for (let i = 4; i > 0; i--) {
			let romanDigit = oneOfGrade(romanStr, i);
			rezultNumber += this.romanNumbers[i].indexOf(romanDigit);
			romanStr = romanStr.slice(romanDigit.length);
		}

		return +rezultNumber;
	}
}

const RomanNumerals = new Roman();


let inputTo = document.querySelector('#to');
let outputTo = document.querySelector('.to');
inputTo.oninput =  () => {
	outputTo.innerHTML = RomanNumerals.toRoman(inputTo.value);
};

let inputFrom = document.querySelector('#from');
let outputFrom = document.querySelector('.from');
inputFrom.oninput =  () => {
	outputFrom.innerHTML = RomanNumerals.fromRoman(inputFrom.value);
};
"use strict"

// 1) Написать функцию, которая на вход принимает строку, возвращает массив чисел, которые являются граничными,
 // то есть не внутри текста.
 
function checkNumbers(str){

		let checkReg = /(?<!\w)\d{1,}(?!\w)/g;

		let matchAll = str.matchAll(checkReg);
		matchAll = Array.from(matchAll);

		return matchAll
}

console.log(checkNumbers('ddd 12 fssdfd5 4 455 13ff'))

// 2) Написать функцию для валидации api v4 адреса и описать как она работает, что делает конкретный символ на конкретной позиции регулярного выражения

function checkIp(str){

	let testIp = str.match(/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g);
		let flag = false;

	// function checkNmb(){
	// 	let newIp = testIp.toString();
	// 	let newArray = newIp.split("." );

	// 	newArray.forEach(function(item){
	// 		// console.log(item)
	// 		if(item > 255){
	// 			flag = false
	// 			console.log(flag)
	// 			return flag
	// 		}else{
	// 			flag = true
	// 			return flag
	// 		}
	// 	})

	// }

	if(testIp != null ) {
		return true	
		
	} else {
		return false
	}
}

console.log(checkIp('127.0.0.0'))
console.log(checkIp('127.0.155.10'))
console.log(checkIp('127.0т155.10'))
console.log(checkIp('127.300.10.30'))
console.log(checkIp('007.30.10.0'))

// описание 

// 1. (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)
// 25[0-5]| тут мы смотрим, если число начинаетс на 25, то должно заканчиваться до 5-ти 
// ИЛИ 
// 2[0-4][0-9] если начинается на 2, то вторя цифра должна быть до 4-х , а третья может быть до 9-ти 
// ИЛИ 
// [01]?[0-9][0-9] если число может начинаться на 0 или 1 вторя цифра любая и третья может быть любая или никакой 
// \. после этого точка 
// и так 4 раза . Последний без точки в конце


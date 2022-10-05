// OPERATORS
// Операторы сравнения
// console.log('1 < 2', 1 > 2); // true
// console.log('2 > 1', 2 > 1); // true
// console.log('1 != 2', 1 != 2); // true
// console.log('1 <= 2', 1 <= 2); // true
// console.log('2 >= 1', 2 >= 1); // true

// результатом их выполнения boolean значение
















// Оператор присвоения
// let a = 'a';
// let b = 'b';

// console.log('a != b', a != b);
// console.log('a < b', a < b);

// console.log('catamaran' < 'code');
// console.log('catamaran' > 'cata');



// console.log( 100 === '100' ); // жесткое тождество - false
// console.log( 100 != '100' ); // приведение к типу - true ==

// console.log( 'Дарья' === 'Дарья' );
// != и == - приводят к одному типу
// !== и === - жесткое типизированное тождество







// console.log('2' > 1);
// console.log('01' == 1);

// console.log(true == '000000001');

// console.log(true == 1);
// console.log(false == 0);
// console.log(true == 2); // false

// console.log('' == false); // true
// console.log('' === false); // false
// console.log('' !== false); // true


// Условный оператор if else

// if () {} // базовый синтаксис условия

// if (/*условие*/) {
// 	// тело условия
// }



// let userAge = 19;

// if (userAge === 18) { // если userAge > 18 true то выполнить тело условия
// 	console.log('Ты выиграл приз!')
// } else if (userAge > 18) {
// 	console.log('Welcome, user')
// } else { // если userAge > 18 false
// 	console.log('Sorry, user')
// }











// let currentValue = null;

// if (currentValue) {
//  	console.log('Это положительное значение')
// } else if (typeof currentValue === 'string') {
// 	console.log('Это пустая строка...')
// } else {
//  	console.log('Это вообще мало того что false, так ещё и не строка даже')
// }


// let inputAge = '31';

// if (Number(inputAge) > 18) {
// 	console.log('Login!')
// }










// let number = -1;
// let str = '1';

// console.log(number + Number(str));

// if (number === str) {
//  console.log(number + str); // не попадаем
// } else {
//  console.log(number + Number(str)); // выполняется
// }

// console.log(null === undefined); // false
// console.log(null == undefined); // true

// let name = '';
// console.log(!!'a');






// LOGIC OPERATORS

// || - логическое ИЛИ
// && - логическое И
// ! - логическое НЕ

// let booleanResult = 1 !== 1 || 2 === 2; // true
// let booleanResult = 1 === 1 && 2 === 2; // true
// console.log(!booleanResult)



// console.log(1 === 1 || 2 === 2);
// console.log(1 === 1 || 2 !== 2);
// console.log(1 !== 1 || 2 === 2 || 3 === 3 || 4 === 4);
// console.log(1 !== 1 || 2 !== 2);

// console.log(1 === 1 && 2 === 2);
// console.log(1 === 1 && 2 !== 2);
// console.log(1 !== 1 && 2 === 2);
// console.log(1 !== 1 && 2 !== 2);

// let time = 14;

// if (time > 10 && time < 18) {
//     console.log('Office is open');
// } 

// console.log(undefined || null || '' || 0);

// let name = '666';
// let defaultName = 'null string';
// let currentName = 'Iron Man';

// console.log(name || defaultName || currentName || 'undefined name');
// console.log(name && currentName && defaultName);

// отработает при 0, '', false и не отработает при undefined/null
// let userName = false;
// console.log(false ?? 'Anonimus');





// IF ELSE

// if (condition_1) {
//     action_1;
// } else if (condition_2) {
// 	action_2;
// } else if (condition_3) {
// 	action_3;
// } else if (condition_4) {
// 	action_4;
// } else if (condition_5) {
// 	action_5;
// } else {
// 	action_default;
// }

// let currentYear = 2022;
// let year = 2024;

// if (currentYear === year) {
// 	console.log('Современность');
// } else if (currentYear > year) {
// 	console.log('Застряли в прошлом');
// } else {
// 	console.log('Убежали вперед');
// }

// if (2 === 1) console.log('Равны');
// console.log('Всегда выводится');

// 0, undefined, false, '', null, NaN - возвращают false
// if (0) {
// 	console.log('hello'); // Не выводится
// }

// let str = '';
// if (str !== 'ok') {
// 	console.log('test');
// }

// function isEven(number) {
//     return number % 2 === 0;
// }
// if ( !isEven(7) ) {}





// (condition) ? code_if_true : code_else

// let isLogin = false;
// isLogin 
// 	? console.log('Login!') // true
// 	: console.log('LogOut') // false


// let age = 20;
// let result = age >= 18 
// 							? 'Совершеннолетний'  // true
// 							: 'Слишком юн'; // false

// let result;
// if (age >= 18) {
// 	result = 'Совершеннолетний';
// } else {
// 	result = 'Слишком юн';
// } 

// console.log(result);


// let result =
// 	age > 18
// 		? 'Совершеннолетний'
// 		: age === 18
// 		? 'О! прекрассный возраст'
// 		: 'Слишком юн';







// Что выведет этот скрипт?

// let name = "Ilya";

// // console.log( `hello ${1}` ); // ?
// console.log( `hello ${"name"}` ); // ?
// console.log( `hello ${name}` ); // ?





		// Задача: 
		// 	- У нас есть новый дом на 1000 квартир
		// 	- 100 квартир купили в кредит
		// 	- 100 квартир купили за наличные
		// 	- 200 квартир арендовали
		// 	- Оставшиеся квартиры стоят пустые

		// 	- Сколько всего квартир уже занято?
		// 	- Сколько квартир ещё нужно занять?

		// 	- Чего больше занятых квартир или не занятых? (вывести значение в консоль)


		// 	- в зависимости от того каких квартир больше 
		// 	выводите в консоль сообщение об этом 'У нас больше пустых квартир' или 'У нас больше занятых квартир'
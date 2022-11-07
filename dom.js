// осмысленные данные
// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }

// function function_name(argument) {
// 	// body...
// }

// let customNumber = 4564;
// Количество элементов списка
// индекс элемента списка
// данные которые мы хотим показать пользователю (его зарплата)

// let customString = 'df333';
// для передачи данных с сервера
// для передачи данных на сервер
// для текстовых узлов <h1> текстовый узел </h1>
// для значений атрибутов и свойств html 

// let customBoolean = true;
// некоторые инпуты - чекбоксы, радио кнопки
// атрибут disabled у кнопок  

// let customArray = [];
// хранение данных одинаковых, похожих по паттерну (списки)
// работа со списками или группами элементов html





// объекты и их методы
// let user = {
// 	name: 'Alex',
// 	surname: 'Ivanov',
// 	age: 36,
// 	married: false,
// }

// let user2 = {
// 	name: 'Max',
// 	surname: 'Evstropov',
// 	age: 46,
// 	married: false,
// }

// this это констекст ИСПОЛНЕНИЯ функции
// в данном случае это object user

// function getFullName(divider) {
// 	return this.name + divider + this.surname;
// }

// как привязать к контексту?
// console.log(getFullName) // просто инструкция
// user.getFullName = getFullName;
// user2.getFullName = getFullName;
// // console.log(user) // обновленный объект с присвоенным методом (функцией)
// let userFullName = user.getFullName(' ОГО '); // return this.name + ' ' + this.surname;
// console.log(userFullName)

// console.log(user2.getFullName(' aГa '))
// user2.getFullName = getFullName;
// let user2FullName = user2.getFullName(' и '); // return this.name + ' ' + this.surname;

// console.log(userFullName) // Alex ОГО Ivanov
// console.log(user2FullName) // Alex и Ivanov




// user.fullName() // Alex Ivanov
// console.log(user.fullName()) // Alex Ivanov

// user.name // Alex
// user.name // 36


// function someFunc(argument) {
// 	// body...
// }


// arr.forEach(someFunc)


// // callback функции
// function showMessage(sayFunction, name) {
// 	sayFunction(name)
// }

// showMessage(sayHello, 'Илья');
// showMessage(sayBye, 'Илья');
// showMessage(sayHowAreYou, 'Илья');
// showMessage(sayLoveYou, 'Илья');


// // showMessage(
// // 	function(name) {
// // 		console.log(`Hi, ${name}!`)
// // 	}, 'Гена');

// function sayHello(name) {
// 	console.log(`Hello, ${name}!`)
// }

// function sayBye(name) {
// 	console.log(`Goodbye, ${name}!`)
// }

// function sayHowAreYou(name) {
// 	console.log(`How are you, ${name}?`)
// }

// function sayLoveYou(name) {
// 	console.log(`I love you, ${name}!`)
// }











// DOM (Document Object Model), DOM-дерево

// let customWindow = {
// 	BOM: {
// 		location: {},
// 		screen: {},
// 		history: {},
// 	},
// 	JS: {
// 		Object: {},
// 		Array: {},
// 		String: {},
// 		Number: {},
// 	},
// 	document:{}
// }


// document – объект входа. 

// console.log(document)
// console.log(document.body.children)
// console.log(document.body.style)
// document.body.style.backgroundColor = "red";
// console.log(document.body.style)
// document.body.style.background = "red";
// document.body.style.cssText = 'color: red; font-size: 40px;';










// Методы поиска (получить элемент)
// querySelector и querySelectorAll // НУЖНО ЗАПОМНИТЬ
// document.querySelectorAll(css) - возвращает все элементы по css селектору.


// let elements = document.querySelectorAll('.todo-list li');
// console.log(elements)
// for (let elem of elements) {
//   console.log(elem.textContent);
// }


// querySelector
// elem.querySelector(css) возвращает первый элемент по css селектору.

// let todoList = document.querySelector('.todo-list');

// console.log(todoList.children[3].textContent)







// Реакция на действия пользователя
// let todoList = document.querySelector('.todo-list');

// todoList.onclick = function(event) {
// 	console.log(this)
// 	console.log(event.target)
// };

// this VS event.target






// event.stopPropodation()




// addEventListener и removeEventListener // НУЖНО ЗАПОМНИТЬ
// element.addEventListener('eventName', functionName) - прослушка события

// let todoList = document.querySelector('.todo-list');

// todoList.addEventListener('click', showThisAndEventTarget);
// todoList.addEventListener('click', showHello);

// function showThisAndEventTarget(event) {
// 	console.log(this);
// 	console.log(event.target);
// };

// function showHello(event) {
// 	console.log('Hello');
// 	todoList.removeEventListener('click', showHello);
// };


// element.removeEventListener('eventName', functionName) - удаление прослушки события



// Для управления классами:
// className – строковое значение, удобно для управления всем набором классов.
// classList – объект с методами add/remove/toggle/contains, 
// удобно для управления отдельными классами.

// element.classList.toggle('active'); // add, remove, toggle


// Можно запомнить className (все классы элемента как строка)
// Так же можно запомнить classList (все классы как массив)
// И очень удобен classList.toggle('someClass') очень удобен
// чтобы не мучится с флагами и доп.функции


// function psevdoToggle(someClass) { // псевдо код
// 	if (this.hasClass(someClass)) {
// 		this.removeClass(someClass)
// 	} else {
// 		this.addClass(someClass)
// 	}
// }



// let todoList = document.querySelector('.todo-list');
// console.log(todoList.classList[1]);
// todoList.classList.toggle('active');
// console.log(todoList.className);
// todoList.classList.toggle('active');
// console.log(todoList.className);





// показать - спрятать
// 1) Получаем все элементы и сохраняем их в переменные
// let todoList = document.querySelector('.todo-list');
// let showHideBtn = document.querySelector('.button-show-hide');
// let testItem = document.querySelector('.test');

// // 2) Прикрепляем прослушку событий
// showHideBtn.addEventListener('click', showHideBlock); // что делает эта функция callback? эта прячет и показывает блок
// testItem.addEventListener('click', changeText); // это меняет текст например


// // 3) Описали функции для событий
// function showHideBlock(event) {
// 	todoList.classList.toggle('hidden-block'); // скрыть-показать список

// 	showHideBtn.classList.toggle('show-btn'); // изменить стиль кнопки
// 	showHideBtn.classList.toggle('hide-btn'); // изменить стиль кнопки
// }

// function changeText(event) {
// 	console.log('Смена текста');
// 	testItem.textContent = 'Уже купили';
// 	testItem.removeEventListener('click', changeText);
// }











// ПРОДОЛЖИМ ЗДЕСЬ
















// show-btn
// hide-btn

// стилизовать - убрать стиль
// поменять текст








// Другие атрибуты:
// element.getAttribute(attrName); // получить атрибут

// let link = document.querySelector('.link');
// let linkHref = link.getAttribute('href');
// console.log(linkHref)

// link.setAttribute('href', '#test');
// console.log(link.getAttribute('href'))

// element.getAttribute(attrName);
// element.hasAttribute(attrName);
// element.removeAttribute(attrName);











// innerHTML и outerHTML

// let todoList = document.querySelector('.todo-list');
// todoList.innerHTML = '<div>привет</div>'; // заменит вложенный в элемент html
// todoList.outerHTML = '<div>привет</div>'; // элемент html и всё вложенное в него






// button disabled and input value

// Присваиваем элементы переменным
// let clickMeBtn = document.querySelector('.clickMe');
// let importantInput = document.querySelector('.importantInput');

// // Вешаем события
// clickMeBtn.addEventListener('click', toggleDisabled);
// clickMeBtn.addEventListener('click', resetInputValue);

// // Описываем функции для событий
// function toggleDisabled(event) {
// 	if (importantInput.hasAttribute('disabled')) {
// 		importantInput.removeAttribute('disabled');
// 	} else {
// 		importantInput.setAttribute('disabled', true);
// 	}

// аналогично
// 	// if (importantInput.disabled) {
// 	// 	importantInput.disabled = false
// 	// } else {
// 	// 	importantInput.disabled = true
// 	// }

// }


// function resetInputValue(event) {
// 	importantInput.value = '';
// }















// tabs

// let list = document.querySelector('.tabs ul');
// const listElements = document.querySelectorAll('.tabs ul li');
// const infos = document.querySelectorAll('.info');


// element.addEventListener('click', function(event) {
// 	console.log(event.target.dataset)
// 	showInfo(event.target.dataset.index)
// })

// listElements.forEach((item, index) => {
// 	item.addEventListener('click', (event) => {
// 		console.log(index)
// 		showInfo(event.target.dataset.index)
// 	});
// });




// функция showInfo должна
// выбирать активный tab и выделять его через active класс
// так же она должна показывать соотвествующий табу ей контент
// остальное нужно деактивировать active и скрывать контент соотвественно



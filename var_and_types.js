// VARIABLES

// let box; // undefined
// console.log(box);
// box = 3 + 2; // 5
// console.log(box);
// box = 7 + 3; // 10
// console.log(box);

// let string = 'Alex';
// let string2 = "Alex";
// let string3 = `Alex`;

// console.log(string);
// console.log(string2);
// console.log(string3);



// let box - слева куда сохранить
// 5 - что сохранить
// = - оператор присвоения


// let userName = 'Alex';
// let modelAuto = 'BMW';

// пытаемся называть переменные осмысленно
// семантически










// var oldVar = 123;
// console.log(message)
// let message; // инициализация переменной
// console.log(message) // undefined
// message = 'Hello'; // присваивается значение
// console.log(message) // 'Hello'

// message = 123; // переприсваивается значение
// console.log(message) // 123

// message = 'Привет'; // переприсваивается значение
// console.log(message) // 'Привет'


// let user = `John`, 
// 		age = 25, 
// 		hello = "Hello";

// let user = 'John';
// let age = 25;
// let hello = 'Hello';

// console.log(user, age, hello)



// let 1a; // не может начинаться с цифры
// let my-name; // дефис '-' не разрешён в имени
// let, class, return и function так же недопустимы поскольку они зарезервированы

// let let = 5; // нельзя назвать переменную "let", ошибка!
// let return = 5; // также нельзя назвать переменную "return", ошибка!


// const myBirthday = '18.04.1982'; // - константа, изменить нельзя
// let name; // менять можно name = 'Vlad'
// const age = 50; // изменить уже нельзя

// Несколько хороших правил:

// Используйте легко читаемые имена, такие как userName или shoppingCart.

// Избегайте использования аббревиатур или коротких имён, 
// таких как a, b, c

// Делайте имена максимально описательными и лаконичными. 
// Примеры плохих имён: data и value. Такие имена ничего не говорят. 
// Их можно использовать только в том случае, 
// если из контекста кода очевидно, какие данные хранит переменная.



// const messageConst = 'Hello';
// console.log(messageConst);












// ТИПЫ

// В JavaScript есть 8 основных типов данных
// Семь из них называют «примитивными» типами данных:

// 1) number для любых чисел: целочисленных или чисел с плавающей точкой
// const number1 = 55; // type number
// const number2 = 55.53; // type number

// 2) bigint для целых чисел огромной длины.
// символ "n" в конце означает, что это BigInt
// const bigInt = 1234567890123456789012345678901234567890n;


// 3) string для строк. Строка может содержать ноль или больше символов.
// '' - длина строки 0 символов
// 'abc' - длина строки 3 символа

// let message = 'hello, world!';
// let message2 = '';


// 4) boolean для true/false.
// let isLoginUser = false; // type boolean
// isLoginUser = true; // type boolean


// 5) null для неизвестных значений – отдельный тип, 
// имеющий одно значение null.

// 6) undefined для неприсвоенных значений – отдельный тип, 
// имеющий одно значение undefined.

// 7) symbol для уникальных идентификаторов.

// И один не является «примитивным» и стоит особняком:
// 8) object для более сложных структур данных.


// Оператор typeof 

// позволяет нам увидеть, какой тип данных сохранён в переменной.
// let user; // undefined
// let notResponce = null; // object - ошибка в языке археологическая
// let obj = {}; // object
// const message = 'Hello, world'; // string
// let isLogin = false; // boolean
// const pi = 3.14; // number


// let piType = typeof pi; // 'number'
// let isLoginType = typeof isLogin; // 'boolean'

// console.log(isLoginType);

// Имеет две формы: typeof x или typeof(x).
// Возвращает строку с именем типа. Например, "string".
// Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.






// Конвертация типов
// Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.

// 1) Строковое – Происходит, когда нам нужно что-то вывести. 
// Может быть вызвано с помощью 

	// const pi = 3.14;
	// const piString = String(pi);
	// console.log(pi, piString);

	// const isTrue = true;
	// const isTrueString = String(isTrue)
	// console.log(isTrue, isTrueString);


// Для примитивных значений работает очевидным образом.

// 2) Численное – Происходит в математических операциях. 
// Может быть вызвано с помощью Number(value).

	// const piString = '3.14';
	// const piNumber = Number(piString);
	// console.log(piString, piNumber);

// 3) Логическое – Происходит в логических операциях. 
// Может быть вызвано с помощью Boolean(value).


// let user;
// let notResponce = null;
// let obj = {};
// const message = 'Hello, world';
// let isLogin = false;
// const pi = 3.14;

// Boolean

// undefined == false
// null == false
// '' == false
// 0 == false


// {} == true
// 'Hello, world' == true
// 3.14 == true
// -5 == true

// console.log( Boolean(-5) )





















// Работа с переменными

// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert, console.log (должна показать «Джон»).






// Придумайте правильные имена

// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. 
// Как бы вы назвали такую переменную?





// Какие буквы (заглавные или строчные) использовать для имён констант?
// Рассмотрим следующий код:

// const birthday = '18.04.1982';

// const age = someCode(birthday);
// У нас есть константа birthday, а также age, 
// которая вычисляется при помощи некоторого кода, 
// используя значение из birthday 
// (в данном случае детали не имеют значения, поэтому код не рассматривается).

// Можно ли использовать заглавные буквы для имени birthday? 
// А для age? Или одновременно для обеих переменных?

// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?

// const AGE = someCode(BIRTHDAY); // а здесь?
// let message = 'Hello',
// 	user = 'Ruslan',
// 	age = 29;

// const { resolve } = require("path");

// alert(user + ' ' + age + " " + message); //по	казывает содержимое переменной


// let admin;
// let name;
// name = 'Джон';
// admin = name;
// alert(admin);

// alert(1 / 0);

// const bigInt = 1234567890123456789012345678901234567890n;
// alert(bigInt);

// let str = "Hello";
// let str2 = 'Wotld';
// let phrase = `На английском привет: ${str}`;
// alert(phrase);

// let isGreater = 4 < 1;
// alert(isGreater);

// let age;
// alert(age);

// typeof undefined;
// typeof 0;
// typeof 2n;
// typeof true;
// typeof 'foo';
// typeof Symbol('id');
// typeof Math;
// typeof null;
// typeof alert;

// let age = prompt('Сколько тебе лет: ');
// alert(`Тебе: ${age} лет`);
// alert('Тебе: ' + age + ' лет');

// let isBoss = confirm('Ты здесь главный?');
// alert(isBoss);

// let userName = prompt('Как тебя зовут: ', 'Ruslan');
// alert(`Тебя зовут: ${userName}`);

// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// let str = '123';
// alert(typeof str);
// let num = Number(str);
// alert(typeof num);

// alert(Boolean('0'));

// let num = '1' + 3;
// alert(num);

// alert(2 + 2 + '3');

// alert('3' - 2);
// alert('6' / '3');

// alert(null);
// alert(+'54');

// let apples = '2';
// let oranges = '3';
// alert(apples + oranges);
// alert(+apples + +oranges);

// let num = 4;
// num = -num;
// alert(num);

// alert(5 % 2);
// alert(10 % 3);
// alert(100 % 23);

// Возведение в степень!!!!

// alert(
// 	2 ** 3
// );

// alert(4 ** (1 / 2));
// alert(8 ** (1 / 3));

// let counter = 2;
// let a = counter++;
// alert(a);
// alert(counter);

// let n = 2;
// n *= 3 + 5;
// alert(n);

// alert("" + 1 + 0)
// alert('' - 1 + 0)
// alert(true + false);
// alert(6 / '3');

// alert('\n\t' - 2);

// let year = prompt('Год рождения: ', '');
// if (year == 1991) alert('Верно');

// let cond = (year == 1991);
// if (cond) {
// 	alert('Все окай!');
// } else {
// 	alert('Не угадал!');
// }

// if (year < 1991) {
// 	alert('Ещё не родился!');
// } else if (year > 1991) {
// 	alert('Родился раньше!');
// } else {
// 	alert('Верно!!!');
// }

// let age = prompt('Возраст?', '');
// let message = (age < 3) ? 'Здравствуй, малыш!' :
// 	(age < 18) ? 'Привет!' :
// 		(age < 100) ? 'Здравствуйте!' :
// 			'Какой необычный возраст!';
// alert(message);

// if (0) {
// 	alert(true);
// } else {
// 	alert(false);
// }

// let ofNameJs = prompt('whats the javaScript?', '');
// if (ofNameJs == 'ECMAScript') {
// 	alert('Правильно');
// } else {
// 	alert('You dont know?\n ECMAScript');
// }

// let num = prompt('Напишите число: ', '');
// if (num > 0) {
// 	alert(1);
// } else if (num == 0) {
// 	alert(0);
// } else if (num < 0) {
// 	alert(-1);
// } else {
// 	alert(NaN);
// }
// let a = 2, b = 2;
// let result;
// result = (a + b < 4) ?
// 	'Мало' :
// 	'МНОГО!'
// alert(result)

// let message;
// let login = prompt('Введите свою должность: ', '');
// message = (login == 'Сотрудник') ? 'Привет' :
// 	(login == 'Директор') ? 'Здравствуйте' :
// 		(login == '') ? 'Нет логина' :
// 			'';
// alert(message)

// let i = 3;
// while (i) {
// 	alert(i);
// 	i--;
// }
// console.log(i);

// let i = 1;
// do {
// 	alert(i);
// 	i--;
// } while (i)
// console.log(i);


// let a = 0;
// let i = -10;
// for (i; i < 3; i++) {
// 	console.log(i)
// }
// a = i
// console.log(a);
// console.log(i);

// let sum = 0;
// while (true) {
// 	let value = +prompt('Введите сумму: ', '')
// 	value = Number(value)
// 	if (!value) {
// 		break;
// 	}
// 	sum += value;
// }
// alert('Сумма: ' + sum);

// let value;
// let index = 0;
// console.log(index)
// while (1) {
// 	value = +prompt('Введи число для суммы: ', '')
// 	index += value;
// 	if (index >= 1000) {
// 		break
// 	}
// 	console.log('Ты ещё в цыкле чувак:) с таким значением: ' + index)
// }
// console.log('Конец цикла с таким значением - ' + index)

// outer: for (let i = 0; i < 3; i++) {
// 	for (let n = 0; n < 3; n++) {
// 		for (let j = 0; j < 3; j++) {
// 			let input = prompt(`Значение на кообрдинатах (${i} ${n} ${j})`, '')
// 			if (!input) {
// 				break outer
// 			}
// 		}
// 	}
// }
// alert('Все готово!')

// let index;
// for (index = 1; index < 11; index++) {
// 	console.log(index)
// 	if (index % 2 == 0) {
// 		alert(index);
// 	}
// }
// console.log('Конец!')

// let i = 0;
// while (i < 3) {
// 	alert(`number ${i}!`);
// 	i++;
// }
// let a;
// while (1) {
// 	a = prompt('Введите число: ', '0')
// 	if (a > 100) {
// 		break
// 	} else if (!a) {
// 		break
// 	}
// }

// let a;
// do {
// 	a = prompt('Введите число: ', '0')
// } while (a <= 100 && a);

// let n = 1000;
// outer: for (let i = 2; i <= n; i++) {
// 	for (let j = 2; j < i; j++) {
// 		if (i % j == 0) {
// 			continue outer
// 		}
// 	}
// 	console.log(i)
// }

// let browser = 'Edge';
// switch (browser) {
// 	case 'Edge':
// 		alert('You\'ve got the Edge!')
// 		break;
// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		alert('Okay we support these browser too')
// 		break;
// 	default:
// 		alert('we hope that this page looks ok!')
// 		break;
// }

// if (browser === 'Edge') {
// 	alert('You\'ve got the Edge!')
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
// 	alert('Okay we support these browser too')
// } else {
// 	alert('we hope that this page looks ok!')
// }

// const number = +prompt('Ваедите число между 0 и 3', '')
// switch (number) {
// 	case 0:
// 		alert('Вы ввели число 0')
// 		break;
// 	case 1:
// 		alert('Вы ввели число 1')
// 		break;
// 	case 2:
// 	case 3:
// 		alert('Вы ввели число 2, а может и 3')
// 		break;
// 	default:
// 		break;
// }

// result = confirm('Чигивара?')
// alert(result)

// function showMessage(from, text) {
// 	from = '*' + from + '*'
// 	alert(from + ': ' + text)
// }
// let from = 'Аня'
// showMessage(from, 'Привет')
// alert(from)
// showMessage(from, 'КАК дела?')


// function showMessage(from, text = 'текст не добывлен!') {
// 	from = '*' + from + '*'
// 	alert(from + ': ' + text)
// }
// let from = 'Аня'
// showMessage(from)


// function showMessage(from, text) {
// 	from = '*' + from + '*'
// 	text = text || 'текст не добывлен!'
// 	alert(from + ': ' + text)
// }
// let from = 'Аня'
// showMessage(from)

// function sum(a, b) {
// 	return a + b
// }
// let a = +prompt('Введите число для суммы: ', '')
// let b = +prompt('Введите число для суммы: ', '')
// let result = sum(a, b)
// alert(result)

// function checkAge(age) {
// 	if (age >= 18) {
// 		return true
// 	} else {
// 		return confirm('А родители разрешили?')
// 	}
// }
// let age = prompt('Сколько тебе лет?', '')


// function showMovie(age) {
// 	if (!checkAge(age)) {
// 		return
// 	}
// 	alert('Показывается кино!')
// }
// showMovie(age)

// function doNoting() {
// 	return
// }
// alert(doNoting())

// let n = +prompt('Укажите предел исчеслений: ', '')
// function showPrimes(n) {
// 	for (let index = 2; index < n; index++) {
// 		if (isPrime(index)) continue;
// 		console.log(index);
// 	}
// }

// function isPrime(n) {
// 	for (let index = 2; index < n; index++) {
// 		if (n % index == 0) return true;

// 	}
// 	return false
// }
// showPrimes(n)

// function checkAge(age) {
// 	(age > 18) ? true : confirm('Родители разрешили?')
// }
// age = +prompt('Сколько тебе лет?', '')

// function checkOpen(age) {
// 	if (checkAge(age)) {
// 		return alert('Доступ разрещен')
// 	}
// 	return alert('Доступ запрещен')
// }
// checkOpen(age)

// let age = +prompt('Сколько тебе лет?', '')
// function checkAge(age) {
// 	return age > 18 || confirm('Родители разрешили?')

// }
// function checkOpen(age) {
// 	if (checkAge(age)) {
// 		return alert('Доступ разрещен')
// 	}
// 	return alert('Доступ запрещен')
// }
// checkOpen(age)


// function checkMinNumber(a, b) {
// 	if (a > b) {
// 		return alert(b)
// 	}
// 	return alert(a)
// }
// checkMinNumber(7, 7)

// function row(x, n) {
// 	x = x ** n
// 	return alert(x)
// }
// function checkRow() {
// let x = prompt('Введите число: ', '')
// let n = prompt('Введите степень: ', '')
// 	row(x, n)
// }
// checkRow()

// function row(x, n) {
// 	let result = x
// 	for (let index = 1; index < n; index++) {
// 		result *= x

// 	}
// 	return result
// }
// let x = prompt('Введите число: ', '')
// let n = prompt('Введите степень: ', '')

// if (n < 1) {
// 	alert('Введите натуральное число')
// } else {
// 	alert(row(x, n))
// }

// let sayHi = function () {  // Function expression (функциональное выражение)
// 	alert('Привет')
// };
// let func = sayHi;
// sayHi()
// func()

// Колбэки

// function ask(question, yes, no) {
// 	if (confirm(question)) {
// 		yes()
// 	} else {
// 		no()
// 	}
// }
// function showOk() {
// 	alert('Вы согласны.')
// }
// function showCancel() {
// 	alert('Вы отменили выполнение.')
// }
// ask('Вы согласны?', showOk, showCancel)

// function ask(question, yes, no) {
// 	if (confirm(question)) {
// 		yes()
// 	} else {
// 		no()
// 	}
// }
// ask(
// 	'Вы согласны?',
// 	function () {
// 		alert('Вы согласились')
// 	},
// 	function () {
// 		alert('Вы отменили выполнение.')
// 	}
// )

// let age = prompt('Сколько вам лет?', '')
// function welcome(a) {
// 	alert(a + '!')
// }

// if (age < 18) {
// 	welcome('Привет')
// } else {
// 	welcome('Здравствуйте')
// }

// let sum = (a, b) => a + b;
// alert(sum(3, 5))

// let sum = (a, b) => {
// 	let result = a + b;
// 	return result;
// }
// alert(sum(15, 5))

// let ask = (question, yes, no) => {
// 	if (confirm(question)) {
// 		yes()
// 	} else {
// 		no()
// 	}
// }
// ask(
// 	'Вы согласны?',
// 	() => alert('Вы согласились'),
// 	() => alert('Вы отменили выполнение.')
// );

// Обьекты

// let user = {
// 	name: 'Руслан',
// 	age: 29,
// 	isAdmin: true,
// 	'likes birds': true,
// }

// let key = 'has wife';
// user[key] = true;

// console.log(user.name);
// console.log(user.age);
// console.log(`user.isAdmin = ${user.isAdmin}`);
// console.log(user['likes birds']);
// console.log(user)

// let userInformation = prompt('Что вы хотите узнать о пользователе?', 'name');

// alert(user[userInformation]);

// let fruit = prompt('Какой фрукт купить?', 'apple');

// let bag = {
// 	[fruit]: 5
// };

// alert(bag.apple);
// console.log(bag)

// let fruit = 'apple';
// let bag = {
// 	[fruit + 'Computers']: 5,
// };
// console.log(bag)

// function makeUser(name, age) {
// 	return {
// 		name: name,
// 		age: age,
// 	};
// }

// let user = makeUser('Руслан', 29);
// console.log(user);
// alert(user.name);

// function makeUser(name, age) {
// 	return {
// 		name,
// 		age,
// 		for: 45,
// 		0: 34,
// 	};
// }


// let user = makeUser('Руслан', 29);
// console.log(user);
// alert(user.name);

// Оператор in

// let user = {
// 	name: 'John',
// 	age: 30,
// };

// console.log('age' in user);
// console.log('bla' in user);

// let key = 'age';
// alert(key in user);

// let obj = {
// 	test: undefined,
// }
// alert(obj.test);
// alert('test' in obj);

// Цикл for in

// let user = {
// 	name: 'Ruslan',
// 	age: 29,
// 	isAdmin: true,
// }

// for (let key in user) {
// 	console.log(key);
// 	console.log(user[key]);
// }

// let codes = {
// 	'+49': 'Германия',
// 	'+41': 'Швейцария',
// 	'+44': 'Великобритания',
// 	'+1': 'США'
// };

// for (let code in codes) {
// 	alert(+code);
// }

// Обьект только один, а переменные в которые он скопирован это ссылка.
//  Ссылка может изменять обьект.

// let user = {
// 	name: 'John',
// };
// let admin = user;
// admin.name = 'Ruslan';
// alert(user.name);

// Сравнение обьектов.


// let a = {
// 	name: 'willis',
// };
// let b = a;
// alert(a == b);
// alert(a === b); // обе переменные это ссылки на один и тот же обьект!

// let a = {};
// let b = {};
// alert(a == b); // Хоть оба обьекта и пустые, но они разные поэтому false

// Обьекты константы!!!

// const user = {
// 	name: 'john',
// }

// // user = {
// // 	name: 'Ruslan', // Нельзя переопределить константу
// // }

// user.name = 'ruslan';
// console.log(user.name);
// user.age = 29;
// console.log(user.age);

// Копирование обьекта 

// let user = {
// 	name: 'Ruslan',
// 	age: 29,
// };

// let clone = {};

// for (let key in user) {
// 	clone[key] = user[key];
// }

// console.log(clone);

// Метод Object.assign

// let user = {
// 	name: 'john',
// };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// let permissions3 = {
// 	lastName: 'Sidorov',
// 	age: 29,
// };


// Object.assign(user, { name: 'Ruslan' }, permissions1, permissions2, permissions3);

// console.log(user);

// let clone = Object.assign({}, user);

// console.log(clone);

// let user = {
// 	name: 'john',
// 	sizes: {
// 		height: 182,
// 		wigth: 50,
// 	}
// };

// let clone = Object.assign({}, user);

// console.log(user.sizes === clone.sizes);
// user.sizes.wigth++;
// console.log(clone);

// Задания 

// 1
// let user = {};
// user.name = 'john';
// user.surname = 'Smith';
// user.name = 'Pete';
// console.log(user);
// delete user.name;
// console.log(user);

// 2
// let schedule = {};

// function isEmpty(x) {
// 	for (let key in x) {
// 		return false;
// 	}
// 	return true;
// }

// alert(isEmpty(schedule));

// schedule['8:30'] = 'get up';
// schedule.name = 'Ruslan';

// alert(isEmpty(schedule));

// 3

// let salaries = {
// 	john: 100,
// 	Ann: 160,
// 	Pete: 130,
// };
// let user = {};

// function amountOfMoney(x) {

// 	let sum = 0;

// 	for (let key in x) {
// 		sum = sum + x[key];
// 	}

// 	return sum;

// }

// console.log(amountOfMoney(salaries));
// console.log(amountOfMoney(user));

//4

// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: 'My menu',
// 	isAdmin: true,
// };

// function multiplyNumeric(x) {

// 	for (let key in x) {
// 		// if (x[key] * 1 == x[key]) {
// 		// 	x[key] *= 2;
// 		// }
// 		// if (!isNaN(x[key])) {
// 		// 	x[key] *= 2;
// 		// }
// 		if (typeof x[key] == 'number') {
// 			x[key] *= 2;
// 		}
// 	}
// }

// multiplyNumeric(menu);

// console.log(menu);

// function marry(man, woman) {
// 	woman.husband = man;
// 	man.wife = woman;
// 	return {
// 		father: man,
// 		mother: woman,
// 	}
// }

// let  = marry({
// 	name: 'John',
// }, {
// 	name: 'Ann'
// });

// console.log();

// Тип данных  Symbol

// let id1 = Symbol('id');
// let id2 = Symbol('id');

// alert(id1 == id2);
// console.log(id1);

// alert(id1.toString());
// alert(id1.description);

// let user = {
// 	name: 'Вася',
// };

// let id = Symbol('identification');

// user[id] = 1;

// let id1 = Symbol('identification');

// user[id1] = 'Наш код';


// alert(user[id]);
// console.log(user);

// let id = Symbol('id');

// let user = {
// 	name: 'Вася',
// 	age: 29,
// 	[id]: 123,
// };

// Символы игнорируются циклом for in

// for (const key in user) {
// 	alert(key);
// 	alert(user[key]);
// }

// console.log(Object.keys(user));
// alert(`Содержимое нашего символа: ${user[id]}`);

// Object.assign видит и клонирует

// let id = Symbol('id');

// let user = {
// 	[id]: 123,
// };

// let clone = Object.assign({}, user);

// alert(clone[id]);

// Создание разных переменных ссысающихся к одному и тому же символу

// let id = Symbol.for('id');

// let idAgain = Symbol.for('id');

// alert(id === idAgain);

// let sym = Symbol.for('name');
// let sym2 = Symbol.for('age');

// alert(Symbol.keyFor(sym));
// alert(Symbol.keyFor(sym2));


// let globalSym = Symbol.for('name');
// let localSym = Symbol('age');

// alert(Symbol.keyFor(globalSym));
// alert(Symbol.keyFor(localSym));

// alert(localSym.description);

// Методы обьектов

// let user = {
// 	name: 'john',
// 	age: 30,
// }

// user.sayHi = function () {
// 	alert('Привет!');
// };

// user.sayHi();

// let user = {
// 	name: 'john',
// 	age: 30,
// }

// function sayHi() {
// 	alert('Привет!');
// }

// user.sayHi = sayHi();

// user.sayHi;

// user = {
// 	sayHi: function () {
// 		alert('Привет!');
// 	},
// };

// user = {
// 	sayHi() {
// 		alert('Привет!');
// 	},
// };
// user.sayHi();

// let user = {
// 	name: 'Руслан',
// 	age: 29,
// 	sayHi() {
// 		alert('Привет ' + (this.name))
// 	},
// };

// user.sayHi();

// let user = {
// 	name: 'Руслан',
// 	age: 29,
// 	sayHi() {
// 		alert('Привет ' + (this.name))
// 	},
// };

// let admin = user;
// user = null;

// admin.sayHi();

// let user = {
// 	name: 'john',
// };
// let admin = {
// 	name: 'Ruslan',
// };

// function sayHi() {
// 	alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// let user = {
// 	name: 'John',
// 	hi() { alert(this.name); },
// 	bye() { alert('Пока!'); },
// }

// user.hi();


// (user.name == 'John' ? user.hi() : user.bye());
// use strict

// let user = {
// 	name: 'John',
// 	hi() { alert(this.name); },
// 	bye() { alert('Пока!'); },
// }

// let hi = user.hi();

// hi;

// let user = {
// 	firstName: 'Ruslan',
// 	sayHi() {
// 		let arrow = () => alert(this.firstName);
// 		arrow();
// 	},
// };

// user.sayHi();

// let user = {
// 	name: 'John',
// 	go: function () {
// 		alert(this.name);
// 	},
// };

// user.go();

// let obj, method;

// obj = {
// 	go: function () {
// 		alert(this);
// 	},
// };

// obj.go();
// (obj.go)();

// (method = obj.go)();
// (obj.go || obj.stop)();
// method = obj.go;
// method()

// function makeUser() {
// 	return {
// 		name: 'ruslan',
// 		ref() { return this },
// 	};
// };

// let user = makeUser();

// alert(user.ref().name);
// console.log(user.ref().name);

// Задание

// let calculator = {
// 	read() {
// 		return this.a = +prompt('Введите число a: ', 0),
// 			this.b = +prompt('Введите число b: ', 0);
// 	},
// 	sum() {
// 		let sumNum = this.a + this.b;
// 		return alert(sumNum);
// 	},
// 	mul() {
// 		let mulNum = this.a * this.b;
// 		return alert(mulNum);
// 	},

// };

// calculator.read();
// calculator.sum();
// calculator.mul();

// let ladder = {
// 	step: 0,
// 	up() {
// 		this.step++;
// 		return this;
// 	},
// 	down() {
// 		this.step--;
// 		return this;
// 	},
// 	showStep: function () {
// 		alert(this.step);
// 		return this;
// 	},
// }

// ladder.up().up().up().down().showStep();

// Преобразование обьектов в примитивы

// let user = {
// 	name: 'john',
// 	money: 1000,
// [Symbol.toPrimitive](hint) {
// 	alert(`hint: ${hint}`);
// 	return hint == 'string' ? `{name: '${this.name}'}` :
// 		this.money;
// 	}
// };

// alert(user);
// alert(+user);
// alert(user + 500);

// let user = {
// 	name: 'Ruslan',
// 	money: 1000,
// 	toString() {
// 		return `name: '${this.name}`;
// 	},
// 	valueOf() {
// 		return this.money;
// 	},
// };

// alert(user);
// alert(+user);
// alert(user + 500);

// let user1 = {
// 	name: 'Ruslan',
// 	money: 1000,
// 	[Symbol.toPrimitive](hint) {
// 		alert(`hint: ${hint}`);
// 		return hint == 'string' ? `{name: '${this.name}'}` :
// 			this.money;
// 	}
// };

// let user2 = {
// 	name: 'John',
// 	money: 200,
// 	[Symbol.toPrimitive](hint) {
// 		alert(`hint: ${hint}`);
// 		return hint == 'string' ? `{name: '${this.name}'}` :
// 			this.money;
// 	}
// };

// alert(user1);
// alert(user2);
// alert(user2 - user1);

// Конструкторы, создание обьектов через new

// function User(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.isAdmin = false;
// }

// let user = new User(prompt('Введите ваше имя: ', 'Name'), prompt('Введите ваш возраст: ', 100));

// console.log(user);

// Использование new.target

// function User() {
// 	alert(new.target);
// }

// User();

// new User();

// function User(name) {
// 	if (!new.target) {
// 		return new User(name);
// 	}
// 	this.name = name;
// }

// let ruslan = User('Ruslan');
// alert(ruslan.name);

// function BigUser() {
// 	this.name = 'Ruslan';
// }

// let user = new BigUser();
// alert(new BigUser().name);
// alert(user.name)

// function SmallUser() {
// 	this.name = 'Ruslan';
// 	return 'godzilla';
// }

// let user = new SmallUser();
// let user1 = SmallUser();
// alert(user.name);
// alert(user1)

// function User(name) {
// 	this.name = name;
// 	this.sayHi = function () {
// 		alert('Меня завут: ' + this.name);
// 	}
// }

// let vasya = new User('Вася');

// vasya.sayHi();
// console.log(vasya);

// Задание 1

// let user = {
// 	name: 'ruslan',
// }

// function A() {
// 	return user;
// }
// function B() {
// 	return user;
// }

// let a = new A;
// let b = new B;

// alert(a == b);
// console.log(a);
// console.log(b);

//Задание номер два

// let calculator = new Calculator();

// calculator.read();

// alert('Sum=' + calculator.sum());
// alert('Mul=' + calculator.mul());

// function Calculator() {
// 	this.read = function () {
// 		this.a = +prompt('Введите число a = ', '');
// 		this.b = +prompt('Введите число b = ', '');
// 	};
// 	this.sum = function () {
// 		return this.a + this.b;
// 	};
// 	this.mul = function () {
// 		return this.a * this.b;
// 	}
// }

// console.log(calculator);

// Задание номер три

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// function Accumulator(startingValue) {
// 	this.value = startingValue
// 	this.read = function () {
// 		this.value += +prompt('Сколько нужно добавить ? ', '');
// 	};
// }

// Методы примитивов

// let str = 'Привет';

// alert(str.toUpperCase()); // Метод примитива

// console.log(str);


// let num = 1.24646;

// alert(num.toFixed(2));

// alert(typeof 0);

// alert(typeof new Number(0));

// let zero = new Number(0);

// if (zero) {
// 	console.log('zero имеет истиное значение')
// }
// let zero2 = Number(0);

// if (!zero2) {
// 	console.log('zero2 имеет false значение')
// }
// console.log(typeof zero);
// console.log(typeof zero2);

// Задание 1

// let str = 'Привет';

// str.test = 5;

// console.log(str);


// Способ записи чисел

// let billion = 1e9;

// console.log(billion);


// let num = 1.23e-4;
// console.log(num);

// let a = 0xff;  // шестнадцатиричная
// let b = 0b11111111; // двоичная
// let c = 0o377;  //восьмиричная

// alert(a == b);
// alert(b == c)


// let num = 255;

// alert(num.toString(2));
// alert(num.toString(16));

// Округление

// let a = 3.5;
// console.log(Math.floor(a)); // В меньшую сторону
// console.log(Math.ceil(a));  // В большую сторону
// console.log(Math.round(a)); // До ближайшего целого
// console.log(Math.trunc(a)); // Производит удаление дробной части


// let num = 1.235455;

// alert(Math.round(num * 100) / 100);

// console.log(num.toFixed(2)); // Выводит значение в строке
// console.log(+num.toFixed(2));
// console.log(Number(num.toFixed(2)));

// alert(0.1.toFixed(20));

// alert((0.1 + 0.2).toFixed(2));

// console.log(0 == -0);

// alert(isNaN(NaN));
// alert(isNaN('str'));
// alert(NaN == NaN);

// alert(isFinite('15'));
// alert(isFinite('str'));
// alert(isFinite(Infinity));

// alert(isFinite(+prompt('Введите число: ', '')));  // Используется для проверки является ли переменная числом

// console.log(Object.is(NaN, NaN));
// console.log(NaN == NaN);

// alert(parseInt('100px'));
// alert(parseFloat('12.5em'));

// Математические примеры

// alert(Math.random()); // Псевдо-рандомное число

// alert(Math.max(3, 5, 7, 23, 5754, 3, 5, 7,)); // Выбор максимального числа
// alert(Math.min(3, 5, 7, 23, 5754, 3, 5, 7,)); // Выбор минимального числа

// alert(Math.pow(5, 3));  // Возведение в степень

// alert(Math.sqrt(2125));

// Задание номер один

// function sum() {
// 	let a = +prompt('Введите число: ', '');
// 	let b = +prompt('Введите число: ', '');
// 	return alert(a + b);
// }
// sum();

// Задание 2

// alert(((6.35 * 10).toFixed(0)) / 10);

// alert(Math.round(6.35 * 10) / 10);

// Задание 3

// function readNumber() {
// 	let a = prompt('Введите число: ', '0')
// 	if (!a) {
// 		alert(`Число: null`);
// 	} else if (isFinite(a)) {
// 		alert(`Число ${+a}`);
// 	} else {
// 		readNumber();
// 	}
// }

// readNumber();

//  Решение на сайте

// function readNumber() {
// 	let num;

// 	do {
// 		num = prompt('Введите число: ', '0');
// 	} while (!isFinite(num));

// 	if (num === null || num === '') return null;

// 	return +num;
// }

// alert(`Число: ${readNumber()}`); 

// let i = 0;
// while (i != 10) {
// 	i += 0.2;
// 	console.log(i);

// }

// Задание 4

// function random(a, b) {
// 	return (Math.random() * (b - a)) + a;

// }

// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));

// Задание 5


// function random(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;

// }

// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));


// Строки

// let guestList = `Guests:
// * John
// * Pete
// * Mary
// `;
// alert(guestList);
// console.log(typeof (guestList));

// Примеры с Юникодом

// alert('\u00a9');
// alert('\u{20331}');
// alert('\u{1f60d}');

// let userName = 'Ruslan';

// alert(userName.length);

// let str = 'hello';

// alert(str[0]);
// alert(str.charAt(1));
// alert(str[2]);
// alert(str.charAt(3));
// alert(str[str.length - 1]);//последний символ O

// for (let char of str) {
// 	alert(char);
// }

// let str = 'Hi';

// str[0] = 'h';       // не работает
// str = 'h' + str[1]; // работает

// alert(str);
// alert(str.toUpperCase());

// let str = 'Hello my friends';

// console.log(str.indexOf('fri'));// Метод поиска в строке
// console.log(str.indexOf('e'));
// console.log(str.indexOf('e', 2));


// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа';
// let pos = 0;

// while (true) {
// 	let foundPos = str.indexOf(target, pos);
// 	if (foundPos == -1) {
// 		break;
// 	}
// 	alert(`Найден тут: ${foundPos}`);
// 	pos = foundPos + 1;
// }

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа';

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
// 	alert(pos);
// }

// let str = 'Widget with id';
// let foundPos;

// if ((foundPos = (str.indexOf('Wid'))) != -1) { //Если не писать != -1 то оператор if = 0  и итерации не происходит
// 	alert(`Есть совпадение на позиции ${foundPos}`);
// }

// let str = 'Widget with id';
// let target = 'Wid';
// let foundPos;

// if (~(foundPos = str.indexOf(target))) {          // Побитовый оператор ~ NOT ровняется ~n = -( n + 1 ) и при foundPos = -1, оператор  if получит 0 и перестанет работать
// 	alert(`Есть совпадение на позиции ${foundPos}`);
// }

// let str = 'Widget with id';

// if (str.includes('id', 0)) {
// 	alert('Есть совпадение!');
// }

// if (str.startsWith('Wid')) {
// 	alert('Строка начинается с нужного нам текста!');
// }

// if (str.endsWith('id')) {
// 	alert('Строка заканчивается нужным нам текстом!');
// }


// let userName = 'Ruslanius';

// if (confirm('Хотите узнать имя?')) {
// 	alert(userName.slice(0, 6));
// }

// if (confirm('Хотите узнать ещё кусок?')) {
// 	alert(userName.slice(-3));
// }

// if (confirm('Хотите узнать имя?')) {
// 	console.log(userName.substring(6, 0));
// }

// if (confirm('Хотите узнать имя?')) {
// 	console.log(userName.substring(0, 6));
// }

// console.log(userName.substr(3, 3)) // Указывает место с которого начать и сколько знаков вернуть

// Сравнение строк

// console.log('z'.codePointAt()); // В () можно указать позицию символа
// console.log('Z'.codePointAt());
// console.log('z' > 'Z');

// Создание символа по его коду

// console.log(String.fromCodePoint(90));
// console.log('\u005a'); // шестнадцатиричный код символа

// let str = '';

// for (let i = 65; i <= 220; i++) {
// 	str += String.fromCodePoint(i);
// }

// console.log(str);


// Диакритичекие знаки и нормальзация

// alert('S\u0307'); //добавляем к основному символу s точку с верху
// alert('S\u0307\u0323'); //а теперь и точку снизу


// let str1 = 'S\u0307\u0323';
// let str2 = 'S\u0323\u0307';

// alert(str1 + str2);
// alert(str1 == str2);

// alert('S\u0323\u0307'.normalize() == '\u1e68');

// alert(str1.normalize() == str2.normalize());

// let name = '   Ruslan   ';

// console.log(name.trim());
// console.log(name.repeat(5));


// Задание 1

// function usFirst(str) {
// 	let indent = ' ';
// 	let firstSimbol = 0;
// 	for (let char of str) {
// 		if (char != ' ') {
// 			break;
// 		}
// 		firstSimbol++;
// 		indent += indent;
// 	}
// 	return indent + str[firstSimbol].toUpperCase() + str.slice(firstSimbol + 1);
// }

// console.log(usFirst('   ruslan'));


// Задание 2

// function checkSpam(str) {
// 	str = str.toLowerCase();
// 	if ((str.includes('viagra')) || str.includes('xxx')) {
// 		return true;
// 	}
// 	return false;
// }

// console.log(checkSpam('porno'));
// console.log(checkSpam('Viagra'));
// console.log(checkSpam('Xxx'));


// Задание 3

// function truncate(str, maxlength) {
// 	if (str.length > maxlength) {
// 		return str.slice(0, maxlength - 1) + '\u2026';
// 	}
// 	return str;
// }

// alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))
// alert(truncate('Всем привет!', 20))

// Задание 4

// function extractCurrencyValue(str) {
// 	if (str[0] == '$') {
// 		return +(str.slice(1));
// 	}
// }

// console.log(extractCurrencyValue('$1250'));

// Массивы

// let fruits = ['Яблоко', 'Апельсин', 'Слива'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[2] = 'Груша';

// console.log(fruits[2]);

// fruits[3] = 'Лимон';

// console.log(fruits);

// fruits.push('Черника');

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.unshift('Гречка', 'Рис');

// console.log(fruits);

// fruits.shift();
// fruits.shift();

// console.log(fruits);

// let arr = fruits;

// arr.push('Грейпфрут');
// console.log(fruits);

// console.log(fruits.length);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);

// }

// for (let fruit of fruits) {
// 	console.log(fruit);
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[3]);

// arr.length = 2;
// console.log(arr);


//  Матрица

// let matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// console.log(matrix[0][0]);
// console.log(matrix[1][1]);
// console.log(matrix[2][0]);
// console.log(matrix[2][2]);

// Задание 2

// let styles = ['Джаз', 'Блюз'];
// console.log(styles);


// styles.push('Рок-н-ролл');
// console.log(styles);

// function middleValue(name) {
// 	let mean = Math.floor((styles.length - 1) / 2);
// 	styles[mean] = name;
// 	console.log(styles);

// }
// middleValue('Классика');

// console.log(styles.shift());
// console.log(styles);

// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// Задание 3

// let arr = ['a', 'b'];

// arr.push(function () {
// 	alert(this);
// });

// arr[2]();

// Задание 4

// function sumInput() {
// 	let sumNumValue = 0;
// 	let arrNumValue = [];
// 	let numValue = 0;
// 	do {
// 		arrNumValue.push(numValue);
// 		numValue = prompt('Введите число: ', '0');
// 		if (!numValue || !isFinite(numValue)) {
// 			break
// 		}
// 	} while (true);
// 	for (let num of arrNumValue) {
// 		sumNumValue += +num;
// 	}
// 	return alert(sumNumValue);
// }

// sumInput();

// Решение задачи на сайте

// function sumInput() {

// 	let numbers = [];

// 	while (true) {

// 		let value = prompt("Введите число", 0);

// 		if (value === "" || value === null || !isFinite(value)) break;

// 		numbers.push(+value);
// 	}

// 	let sum = 0;
// 	for (let number of numbers) {
// 		sum += number;
// 	}
// 	return sum;
// }

// alert(sumInput());

//  Задание 5

// function getMaxSubSum(arr) {
// 	let subArr = [];
// 	let maxSubSumNum = 0;
// 	let sum = 0;
// 	for (let num of arr) {
// 		if (num > 0) {
// 			sum += num;
// 			subArr.push(sum);
// 		} else {
// 			sum = 0;
// 		}
// 	}
// 	console.log(subArr)
// 	for (let subSumNum of subArr) {
// 		if (maxSubSumNum < subSumNum) {
// 			maxSubSumNum = subSumNum;
// 		}
// 	}
// 	return console.log(maxSubSumNum);
// }

// getMaxSubSum([-1, 2, 3, -9]);
// getMaxSubSum([2, -1, 2, 3, -9]);
// getMaxSubSum([-1, 2, 3, -9, 11]);
// getMaxSubSum([-2, -1, 1, 2]);
// getMaxSubSum([100, -9, 2, -3, 5]);
// getMaxSubSum([1, 2, 3]);

// Ещё раз

// function getMaxSubSum(arr) {
// 	let maxSum = 0;
// 	let partialSum = 0;

// 	for (let num of arr) {
// 		partialSum += num;
// 		maxSum = Math.max(maxSum, partialSum);
// 		if (partialSum < 0) {
// 			partialSum = 0;
// 		}
// 	}
// 	return console.log(maxSum);
// }

// getMaxSubSum([-1, 2, 3, -9]);
// getMaxSubSum([2, -1, 2, 3, -9]);
// getMaxSubSum([-1, 2, 3, -9, 11]);
// getMaxSubSum([-2, -1, 1, 2]);
// getMaxSubSum([100, -9, 2, -3, 5]);
// getMaxSubSum([1, 2, 3]);
// getMaxSubSum([-1, -2, -3]);

// Методы массивов

// let arrey = ['I', 'go', 'home'];

// delete arrey[1];

// console.log(arrey);


// Использавание  splice

// let arrey = ['Я', 'изучаю', 'Javascript', 'прямо', 'сейчас'];

// arrey.splice(1, 1)
// console.log(arrey);

// arrey.splice(1, 0, 'изучаю')
// console.log(arrey);

// arrey.splice(0, 3, 'Хочу', 'танцевать');
// console.log(arrey);

// Исползование slice

// let arr = ['t', 'e', 's', 't'];

// let arrey = arr.slice(); // Создает копию
// console.log(arrey);
// console.log(arr);

// console.log(arr == arrey);

// concat

// let arrey = [1, 2];
// let arrey2 = [5, 6, 7];

// let arr = arrey.concat(3, 4, arrey2,);

// console.log(arr);

// let arrey = [1, 2];

// let arrayLike = {
// 	0: 'что-то',
// 	length: 1
// };

// let arr = arrey.concat(arrayLike);
// console.log(arr);
// console.log(arrayLike.length);



// let arrey = [1, 2];

// let arrayLike = {
// 	0: 'что-то',
// 	1: 'ещё',
// 	[Symbol.isConcatSpreadable]: true,
// 	length: 2,
// };

// let arr = arrey.concat(arrayLike);
// console.log(arr);
// console.log(arrayLike.length);

// Запуск функции для каждого элемента массива forEach

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

// arr.forEach((item, index, array) => {
// 	alert(`${item} имеет позицию ${index} в массиве ${array}`);
// });

// Поиск

// let arr = [1, 0, false];
// arr.push(NaN);

// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false, 0));
// console.log(arr.indexOf(null));
// console.log(arr.includes(1));

// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));

// let users = [
// 	{ id: 1, name: 'Вася' },
// 	{ id: 2, name: 'Петя' },
// 	{ id: 3, name: 'Руслан'},
// 	{ id: 4, name: 'Кирил' },
// ];


// let user;
// users.forEach((item, index, array) => {
// 	if (item.name == 'Руслан') {
// 		user = item;
// 	}
// });
// users.forEach((item, index, array) => {
// 	if (item.id == 3) {
// 		user = item;
// 	}
// });

// console.log(user);

// let admin = users.find(item => item.name == 'Руслан');
// let admin = users.find(function (item) { return item.name === 'Руслан' });
// let adminIndex = users.findIndex(item => item.name == 'Руслан');

// console.log(admin);
// console.log(adminIndex);


// let users = [
// 	{ id: 1, name: 'Вася' },
// 	{ id: 2, name: 'Петя' },
// 	{ id: 3, name: 'Руслан' },
// 	{ id: 4, name: 'Кирил' },
// ];

// let subUsers = users.filter(item => item.id > 2);

// console.log(subUsers);
// console.log(subUsers[0]);

// Сортировка map и sort

// let lordOfRings = ['Bilbo', 'Gandalf', 'Nazgul'];

// let length = lordOfRings.map(item => item.length);

// console.log(lordOfRings, length);
// alert(lordOfRings + length);


// let arr = [1, 2, 15];

// arr.sort();

// console.log(arr);

// function compareNumeric(a, b) {
// 	if (a > b) return 1;
// 	if (a == b) return 0;
// 	if (a < b) return -1;
// }

// let arr = [1, 15, 2, 3, 26, 5];

// arr.sort(compareNumeric);
// console.log(arr);

// function compareNumeric(a, b) {
// 	return a - b;
// }

// let arr = [23, 1, -15, 2, 3, 26, 5, -4];

// arr.sort(compareNumeric);
// console.log(arr);


// let arr = [23, 1, -15, 2, 3, 26, 5, -4];

// arr.sort((a, b) => a - b);
// console.log(arr);

// arr.reverse();
// console.log(arr);

// let names = 'Вася, Руслан, Паша';

// let arr = names.split(', ');
// console.log(arr);

// for (let name of arr) {
// 	alert(name);
// }


// let str = 'test';

// let arr = str.split('');

// console.log(arr);


// let arr = ['Вася', 'Руслан', 'Герман'];

// let str = arr.join('; ');
// alert(str);

// Задание 1

// function camelize(str) {
// 	let arr = str.split('-');

// 	arr.forEach((element, index) => {
// 		if (!element) {
// 			arr.splice(index, 1);

// 		}
// 	});
// 	console.log();

// 	arr.forEach((element, index, array) => {
// 		if (index) {
// 			element = element[0].toUpperCase() + element.slice(1); // element возвращает значение но не меняет его в массиве
// 			array[index] = element; // а здесь мы присваивает новое значение нашему массиву
// 		}
// 	});
// 	return console.log(arr.join(''));

// }

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// Решение на сайте

// function camelize(str) {
// 	return alert(str
// 		.split('-')
// 		.map((item, index, array) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
// 		.join(''))
// }

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';


// Задание 2

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert(arr); // [3, 1]

// function filterRangeInPlace(array, min, max) {
// 	array.map(
// 		(item, index, array) => 
// 		(min < item && item < max) ? 
// 		item : 
// 		array.splice(index, 1)
// 	)
// }

// решение 2

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert(arr); // [3, 1]

// function filterRangeInPlace(array, min, max) {
// 	array.map((item, index, array) => {
// 		if (item > min && item < max) {
// 			item;
// 		} else {
// 			array.splice(index, 1);
// 		}
// 	})
// }

// Решение Сайта 

// function filterRangeInPlace(arr, a, b) {

// 	for (let i = 0; i < arr.length; i++) {
// 	  let val = arr[i];

// 	  // удалить, если за пределами интервала
// 	  if (val < a || val > b) {
// 		 arr.splice(i, 1);
// 		 i--;
// 	  }
// 	}

//  }

//  let arr = [5, 3, 8, 1];

//  filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

//  alert( arr ); // [3, 1]

// Задание 3

// let arr = [5, 2, 1, -10, 8, 30, 20, 3,];

// arr.sort((a, b) => a - b).reverse();
// console.log(arr);

// Решение 2


// let arr = [5, 2, 1, -10, 8, 30, 20, 3,];

// arr.sort((a, b) => b - a); // если a>b функция выдаст минус значение и следовательно возьмется сначала a потом b
// console.log(arr);


// Задание 4

// function copySorted(arr) {
// 	let array = arr.slice();
// 	return array.sort();
// }

// let arr = ['HTML', 'JavaScript', 'CSS'];

// let sorted = copySorted(arr);

// alert(sorted);
// alert(arr);

// Решение 2

// function copySorted(arr) {
// 	return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted);
// alert(arr);

// Задание 5

// let calc = new Calculator;

// function Calculator() {

// 	this.calculate = (str) => {
// 		this.split = str.split(' ');

// 		let a = +this.split[0];
// 		let op = this.split[1];
// 		let b = +this.split[2];
// 		let result;

// 		if (op == '+') {
// 			result = a + b;
// 		}
// 		if (op == '-') {
// 			result = a - b;
// 		}
// 		return alert(result);
// 	}

// }
// calc.calculate("3 + 7");


// Правильное решение

// function Calculator() {


// 	this.method = {
// 		'+': (a, b) => a + b,
// 		'-': (a, b) => a - b,
// 	}

// 	this.addMethod = (name, func) =>
// 		this.method[name] = func,

// 		this.calculate = (str) => {
// 			let split = str.split(' ');
// 			a = +split[0];
// 			op = split[1];
// 			b = +split[2];

// 			if (!op || isNaN(a) || isNaN(b)) {
// 				return NaN
// 			}

// 			return this.method[op](a, b);
// 		}

// }

// // let calc = new Calculator;
// // alert(calc.calculate("3 + 7"));

// let powerCalc = new Calculator;
// powerCalc.addMethod('*', (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// alert(powerCalc.calculate('3 * 2'));
// alert(powerCalc.calculate('3 / 2'));
// alert(powerCalc.calculate('3 ** 2'));

// Задание 6

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered);
// alert(arr);

// function filterRange(array, min, max) {
// 	let result = array.filter((item) => item >= min && item <= max);
// 	return result;
// }

// Задание 7

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = fetchingNames(users);



// function fetchingNames(array) {

// 	let result = [];

// 	array.forEach(element => {
// 		result.push(element.name);
// 	});

// 	return result;

// }
// console.log(names);

// решение сайта

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert(names);

// Проверка

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.filter(item => item.age < 30);

// console.log(names);
// console.log(users);

// Задание 8

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(item => {
// 	return { fullName: item.name + ' ' + item.surname, id: item.id, }
// });

// console.log(usersMapped);
// console.log(users);

// Решение сайта

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(item => ({     
// 	fullName: `${item.name} ${item.surname}`,
// 	id: item.id,
// }));

// /*Как мы помним, есть две функции со стрелками: 
// без тела value => expr и с телом value => {...}.

// Здесь JavaScript будет трактовать { как начало тела функции,
// а не начало объекта. Чтобы обойти это,
// нужно заключить их в «нормальные» скобки*/
// console.log(usersMapped);
// console.log(users);


// Задание 9

// let petya = { name: "Петя", age: 30 };
// let vasya = { name: "Вася", age: 25 };

// let masha = { name: "Маша", age: 28 };

// let arr = [petya, vasya, masha];

// sortByAge(arr);
// function sortByAge(array) {
// 	array.sort((a, b) => (a.age - b.age));
// }

// console.log(arr);
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// Решение сайта

// function sortByAge(arr) {
// 	arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// sortByAge(arr);

// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// Задание 10

// let arr = [1, 2, 3];


// function shuffle(array) {
// 	array.sort(() => Math.random() - 0.5);
// }
// shuffle(arr);

// alert(arr);

// проверка этого метода

// function shuffle(array) {
// 	array.sort(() => Math.random() - 0.5);
// }

// let count = {
// 	'123': 0,
// 	'132': 0,
// 	'213': 0,
// 	'231': 0,
// 	'321': 0,
// 	'312': 0
// };

// for (let i = 0; i < 1000000; i++) {
// 	let array = [1, 2, 3];
// 	shuffle(array);
// 	count[array.join('')]++;
// }

// for (let key in count) {
// 	console.log(`${key}: ${count[key]}`);
// }

// Задание 11

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// let result1 = getAverageAge(arr);

// alert(result1);

// function getAverageAge(array) {
// 	let sum = array.reduce((previousValue, item) => previousValue + item.age, 0);
// 	let result = sum / array.length;
// 	return result;
// }

// Решение сайта 

// function getAverageAge(users) {
// 	return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// alert(getAverageAge(arr)); // 28

// Задание 12

// function unique(arr) {
// 	let result = [];
// 	for (let str of arr) {
// 		if (!result.includes(str)) {
// 			result.push(str);
// 		}
// 	}
// 	return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
// 	"харе", "харе", "кришна", "кришна", ":-O"
// ];

// let result = unique(strings);
// console.log(result);

// Перебираемые обьекты

// let range = {
// 	from: 1,
// 	to: 5,
// };

// range[Symbol.iterator] = function () {
// 	return {
// 		current: this.from,
// 		last: this.to,
// 		next() {
// 			if (this.current <= this.last) {
// 				return { done: false, value: this.current++ };
// 			} else {
// 				return { done: true };
// 			}
// 		}
// 	};
// };

// for (let num of range) {
// 	alert(num); // 1, затем 2, 3, 4, 5
// }

// console.log(range);


// let range = {
// 	from: 1,
// 	to: 5,

// 	[Symbol.iterator]() {
// 		this.current = this.from;
// 		return this;
// 	},

// 	next() {
// 		if (this.current <= this.to) {
// 			return { done: false, value: this.current++ };
// 		} else {
// 			return { done: true };
// 		}
// 	},
// };

// for (let iterator of range) {
// 	alert(iterator);
// }

// Строка - перебираемый обьект

// let str = 'test';

// let arr = [];
// for (let char of str) {
// 	arr.push(char);
// }

// console.log(arr);

// Явный вызов операторов

// let str = 'hello';

// let iterator = str[Symbol.iterator]();

// while (true) {
// 	let result = iterator.next();
// 	if (result.done) {
// 		break
// 	}
// 	console.log(result.value);

// }

// Ошибка итерации у псевдомассива

// let arrayLike = {
// 	0: 'Hello',
// 	1: 'World',
// 	length: 2,
// 	[Symbol.iterator]()
// };

// console.log(arrayLike);

// for (let item of arrayLike) {
// 	alert(item);
// }


// let arrayLike = {
// 	0: 'Hello',
// 	1: 'World',
// 	length: 2
// };

// let arr = Array.from(arrayLike);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);


// let range = {
// 	from: 0,
// 	to: 5,
// }

// range[Symbol.iterator] = function () {
// 	return {
// 		current: this.from,
// 		last: this.to,
// 		next() {
// 			if (this.current <= this.last) {
// 				return { done: false, value: this.current++ };
// 			} else {
// 				return { done: true };
// 			}
// 		}
// 	};
// };

// let arr = Array.from(range);
// let array = Array.from(range, num => num * 2);


// console.log(range);
// console.log(arr);
// console.log(array);


// let str = 'Hello';

// let arr = Array.from(str);

// console.log(arr);



// function slice(str, start, end) {
// 	return Array.from(str).slice(start, end).join('');
// }

// let str = '𝒳😂𩷶';

// alert(slice(str, 1, 3));
// alert(str.slice(1, 3));


//  Map и Set

// let map = new Map();

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');

// console.log(map);
// console.log(map.get('1'));
// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map.size);



// let john = { name: 'John' };

// let visitsCountMap = new Map;

// visitsCountMap.set(john, 123);

// console.log(john);
// console.log(visitsCountMap.get(john));


// let john = {
// 	name: 'John',
// };

// let visitsCountMap = {};

// visitsCountMap[john] = 123;

// alert(visitsCountMap["[object Object]"]);


// let recipeMap = new Map([
// 	['огурец', 500],
// 	['помидор', 350],
// 	['лук', 50],
// ]);

// for (let vegeable of recipeMap.keys()) {
// 	console.log(vegeable);
// }

// for (let amount of recipeMap.values()) {
// 	console.log(amount);
// }

// for (let iterator of recipeMap) {
// 	console.log(iterator);
// }

// recipeMap.forEach((value, key, map) => {
// 	console.log(`${key}:  ${value}`);
// })


// let map = new Map([
// 	['1', 'str1'],
// 	[1, 'num1'],
// 	[true, 'bool1'],
// ]);

// console.log(map);


// let obj = {
// 	name: 'John',
// 	age: 30,
// };

// let map = new Map(Object.entries(obj));
// console.log(map);


// let map = new Map([
// 	['banana', 1],
// 	['orange', 2],
// 	['meat', 4],
// ]);

// let prices = Object.fromEntries(map);

// console.log(map);
// console.log(prices);


// let map = new Map();
// map.set('banaan', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries());

// console.log(obj);

// let obj = Object.fromEntries(map);

// console.log(obj);


// Задание 3


// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");
// console.log(keys);
// console.log(map);


// Задание 1

// let value = ['Hare', 'Krishna',
// 	'Hare', 'Krishna', 'Krishna',
// 	'Hare', 'Hare', ':-O'];

// function unique(arr) {
// 	let set = new Set(arr);
// 	return Array.from(set);
// }

// console.log(unique(value));
// console.log(value);

// Задание 2


// let arr = ["nap", "teachers", "cheaters",
// 	"PAN", "ear", "era", "hectares"];

// function aclean(arr) {
// 	let set = new Set();
// 	let result;
// 	let finalArr = [];
// 	arr.forEach(word => {
// 		result = word.toUpperCase().split('').sort().join('');
// 		// console.log(result);

// 		if (!set.has(result)) {
// 			finalArr.push(word)
// 		}
// 		set.add(result);
// 		// console.log(set);
// 		// console.log(finalArr);

// 	});
// 	return finalArr;
// }
// console.log(aclean(arr));

// console.log(arr);


// Решение сайта 1


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
// 	let map = new Map();

// 	for (let word of arr) {
// 		let sorted = word.toLowerCase().split('').sort().join('');
// 		map.set(sorted, word);
// 	}
// 	return (Array.from(map.entries()));
// 	// return (Array.from(map.values()));
// }

// let arrayInArray = aclean(arr);

// console.log(arrayInArray);                    // проверка Array.from(map.entries())
// console.log(Array.isArray(arrayInArray));     // массив
// console.log(Array.isArray(arrayInArray[1]));  // в массиве

// let objectFromArray = Object.fromEntries(arrayInArray); // перобразование из массива в массиве в обьект
// console.log(objectFromArray);


// Решение сайта 2


// function aclean(arr) {
// 	let obj = {};

// 	for (let index = 0; index < arr.length; index++) {
// 		let element = arr[index].toLowerCase().split('').sort().join('');
// 		obj[element] = arr[index];
// 	}

// 	return Object.values(obj);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// let isArray = aclean(arr);

// console.log(isArray);


// WeakMap и WeakSet


// let john = { name: 'John' };

// let map = new Map();

// map.set(john, 'hello');

// console.log(map.entries());


// Функция счётчик визитов.


// let visitsCountMap = new WeakMap(); // map: пользователь => число счётчиков

// function countUser(user) {
// 	let count = visitsCountMap.get(user) || 0;
// 	visitsCountMap.set(user, count + 1);
// }


// Задание 1


// let messages = [
// 	{ text: "Hello", from: "John" },
// 	{ text: "How goes?", from: "John" },
// 	{ text: "See you soon", from: "Alice" }
// ];

// let readMessages = new WeakSet();


// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// readMessages.add(messages[0]);

// console.log('Read message 0: ' + readMessages.has(messages[0]));
// console.log('Read message 1: ' + readMessages.has(messages[1]));
// console.log('Read message 2: ' + readMessages.has(messages[2]));

// messages.shift();

// console.log(messages);
// console.log('Read message 1: ' + readMessages.has(messages[1]));


// Задание 2

// let messages = [
// 	{ text: 'Hello', from: 'John' },
// 	{ text: 'How goes?', from: 'John' },
// 	{ text: 'See you soon', from: 'Alice' },
// ];

// let readMap = new WeakMap();

// readMap.set(messages[0], new Date(2020, 1, 1));


// console.log(readMap.get(messages[0]));
// messages.shift();
// console.log(readMap.get(messages[0]));


// Object.keys, values, entries

// let user = {
// 	name: 'john',
// 	age: 30,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));

// let arr = Object.entries(user);
// let map = new Map(Object.entries(user)); // let map = new Map(arr);


// console.log(arr);
// console.log(Object.fromEntries(arr));
// console.log(map);


// let user = {
// 	name: 'Ruslan',
// 	age: 29,
// };

// for (const value of Object.values(user)) {
// 	console.log(value);
// };


//Задание 1

// let salaries = {
// 	'John': 100,
// 	'Pete': 300,
// 	'Mary': 250,
// };

// alert(sumSalaries(salaries));


// Пример функции через колбэк

// function sumSalaries(obj) {
// 	let arr = Object.values(obj);
// 	console.log(arr);

// 	return arr.reduce((sumValue, item) => sumValue + item, 0);
// }

// Пример функции через обычную функцию

// function sumSalaries(obj) {
// 	let arr = Object.values(obj);
// 	console.log(arr);

// 	return arr.reduce(function (sumValue, item) {
// 		return sumValue + item
// 	}, 0);
// }


// Пример сайта


// function sumSalaries(salaries) {

// 	let sum = 0;
// 	for (let salary of Object.values(salaries)) {
// 		sum += salary;
// 	}

// 	return sum;
// }

// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250
// };

// alert(sumSalaries(salaries))


// Задание 2

// let user = {
// 	name: 'John',
// 	age: 30,
// };

// alert(count(user));

// function count(obj) {
// 	return Object.entries(obj).length;
// }


// Диструктурирующее присваивание


// let arr = ['Ruslan', 'Sidorov'];

// let [firstName, surname] = arr;

// console.log(arr);
// console.log(firstName);
// console.log(surname);


// let [firstName, surName] = 'Ruslan Sidorov'.split(' ');

// console.log(firstName);
// console.log(surName);


// let [firstname, , title] = ['ruslan', 'genry', 'admin'];

// console.log(title);


// let [a, b, c] = 'abc';
// let [one, two, three] = new Set([1, 2, 3]);

// console.log(b);
// console.log(two);


// let user = {};
// [user.name, user.surname] = 'Ruslan Sidorov'.split(' ');

// console.log(user);


// let user = {
// 	name: 'Ruslan',
// 	age: 29,
// };

// for (const [key, value] of Object.entries(user)) {
// 	console.log(`${key}: ${value}`);
// }



// let map = new Map([
// 	['name', 'Ruslan'],
// 	['age', 29],
// ]);

// for (const [key, value] of map) {
// 	console.log(`${key}: ${value}`);
// }


// let [name1, name2, ...rest] = ['Jukius', 'Caesar', 'Consul', 'of the Roman Republic'];

// console.log(name1);
// console.log(name2);
// console.log(rest);


// let [firstName, surname] = [];

// console.log(firstName);


// Значение по умолчанию

// let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];

// console.log(name);
// console.log(surname); // значение по умолчанию


// let [name = prompt('Введите имя: ', ''), surname = prompt('Введите фамилию: ', '')] =
// 	['Ruslan'];

// console.log(name);
// console.log(surname);


// Деструктуризация обьекта

// let options = {
// 	title: 'Menu',
// 	width: 100,
// 	height: 200
// };

// let { height, width, title } = options; // названия переменных в произвольном порядкеб но присваивается соответствующим ключам

// console.log(title);
// console.log(width);
// console.log(height);


// Присваивание переменной другого названия

// let options = {
// 	title: 'Menu',
// 	width: 100,
// 	height: 200
// };

// let { width: w, height: h, title } = options; // свойство width соответствует переменной w

// console.log(title);
// console.log(w);
// console.log(h);


// let options = {
// 	title: 'Menu'
// };

// let { width: w = prompt('width?', ''), title, height: h = prompt('height?', '') } = options;

// console.log(title);
// console.log(w);
// console.log(h);


// let title, width, height;

// ({ title, width, height } = { title: 'Menu', width: 200, height: 100 });

// alert(title)


// let options = {
// 	size: {
// 		width: 100,
// 		height: 200,
// 	},
// 	items: ['Cake', 'Donut'],
// 	extra: true
// };

// let {
// 	size: {
// 		width,
// 		height
// 	},
// 	items: [item1, item2],
// 	title = 'Menu'
// } = options;

// console.log(title);
// console.log(width);
// console.log(height);
// console.log(item1);
// console.log(item2);


// function showMenu1({ title, width: w = 200, height: h = 100, items: [i1, i2] }) {
// 	console.log(title);
// 	console.log(w);
// 	console.log(h);
// 	console.log(i1);
// 	console.log(i2);
// }

// function showMenu({ title, width = 200, height = 100, items = [] } = {}) {
// 	console.log(title);
// 	console.log(width);
// 	console.log(height);
// 	console.log(items);
// }

// let options = {
// 	title: 'My menu',
// 	items: ['Item1', 'Item2'],
// };

// showMenu(options);
// showMenu1(options);
// showMenu({});
// showMenu();


// Задание 1

// let user = {
// 	name: 'Ruslan',
// 	years: 29,
// };

// let { name, years: age, isAdmin = false } = user;

// alert(name);
// alert(age);
// alert(isAdmin);


// Задание 2

// let salaries = {
// 	'John': 100,
// 	'Pete': 300,
// 	'Mary': 250,
// };

// topSalary(salaries);

// function topSalary(obj) {

// 	let result = [null, 0];
// 	for (const [key, value] of Object.entries(obj)) {
// 		if (result[1] < value) {
// 			result = [key, value];
// 		}
// 	}
// 	return alert(result[0]);
// }


// решение сайта


// function topSalary(salaries) {

// 	let max = 0;
// 	let maxName = null;

// 	for (const [name, salary] of Object.entries(salaries)) {
// 		if (max < salary) {
// 			max = salary;
// 			maxName = name;
// 		}
// 	}

// 	return maxName;
// }


// Дата и Время


// let now = new Date();

// alert(now);

// let date0 = new Date(0);

// alert(date0);


// let Dec31_1969 = new Date(-24 * 3600 * 1000); //  Отрицательное значение времени

// alert(Dec31_1969);


// let date = new Date('2017-12-31'); // Date string

// alert(date);


// new Date(year, month, date, hours, minutes, seconds, ms)

// let date = new Date(2020, 9, 8, 0, 0, 0, 0);
// let date1 = new Date(2020, 9, 8);
// let date3 = new Date(2020, 09, 8, 12, 7, 35, 567);

// console.log(date);
// console.log(date1);
// console.log(date3);


// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getDay());

// console.log(date.getUTCFullYear());
// console.log(date.getUTCMonth());
// console.log(date.getUTCDate());
// console.log(date.getUTCHours());
// console.log(date.getUTCMinutes());
// console.log(date.getUTCSeconds());
// console.log(date.getUTCMilliseconds());
// console.log(date.getUTCDay());

// let dateMs = new Date().getTime(); // миллисекунд с 1970 года

// console.log(dateMs);

// console.log(date.getTimezoneOffset()); //разница в милилсекундах между моим и логдонским чаосвым поясом


// Установка компонентов даты

// let today = new Date();

// today.setHours(0);
// console.log(today);

// today.setHours(0, 0, 0, 0);
// console.log(today);

// today.setFullYear(2020, 0, 0);
// console.log(today);


// Автоисправление 

// let date = new Date(2013, 0, 35);
// console.log(date);


// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);

// console.log(date);


// let date = new Date(2016, 0, 2);

// date.setDate(1);
// console.log(date);

// date.setDate(0);
// console.log(date);

// date.setMinutes(1);
// console.log(date);


// let date = new Date();
// alert(+date);


// let start = new Date();

// for (let i = 0; i < 100000; i++) {
// 	let doSomething = i * i * i;
// }

// let end = new Date();

// console.log(`Цикл отработал за ${end - start} миллисекунд`);


// Date.now

// let start = Date.now();

// for (let i = 0; i < 100000; i++) {
// 	let doSomething = i * i * i;
// }

// let end = Date.now();

// console.log(`Цикл отработал за  ${end - start} милисекунд`);


// Бэнчмаркинг

// function diffSubtract(date1, date2) {
// 	return date2 - date1;
// }

// function diffGetTime(date1, date2) {
// 	return date2.getTime() - date1.getTime();
// }

// function bench(f) {
// 	let date1 = new Date(0);
// 	let date2 = new Date();

// 	let start = Date.now();
// 	for (let i = 0; i < 100000; i++) {
// 		f(date1, date2);
// 	}
// 	return Date.now() - start;
// }

// console.log(`Время diffSubtract: ${bench(diffSubtract)} мс`);
// console.log(`Время diffSubtract: ${bench(diffGetTime)} мс`);


// function diffSubtract(date1, date2) {
// 	return date2 - date1;
// }

// function diffGetTime(date1, date2) {
// 	return date2.getTime() - date1.getTime();
// }

// function bench(f) {
// 	let date1 = new Date(0);
// 	let date2 = new Date();

// 	let start = Date.now();
// 	for (let i = 0; i < 100000; i++) {
// 		f(date1, date2);
// 	}
// 	return Date.now() - start;
// }

// bench(diffSubtract);
// bench(diffGetTime);

// let time1 = 0;
// let time2 = 0;

// for (let i = 0; i < 10; i++) {
// 	time2 += bench(diffGetTime);
// 	time1 += bench(diffSubtract);
// }

// console.log(`1 Вариант занял ${time1} мс`);
// console.log(`2 Вариант занял ${time2} мс`);


// Разбор строки с датой

// let ms = Date.parse('2012-01-26T13:51:50.417+04:00')
// console.log(ms);

// let date = new Date(Date.parse('2012-01-26T13:51:50.417Z'));
// console.log(date);
// console.log(+date);


// Задание 1

// let date = new Date('2012-02-20T03:12:00.000+04:00');
// console.log(date);

// Решение сайта

// let d = new Date(2012, 1, 20, 3, 12);
// console.log(d);


// Задание 2

// let date = new Date(2012, 0, 3);
// alert(getWeekDay(date));

// function getWeekDay(date) {
// 	let dayOfWeek = date.getDay();
// 	if (dayOfWeek == 0) {
// 		return 'ВС';
// 	} else if (dayOfWeek == 1) {
// 		return 'ПН';
// 	} else if (dayOfWeek == 2) {
// 		return 'ВТ';
// 	} else if (dayOfWeek == 3) {
// 		return 'СР';
// 	} else if (dayOfWeek == 4) {
// 		return 'ЧТ';
// 	} else if (dayOfWeek == 5) {
// 		return 'ПТ';
// 	} else if (dayOfWeek == 6) {
// 		return 'СБ';
// 	}
// }


// Решение сайта

// let date = new Date(2012, 0, 3);
// alert(getWeekDay(date));

// function getWeekDay(date) {
// 	let day = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

// 	return day[date.getDay()];
// }


// Задание 3

// let date = new Date(2012, 0, 3);

// alert(getLocalDay(date));

// function getLocalDay(date) {
// 	let day = [7, 1, 2, 3, 4, 5, 6];

// 	return day[date.getDay()];
// }


// Решение сайта

// let date = new Date(2012, 0, 3);

// alert(getLocalDay(date));

// function getLocalDay(date) {
// 	let day = date.getDay();

// 	if (day == 0) {
// 		day = 7;
// 	}

// 	return day;
// }


// Задание 4

// let date = new Date(2015, 0, 2);

// alert(getDateAge(date, 1));
// alert(getDateAge(date, 2));
// alert(getDateAge(date, 365));

// function getDateAge(date, days) {
// 	let d = new Date(date);
// 	d.setDate(d.getDate() - days);
// 	return d;
// }


// Задание 5

// function getLastDayOfMonth(year, month) {

// 	let lastDate = new Date(0);

// 	for (let i = 28; i < 33; i++) {

// 		let date = new Date(year, month, i);

// 		if (lastDate.getDate() < date.getDate()) {

// 			lastDate = date;

// 		} else {

// 			return lastDate.getDate()
// 		}
// 	}
// }

// alert(getLastDayOfMonth(2012, 02));



// Решение сайта

// function getLastDayOfMonth(year, month) {

// 	let date = new Date(year, month + 1, 0);

// 	return date.getDate();
// }

// alert(getLastDayOfMonth(2013, 1));



// Задание 6

// function getSecondsToday() {
// 	let dateNow = new Date();
// 	let timeNow = new Date();
// 	dateNow.setHours(0, 0, 0, 0);

// 	return (timeNow - dateNow) / 1000;

// }

// console.log(getSecondsToday());


// Решение сайта

// function getSecondsToday() {
// 	let now = new Date();

// 	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// 	let diff = now - today; // разница в миллисекундах
// 	return Math.round(diff / 1000); // получаем секунды
// }

// alert(getSecondsToday());



// Задание 7

// function getSecondsToTomorrow() {

// 	let timeNow = new Date();
// 	let tomorrow = new Date(
// 		timeNow.getFullYear(),
// 		timeNow.getMonth(),
// 		(timeNow.getDate() + 1)
// 	);


// 	return (tomorrow - timeNow) / 1000;

// }

// console.log(getSecondsToTomorrow());


// Задание 8

// function formatDate(date) {

// 	let dateNow = new Date();
// 	let calculatedTime = (dateNow - date) / 1000;

// 	if (calculatedTime < 1) {
// 		return "прямо сейчас";
// 	} else if (calculatedTime < 60) {
// 		return `${calculatedTime} сек. назад`;
// 	} else if (calculatedTime < 3600) {
// 		return `${calculatedTime / 60} мин. назад`;
// 	} else if (calculatedTime > 3600) {
// 		let d = [
// 			'0' + dateNow.getDate(),
// 			'0' + (dateNow.getMonth() + 1),
// 			'0' + dateNow.getFullYear(),
// 			'0' + dateNow.getHours(),
// 			'0' + dateNow.getMinutes(),
// 		].map(value => value.slice(-2));
// 		let result = d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// 		return result;
// 	}

// }

// alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

// alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

// alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert(formatDate(new Date(new Date - 86400 * 1000)));


// Решение сайта

// function fromDate(date) {
// 	let dayOfMonth = date.getDate();
// 	let month = date.getMonth() + 1;
// 	let year = date.getFullYear();
// 	let hours = date.getHours();
// 	let minutes = date.getMinutes();
// 	let diffMs = new Date() - date;
// 	let diffSec = Math.round(diffMs / 1000);
// 	let diffMin = diffSec / 60;
// 	let diffHour = diffMin / 60;

// 	year = year.toString().slice(-2);
// 	month = month < 10 ? '0' + month : month;
// 	dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
// 	hours = hours < 10 ? '0' + hours : hours;
// 	minutes = minutes < 10 ? '0' + minutes : minutes;

// 	if (diffSec < 1) {
// 		return 'прямо сейчас';
// 	} else if (diffMin < 1) {
// 		return `${diffSec} сек. назад`;
// 	} else if (diffHour < 1) {
// 		return `${diffMin} мин. назад`;
// 	} else {
// 		return `${dayOfMonth}.${month}.${year} ${hours}:${minutes}`;
// 	}
// }

// alert(fromDate(new Date(new Date - 1))); // "прямо сейчас"

// alert(fromDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

// alert(fromDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert(fromDate(new Date(new Date - 86400 * 1000)));


// Формат JSON

// let user = {
// 	name: 'Ruslan',
// 	age: 29,

// 	toString() {
// 		return `{name: "${this.name}", age: ${this.age} }`
// 	}
// }

// alert(user);
// console.log(user.toString());


// let student = {
// 	name: 'John',
// 	age: 30,
// 	isAdmin: false,
// 	courses: ['html', 'css', 'js'],
// 	wife: null,
// };

// let json = JSON.stringify(student);

// alert(typeof json);

// alert(json);
// console.log(json);


// console.log(JSON.stringify(1));
// console.log(JSON.stringify('test'));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify([1, 2, 3]));


// JSON не видит символы, функции и ключи со значением undefined

// let user = {
// 	sayHi() {
// 		alert('hello');
// 	},
// 	[Symbol('id')]: 123,
// 	something: undefined,
// }

// console.log(JSON.stringify(user)
// );


// let meetup = {
// 	title: 'Conference',
// 	room: {
// 		number: 23,
// 		participants: ['john', 'ann']
// 	}
// };

// alert(JSON.stringify(meetup));


// let room = {
// 	number: 23
// };

// let meetup = {
// 	title: 'Conference',
// 	participants: ['john', 'ann']
// };

// meetup.place = room;
// room.occupiedBy = meetup;

// alert(JSON.stringify(meetup));


// let room = {
// 	number: 23
// };

// let meetup = {
// 	title: 'Conference',
// 	participants: [{ name: 'John' }, { name: 'Alice' }],
// 	place: room
// };

// room.occupiedBy = meetup;

// alert(JSON.stringify(meetup, ['title', 'participants']));
// alert(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']));



// let room = {
// 	number: 23
// };

// let meetup = {
// 	title: 'Conference',
// 	participants: [{ name: 'John' }, { name: 'Alice' }],
// 	place: room
// };

// room.occupiedBy = meetup;

// let json = JSON.stringify(meetup, (key, value) =>
// 	(key == 'occupiedBy') ? undefined : value);

// let json1 = JSON.stringify(meetup, function replacer(key, value) {
// 	// alert(`${key}: ${value}`)
// 	return (key == 'occupiedBy') ? undefined : value;
// })

// alert(json);
// alert(json1)


// let user = {
// 	name: 'Ruslan',
// 	age: 29,
// 	roles: {
// 		isAdmin: true,
// 		isEditor: true
// 	}
// };

// console.log(JSON.stringify(user, null, 2));
// console.log(JSON.stringify(user, null, 4));
// console.log(JSON.stringify(user));


// метод JSON

// let room = {
// 	number: 23
// };

// let meetup = {
// 	title: 'Conference',
// 	date: new Date(Date.UTC(2017, 0, 1)),
// 	room
// };

// console.log(JSON.stringify(meetup, null, 1));
// console.log(meetup);



// let room = {
// 	number: 23,
// 	toJSON() {
// 		return this.number // реализуем метод JSON для нашего обьекта
// 	}
// };

// let meetup = {
// 	title: 'Conference',
// 	date: new Date(Date.UTC(2017, 0, 1)), // Для Date JSON реализуется автоматически
// 	room
// };

// console.log(JSON.stringify(meetup, null, 1));
// console.log(room);
// console.log(JSON.stringify(room));


// let number = '[1, 2, 3, 4]';

// number = JSON.parse(number);

// console.log(number);


// let user = '{"name": "Ruslan", "age": 29, "isAdmin": true, "friends": [1, 2, 3, 4]}';

// user = JSON.parse(user);

// console.log(user);


// let json = `{
// 	name: "John",                     // Ошибка: имя свойства без кавычек
// 	"surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
// 	'isAdmin': false                  // Ошибка: одинарные кавычки в ключе (должны быть двойными)
// 	"birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения.
// 	"friends": [0,1,2,3]                     // Здесь всё в порядке
//  }`;


// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);

// console.log(meetup.date.getDate());



// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, (key, value) =>
// 	(key == 'date') ? new Date(value) : value
// );

// console.log(meetup);
// console.log(meetup.date.getDate());


// let schedule = `{
// "meetups": [
// {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
// {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
// ]
// }`;

// schedule = JSON.parse(schedule, (key, value) =>
// 	(key == 'date') ? new Date(value) : value
// );

// console.log(schedule);


// let schedule = `{
// 	"meetups": [
// 	  {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
// 	  {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
// 	]
//  }`;

// schedule = JSON.parse(schedule, function (key, value) {
// 	if (key == 'date') return new Date(value);
// 	return value;
// });

// alert(schedule.meetups[1].date.getDate()); // 18 - отлично!


// Задание 1

// let user = {
// 	name: 'Василий Иванович',
// 	age: 35
// };

// user = JSON.stringify(user);

// console.log(user);

// let objUser = JSON.parse(user);

// console.log(objUser);


// Решение сайта

// let user = {
// 	name: "Василий Иванович",
// 	age: 35
// };

// let user2 = JSON.parse(JSON.stringify(user));


// Задание 2

// let room = {
// 	number: 23
// };

// let meetup = {
// 	title: 'Совещание',
// 	occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
// 	place: room
// }

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(meetup, function (key, value) {

// 	if (key == "") {
// 		return value;
// 	}

// 	if (value == meetup) {
// 		return undefined;
// 	}
// 	return value;
// }));


// Upgrade of first solutions

// let room = {
// 	number: 23
// };

// let meetup = {
// 	title: 'Совещание',
// 	occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
// 	place: room
// }

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(meetup, (key, value) =>
// 	(key != '' && value == meetup) ?
// 		undefined :
// 		value
// ));


// Решение сайта

// let room = {
// 	number: 23
// };

// let meetup = {
// 	title: "Совещание",
// 	occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
// 	place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(JSON.stringify(meetup, function replacer(key, value) {
// 	return (key != "" && value == meetup) ? undefined : value;
// }));


// Рекурсия и стек

// function pow(x, n) {
// 	let result = 1;

// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}

// 	return result;
// }

// alert(pow(2, 3))



// function pow(x, n) {

// 	if (n == 1) {
// 		return x;
// 	} else {
// 		return x * pow(x, n - 1);
// 	}
// }

// alert(pow(2, 3))



// function pow(x, n) {
// 	return (n == 1) ? x : x * pow(x, n - 1);
// }

// alert(pow(2, 4))


// let company = {
// 	sales: [
// 		{ name: 'John', salary: 1000 },
// 		{ name: 'Alice', salary: 600 }
// 	],
// 	development: {
// 		sites: [
// 			{ name: 'Peter', salary: 2000 },
// 			{ name: 'Alex', salary: 1800 }
// 		],
// 		internals: [{ name: 'Jack', salary: 1300 }]
// 	}
// };

// console.log(sumSalaries(company));

// function sumSalaries(department) {

// 	if (Array.isArray(department)) {

// 		return department.reduce((accumulator, value) => accumulator + value.salary, 0);

// 	} else {
// 		let sum = 0;

// 		for (let subdep of Object.values(department)) {
// 			sum += sumSalaries(subdep);
// 		}
// 		return sum
// 	}
// }


// Связанный список

// let list = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: null
// 			}
// 		}
// 	}
// };

// console.log(list);


// let secondlist = list.next.next;

// list.next.next = null;
// console.log(list);
// console.log(secondlist);

// list.next.next = secondlist;
// console.log(list);


// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

// list = {
// 	value: 'new item',
// 	next: list
// };

// console.log(list);

// list.next = list.next.next;  // удаление из середины списка

// console.log(list);


// Задание 1

// function sumTo(n) {

// 	let sum = 0;

// 	for (let i = 1; i <= n; i++) {
// 		sum += i
// 	}

// 	return sum;
// }

// alert(sumTo(100));


// function sumTo(n) {
// 	if (n == 1) {
// 		return n;
// 	} else {
// 		return n + sumTo(n - 1);
// 	}
// }

// alert(sumTo(100));


// function sumTo(n) {
// 	return n * (n + 1) / 2; // формула арифметической прогресии
// }

// alert(sumTo(100542000))


// Задание 2

// function factorial(n) {
// 	if (n == 1) {
// 		return 1
// 	} else {
// 		return n * factorial(n - 1)
// 	}
// }

// function factorial(n) {
// 	return (n != 1) ? n * factorial(n - 1) : 1;
// }

// function factorial(n) {
// 	return n ? n * factorial(n - 1) : 1;
// }

// alert(factorial(5));


// Задание 3

// function fib(n) {
// 	let firstNum = 1;
// 	let lastNum = 1;
// 	let result = 1;
// 	for (let i = 2; i < n; i++) {
// 		firstNum = lastNum;
// 		lastNum = result;
// 		result = firstNum + lastNum;
// 	}
// 	return result;

// }

// alert(fib(10))


// function fib(n) {
// 	return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
// }


// Задание 4

// let list = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: null
// 			}
// 		}
// 	}
// };

// printList(list);

// function printList(list) {
// 	if (list.next) {
// 		return alert(list.value), printList(list.next)
// 	} else {
// 		return alert(list.value);
// 	}
// }

// function printList(list) {
// 	return JSON.parse((JSON.stringify(list)), (key, value) => { if (key == "value") alert(value) }
// 	);
// }

// function printList(list) {
// 	let test = list;

// 	while (test) {
// 		alert(test.value);
// 		test = test.next;
// 	}
// }


// Решение Сайта

// function printList(list) {
// 	alert(list.value);

// 	if (list.next) {
// 		return printList(list.next);
// 	}
// }


// Задание 5

// let list = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: null
// 			}
// 		}
// 	}
// };

// printReverseList(list)

// function printReverseList(list) {

// 	if (!list.next) {
// 		return alert(list.value);
// 	} else {
// 		printReverseList(list.next);
// 		alert(list.value)
// 	}
// }

// function printReverseList(list) {
// 	let test = list;
// 	let arr = [];
// 	let index = 0;

// 	while (test) {
// 		arr.push(test.value);
// 		test = test.next;
// 		index++;
// 	}

// 	for (let i = 0; i < index; i++) {
// 		alert(arr.pop());
// 	}
// }


// Решение сайта

// function printReverseList(list) {

// 	if (list.next) {
// 		printReverseList(list.next);
// 	}
// 	alert(list.value);
// }


// function printReverseList(list) {
// 	let arr = [];
// 	let tmp = list;

// 	while (tmp) {
// 		arr.push(tmp.value);
// 		tmp = tmp.next;
// 	}

// 	for (let i = arr.length; i; i--) {
// 		alert(arr[i - 1]);

// 	}
// }


// Остаточные параметры

// function sumAll(...args) {
// 	let sum = 0;

// 	for (const arg of args) {
// 		sum += arg;
// 	}

// 	return sum;
// }

// alert(sumAll(1));
// alert(sumAll(1, 2, 3));
// alert(sumAll(4, 6, 2));


// function showName(firstName, lastName, ...title) {
// 	alert(`${firstName}  ${lastName}`);
// 	alert(title[0]);
// 	alert(title[1]);
// 	alert(title.length);
// }

// showName('Юлий', 'Цезарь', 'Консул', 'Император');


// function showName() {
// 	alert(arguments.length);
// 	alert(arguments[0]);
// 	alert(arguments[1]);
// }

// showName('Юлий', 'Цезарь');

// showName('Ruslan')


// function f() {
// 	let showArg = () => alert(arguments[0]); // у стрелочныых функций нет своего аргумента как и this
// 	showArg(2);
// }

// f(1);


// let arr = [3, 5, 1];

// alert(Math.max(...arr));


// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// alert(Math.max(...arr1, ...arr2));
// alert(Math.max(...arr1, ...arr2, 25, -5));

// let merget = [0, ...arr1, ...arr2];

// alert(merget);


// let str = 'Привет';

// console.log([...str]);


// Замыкание


// function makeWorker() {
// 	let name = 'Pete';

// 	return function () {
// 		alert(name);
// 	};
// }

// let name = 'John';

// let work = makeWorker();

// work();


// вложенная функция

// function sayHiBye(firstName, lastName) {
// 	function getFullName() {
// 		return firstName + ' ' + lastName;
// 	}


// 	alert('Hello, ' + getFullName());
// 	alert('Bye, ' + getFullName());
// }

// sayHiBye('Ruslan', 'Sidorov');


// function User(name) {

// 	this.sayHi = function () {
// 		alert(name);
// 	}
// }

// let user = new User('Ruslan');

// user.sayHi();


// function makeCounter() {
// 	let count = 0;

// 	return function () {
// 		return count++;
// 	};
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// alert(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());


// {
// 	let message = 'Hello';

// 	alert(message); // локальный запрос
// }


// alert(message); // глобальный запрос

/*
function () {
	let message = 'Hello';

	alert(message);
} ();
*/


// (function () {
// 	alert('Скобки вокруг функции!')
// })();

// (function () {
// 	alert('Скобки вокруг всего!')
// }());

// !function () {
// 	alert('Выражение начинается с логического оператора NOT!')
// }();

// +function () {
// 	alert('Выражение начинается с унарного плюса!')
// }();


// function f() {
// 	let value = Math.random();

// 	return function () {
// 		alert(value);
// 	};
// }

// let arr = [f(), f(), f(), f()];


// let value = 'Сюрприз';

// function f() {
// 	let value = Math.random();

// 	function g() {
// 		debugger;
// 	}

// 	return g;
// }

// let g = f();

// g();


// Задание 1

// function makeCounter() {
// 	let count = 0;

// 	return function () {
// 		return count++;
// 	};
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();


// alert(counter1());
// alert(counter1());

// alert(counter2());
// alert(counter2());


// Задание 2

// function Counter() {
// 	let count = 0;

// 	this.up = function () {
// 		return ++count;
// 	};

// 	this.down = function () {
// 		return --count;
// 	};
// }

// let counter = new Counter();

// alert(counter.up());
// alert(counter.up());
// alert(counter.down());


// Задание 3

// let phrase = 'Hello';

// if (true) {
// 	let name = 'Ruslan';

// 	function sayHi() {
// 		console.log(phrase + ' ' + name);
// 	}
// }

// sayHi();


// let phrase = "Hello";

// if (true) {
// 	let user = "John";

// 	function sayHi() {
// 		alert(`${phrase}, ${user}`);
// 	}
// }

// sayHi();


// Замыкание 4

// function sum(params) {

// 	let a = params;


// 	return function (params) {
// 		let b = params;
// 		return a + b;
// 	}
// }
// alert(sum(5)(2));


// Решение сайта

// function sum(a) {
// 	return function (b) {
// 		return a + b;
// 	}
// }

// alert(sum(5)(-1));


// Задание 5

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(inBetween(3, 6)));

// alert(arr.filter(inArray([1, 2, 10])));

// function inBetween(a, b) {
// 	return function (value) {
// 		console.log(a, b);
// 		console.log(value);
// 		return (value >= a && value <= b);
// 	}
// }

// function inArray(array) {
// 	console.log(array);

// 	return function (value) {
// 		return array.includes(value)
// 	};

// }


//  Задание 6

// let users = [
// 	{ name: 'John', age: 20, surname: 'Johnson' },
// 	{ name: 'Pete', age: 18, surname: 'Peterson' },
// 	{ name: 'Ann', age: 19, surname: 'Hathaway' },
// ];

// users.sort(byField('name'));
// users.sort(byField('age'));
// users.sort(byField('surname'));

// console.log(users);

// function byField(str) {
// 	return function (a, b) {
// 		return (a[str] > b[str]) ? 1 : -1;
// 	}
// }


// Задание 7


// function makeArmy() {
// 	let shooters = [];


// 	for (let i = 0; i < 10; i++) {
// 		let shooter = function () {
// 			alert(i);
// 		};
// 		shooters.push(shooter);
// 	}

// 	return shooters;
// }

// let army = makeArmy();

// army[0]();
// army[5]();
// console.log(army);


// function makeArmy() {
// 	let shooters = [];
// 	let i = 0;

// 	while (i < 10) {

// 		let j = i;
// 		let shooter = function () {
// 			alert(j);
// 		};

// 		shooters.push(shooter);

// 		i++;
// 	}

// 	return shooters;
// }

// let army = makeArmy();

// army[0]();
// army[5]();


// Устаревшая переменная var

// if (true) {
// 	let test1 = true;
// 	var test2 = true;
// }

// alert(test2);
// alert(test1);


// function sayHi() {
// 	if (true) {
// 		var phrase = 'Привет'; // var становится локальной только в функции

// 	}
// 	alert(phrase);
// }

// sayHi();
// alert(phrase);


// function sayHi() {
// 	phrase = 'Привет';

// 	alert(phrase);

// 	var phrase; // переменная var обрабатывается в начале запуска функции
// }

// sayHi();


// function sayHi() {
// 	alert(phrase);

// 	var phrase = 'Привет'; 
// }

// sayHi();


// Глобальные обьекты

// alert('Привет');
// window.alert('Привет');


// var gVar = 5;

// alert(window.gVar);

// let gLet = 5;

// alert(window.gLet);


// window.currentUser = {
// 	name: 'Ruslan'
// };

// console.log(currentUser.name);
// console.log(window.currentUser.name);


// Обьект функции

// function sayHi() {
// 	alert('Hi');
// }

// alert(sayHi.name);


// let sayHi = function () {
// 	alert('hi');
// }

// alert(sayHi.name);


// function f(sayHi = function () { }) {
// 	alert(sayHi.name);
// }

// f();


// let user = {

// 	sayHi() {
// 		alert(this.sayHi.name);
// 	},

// 	sayBye: function () {
// 		alert(this.sayBye.name)
// 	}
// }

// console.log(user.sayHi.name);
// console.log(user.sayBye.name);


// let arr = [function () { }];

// alert(arr[0].name);
// console.log(arr[0].name);


// Сввоиство length

// function f1(a) { };
// function f2(a, b) { };
// function many(a, b, ...more) { };

// console.log(f1.length);
// console.log(f2.length);
// console.log(many.length);


// function ask(question, ...handlers) {
// 	let isYes = confirm(question);

// 	for (const handler of handlers) {
// 		if (handler.length == 0) {
// 			if (isYes) {
// 				handler();
// 			}
// 		} else {
// 			handler(isYes);
// 		}
// 	}

// }

// ask('Вопрос?', () => alert('Вы ответили да'), result => alert(result));


// Пользовательские свойства

// function sayHi() {
// 	alert('Hi');

// 	sayHi.counter++;
// }

// sayHi.counter = 0;

// sayHi();
// sayHi();

// alert(`Вызвана ${sayHi.counter} раз`);


// function makeCounter() {

// 	function counter() {
// 		return counter.count++;
// 	}

// 	counter.count = 0;

// 	return counter;
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// function makeCounter() {

// 	function counter() {
// 		return counter.count++;
// 	}

// 	counter.count = 0;

// 	return counter;
// }

// let counter = makeCounter();

// counter.count = 10; // имеем доступ к свойству и можем менять
// alert(counter());


// Named Function Expression

// let sayHi = function func(who) {
// 	if (who) {
// 		alert(`Hello, ${who}`);
// 	} else {
// 		func('Guest');
// 	}
// };

// sayHi();
// func(); // не определена


// Можно и так

// let sayHi = function (who) {
// 	if (who) {
// 		alert(`Hello, ${who}`);
// 	} else {
// 		sayHi('Guest');
// 	}
// };

// sayHi();

// let welcome = sayHi;
// sayHi = null;

// welcome(); // ошибка

// let sayHi = function func(who) {
// 	if (who) {
// 		alert(`Hello, ${who}`);
// 	} else {
// 		func('Guest');
// 	}
// };

// sayHi();

// let welcome = sayHi;
// sayHi = null;

// welcome(); // всё работает


// Задание 1

// function makeCounter() {

// 	function counter() {

// 		counter.set = function (value) {
// 			return counter.count = value;
// 		};

// 		counter.decrease = function () {
// 			return counter.count--
// 		};

// 		return counter.count++;
// 	}


// 	counter.count = 0;

// 	return counter;
// }

// let counter1 = makeCounter();

// alert(counter1()); // 0
// alert(counter1()); // 1

// counter1.set(10); // установить новое значение счётчика

// alert(counter1()); // 10

// counter1.decrease(); // уменьшить значение счётчика на 1

// alert(counter1()); // 10 (вместо 11)


// Второй вариант решения

// function makeCounter() {

// 	function counter() {

// 		return counter.count++;
// 	}

// 	counter.set = function (value) {
// 		return counter.count = value;
// 	}

// 	counter.decrease = function () {
// 		return counter.count--
// 	}

// 	counter.count = 0;

// 	return counter;
// }

// let counter1 = makeCounter();

// alert(counter1()); // 0
// alert(counter1()); // 1

// counter1.set(10); // установить новое значение счётчика

// alert(counter1()); // 10

// counter1.decrease(); // уменьшить значение счётчика на 1

// alert(counter1()); // 10 (вместо 11)

// Вариант решения 3

// function makeCounter() {
// 	let count = 0;

// 	return function counter() {

// 		counter.set = function (value) {
// 			return count = value;
// 		}

// 		counter.decrease = function () {
// 			return --count;
// 		}

// 		return count++;
// 	};
// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// counter.set(10); // установить новое значение счётчика

// alert(counter()); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert(counter()); // 10 (вместо 11)


// Решение сайта

// function makeCounter() {
// 	let count = 0;

// 	function counter() {
// 		return count++;
// 	}

// 	counter.set = value => count = value;

// 	counter.decrease = () => count--;

// 	return counter;
// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// counter.set(10); // установить новое значение счётчика

// alert(counter()); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert(counter()); // 10 (вместо 11)


// Задание 2

// function sum(a) {

// 	let currentSum = a;

// 	function f(b) {
// 		console.log(b);
// 		currentSum += b;
// 		return f;
// 	}

// 	f.toString = function () {
// 		return currentSum;
// 	};

// 	return f;
// }

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)(2)); // 6
// alert(sum(6)(-1)(-2)(-3)); // 0
// alert(sum(0)(1)(2)(3)(4)(5)); // 15




// function sum(a) {

// 	let currentSum = a;

// 	function f(b) {
// 		console.log(f);
// 		currentSum += b;
// 		console.log(f);
// 		return f;
// 	}

// 	f.toString = function () {
// 		return currentSum;
// 	};

// 	return f;
// }

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)(2)); // 6
// alert(sum(6)(-1)(-2)(-3)); // 0
// alert(sum(0)(1)(2)(3)(4)(5)); // 15


// let user = {
// 	name: 'Ruslan',
// 	age: 29,
// 	surname: 'Sidorov',
// 	toString() {
// 		return this.surname;
// 	}
// }

// user.valueOf = function () {
// 	return this.age;
// }

// alert(user);
// alert(user + 2);


// Синтаксис  new Function

// let sum = new Function('a', 'b', 'return a + b');

// alert(sum(2, 3));

// let sayHi = new Function('alert("Hello")'); // обязательно разные ковычки

// sayHi();


// Замыкание

// function getFunc() {
// 	let value = 'test';

// 	let func = new Function('alert(value)');

// 	return func;
// }

// getFunc()(); // не работает потому что new Function записывается и ссылается в глобальное лексическое окружение


// function getFunc() {
// 	let value = 'test';

// 	let func = function () {
// 		alert(value);
// 	}

// 	return func;
// }

// getFunc()();


// setTimeout и setInterval

// function sayHi() {
// 	alert('Hello');
// }

// setTimeout(sayHi, 1000);


// function sayPhrase(phrase, who) {
// 	alert(phrase + ', ' + who);
// }

// setTimeout(sayPhrase, 4000, 'Hello', 'Ruslan');


// setTimeout('alert("Привет")', 1000); // можно писать страку но не желательно


// let timerId = setTimeout(() => alert('ничего не происходит'), 3000);
// alert(timerId);

// clearTimeout(timerId);
// alert(timerId);


// let timerId = setInterval(() => console.log('Tick'), 2000);

// setTimeout(() => {
// 	clearInterval(timerId);
// 	console.log('stop');
// }, 5000);


// Рекурсивный setTimeout

// let timerId = setTimeout(function tick() {
// 	alert('tick');
// 	timerId = setTimeout(tick, 2000);
// }, 2000);


// setTimeout(() => alert('Мир'));

// alert('Привет');


// let start = Date.now();
// let times1 = [];
// let times2 = [];

// setTimeout(function run() {

// 	times1.push(Date.now() - start);

// 	if (start + 100 < Date.now()) {
// 		console.log(times1);
// 	} else {
// 		setTimeout(run);
// 	}
// });


// let timeId = setInterval(() => {
// 	times2.push(Date.now() - start);
// 	if (start + 100 < Date.now()) {
// 		console.log(times2);
// 		clearInterval(timeId);
// 	}
// });


// Задание 1

// function printNumber(from, to) {
// 	let timeId = setInterval(() => {
// 		if (from == to) {
// 			clearInterval(timeId);
// 		}
// 		console.log(from);
// 		from++;
// 	}, 1000);
// }


// function printNumber(from, to) {
// 	setTimeout(run = () => {
// 		console.log(from);
// 		if (from < to) {
// 			from++;
// 			setTimeout(run, 1000);
// 		}

// 	}, 1000);
// }

// printNumber(20, 30);


// Задание 2

// let i = 0;

// setTimeout(() => {
// 	console.log(i);
// }, 100);

// for (let j = 0; j < 10000000; j++) {
// 	i++;
// }


// Декоратор и переадресация вызова, call/apply

// function slow(x) {
// 	alert(`Called with ${x}`);
// 	return x;
// }

// function cachingDecorator(func) {
// 	let cache = new Map();

// 	return function (x) {
// 		if (cache.has(x)) {
// 			return cache.get(x);
// 		}

// 		let result = func(x);

// 		cache.set(x, result);
// 		return result;
// 	}
// }

// slow = cachingDecorator(slow);

// alert(slow(1));
// alert('Again: ' + slow(1));

// alert(slow(2));
// alert('Again: ' + slow(2));

// console.log(slow);


// let worker = {
// 	someMetod() {
// 		return 1;
// 	},

// 	slow(x) {
// 		alert('Called with ' + x);
// 		return x * this.someMetod();
// 	}
// };

// function cachingDecorator(func) {
// 	let cache = new Map();

// 	return function (x) {

// 		if (cache.has(x)) {
// 			return cache.get(x);
// 		}

// 		let result = func.call(this, x); // здесь this это обьект перед точкой, а function (x) становится обёрткой для worker.slow
// 		cache.set(x, result);
// 		return result;
// 	}
// }

// alert(worker.slow(1));

// worker.slow = cachingDecorator(worker.slow);
// alert(worker.slow(2));


// function sayHi() {
// 	alert(this.name);
// }

// let user = { name: 'John' };
// let admin = { name: 'Ruslan' };

// sayHi.call(admin);
// sayHi.call(user);


// function say(phrase) {
// 	alert(this.name + ': ' + phrase);
// }

// let user = { name: 'John' };

// say.call(user, 'Hello');


// let worker = {
// 	slow(min, max) {
// 		alert(`Called with ${min}, ${max}`);
// 		return min + max;
// 	}
// };

// function cachingDecorator(func, hash) {
// 	let cache = new Map();

// 	return function () {
// 		let key = hash(arguments);
// 		if (cache.has(key)) {
// 			return cache.get(key);
// 		}

// 		let result = func.call(this, ...arguments);

// 		cache.set(key, result);
// 		return result;
// 	};
// }

// function hash(args) {
// 	return args[0] + ',' + args[1];
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// alert(worker.slow(3, 5));
// alert('Again: ' + worker.slow(3, 5));


// function hash() {
// 	alert(arguments.join()); // выдаст ошибку так как arguments это псевдомассив
// }

// hash(1, 2);


// Заимствование метода

// function hash() {
// 	alert([].join.call(arguments));
// }

// hash(1, 2);


// Задание 1

// function work(a, b) {
// 	alert(a + b);
// }

// work = spy(work);

// work(1, 2);
// work(4, 5);

// for (let args of work.calls) {
// 	alert('call: ' + args.join());
// }


// function spy(func) {

// 	let spyMap = new Map();

// 	return function wraper(...arg) {
// 		wraper.calls = new Map();
// 		spyMap.set(...arg);
// 		wraper.calls = spyMap;
// 		return func.call(this, ...arg);
// 	}
// }



// Решение сайта

// function work(a, b) {
// 	alert(a + b);
// }

// work = spy(work);

// work(1, 2);
// work(4, 5);

// for (const args of work.calls) {
// 	alert('call: ' + args.join());
// }

// function spy(func) {

// 	function wraper(...args) {
// 		wraper.calls.push(args);
// 		return func.apply(this, arguments);
// 	}
// 	wraper.calls = [];

// 	return wraper;
// }


// Задание 2

// function f(x) {
// 	alert(x);
// }

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000('fdh', 'test');
// f1500('test');

// function delay(func, ms) {

// 	return function f(...arg) {
// 		return setTimeout(func, ms, arg);
// 	}
// }


// Решение сайта 1

// function delay(func, ms) {
// 	return function () {
// 		setTimeout(() => func.apply(this, arguments), ms);
// 	};
// }

// function delay(f, ms) {

// 	return function (...args) {
// 		setTimeout(() => f.call(this, args), ms);
// 	};

// }

// Решение сайта 2

// function delay(f, ms) {
// 	return function (...args) {
// 		let savedThis = this;
// 		setTimeout(function () {
// 			f.apply(savedThis, [args]);
// 		}, ms);
// 	};
// }


// Задание 3

// function funcAlert(params) {
// 	return alert(params);
// }

// let f = debounce(funcAlert, 1000);

// f(1);
// f(2);

// setTimeout(() => f(3), 100);
// setTimeout(() => f(4, 6, 5), 1100);
// setTimeout(() => f(5), 1500);



// function debounce(func, ms) {
// 	let isdebounce = true;
// 	return function () {
// 		if (isdebounce == true) {
// 			func.apply(this, arguments);
// 			isdebounce = false;
// 			setTimeout(() => isdebounce = true, ms);
// 		}
// 		return
// 	}
// }


// решение сайта

// function debounce(f, ms) {

// 	let isCooldown = false;

// 	return function () {
// 		if (isCooldown) return;

// 		f.apply(this, arguments);

// 		isCooldown = true;

// 		setTimeout(() => isCooldown = false, ms);
// 	};

// }


// Задание 4

// function f(a) {
// 	console.log(a);
// }

// let f1000 = throttle(f, 1000);

// f1000(1);
// f1000(2);
// f1000(3);
// f1000(6);
// setTimeout(() => f1000(5), 1200)
// setTimeout(() => f1000(20), 1800)
// setTimeout(() => f1000(25), 2000)
// setTimeout(() => f1000(25), 2000)
// setTimeout(() => f1000(27), 3000)

// function throttle(func, ms) {

// 	let isCooldown = false;
// 	let lastValue;

// 	return function f(value) {

// 		if (isCooldown) {
// 			lastValue = value;
// 			// console.log(lastValue);
// 			return
// 		}
// 		isCooldown = true;
// 		setTimeout(() => {

// 			isCooldown = false;

// 			if (lastValue) {
// 				f.call(f, lastValue);
// 				lastValue = null;
// 			}

// 		}, ms);

// 		return func.call(this, value);
// 	}
// }


// Решение сайта

// function f(a) {
// 	console.log(a)
// }

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

// function throttle(func, ms) {

// 	let isThrottled = false,
// 		savedThis = null,
// 		savedArgs = null;

// 	function wrapper() {

// 		if (isThrottled) {
// 			savedThis = this;
// 			savedArgs = arguments;
// 			return;
// 		}

// 		func.apply(this, arguments);

// 		isThrottled = true;

// 		setTimeout(function () {

// 			isThrottled = false;

// 			if (savedArgs) {
// 				wrapper.apply(savedThis, savedArgs);
// 				savedThis = savedArgs = null;
// 			}
// 		}, ms);
// 	}

// 	return wrapper;
// }


// Привязка контекста к функции

// let user = {
// 	firstName: 'Вася',
// 	sayHi() {
// 		alert(`Привет ${this.firstName}`);
// 	},
// };

// setTimeout(user.sayHi, 1000); // не работает потому что this setTimeout это window

// setTimeout(function () {
// 	return user.sayHi()
// }, 2000);

// setTimeout(() => (user.sayHi()), 3000);


// let user = {
// 	firstName: 'Руслан',
// 	sayHi() {
// 		alert(`Привет, ${this.firstName}!`);
// 	}
// };

// setTimeout(() => user.sayHi(), 1000);

// user = { sayHi() { alert('Другой пользователь в setTimeout') } };


// let user = {
// 	firstName: 'Руслан',
// 	sayHi() {
// 		alert(`Привет, ${this.firstName}!`);
// 	}
// };

// let sayHi = user.sayHi.bind(user);

// setTimeout(() => sayHi(), 1000);
// setTimeout(() => user.sayHi(), 1000);

// user = { sayHi() { alert('Другой пользователь в setTimeout') } };

// setTimeout(() => sayHi(), 1000);


// let user = {
// 	firstName: 'Ruslan',
// 	sayHi() {
// 		alert(`Hello, ${this.firstName} !`);
// 	}
// };

// let sayHi = user.sayHi.bind(user);

// setTimeout(sayHi, 1000); // теперь работает с обычным вызовом без функции обёртки


// let user = {
// 	firstName: 'Ruslan',
// 	say(phrase) {
// 		alert(`${phrase}, ${this.firstName}!`); // обязательно использовать this
// 	}
// };

// let say = user.say.bind(user);

// say('Hello');
// say('Bye');


// Метод bindAll

// for (const key in user) {
// 	if (typeof user[key] == 'function') {
// 		user[key] = user[key].bind(user);
// 	}
// }

// setTimeout(user.say, 1000);


// function mul(a, b) {
// 	return a * b;
// }

// let double = mul.bind(null, 2);

// console.log(double(3));
// console.log(double(4));
// console.log(double(5));


// function partial(func, ...argsBound) {
// 	return function (...args) {
// 		return func.call(this, ...argsBound, ...args);
// 	}
// }

// let user = {
// 	firstName: 'Ruslan',
// 	say(time, phrase) {
// 		alert(`[${time}] ${this.firstName}: ${phrase}`);
// 	}
// };

// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

// user.sayNow('Hello');


// Задание 1

// function f() {
// 	alert(this); // null
// }

// let user = {
// 	g: f.bind(null)
// };

// user.g();


// Задание 2

// function f() {
// 	alert(this.name);
// }

// f = f.bind({ name: 'Ruslan' }).bind({ name: 'Vasia' }); // работает только первая привязка

// f();


// Задание 3

// function sayHi() {
// 	alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({ name: 'Vasia' });

// console.log(bound.test);


// Задание 4

// function askPassword(ok, fail) {
// 	let password = prompt('Password ?', '');

// 	if (password == 'rockstar') ok();
// 	else fail();
// }

// let user = {
// 	name: 'Vasia',

// 	loginOk() {
// 		console.log(`${this.name} logged in`);
// 	},

// 	loginFail() {
// 		console.log(`${this.name} failed to log in`);
// 	},
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// askPassword(() => user.loginOk(), () => user.loginFail());


// Задание 5

// function askPassword(ok, fail) {
// 	let password = prompt('Password?', '');

// 	if (password == 'rockstar') {
// 		ok();
// 	} else {
// 		fail();
// 	}
// }

// let user = {
// 	name: 'Ruslan',

// 	login(result) {
// 		alert(this.name + (result ? ' logged in' : ' failed to log in'));
// 	}
// };

// // askPassword(user.login.bind(user, true), user.login.bind(user, false));

// askPassword(() => user.login(true), () => user.login(false));


// Стрелочные функции

// let group = {
// 	title: 'Our Group',
// 	student: ['John', 'Ruslan', 'Alice'],

// 	showList() {
// 		this.student.forEach(
// 			student => alert(this.title + ': ' + student) //  нет ошибки потому что колбек не имеет своего this
// 		);
// 	}
// };

// group.showList();


// 'use strict'

// let group = {
// 	title: 'Our Group',
// 	student: ['John', 'Ruslan', 'Alice'],

// 	showList() {
// 		this.student.forEach(function (student) {
// 			alert(this.title + ': ' + student);
// 		}, group); // при использовании function нужно указать контекст в forEach
// 	}
// };

// group.showList();


// function defer(func, ms) {

// 	return function () {

// 		setTimeout(() => {
// 			func.apply(this, arguments);
// 		}, ms);
// 	}
// }

// function sayHi(who) {
// 	alert('Hello ' + who);
// }

// let sayHiDeferred = defer(sayHi, 1000);

// sayHiDeferred('Ruslan');



// function defer(func, ms) {

// 	return function (...args) {
// 		let ctx = this;

// 		setTimeout(function () {
// 			func.apply(ctx, args);
// 		}, ms);
// 	}
// }

// function sayHi(who) {
// 	alert('Hello ' + who);
// }

// let sayHiDeferred = defer(sayHi, 1000);

// sayHiDeferred('Ruslan');


// Флаги и десарипторы свойств

// let user = {
// 	name: 'Ruslan'
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// descriptor = JSON.stringify(descriptor, null, 2);

// console.log(descriptor);


// let user = {};

// Object.defineProperty(user, 'name', { value: 'Ruslan' });

// let descriptor = JSON.stringify(
// 	Object.getOwnPropertyDescriptor(user, 'name'),
// 	null,
// 	2
// );

// console.log(descriptor);


// let user = {
// 	name: 'John'
// };

// Object.defineProperty(user, 'name', {
// 	writable: false,
// });

// user.name = 'Ruslan';


// 'use strict'

// let user = {
// 	name: 'John'
// };

// Object.defineProperty(user, 'name', {
// 	writable: false,
// });

// user.name = 'Ruslan'; // в строгом режиме выдает ошибку так как name только для чтения


// let user = {};

// Object.defineProperty(user, 'name', {
// 	value: 'Ruslan',
// 	enumerable: true,
// 	configurable: true,
// });

// user.name = 'Pete';

// console.log(user.name); // в обычном режиме ошибки нет и записи тоже


// let user = {
// 	name: 'Ruslan',
// 	age: 29,

// 	toString() {
// 		return this.name;
// 	}
// };

// for (const key in user) {
// 	console.log(key);
// }

// alert(Object.keys(user));

// Object.defineProperty(user, 'toString', { // обязательно имя свойства писать в ковычках
// 	enumerable: false
// });

// console.log('Следующий цикл');

// for (const key in user) {
// 	console.log(key);
// }

// alert(Object.keys(user));


// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// alert(JSON.stringify(descriptor, null, 2));

// Math.PI = 3;

// console.log(Math.PI);


// let user = {};

// Object.defineProperty(user, 'name', {
// 	value: 'Ruslan',
// 	writable: false,
// 	configurable: false
// });

// Object.defineProperty(user, 'name', {
// 	configurable: true
// })

// Object.defineProperty(user, 'name', {
// 	writable: true
// })

// user.name = 'pete';

// console.log(user.name);


// Метод Object.defineProperties

// let user = {};

// Object.defineProperties(user, {
// 	name: { value: 'Ruslan', configurable: true, enumerable: true },
// 	surname: { value: 'Sidorov', configurable: true, enumerable: true }
// })

// user.name = 'pete';

// console.log(user);

// // не происходит копирования флагов
// let clone = {};

// for (const key in user) {
// 	clone[key] = user[key];
// }

// clone.name = 'Pete';

// console.log(clone);

// // здесь мы копируем обьект полностью

// let clone2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

// clone2.name = 'John';

// console.log(clone2);

// // Глобальное запечатывание обьекта

// Object.preventExtensions(clone); // Запрещает добавлять новые свойства
// console.log(`Разрешено добавлять новые свойства 
// в ${clone} = ${Object.isExtensible(clone)}`);

// Object.seal(clone); // Запрещает добавлять и удалять свойства

// console.log(Object.isSealed(clone));
// console.log(Object.isSealed(user));

// clone.age = 29;
// clone.name = 'Ruslan';

// console.log(clone);

// Object.freeze(clone);

// clone.name = 'John';

// console.log(clone);
// console.log(Object.isFrozen(clone));


// Свойства Геттеры и Сеттеры

// 'use strict'
// let user = {
// 	name: 'John',
// 	surname: 'Smith',

// 	get fullName() {
// 		return `${this.name} ${this.surname}`
// 	}
// }

// console.log(user.fullName);
// user.fullName = 'Test';


// let user = {
// 	name: 'John',
// 	surname: 'Smith',

// 	get fullName() {
// 		return `${this.name} ${this.surname}`;
// 	},

// 	set fullName(args) {
// 		[this.name, this.surname] = args.split(' ');
// 	}
// };

// alert(user.fullName);
// user.fullName = 'Ruslan Sidorov';
// alert(user.name);
// alert(user.surname);


// Деструкторы свойств доступа

// let user = {
// 	name: 'John',
// 	surname: 'Smith'
// };

// Object.defineProperty(user, 'fullName', {
// 	get() {
// 		return `${this.name} ${this.surname}`;
// 	},

// 	set(value) {
// 		[this.name, this.name] = value.split(' ');
// 	}
// });

// alert(user.fullName);

// for (const key in user) {
// 	alert(key);
// };


// let desc = Object.defineProperty({}, 'prop', {
// 	get() {
// 		return 1
// 	},

// 	value: 2 // вызовет ошибку
// });


// Умные Геттеры и Сеттеры

// let user = {
// 	get name() {
// 		return this._name;
// 	},

// 	set name(value) {
// 		if (value.length < 4) {
// 			alert('Имя слишком короткое, должно быть более 4 символов');
// 			return
// 		}
// 		this._name = value;
// 	}
// };

// user.name = prompt('Введите имя: ', '');
// console.log(user.name);
// console.log(user);


// function User(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// let john = new User('John', new Date(1992, 6, 1));

// alert(john.age);


// function User(name, birthday) {
// 	this.name = name;
// 	this.birthday = birthday;

// 	Object.defineProperty(this, 'age', {
// 		get() {
// 			let todayYear = new Date().getFullYear();
// 			return todayYear - this.birthday.getFullYear();
// 		},

// 		enumerable: true,
// 		// configurable: true
// 	})
// }

// let ruslan = new User('Ruslan', new Date(1991, 5, 26));

// console.log(ruslan.age);
// console.log(ruslan);

// for (const key in ruslan) {
// 	console.log(key);
// }


//!  Прототипное наследование

// let animal = {
// 	eats: true
// };

// let rabbit = {
// 	jumps: true
// };

// rabbit.__proto__ = animal;

// alert(rabbit.jumps);
// alert(rabbit.eats);
// console.log(rabbit);
// console.log(rabbit.eats);


// let animal = {
// 	eats: true,
// 	walk() {
// 		alert('Animal walk');
// 	}
// };

// let rabbit = {
// 	jumps: true,
// 	__proto__: animal
// };

// rabbit.walk();


// let animal = {
// 	eats: true,
// 	walk() {
// 		alert('Animal walk');
// 	}
// };

// let rabbit = {
// 	jump: true,
// 	walk() {
// 		alert('Rabbit! Bounce-bounce!');
// 	},
// 	__proto__: animal
// };

// let longEar = {
// 	earLength: 10,
// 	__proto__: rabbit
// };

// longEar.walk();
// console.log(longEar.eats);


// let user = {
// 	name: 'John',
// 	surname: 'Smith',

// 	set fullName(value) {
// 		[this.name, this.surname] = value.split(' ');
// 	},

// 	get fullName() {
// 		return this.name + ' ' + this.surname;
// 	}
// };

// let admin = {
// 	__proto__: user,
// 	isAdmin: true
// };

// alert(admin.fullName);

// admin.fullName = 'Ruslan Sidorov';
// console.log(admin);


// let animal = {
// 	walk() {
// 		if (!this.isSleeping) {
// 			alert('I walk');
// 		}
// 	},

// 	sleep() {
// 		this.isSleeping = true;
// 	}
// };

// let rabbit = {
// 	name: 'White Rabbit',
// 	__proto__: animal
// };

// rabbit.sleep();

// alert(rabbit.isSleeping);
// alert(animal.isSleeping);


// let animal = {
// 	eats: true
// };

// let rabbit = {
// 	jumps: true,
// 	__proto__: animal
// };

// console.log(Object.keys(rabbit));

// for (const key in rabbit) {
// 	console.log(key);
// }


// obj.hasOwnProperty(key)

// let animal = {
// 	eats: true
// };

// let rabbit = {
// 	jumps: true,
// 	__proto__: animal
// };

// for (const prop in rabbit) {
// 	let isOwn = rabbit.hasOwnProperty(prop);

// 	if (isOwn) {
// 		console.log(`Our: ${prop}`);
// 	} else {
// 		console.log(`Inherited: ${prop}`);
// 	}
// }

// console.log(Object.entries(rabbit));


//! Задание 1


// let animal = {
// 	jumps: null
// };

// let rabbit = {
// 	jumps: true,
// 	__proto__: animal
// };

// console.log(rabbit.jumps);

// delete rabbit.jumps;

// console.log(rabbit.jumps);

// delete animal.jumps;

// console.log(rabbit.jumps);


//! Задание 2

// let head = {
// 	glasses: 1
// };

// let table = {
// 	pen: 3,
// 	__proto__: head
// };

// let bed = {
// 	sheet: 1,
// 	pillow: 2,
// 	__proto__: table
// };

// let pockets = {
// 	money: 2000,
// 	__proto__: bed
// };

// console.log(pockets.pen);
// console.log(bed.glasses);


//! Задание 3

// let animal = {
// 	eat() {
// 		this.full = true;
// 	}
// };

// let rabbit = {
// 	__proto__: animal
// };

// rabbit.eat();

// console.log(rabbit);


//! Задание 4

// let hamster = {
// 	stomach: [],

// 	eat(food) {
// 		this.stomach = [];
// 		this.stomach.push(food);
// 	}
// };

// let speedy = {
// 	__proto__: hamster
// };

// let lazy = {
// 	__proto__: hamster
// };

// speedy.eat('apple');
// speedy.eat('meat');
// console.log(speedy.stomach);

// console.log(lazy.stomach);
// console.log(hamster);

//! Решение сайта

// let hamster = {
// 	stomach: [],

// 	eat(food) {
// 		// присвоение значения this.stomach вместо вызова this.stomach.push
// 		this.stomach = [food];
// 	}
// };

// let speedy = {
// 	__proto__: hamster
// };

// let lazy = {
// 	__proto__: hamster
// };

// // Шустрый хомяк нашёл еду
// speedy.eat("apple");
// alert(speedy.stomach); // apple

// // Живот ленивого хомяка пуст
// alert(lazy.stomach);


//! Норм решение 


// let hamster = {
// 	stomach: [],

// 	eat(food) {
// 		this.stomach.push(food);
// 	}
// };

// let speedy = {
// 	stomach: [],
// 	__proto__: hamster
// };

// let lazy = {
// 	stomach: [],
// 	__proto__: hamster
// };

// speedy.eat('apple');
// speedy.eat('meat');
// console.log(speedy.stomach);

// console.log(lazy.stomach);
// console.log(hamster);


//! F.prototype

// let animal = {
// 	eats: true
// };

// function Rabbit(name) {
// 	this.name = name;
// 	// this.__proto__ = animal;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit('White Rabbit');

// alert(rabbit.eats);

// console.log(rabbit);


// function Rabbit() { };
// alert(Rabbit.prototype.constructor === Rabbit);


// function Rabbit() { }

// let rabbit = new Rabbit();

// alert(rabbit.constructor === Rabbit);

// let animal = { eats: true };

// function Rabbit(name) {
// 	this.name = name;
// 	alert(name);
// }

// let rabbit = new Rabbit('White Rabbit');
// let rabbit2 = new rabbit.constructor('Black Rabbit');

// console.log(rabbit);


// function Rabbit() {};
// Rabbit.prototype = {
// 	jumps: true
// };


// let rabbit = new Rabbit();

// console.log(rabbit.constructor === Rabbit);


// function Rabbit(name) {
// 	this.name = name
// }

// Rabbit.prototype.jumps = true;

// let rabbit = new Rabbit('Rodger');
// let rabbit2 = new rabbit.constructor('Harry');

// console.log(rabbit);
// console.log(rabbit.jumps);
// console.log(rabbit2);


// function Rabbit(name) {
// 	this.name = name
// }

// Rabbit.prototype = {
// 	jumps: true,
// 	constructor: Rabbit // Можно перезаписать свойство конструктор
// };

// let rabbit = new Rabbit('Rodger');
// let rabbit2 = new rabbit.constructor('Harry');

// console.log(rabbit);
// console.log(rabbit.jumps);
// console.log(rabbit2);


// function TU(params) {
// 	this.params = params;
// }

// function Rabbit(name) {
// 	this.name = name;
// }

// Rabbit.prototype = { constructor: TU };

// let rabbit = new Rabbit('Rodger');
// let rabbit2 = new rabbit.constructor('Harry');

// console.log(rabbit);
// console.log(rabbit.jumps);
// console.log(rabbit2);


// Задание 1

// function Rabbit() { }
// Rabbit.prototype = {
// 	eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = {};

// alert(rabbit.eats);


// function Rabbit() { }
// Rabbit.prototype = {
// 	eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert(rabbit.eats);


// function Rabbit() { }
// Rabbit.prototype = {
// 	eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert(rabbit.eats);


// function Rabbit() { }
// Rabbit.prototype = {
// 	eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert(rabbit.eats);


// Задание 2

// function Obj(params) {
// 	this.params = params;
// }

// let obj = new Obj('Ruslan');
// let obj2 = new obj.constructor('Katia');

// console.log(obj);
// console.log(obj2);


// function Obj(params) {
// 	this.params = params;
// }
// Obj.prototype = {};

// let obj = new Obj('Ruslan');
// let obj2 = new obj.constructor('Katia');

// console.log(obj);
// console.log(obj2);


// Решение сайта

// function User(name) {
// 	this.name = name;
// }
// User.prototype = {}; // (*)

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// console.log(typeof user2); // undefined


// Встроенные прототипы

// let obj = {};

// alert(obj.__proto__ === Object.prototype);

// alert(Object.prototype.__proto__);


// let arr = [1, 2, 3];

// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__);


// console.dir([1, 2, 3])


// function f() { }

// console.log(f.__proto__ == Function.prototype);
// console.log(f.__proto__.__proto__ === Object.prototype);


// String.prototype.show = function () {
// 	alert(this);
// }
// 'Ruslan'.show();


// if (!String.prototype.repeat) {
// 	String.prototype.repeat = function (n) {
// 		return new Array(n + 1).join(this);
// 	};
// }

// alert('La'.repeat(3));


// Заимствование у прототипов

// let obj = {
// 	0: 'Hello',
// 	1: 'world',
// 	length: 2,
// };

// // obj.join = Array.prototype.join;
// obj.__proto__ = Array.prototype;

// alert(obj.join(', '));

// console.log(obj);


// Задание 1

// Function.prototype.defer = function (ms) {
// 	return setTimeout(this, ms);
// }

// function f() {
// 	alert('Hello!');
// }

// f.defer(1000);

// Function.prototype.defer = function (ms) {
// 	return setTimeout(this, ms);
// }

// function f() {
// 	alert('Hello!');
// }


// f.defer(1000);


//  Задание 2

// Function.prototype.defer = function (ms) {
// 	let func = this
// 	return function (a, b) {
// 		return setTimeout(() => func(a, b), ms);
// 	}
// };

// function f(a, b) {
// 	alert(a + b);
// }

// f.defer(1000)(1, 2);


// Решение сайта

// Function.prototype.defer = function (ms) {
// 	let f = this;

// 	return function (...args) {
// 		setTimeout(() => f.apply(this, args), ms);
// 	}
// };

// function f(a, b) {
// 	alert(a + b);
// }

// f.defer(1000)(1, 2);


// Методы протатипов, обьекты без свойства __proto__

// let animal = {
// 	eats: true
// };

// let rabbit = Object.create(animal);

// alert(rabbit.eats);

// alert(Object.getPrototypeOf(rabbit) === animal);

// Object.setPrototypeOf(rabbit, {});

// alert(rabbit.eats);


// let animal = {
// 	eats: true
// };

// let rabbit = Object.create(animal, {
// 	jamps: {
// 		value: true,
// 		writable: true,
// 		enumerable: true,
// 		configurable: true
// 	},
// });

// console.log(rabbit);
// console.log(rabbit.eats);


// ! Создание продвинутого клона

// let clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit)); // сначала исполььзуем свойство для протопипа а потом getOwnPropertyDescriptors для добавления остальных свойств

// console.log(clone);


// let obj = {};

// let key = prompt("What's the key?", "__proto__");
// obj[key] = 'some value';

// alert(obj[key]);


// let obj = Object.create(null);

// let key = prompt("What's the key?", "__proto__");
// obj[key] = 'some value';

// alert(obj[key]); // работает 


// let chineseDictionary = Object.create(null);
// chineseDictionary.hello = "你好";
// chineseDictionary.bye = "再见";

// alert(Object.keys(chineseDictionary));
// console.log(Object.getOwnPropertyNames(chineseDictionary));


// !Задание 1

// let dictionary = Object.create(null);

// dictionary.toString = function () {
// 	return Object.keys(this).join(',');
// };

// Object.defineProperty(dictionary, 'toString', {
// 	enumerable: false
// })

// dictionary.apple = 'Apple';
// dictionary.__proto__ = 'test';

// for (const key in dictionary) {
// 	alert(key);
// }

// alert(dictionary)
// console.log(dictionary);


// ! Допиленое Решение

// let dictionary = Object.create(null);

// Object.defineProperty(dictionary, 'toString', {
// 	value() {
// 		return Object.keys(this).join(',')
// 	},
// 	enumerable: false
// });

// dictionary.apple = 'Apple';
// dictionary.__proto__ = 'test';

// for (const key in dictionary) {
// 	alert(key);
// }

// alert(dictionary);


// ! Решение сайта

// let dictionary = Object.create(null, {
// 	toString: {
// 		value() {
// 			return Object.keys(this).join();
// 		}
// 	}
// });

// dictionary.apple = 'Apple';
// dictionary.__proto__ = 'test';

// for (const key in dictionary) {
// 	alert(key);
// }

// alert(dictionary);


// ! Задание 2

// function Rabbit(name) {
// 	this.name = name;
// }

// Rabbit.prototype.sayHi = function () {
// 	alert(this.name);
// };

// let rabbit = new Rabbit('Rabbit');

// console.log(rabbit);

// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();


// ! Классы, базовый синтаксис

// class User {

// 	constructor(name) {
// 		this.name = name;
// 	}

// 	sayHi() {
// 		alert(this.name);
// 	}

// }

// let user = new User('Иван');

// user.sayHi();

// console.log(user);


// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	sayHi() {
// 		alert(this.name);
// 	}
// }

// console.log(typeof User);
// console.log(User === User.prototype.constructor);
// console.log(User.prototype.sayHi);
// console.log(Object.getOwnPropertyNames(User));
// console.log(Object.getOwnPropertyNames(User.prototype));


// function User(name) {
// 	this.name = name;
// }

// User.prototype.sayHi = function () {
// 	alert(this.name);
// };

// let user = new User('Ruslan');

// user.sayHi();


// class User {
// 	constructor() {
// 	}
// }

// alert(typeof User);
// alert(User);
// User(); //! Ошибка, нельзя вызывать без  new
// new User() //! Всё работает


// let User = class {
// 	sayHi() {
// 		alert('Hello');
// 	}
// };


// new User().sayHi();


// let User = class MyClass {
// 	sayHi() {
// 		alert(MyClass);
// 	}
// };

// new User().sayHi();

// alert(MyClass); //! Название класса не видно за его пределами есди он обьявлен как  NCE


// function makeClass(phrase) {
// 	return class {
// 		sayHi() {
// 			alert(phrase)
// 		}
// 	};
// }

// let User = makeClass('Hello, Ruslan!');

// new User().sayHi();


//! Геттеры и Сеттеры

// class User {
// 	constructor(userName) {
// 		this.name = userName;
// 	}

// 	get name() {
// 		return this._name;
// 	}

// 	set name(value) {
// 		if (value.length < 4) {
// 			alert('Имя слишком короткое!');
// 			return;
// 		}
// 		this._name = value;
// 	}
// }

// let user = new User('Ruslan');
// alert(user.name);

// user = new User('rtu');

// user = new User('Katia')
// alert(user.name)

// console.log(user);


// Object.defineProperties(User.prototype, {
// 	name:{
// 		get(){
// 			return this._name;
// 		},
// 		set name(value){
// 			if (value.length < 4) {
// 				alert('Name is short!');
// 				return
// 			}
// 			this._name = value;
// 		}
// 	}
// })


// class User {

// 	['say' + 'Hi']() {
// 		alert('Привет');
// 	}

// }

// new User().sayHi();


//! Свойства классов

// class Clock {

// 	constructor({ template }) {

// 		this.render = function () {
// 			let date = new Date();

// 			let hours = date.getHours();
// 			if (hours < 10) {
// 				hours = '0' + hours;
// 			}
// 			let minutes = date.getMinutes();
// 			if (minutes < 10) {
// 				minutes = '0' + minutes;
// 			}
// 			let secs = date.getSeconds();
// 			if (secs < 10) {
// 				secs = '0' + secs;
// 			}

// 			let output = template
// 				.replace('h', hours)
// 				.replace('m', minutes)
// 				.replace('s', secs);

// 			console.log(output);
// 		}

// 	}


// 	stop() {
// 		clearInterval(this.timer);
// 	}

// 	start() {
// 		this.render();
// 		this.timer = setInterval(this.render, 1000);
// 	}
// }

// let clock = new Clock({ template: 'h:m:s' });

// clock.render();
// console.log(clock())

// clock.start();
// clock.stop();


//! Решение сайта

// class Clock {

// 	constructor({ template }) {
// 		this.template = template;
// 	}

// 	render() {
// 		let date = new Date();

// 		let hours = date.getHours();
// 		if (hours < 10) {
// 			hours = '0' + hours;
// 		}
// 		let minutes = date.getMinutes();
// 		if (minutes < 10) {
// 			minutes = '0' + minutes;
// 		}
// 		let secs = date.getSeconds();
// 		if (secs < 10) {
// 			secs = '0' + secs;
// 		}

// 		let output = this.template
// 			.replace('h', hours)
// 			.replace('m', minutes)
// 			.replace('s', secs);

// 		console.log(output);
// 	}


// 	stop() {
// 		clearInterval(this.timer);
// 	}

// 	start() {
// 		this.render();
// 		this.timer = setInterval(() => this.render(), 1000);
// 	}
// }

// let clock = new Clock({ template: 'h:m:s' });

// clock.start();
// clock.stop();


// Наследование классов

// class Animal {
// 	constructor(name) {
// 		this.speed = 0;
// 		this.name = name;
// 	}

// 	run(speed) {
// 		this.speed = speed;
// 		alert(`${this.name} бежит со скоростью ${this.speed}`);
// 	}

// 	stop() {
// 		this.speed = 0;
// 		alert(`${this.name} остановился!`);
// 	}
// }

// class Rabbit extends Animal {
// 	hide() {
// 		alert(`${this.name} прячется!`);
// 	}
// }

// let rabbit = new Rabbit('Белый кролик');

// rabbit.run(6);
// rabbit.hide();


// function f(phrase) {
// 	return class {
// 		sayHi() {
// 			alert(phrase);
// 		}
// 	}
// }

// class User extends f ('Привет'){};

// new User().sayHi();


// class Animal {

// 	constructor(name) {
// 		this.name = name;
// 		this.speed = 0;
// 	}

// 	run(speed) {
// 		this.speed = speed;
// 		alert(`${this.name} бежит со скоростью ${this.speed}.`);
// 	}

// 	stop() {
// 		this.speed = 0;
// 		alert(`${this.name} стоит!`);
// 	}
// }

// class Rabbit extends Animal {

// 	hide() {
// 		alert(`${this.name} прячется!`);
// 	}

// 	stop() {
// 		super.stop();
// 		this.hide();
// 	}
// }

// let whiteRabbit = new Rabbit('Белый кролик');

// console.log(whiteRabbit);


// whiteRabbit.run(5);
// whiteRabbit.stop();


// class Animal {

// 	constructor(name) {
// 		this.name = name;
// 		this.speed = 0;
// 	}

// 	run(speed) {
// 		this.speed = speed;
// 		alert(`${this.name} имеет скорость${this.speed}!`);
// 	}

// 	stop() {
// 		this.speed = 0;
// 		alert(`${this.name} стоит.`);
// 	}
// }

// // class Rabbit extends Animal {
// // 	stop() {
// // 		setTimeout(() => super.stop(), 1000); // работает
// // 	}
// // }

// class Rabbit extends Animal {
// 	stop() {
// 		setTimeout(function () {super.stop()}, 1000); // не работает с обычной функцией
// 	}
// }

// let rabbit = new Rabbit('Белое ухо');

// rabbit.stop();


//! Переопределение конструктора

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 		this.speed = 0;
// 	}
// }

// class Rabbit extends Animal {
// 	constructor(name, earLength) {
// 		this.name = name; // Выдаст ошибку, сначала должен идти super
// 		this.speed = 0;
// 		this.earLength = earLength;
// 	}
// }

// let rabbit = new Rabbit('Белое Ухо', 10);



// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 		this.speed = 0;
// 	}
// }

// class Rabbit extends Animal {
// 	constructor(name, earLength) {
// 		super(name);
// 		// this.speed = 1;
// 		this.earLength = earLength;
// 	}
// }

// let rabbit = new Rabbit('Белое Ухо', 10);

// console.log(rabbit);


//! HomeObject

// let animal = {
// 	name: 'Animal',
// 	eat() {
// 		alert(`${this.name} ест!`);
// 	}
// }

// let rabbit = {
// 	__proto__: animal,
// 	name: 'Кролик',
// 	eat() {
// 		this.__proto__.eat.call(this);
// 	}
// }

// rabbit.eat(); // всё работает

// let longEar = {
// 	__proto__: rabbit,
// 	eat() {
// 		this.__proto__.eat.call(this);
// 	}
// }

// longEar.eat();


// let animal = {
// 	name: 'Animal',
// 	eat() {
// 		console.log(`${this.name} ест!`);
// 	}
// }

// let rabbit = {
// 	__proto__: animal,
// 	name: 'Кролик',
// 	eat() {
// 		super.eat();
// 	}
// }

// rabbit.eat(); // всё работает

// let longEar = {
// 	__proto__: rabbit,
// 	name: 'Длинноух',
// 	eat() {
// 		super.eat();
// 	}
// }

// longEar.eat(); // работает без применения this


// let animal = {
// 	sayHi() {
// 		console.log('Я животное!');
// 	}
// };

// let rabbit = {
// 	__proto__: animal,
// 	sayHi() {
// 		super.sayHi();
// 	}
// };

// let plant = {
// 	sayHi() {
// 		console.log('Я растение!');
// 	}
// }

// let tree = {
// 	__proto__: plant,
// 	sayHi: rabbit.sayHi
// };

// tree.sayHi();


// let animal = {
// 	eat: function () {
// 		console.log('Ест!');
// 	}
// };

// let rabbit = {
// 	__proto__: animal,
// 	eat: function () {  //! чтоб super работал нужно обьявлять метод (metod(){}) обьекта а не свойства-функции 
// 		super.eat();
// 	}
// };

// rabbit.eat();


//! Задание 1

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// class Rabbit extends Animal {
// 	constructor(name) {
// 		super(name);
// 		this.created = Date.now();
// 	}
// }

// let rabbit = new Rabbit('Белый кролик');
// alert(rabbit.name);
// console.log(rabbit);


// Задание 2

// class ExtendedClock extends Clock {
// 	constructor({ template }) {
// 		super({ template });
// 		this.precision = 1000;
// 	}

// 	start(precision) {
// 		if (precision) {
// 			this.precision = precision;
// 		}

// 		this.render();
// 		this.timer = setInterval(() => this.render(), this.precision);
// 	}
// }

// let clock = new ExtendedClock({ template: 'h:m:s' });

// clock.start(500);


//! Решение сайта 

// class ExtendedClock extends Clock {
// 	constructor(options) {
// 		super(options);
// 		let { precision = 1000 } = options;
// 		this.precision = precision;
// 	}

// 	start() {
// 		this.render();
// 		this.timer = setInterval(() => this.render(), this.precision);
// 	}
// };


//! Статические свойства и методы

// class User {
// 	static staticMethod() {
// 		alert(this === User);
// 	}
// }

// User.staticMethod();


// class User { }

// User.staticMethod = function () {
// 	alert(this === User);
// }

// User.staticMethod();


// class Article {
// 	constructor(title, date) {
// 		this.title = title;
// 		this.date = date;
// 	}

// 	static compare(articleA, articleB) {
// 		return articleA.date - articleB.date;
// 	}
// }

// let articles = [
// 	new Article('HTML', new Date(2019, 1, 1)),
// 	new Article('CSS', new Date(2019, 0, 1)),
// 	new Article(' javaScript', new Date(2019, 11, 1))
// ];

// console.log(articles[0].title);

// articles.sort(Article.compare);

// console.log(articles);


//! Фабричный метод

// class Article {
// 	constructor(title, date) {
// 		this.title = title;
// 		this.date = date;
// 	}

// 	static createTodays() {
// 		return new this('Сегодняшний дайджест', new Date());
// 	}
// }

// let article = Article.createTodays();

// console.log(article);


//! Статические свойства

// class Article {
// 	static publisher = 'Ruslan Sidorov';
// }

// alert(Article.publisher);

// Article.admin = 'Ruslan Sidorov';

// console.log(Article.admin);


//! Наследование статических свойств

// class Animal {

// 	constructor(name, speed) {
// 		this.speed = speed;
// 		this.name = name;
// 	}

// 	run(speed = 0) {
// 		this.speed += speed;
// 		alert(`${this.name} бежит со скоростью ${this.speed}.`);
// 	}

// 	static compare(animalA, animalB) {
// 		return animalA.speed - animalB.speed;
// 	}
// }

// class Rabbit extends Animal {
// 	hide() {
// 		alert(`${this.name} прячется!`);
// 	}
// }

// let rabbits = [
// 	new Rabbit('Белый кролик', 10),
// 	new Rabbit('Чёрный кролик', 5)
// ];

// rabbits.sort(Rabbit.compare);

// rabbits[0].run();


// class Animal { }
// class Rabbit extends Animal { }

// console.log(Rabbit.__proto__ === Animal); // наследуется как сам класс

// console.log(Rabbit.prototype.__proto__ === Animal.prototype); // так и его prototype


// class Admin {

// 	constructor(name) {
// 		this.name = name;
// 	}

// 	static isAdmin = true;
// }

// class User extends Admin { };

// let user = new User('Ruslan');

// console.log(user);

// alert(user.isAdmin);

// alert(User.isAdmin);


//! Задание 1

// class Rabbit {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let rabbit = new Rabbit('Rab');

// alert(rabbit.hasOwnProperty('name')); // все работает

// console.log(rabbit);

// class Object {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// class Rabbit extends Object {
// 	constructor(name) {
// 		super(name);
// 	}
// }

// let rabbit = new Rabbit('Кроль');

// console.log(rabbit);


// alert(rabbit.hasOwnProperty('name'));


//! Решение 

// class Rabbit extends Object {
// 	constructor(name) {
// 		super();
// 		this.name = name;
// 	}
// }

// let rabbit = new Rabbit('Кроль');

// alert(rabbit.hasOwnProperty('name'));


// class Rabbit extends Object { } //! Мы наследуем от Object его статические свойства

// alert(Rabbit.prototype.__proto__ === Object.prototype);
// alert(Rabbit.__proto__ === Object);

// alert(Rabbit.getOwnPropertyNames({ a: 1, b: 2 }));

// let rabbit = new Rabbit('Кроль');

// console.log(rabbit);


// class Rabbit { } //! в таком случае нет доступа к статических методам Object

// alert(Rabbit.prototype.__proto__ === Object.prototype);
// alert(Rabbit.__proto__ === Object);
// alert(Rabbit.__proto__ === Function.prototype);

// alert(Rabbit.getOwnPropertyName({ a: 1, b: 2 }));


//! Приватные и защищённые методы и свойства

// class CoffeeMachine {
// 	waterAmound = 0;

// 	constructor(power) {
// 		this.power = power;
// 		alert(`Создана кофеварка, мощность: ${this.power}`);
// 	}
// }

// let coffeeMachine = new CoffeeMachine(100);

// coffeeMachine.waterAmound = 200;
// console.log(coffeeMachine);


// class CoffeeMachine {
// 	_waterAmount = 0;

// 	set waterAmount(value) {
// 		if (value < 0) throw new Error('Отрицательное количество воды');
// 		this._waterAmount = value;
// 	}

// 	get waterAmount() {
// 		return this._waterAmount;
// 	}

// 	constructor(power) {
// 		this._power = power;
// 	}
// }

// let coffeeMachine = new CoffeeMachine(100);

// coffeeMachine.waterAmount = -10;


//! Свойство только для чтения

// 'use strict';
// class CoffeeMachine {

// 	constructor(power) {
// 		this._power = power;
// 	}

// 	get power() {
// 		return this._power;
// 	}

// }

// let coffeeMachine = new CoffeeMachine(100);

// console.log(coffeeMachine.power);
// coffeeMachine.power = 1000;


// class CoffeeMachine {
// 	_waterAmount = 0;

// 	setWaterAmount(value) {
// 		if (value < 0) {
// 			throw new Error('Отрицательное количество воды');
// 		}
// 		this._waterAmount = value;
// 	}

// 	getWaterAmount() {
// 		return this._waterAmount;
// 	}
// }

// new CoffeeMachine().setWaterAmount(100);


//! Приватные методы и свойства

// class CoffeeMachine {
// 	#waterLimit = 200;

// 	#checkWater(value) {
// 		if (value < 0) {
// 			throw new Error('Отрицательное кольчество воды!');
// 		}
// 		if (value > this.#waterLimit) {
// 			throw new Error('Слишком много воды!');
// 		}
// 	}
// }

// let coffeeMachine = new CoffeeMachine();

// coffeeMachine.#checkWater(100);
// coffeeMachine.#waterLimit = 1000;


// class CoffeeMachine {

// 	#waterAmount = 0;

// 	get waterAmount() {
// 		return this.#waterAmount;
// 	}

// 	set waterAmount(value) {
// 		if (value < 0) {
// 			throw new Error('Отрицательный уровень воды!')
// 		}
// 		this.#waterAmount = value;
// 	}
// }

// let machine = new CoffeeMachine();

// machine.waterAmount = 100;
// console.log(machine.waterAmount);
// console.log(machine);
// // alert(machine.#waterAmount); // ! ошибка


// class MegaCoffeeMachine extends CoffeeMachine {
// 	method() {
// 		alert(this.#waterAmount); //! Тоже ошибка
// 	}
// }


// class User {

// 	sayHi() {
// 		let fieldName = 'name';
// 		alert(`Hello, ${this[fieldName]}`);
// 	}
// }


//! Расширение встроенный класов

// class PowerArray extends Array {
// 	isEmpty() {
// 		return this.length === 0;
// 	}
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty());

// let filterArr = arr.filter(item => item >= 10);
// console.log(filterArr);
// console.log(filterArr.isEmpty());


// class PowerArray extends Array {
// 	isEmpty() {
// 		return this.length === 0;
// 	}

// 	static get [Symbol.species]() {
// 		return Array;
// 	}
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// console.log(arr.isEmpty());

// let filterArr = arr.filter(item => item >= 10);
// console.log(filterArr);
// console.log(filterArr.isEmpty());


//!  Проверка класса instanceOf

// class Rabbit { }

// let rabbit = new Rabbit();

// alert(rabbit instanceof Rabbit);


// function Rabbit() { } //! Работает и для функций конструкторов

// alert(new Rabbit() instanceof Rabbit);


// let arr = [1, 2, 3]; //! Так и для массивов

// alert(arr instanceof Array);
// alert(arr instanceof Object);


// let obj = {};

// console.log(obj instanceof Object);


//! ручная настройка instanceof

// class Animal {
// 	static [Symbol.hasInstance](obj) {
// 		if (obj.canEat) return true;
// 	}
// }

// let obj1 = { canEat: true };
// alert(obj1 instanceof Animal);
// console.log(obj1);

// let obj2 = new Animal();

// console.log(obj2 instanceof Animal);
// console.log(obj2);

// obj2.canEat = true;

// console.log(obj2 instanceof Animal);


// class Animal { };
// class Rabbit extends Animal { };

// let rabbit = new Rabbit();

// console.log(rabbit instanceof Animal);
// console.log(Animal.prototype.isPrototypeOf(rabbit)); //! метод objA.isPrototypeOf(objB)


// function Rabbit() { }
// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit instanceof Rabbit); //! потому что instanceof сравнивает прототип


// let obj = {};

// alert(obj);
// alert(obj.toString());


// let objectToString = Object.prototype.toString;

// let arr = [];

// alert(objectToString.call(arr));


// let s = Object.prototype.toString;

// alert(s.call(123));
// alert(s.call(null));
// alert(s.call(alert));


//! Symbol.toStringTag настройка toString

// let user = {
// 	[Symbol.toStringTag]: 'User'
// };

// alert({}.toString.call(user));


// alert(window[Symbol.toStringTag]);
// alert(XMLHttpRequest.prototype[Symbol.toStringTag]);
// alert({}.toString.call(window));
// alert({}.toString.call(new XMLHttpRequest()));


// Задание 1

// function A() { }
// function B() { }

// A.prototype = B.prototype = {}; // потому что их прототип это один и тот же обьект

// let a = new A();

// alert(a instanceof B);


//! Примеси

// class Person {
// 	constructor(age) {
// 		this.age = age;
// 	}
// }

// let sayHiMixin = {

// 	sayHi() {
// 		alert(`Hello, ${this.name}`);
// 	},

// 	sayBye() {
// 		alert(`Bye, ${this.name}`);
// 	}
// };

// class User extends Person {
// 	constructor(name, age) {
// 		super(age);
// 		this.name = name;
// 	}
// }

// Object.assign(User.prototype, sayHiMixin);

// let newUser = new User('Ruslan', 29);

// newUser.sayHi();
// newUser.sayBye();
// console.log(newUser);


// let sayMixin = {
// 	say(phrase) {
// 		alert(phrase);
// 	}
// };

// let sayHiMixin = {
// 	__proto__: sayMixin,

// 	sayHi() {
// 		super.say(`Привет, ${this.name}`);
// 	},

// 	sayBye() {
// 		super.say(`Пока, ${this.name}`);
// 	}
// };

// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// Object.assign(User.prototype, sayHiMixin);

// let user = new User('Руслан');

// user.sayHi();


//! EventMixin

// let EventMixin = {

// 	on(eventName, handler) {
// 		if (!this._eventHandlers) {
// 			this._eventHandlers = {}
// 		}
// 		if (!this._eventHandlers[eventName]) {
// 			this._eventHandlers[eventName] = [];
// 		}
// 		this._eventHandlers[eventName].push(handler);
// 	},

// 	off(eventName, handler) {
// 		let handlers = this._eventHandlers && this._eventHandlers[eventName];
// 		if (!handlers) {
// 			return;
// 		}
// 		for (let i = 0; i < handlers.length; i++) {
// 			if (handlers[i] === handler) {
// hanslers.splice(i--, 1);
// 			}
// 		}
// 	},

// 	trigger(eventName, ...args) {
// 		if (!this._eventHandlers || !this._eventHandlers[eventName]) {
// 			return;
// 		}
// 		this._eventHandlers[eventName].forEach(handler => {
// 			handler.apply(this, args)
// 		});
// 	}
// };

// class Menu {
// 	choose(value) {
// 		this.trigger('select', value);
// 	}
// }

// Object.assign(Menu.prototype, EventMixin);

// let menu = new Menu();

// menu.on('select', value => alert(`Выбранное значение ${value}`));

// menu.choose(123);


// ! Try catch

// try {
// 	console.log('Начало блока TRY');
// 	console.log('Конец блока TRY');
// } catch (error) {
// 	console.log('Блок не выведет ошибку');
// }

// try {
// 	console.log('Начало блока TRY');
// 	lalala;
// 	console.log('Конец блока TRY');
// } catch (error) {
// 	console.log('Ошибка в блоке');
// }


// try {
// 	{{{{{
// } catch (error) {
// 	alert('Движок не может понять этот код, он некоректен');
// }


// try {
// 	setTimeout(() => {
// 		noSuchVariable;
// 	}, 1000);
// } catch (error) {
// 	alert('не сработает');
// }


// setTimeout(() => {
// 	try {
// 		noSuchVariable;
// 	} catch (error) {
// 		alert('Ошибка поймана');
// 	}
// }, 1000);


// try {
// 	lalalala;
// } catch (error) {
// 	console.log(error.name);
// 	console.log(error.message);
// 	console.log(error.stack);
// 	console.log(error);
// }


// let jsonOfServer = '{"name":"Ruslan", "age":29}'; //! Внутри JSONа обязательно должны быть двойные ковычки

// let user = JSON.parse(jsonOfServer);

// console.log(user);


//! Некоректный JSON от пользователя

// let json = '{некорректный JSON}';

// try {

// 	let user = JSON.parse(json);
// 	alert(user.name);

// } catch (error) {

// 	alert('Извините, в данных ошибка, мы попробуем получить их ещё раз.');
// 	console.log(error.name);
// 	console.log(error);

// }


// let json = '{"age": 30}';

// try {

// 	let user = JSON.parse(json);
// 	alert(user.name);

// } catch (error) {

// 	alert('не выполнится');

// }


// let error = new Error(message);
// let error = new SyntaxError(message);
// let error = new ReferenceError(message);


// let error = new Error(' Ого, ошибка! о_О ');

// alert(error.name);
// alert(error.message);


// try {
// 	JSON.parse('{bad json o_O}');
// } catch (error) {
// 	console.log(error.name);
// 	console.log(error.message);
// }


// let json = '{"age": 30}';

// try {

// 	let user = JSON.parse(json);

// 	if (!user.name) {
// 		throw new SyntaxError('Данные неполны: нет имени');
// 	}

// 	alert(user.name);

// } catch (error) {

// 	alert('JSON Error: ' + error.message);

// }


// 'use strict'
// let json = '{"age": 29}';

// try {

// 	user = JSON.parse(json); 

// 	if (!user.name) {
// 		throw new SyntaxError('Данные неполны: нет имени');
// 	}

// 	console.log(user);

// } catch (error) {

// 	alert('JSON Error: ' + error.message);
// }


// let json = '{"age": 29}';

// try {

// 	let user = JSON.parse(json);

// 	blabla();

// 	if (!user.name) {
// 		throw new SyntaxError('Данные неполны: нет имени.');
// 	}

// 	alert(user.name);

// } catch (error) {

// 	if (error.name === 'SyntaxError') {
// 		alert('JSON Error: ' + error.message);
// 	} else {
// 		throw error;
// 	}

// }


// function readData() {
// 	let json = '{"age": 29}';

// 	try {

// 		blabla();

// 	} catch (error) {

// 		if (error.name != 'SyntaxError') {
// 			throw error;
// 		}

// 	}

// }

// try {
// 	readData();
// } catch (error) {
// 	alert('Внешний catch поймал: ' + error);
// }


// try {
// 	console.log('try');
// 	if (confirm('Сгенерировать ошибку?')) {
// 		BAD_CODE();
// 	}
// } catch (error) {
// 	console.log(error);
// } finally {
// 	console.log('finally выводится обязательно!');
// }


// let num = +prompt('Введите положительное целое число: ', 35);

// let diff, result;

// function fib(n) {
// 	if (n < 0 || Math.trunc(n) != n) {
// 		throw new Error('Должно быть целое неотрицательное число');
// 	}
// 	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
// 	result = fib(num);
// } catch (error) {
// 	result = 0;
// } finally {
// 	diff = Date.now() - start;
// }

// console.log(result || 'Возникла ошибка!');
// console.log(`Выполнение заняло ${diff}`);


// function func() {

// 	try {
// 		return 1;
// 	} catch (error) {
// 		alert(error)
// 	} finally {
// 		alert('finally');
// 	}
// }

// alert(func());


// function func() {

// 	try {
// 		blabla();
// 	} finally {
// 		console.log('Необходимый код!');
// 	}
// }

// func();


//! Глобальный catch

// window.onerror = function (message, url, line, col, error) {
// 	alert(`${message} \n Ошибка на строке ${line}:${col} файла ${url}`)
// };

// function readDate() {
// 	badFunc();
// }

// readDate();


//! Задание 1

// function f() {
// 	try {
// 		alert('начало');
// 		return 'result';
// 	} catch (error) {

// 	} finally {
// 		alert('Очистка!');
// 	}
// }

// f();


// function f() {
// 	try {
// 		alert('Начало');
// 		throw new Error('Ошибка');
// 	} catch (error) {
// 		//...
// 		if ('не могу обработать ошибку') {
// 			throw error;
// 		}
// 	} finally {
// 		alert('Очистка!')
// 	}
// }

// f();


//!  Расширение Error

// class ValidationError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = 'ValidationError';
// 	}
// }

// function test() {
// 	throw new ValidationError('Упс!');
// }

// try {
// 	test();
// } catch (error) {
// 	console.log(error.message);
// 	console.log(error.name);
// 	console.log(error.stack);
// }


// class ValidationError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = 'ValidationError';
// 	}
// }

// function readUser(json) {
// 	let user = JSON.parse(json);

// 	if (!user.age) {
// 		throw new ValidationError('Нет поля: age');
// 	}

// 	if (!user.name) {
// 		throw new ValidationError('Нет имени пользователя: name');
// 	}

// 	return user;
// }

// try {
// 	readUser('{"name": "Ruslan", "age": 29}');
// } catch (error) {
// 	if (error instanceof ValidationError) {   //! (error.name == 'SyntaxError')
// 		console.log('Некорректные данные: ' + error.message);
// 	} else if (error instanceof SyntaxError) {
// 		console.log('JSON ошибка Синтаксиса: ' + error.message);
// 	} else {
// 		throw error;
// 	}
// }


//! Дальнейшее наследование

// class ValidationError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = 'ValidationError';
// 	}
// }

// class PropertyRequiredError extends ValidationError {
// 	constructor(property) {
// 		super('Нет свойства: ' + property);
// 		this.name = 'PropertyRequiredError';
// 		this.property = property;
// 	}
// }

// function readUser(json) {
// 	let user = JSON.parse(json);

// 	if (!user.name) {
// 		throw new PropertyRequiredError('name');
// 	}

// 	if (!user.age) {
// 		throw new PropertyRequiredError('age');
// 	}

// 	return user;
// }

// try {
// 	readUser('{"name": "Ruslan"}');
// } catch (error) {

// 	if (error instanceof ValidationError) {
// 		console.log('Неверные данные: ' + error.message);
// 		console.log(error.name);
// 		console.log(error.property);
// 	} else if (error instanceof SyntaxError) {
// 		console.log('Ошибка синтаксиса: ' + error.message);
// 	} else {
// 		throw error;
// 	}
// }


// class MyError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = this.constructor.name;
// 	}
// }

// class ValidationError extends MyError { }

// class PropertyRequiredError extends ValidationError {
// 	constructor(property) {
// 		super('Нет свойства: ' + property);
// 		this.property = property;
// 	}
// }

// alert(new PropertyRequiredError('field').name);


//! Обёртывание исключений

// class ReadError extends Error {
// 	constructor(message, cause) {
// 		super(message);
// 		this.cause = cause;
// 		this.name = 'ReadError';
// 	}
// }

// class ValidationError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = this.constructor.name;
// 	}
// }

// class PropertyRequiredError extends ValidationError {
// 	constructor(property) {
// 		super('Нет свойиства: ' + property);
// 		this.property = property;
// 	}
// }

// function validateUser(user) {

// 	if (!user.age) {
// 		throw new PropertyRequiredError('age');
// 	}

// 	if (!user.name) {
// 		throw new PropertyRequiredError('name')
// 	}

// }

// function readUser(json) {
// 	let user;

// 	try {
// 		user = JSON.parse(json);
// 	} catch (error) {
// 		if (error instanceof SyntaxError) {
// 			throw new ReadError('Синтаксическая ошибка', error);
// 		} else {
// 			throw error;
// 		}
// 	}

// 	try {
// 		validateUser(user);
// 	} catch (error) {
// 		if (error instanceof ValidationError) {
// 			throw new ReadError('Ошибка валидации', error);
// 		} else {
// 			throw error;
// 		}
// 	}
// }

// try {
// 	readUser('{"age": 29}');
// } catch (error) {
// 	if (error instanceof ReadError) {
// 		alert(error);
// 		alert('Исходная ошибка: ' + error.cause);
// 	} else {
// 		throw error;
// 	}
// }


//! Задание 1

// class FormatError extends SyntaxError {
// 	constructor(message) {
// 		super(message);
// 		this.name = this.constructor.name;
// 	}
// }

// let err = new FormatError('Ошибка фоматирования');

// alert(err.message);
// alert(err.name);
// alert(err.stack);

// alert(err instanceof FormatError);
// alert(err instanceof SyntaxError);


//! Браузерное окружениеб спецификация

// function sayHi() {
// 	alert('Hello');
// }

// window.sayHi();
// console.log(window.innerHeight);
// console.log(window.innerWidth);

//! DOM(Document Object Model);

// document.body.style.background = 'red';
// setTimeout(() => document.body.style.background = '', 3000);


//! BOM (Browser Object Model)

// console.log(navigator.userAgent);
// alert(location.href);
// if (confirm('Перейти на Wikipedia?')) {
// 	location.href = 'http://wikipedia.org';
// }


//! DOM-дерево

// alert(document.body)


// for (let i = 0; i < document.body.childNodes.length; i++) {
// 	console.log(document.body.childNodes[i]);
// }


// console.log(document.body.childNodes[0] === document.body.firstChild);
// console.log(document.body.childNodes[document.body.childNodes.length - 1] === document.body.lastChild);


// for (const node of document.body.childNodes) {
// 	console.log(node);
// }

// alert(document.body.childNodes.filter); //! не работает так как это коллекция(псевдо массив)

// alert(Array.from(document.body.childNodes));
// console.log(Array.from(document.body.childNodes));


// for (const node in document.body.childNodes) { //! не перебирайте childNodes с помощью  for in
// 	console.log(node);
// }


// console.log(document.body.parentElement);
// console.log(document.head.nextElementSibling);
// console.log(document.head.nextSibling);
// console.log(document.body.previousElementSibling);
// console.log(document.body.previousSibling);
// console.log(document.body.children);


// console.log(document.documentElement.parentNode);
// console.log(document.documentElement.parentElement);


// for (const element of document.body.children) {
// 	console.log(element);
// }


// !  Промисы

// let promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		resolve('done!');
// 	}, 1000);
// });

// promise.then(
// 	result => alert(result),
// 	error => alert(error)
// );


// let promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		reject(new Error('Whoops!'));
// 	}, 1000);
// });

// promise.then(
// 	result => alert(result),
// 	error => alert(error)
// );


// ! Catch

// let promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		reject(new Error('Whoops!'));
// 	}, 1000);
// });

// promise.catch(alert); // Обрабатывает только ошибку, аналог .then(null, f);


// ! Finally

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('result');
// 	}, 2000);
// })

// 	.finally(() => alert('Промис завершён'))
// 	.then(result => alert(result));


// new Promise((resolve, reject) => {
// 	throw new Error('error');
// })

// 	.finally(() => alert('Промис завершён'))
// 	.catch(err => alert(err));


// ! Пример: loadScript

// function loadScropt(src) {
// 	return new Promise(function (resolve, reject) {
// 		let script = document.createElement('script');
// 		script.src = src;

// 		script.onload = () => resolve(script);
// 		script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

// 		document.head.append(script);
// 	});
// }

// let promise = loadScropt("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
// 	script => alert(`${script.src} Загружен!`),
// 	error => alert(`Ошибка: ${error.message}`)
// )

// promise.then(script => alert('Еще один обработчик...'));


// ! Задание 2

// function delay(ms) {
// 	return new Promise(function (resolve, reject) {
// 		let start = Date.now();
// 		while (ms > Date.now() - start) {

// 		}

// 		resolve('End!');
// 	})
// }

// delay(3000).then(alert).then(() => alert('выполнилось через 3 секунды'));


// ! Задание 3

// function showCircle(cx, cy, radius) {
// 	return new Promise(function (resolve) {
// 		let div = document.createElement('div');
// 		div.style.width = 0;
// 		div.style.height = 0;
// 		div.style.left = cx + 'px';
// 		div.style.top = cy + 'px';
// 		div.className = 'circle';
// 		document.body.append(div);

// 		setTimeout(() => {
// 			div.style.width = radius * 2 + 'px';
// 			div.style.height = radius * 2 + 'px';

// 			div.addEventListener('transitionend', function handler() {
// 				div.removeEventListener('transitionend', handler);
// 				resolve(div);
// 			});
// 		});
// 	})
// }

// function go() {
// 	showCircle(150, 150, 100).then(div => {
// 		div.classList.add('message-ball');
// 		div.append('Hello, world!');
// 	})
// }


// ! Решение сайта

// function showCircle(cx, cy, radius) {
// 	let div = document.createElement('div');
// 	div.style.width = 0;
// 	div.style.height = 0;
// 	div.style.left = cx + 'px';
// 	div.style.top = cy + 'px';
// 	div.className = 'circle';
// 	document.body.append(div);

// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			div.style.width = radius * 2 + 'px';
// 			div.style.height = radius * 2 + 'px';

// 			div.addEventListener('transitionend', function handler() {
// 				div.removeEventListener('transitionend', handler);
// 				resolve(div);
// 			});
// 		});
// 	})
// }

// function go() {
// 	showCircle(150, 150, 100).then(div => {
// 		div.classList.add('message-ball');
// 		div.append('Hello, world!');
// 	})
// }


// ! Цепочки промисов

// new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		resolve(1);
// 	}, 1000);
// }).then(function (result) {
// 	alert(result);
// 	return result * 2;
// }).then(function (result) {
// 	alert(result);
// 	return result * 2
// }).then(function (result) {
// 	alert(result);
// 	return result * 2
// })



// let promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		resolve(1);
// 	}, 1000);
// });
// promise.then(function (result) {
// 	alert(result);
// 	return result * 2;
// });
// promise.then(function (result) {
// 	alert(result);
// 	return result * 2
// });
// promise.then(function (result) {
// 	alert(result);
// 	return result * 2
// })


// ! Возвращаем промисы

// new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		resolve(1);
// 	}, 1000);
// }).then(function (result) {
// 	alert(result);
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(result * 2)
// 		}, 1000);
// 	})
// }).then(function (result) {
// 	alert(result);
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(result * 2)
// 		}, 1000);
// 	})
// }).then(function (result) {
// 	alert(result);
// })


// ! Пример: thenable

// class Thenable {
// 	constructor(num) {
// 		this.num = num;
// 	}

// 	then(resolve, reject) {
// 		alert(resolve);

// 		setTimeout(() => {
// 			resolve(this.num * 2);
// 		}, 1000);
// 	}
// }

// new Promise(resolve => resolve(1))
// 	.then(result => {
// 		return new Thenable(result);
// 	})
// 	.then(alert);


// ! Fetch

// let name = 'iliakan';

// fetch(`https://api.github.com/users/${name}`)
// 	.then(response => response.json())
// 	.then(githubUser => new Promise(function (resolve, reject) {
// 		let img = document.createElement('img');
// 		img.src = githubUser.avatar_url;
// 		document.body.append(img);

// 		setTimeout(() => {
// 			img.remove();
// 			resolve(githubUser);
// 		}, 3000);
// 	}))
// 	.then(githubUser => alert(`Закончился показ ${githubUser.name}`));


// function loadGithubUser(name) {
// 	return fetch(`https://api.github.com/users/${name}`)
// 		.then(response => response.json());
// }

// function showAvatar(githubUser) {
// 	return new Promise(function (resolve, reject) {
// 		let img = document.createElement('img');
// 		img.src = githubUser.avatar_url;
// 		document.body.append(img);

// 		setTimeout(() => {
// 			img.remove();
// 			resolve(githubUser);
// 		}, 3000);
// 	})
// }

// loadGithubUser(name)
// 	.then(showAvatar)
// 	.then(githubUser => alert(`Показ аватара ${githubUser.name} закончен`));


// ! Промисы: обработка ошибок

// fetch('https://no-such-server.blabla')
// 	.then(response => response.json())
// 	.catch(err => alert(err));


// fetch(`https://api.github.com/users/${name}`)
// 	.then(response => response.json())
// 	.then(githubUser => new Promise((resolve, reject) => {
// 		let img = document.createElement('img');
// 		img.src = githubUser.avatar_url;
// 		document.body.append(img);

// 		setTimeout(() => {
// 			img.remove();
// 			resolve(githubUser);
// 		}, 3000);
// 	}))
// 	.catch(error => alert(error.message));


// new Promise((resolve, reject) => {
// 	throw new Error('Ошибка!');
// }).catch(alert);


// new Promise((resolve, reject) => {
// 	reject(new Error('Ошибка!'));
// }).catch(alert);


// new Promise((resolve, reject) => {
// 	resolve('Ок');
// }).then((result) => {
// 	blabla();
// }).catch(alert);


// ! Пробрасывание ошибок

// new Promise((resolve, reject) => {
// 	throw new Error('Ошибка!');
// }).catch(function (error) {
// 	alert(`Ошибка обработана, продолжить работу ${error}`);
// }).then(() => alert('Управление передается в следующий then'));


// new Promise((resolve, reject) => {
// 	throw new Error('Ошибка!');
// }).catch(function (err) {
// 	if (err instanceof URIError) {

// 	} else {
// 		alert('Не могу обработать ошибку');

// 		throw err;
// 	}

// }).then(function () {
// 	// не выполнится
// }).catch(function (error) {
// 	alert(`Неизвестная ошибка: ${error}`)
// });


// ! Необработанные ошибки

// new Promise(function () {
// 	noSuchFunction();
// })
// 	.then(() => {

// })


// window.addEventListener('unhandledrejection', function (event) {
// 	alert(event.promise);
// 	alert(event.reason);
// });

// new Promise(function () {
// 	throw new Error('Ошибка!');
// });


// ! Promis.API

// Promise.all([
// 	new Promise(resolve => setTimeout(() => resolve(1), 3000)),
// 	new Promise(resolve => setTimeout(() => resolve(2), 2000)),
// 	new Promise(resolve => setTimeout(() => resolve(3), 1000)),

// ]).then(alert);


// let urls = [
// 	'https://api.github.com/users/iliakan',
// 	'https://api.github.com/users/remy',
// 	'https://api.github.com/users/jeresig'
// ];

// let request = urls.map(url => fetch(url));

// Promise.all(request)
// 	.then(responses => responses.forEach(
// 		response => alert(`${response.url}: ${response.status}`)
// 	));


// let names = ['iliakan', 'remy', 'jeresig'];

// let requests = names.map(name =>
// 	fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
// 	.then(responses => {

// 		for (const response of responses) {
// 			alert(`${response.url}: ${response.status}`);
// 		}

// 		return responses;
// 	})
// 	.then(responses => Promise.all(responses.map(r => r.json())))
// 	.then(users => users.forEach(user => alert(user.name)));


// Promise.all([
// 	new Promise((resolve, reject) => setTimeout(() => {
// 		resolve(1);
// 	}, 1000)),
// 	new Promise((resolve, reject) => setTimeout(() => {
// 		reject(new Error('Ошибка!'));
// 	}, 2000)),
// 	new Promise((resolve, reject) => setTimeout(() => {
// 		resolve(3);
// 	}, 3000)),
// ]).catch(alert);


// Promise.all([
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(1);
// 		}, 1000)
// 	}),
// 	2,
// 	3
// ]).then(alert);


// ! Promise.allSettled

// let urls = [
// 	'https://api.github.com/users/iliakan',
// 	'https://api.github.com/users/remy',
// 	'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
// 	.then(results => { // (*)
// 		results.forEach((result, num) => {
// 			if (result.status == "fulfilled") {
// 				alert(`${urls[num]}: ${result.value.status}`);
// 			}
// 			if (result.status == "rejected") {
// 				alert(`${urls[num]}: ${result.reason}`);
// 			}
// 		});
// 	});


// ! Полифил

// if (!Promise.allSettled) {
// 	Promise.allSettled = function (promises) {
// 		return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
// 			status: 'fulfilled',
// 			value: value
// 		}), error => ({
// 			status: 'rejected',
// 			reason: error
// 		}))));
// 	};
// }


// ! Promise.race

// let promise = Promise.race([
// 	new Promise((resolve, reject) => setTimeout(() => {
// 		resolve(1);
// 	}, 3000)),
// 	new Promise((resolve, reject) => setTimeout(() => {
// 		reject('Ошибка!');
// 	}, 2000)),
// 	new Promise((resolve, reject) => setTimeout(() => {
// 		resolve(3);
// 	}, 1000))
// ]);

// promise.then(alert).catch(alert);


// ! Promise.resolve

// let  cache =new Map();

// function loadCached(url) {

// 	if (cache.has(url)) {
// 		return Promise.resolve(cache.get(url));
// 	}

// 	return fetch(url)
// 	.then(response => response.text())
// 	.then(text => {
// 		cache.set(url, text);
// 		return text;
// 	})
// }


// ! Промисификация

// function loadScript(src, callback) {
// 	let script = document.createElement('script');
// 	script.src = src;

// 	script.onload = () => callback(null, script);
// 	script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

// 	document.head.append(script);
// }

// function loadScriptPromise(src) {
// 	return new Promise((resolve, reject) => {
// 		loadScript(src, (err, script) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(script);
// 				// console.log(script);
// 			}
// 		})
// 	})
// }


// function loadScript(src, callback) {
// 	let script = document.createElement('script');
// 	script.src = src;

// 	script.onload = () => callback(null, script);
// 	script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

// 	document.head.append(script);
// 	console.log('Хелло');
// }

// let loadScriptPromise = function (src) {
// 	return new Promise((resolve, reject) => {
// 		loadScript(src, (err, script) => {
// 			if (err) reject(err)
// 			else resolve(script);
// 		});
// 	})
// }

// loadScriptPromise('js/script.js').then(() => sayHi());


// function loadScript(src, callback) {
// 	let script = document.createElement('script');
// 	script.src = src;

// 	script.onload = () => callback(null, script);
// 	script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

// 	document.head.append(script);
// }

// function promisify(f, manyArgs = false) {
// 	return function (...args) {
// 		return new Promise((resolve, reject) => {
// 			function callback(err, ...results) {
// 				if (err) {
// 					return reject(err);
// 				} else {
// 					resolve(manyArgs ? results : results[0]);
// 				}
// 			}

// 			args.push(callback);

// 			f.call(this, ...args);
// 		});
// 	};
// };

// let loadScriptPromise = promisify(loadScript);
// loadScriptPromise('js/script.js')
// 	.then(() => sayHi())
// 	.then(() => sayHi());


// ! Микрозадачи

// let promise = Promise.resolve();

// promise.then(() => alert('Промис выполнен'));

// alert('Код выаолнен');


// Promise.resolve()
// 	.then(() => alert('Промис выполнен!'))
// 	.then(() => alert('Код выполнен'));


// let promise = Promise.reject(new Error('Ошибка в промисе!'));
// promise.catch(err => alert('Поймана!'));

// window.addEventListener('unhandledrejection', event => {
// 	alert(event.reason)
// });


// let promise = Promise.reject(new Error('Ошибка в промисе!'));
// setTimeout(() => {
// 	promise.catch(err => alert('Поймана!'));
// }, 1000);

// window.addEventListener('unhandledrejection', event => {
// 	alert(event.reason)
// });


// ! Async/Await

// async function f() {
// 	return 1;
// }

// f().then(alert);


// async function fun() {
// 	return new Promise(resolve => resolve(1));
// }

// fun().then(alert);


// async function f() {

// 	let promise = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('Готово!');
// 		}, 1000);
// 	});

// 	let result = await promise;

// 	alert(result);

// 	return promise;
// }

// f().then(console.log);


// async function showAvatar() {
// 	let name = 'iliakan';

// 	let githubResponse = await fetch(`https://api.github.com/users/${name}`);
// 	let githubUser = await githubResponse.json();

// 	let img = document.createElement('img');
// 	img.src = githubUser.avatar_url;
// 	document.body.append(img);

// 	await new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve();
// 		}, 3000);
// 	})

// 	img.remove();

// 	return githubUser;
// }

// showAvatar().then(console.log);


// let response = await fetch(`https://api.github.com/users/iliakan`);
// let user = await response.json();


// (async () => {
// 	let response = await fetch(`https://api.github.com/users/iliakan`);
// 	let user = await response.json();

// 	let img = document.createElement('img');
// 	img.src = user.avatar_url;
// 	document.body.append(img);

// 	await new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve();
// 		}, 3000);
// 	})

// 	img.remove();
// })();


// class Thenable {
// 	constructor(num) {
// 		this.num = num;
// 	}

// 	then(resolve, reject) {
// 		alert(resolve);

// 		setTimeout(() => {
// 			resolve(this.num * 2);
// 		}, 1000);
// 	}
// }

// async function f() {
// 	let result = await new Thenable(1);
// 	alert(result);
// }

// f();

// let result = Promise.resolve(1).then(result => {
// 	return new Thenable(result)
// });

// result.then(alert);


// !  Асинхронные методы классов

// class Waiter {
// 	async wait() {
// 		return await Promise.resolve(1);
// 	}
// }

// new Waiter()
// 	.wait()
// 	.then(alert);


// ! Обработка ошибок

// async function f() {
// 	await Promise.reject(new Error('Упс!'));
// }

// f()


// async function f() {

// 	try {
// 		let response = await fetch('http://no-such-url');
// 		let user = await response.json();
// 	} catch (error) {
// 		alert(error);
// 	}
// }

// f();


// async function f() {

// 	let response = await fetch('http://no-such-url');
// 	let user = await response.json();

// }

// f().catch(alert);


// ! Задание 1

// async function loadJson(url) {
// 	let response = await fetch(url);

// 	if (response.status == 200) {
// 		return await response.json();
// 	} else {
// 		throw new Error(response.status);
// 	}
// }

// loadJson('no-such-user.json')
// 	.then(console.log)
// 	.catch(alert);


// ! Задание 2

// class HttpError extends Error {
// 	constructor(response) {
// 		super(`${response.status} for ${response.url}`);
// 		this.name = 'HttpError';
// 		this.response = response;
// 	}
// }

// async function loadJson(url) {
// 	let response = await fetch(url);

// 	if (response.status == 200) {
// 		let json = await response.json();
// 		return json
// 	} else {
// 		throw new HttpError(response);
// 	}
// }

// async function demoGithubUser() {

// 	try {
// 		let name = prompt('Введите логин?', 'iliakan');
// 		let user = await loadJson(`https://api.github.com/users/${name}`)

// 		alert(`Полное имя: ${user.name}.`);
// 	} catch (error) {
// 		if (error instanceof HttpError && error.response.status == 404) {
// 			while (error instanceof HttpError && error.response.status == 404) {
// 				alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
// 				try {
// 					let name = prompt('Введите логин?', 'iliakan');
// 					let user = await loadJson(`https://api.github.com/users/${name}`)

// 					return alert(`Полное имя: ${user.name}.`);
// 				} catch (error) {
// 				}
// 			}
// 			alert(`Полное имя: ${user.name}.`);
// 		} else {
// 			throw error;
// 		}
// 	}
// }

// demoGithubUser();

// ! Решение сайта

// class HttpError extends Error {
// 	constructor(response) {
// 		super(`${response.status} for ${response.url}`);
// 		this.name = 'HttpError';
// 		this.response = response;
// 	}
// }

// async function loadJson(url) {
// 	let response = await fetch(url);
// 	if (response.status == 200) {
// 		return response.json();
// 	} else {
// 		throw new HttpError(response);
// 	}
// }

// async function demoGithubUser() {

// 	let user;
// 	while (true) {
// 		let name = prompt('Введите логин?', 'iliakan');

// 		try {
// 			user = await loadJson(`https://api.github.com/users/${name}`);
// 			break;
// 		} catch (err) {
// 			if (err instanceof HttpError && err.response.status == 404) {
// 				alert('Такого пользователя не существует, пожалуйста, повторите ввод');
// 			} else {
// 				throw err;
// 			}
// 		}
// 	}

// 	alert(`Полное имя: ${user.name}.`);
// 	return user;
// }

// demoGithubUser();


// ! Задание 3

// function f() {
// 	wait().then(alert);
// 	alert('End!');
// }

// async function wait() {
// 	await new Promise(resolve => setTimeout(() => {
// 		resolve();
// 	}, 1000))
// 	return 10;
// }

// f();


// ! ArrayBuffer

// let buffer = new ArrayBuffer(16);
// alert(buffer.byteLength);


// let buffer = new ArrayBuffer(16);
// let view = new Uint32Array(buffer);

// alert(Uint32Array.BYTES_PER_ELEMENT);

// alert(view.length);
// alert(view.byteLength);

// view[0] = 123456;

// for (const num of view) {
// 	console.log(num);
// }


// let arr16 = new Uint16Array([1, 1000]);
// let arr8 = new Uint8Array(arr16);
// console.log(arr16);
// console.log(arr8);


// let arr = new Uint16Array(4);
// console.log(arr.BYTES_PER_ELEMENT);
// console.log(arr.byteLength);


// let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

// let dataView = new DataView(buffer);

// console.log(dataView.getUint8(0));
// console.log(dataView.getUint16(0));
// console.log(dataView.getUint32(0));
// dataView.setInt32(0, 0);
// console.log(dataView.getUint32(0));



// ! Задание 1 

// function concat(arrays) {
// 	if (!arrays.length) {
// 		return null;
// 	}

// 	let bytes = 0;

// 	for (const array of arrays) {
// 		bytes += array.length;
// 	}

// 	// ! решение сайта через reduce
// 	// let bytes = arrays.reduce((acc, value) => acc + value.length, 0);

// 	let result = new Uint8Array(bytes);
// 	let ind = 0;

// 	for (let i = 0; i < arrays.length; i++) {
// 		result.set(arrays[i], ind);
// 		ind += arrays[i].length;
// 	}

// 	return result;
// }

// let chunks = [
// 	new Uint8Array([0, 1, 2]),
// 	new Uint8Array([3, 4, 5]),
// 	new Uint8Array([6, 7, 8]),
// ];

// console.log((concat(chunks)));

// console.log(concat(chunks).constructor.name);


// ! TextDecoder TextEncoder

// let uint8Array = new Uint8Array([72, 101, 108, 111]);
// console.log(new TextDecoder().decode(uint8Array));

// let china = new Uint8Array([228, 189, 160, 229, 165, 189]);
// let str = new TextDecoder().decode(china);
// console.log(str);


// let str = 'Hello, world!';
// let encoder = new TextEncoder();

// let uint8Array = encoder.encode(str);

// let binaryString = uint8Array.subarray(7, 13);
// let sliceStr = new TextDecoder().decode(binaryString);
// console.log(sliceStr);


// ! blob

// let blob = new Blob(['<html>...</html>'], { type: 'text/html' });
// console.log(blob);


// let hello = new Uint8Array([72, 101, 108, 108, 111]);
// let blob = new Blob([hello, ' ', 'world'], { type: 'text/plain' });

// let fileReader = new FileReader();
// fileReader.readAsArrayBuffer(blob);

// fileReader.onload = function (event) {
// 	let arrayBuffer = fileReader.result;
// 	let str = new TextDecoder().decode(arrayBuffer);
// 	console.log(str);
// }


// let blob = new Blob(['Hello, world!', 'привет как дела'], { type: 'text/plain' });

// link.href = URL.createObjectURL(blob);


// let link = document.createElement('a');
// link.download = 'hello.txt';

// let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

// link.href = URL.createObjectURL(blob);
// link.click();
// URL.revokeObjectURL(link.href);


// ! FileReader

// let link = document.createElement('a');
// link.download = 'hello.txt';

// let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

// let reader = new FileReader();
// reader.readAsDataURL(blob);
// console.log(reader);

// reader.onload = function () {
// 	console.log(reader);
// 	console.log(reader.result);
// 	link.href = reader.result;
// 	link.click();
// };


// ! Canvas

// let img = document.querySelector('img');

// let canvas = document.createElement('canvas');
// canvas.width = img.clientWidth;
// canvas.height = img.clientHeight;

// let context = canvas.getContext('2d');

// context.drawImage(img, 0, 0);

// canvas.toBlob(function (blob) {
// 	let link = document.createElement('a');
// 	link.download = 'example.png';
// 	console.log(blob);

// 	link.href = URL.createObjectURL(blob);
// 	link.click();

// 	URL.revokeObjectURL(link.href);
// }, 'image/png');

// async function download() {
// 	let blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
// 	console.log(blob);

// 	let link = document.createElement('a');

// 	link.download = 'icon.png';
// 	link.href = URL.createObjectURL(blob);
// 	link.click();

// 	URL.revokeObjectURL(link.href);
// };

// download();


// let blob = new Blob(['Hello'], { type: 'text/plain' });
// let fileReader = new FileReader();

// fileReader.readAsArrayBuffer(blob);

// fileReader.onload = function (event) {
// 	let arrayBuffer = fileReader.result;
// 	console.log(arrayBuffer);

// 	let str = new TextDecoder().decode(arrayBuffer);
// 	console.log(str);
// }


// ! File и fileReader

// let input = document.querySelector('.download');
// input.addEventListener('change', showFile);

// function showFile(event) {
// 	let input = event.target;
// 	let file = input.files[0];

// 	console.log(`File name: ${file.name}`);
// 	console.log(`Last modified: ${file.lastModified}`);
// }


// let input = document.querySelector('.download');
// input.addEventListener('change', showImg);

// function showImg(event) {
// 	let file = event.target.files[0];
// 	let img = document.querySelector('.imgUrl');
// 	let reader = new FileReader();

// 	if (file) {
// 		reader.readAsDataURL(file);
// 	}

// 	reader.onloadend = function () {
// 		img.src = reader.result;
// 	}

// }


// let input = document.querySelector('.download');
// input.addEventListener('change', showText);

// function showText(event) {
// 	let file = event.target.files[0];
// 	let reader = new FileReader();

// 	reader.readAsText(file);

// 	reader.onload = function () {
// 		console.log(reader.result);
// 	};

// 	reader.onerror = function () {
// 		console.log(reader.error);
// 	}
// }


// ! Fetch


// async function loadFetch(url) {
// 	let response = await fetch(url);

// 	console.log(response);
// 	let commits = await response.json();
// 	console.log(commits);

// 	alert(commits[0].author.login);
// }

// loadFetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');


// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
// 	.then(response => response.json())
// 	.then(commits => alert(commits[0].author.login));


// ! response.text()

// async function loadFetch(url) {
// 	let response = await fetch(url);

// 	let text = await response.text();

// 	console.log(text);
// 	alert(text.slice(0, 80) + '...');
// }

// loadFetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');


// ! Blob

// async function showImg(url) {
// 	let response = await fetch(url);

// 	let blob = await response.blob();

// 	let img = document.createElement('img');
// 	img.style = 'position:fixed;top:10px;left:10px;width:200px';
// 	document.body.append(img);

// 	img.src = URL.createObjectURL(blob);

// 	setTimeout(() => {
// 		img.remove();
// 		URL.revokeObjectURL(img.src);
// 	}, 3000);

// }

// showImg('../img/600921.jpg');


//! response.headers

// async function showHeaders(url) {
// 	let response = await fetch(url);

// 	console.log(response.headers.get('Content-Type'));

// 	for (const [key, value] of response.headers) {
// 		console.log(`${key}: ${value}`);
// 	}
// }

// showHeaders('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');


// let user = {
// 	name: 'Ruslan',
// 	surname: 'Sidorov'
// };

// async function loadUser(user) {
// 	let response = await fetch('/article/fetch/post/user', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json;charset=utf-8'
// 		},
// 		body: JSON.stringify(user)
// 	});

// 	let result = await response.json();
// 	console.log(result.message);
// }

// loadUser(user);


// ! Отправка излбражения

// let canvasElem = document.querySelector('#canvasElem');
// canvasElem.addEventListener('mousemove', function (e) {
// 	let ctx = canvasElem.getContext('2d');
// 	ctx.lineTo(e.clientX, e.clientY);
// 	ctx.stroke();
// })

// async function submit() {
// 	let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
// 	let response = await fetch('/article/fetch/post/image', {
// 		method: 'POST',
// 		body: blob
// 	})

// 	let result = await response.json();
// 	console.log(result.message);
// }


// function submit() {
// 	canvasElem.toBlob(function (blob) {
// 		fetch('/article/fetch/post/image', {
// 			method: 'POST',
// 			body: blob
// 		})
// 			.then(response => response.json())
// 			.then(result => alert(JSON.stringify(result, null, 2)))
// 	}, 'image/png');
// }


// ! Задание 1

// function getUsers(names) {
// 	let result = [];

// 	Promise.allSettled(names.map(name => fetch(`https://api.github.com/users/${name}`)))
// 		.then(responses => {
// 			responses.forEach(async response => {

// 				if (response.status == 'fulfilled') {
// 					let username = await response.value.json();
// 					if (username.message == 'Not Found') {
// 						result.push(null)
// 					} else {
// 						result.push(username);

// 					}
// 				}
// 			});
// 		})
// 	console.log(result);
// 	return result
// }

// console.log(getUsers(['iliakan', 'remy', 'no.such.users']));


// async function getUsers(names) {
// 	let results = [];

// 	for (const name of names) {
// 		let result = fetch(`https://api.github.com/users/${name}`)
// 			.then(response => {
// 				if (response.ok) {
// 					return response.json();
// 				} else {
// 					return null;
// 				}
// 			},
// 				failResponse => {
// 					return null;
// 				}
// 			);
// 		results.push(result);
// 	}

// 	let result = await Promise.all(results);
// 	return result;
// }


// ! FormData

// let formElem = document.querySelector('#formElem');
// formElem.addEventListener('submit', sendForm);

// async function sendForm(e) {
// 	e.preventDefault();

// 	let response = await fetch('/article/formdata/post/user', {
// 		method: 'POST',
// 		body: new FormData(formElem)
// 	});

// 	let result = await response.json();
// 	alert(result.message);
// }


// let formData = new FormData();
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');

// for (const [name, value] of formData) {
// 	console.log(`${name} = ${value}`);
// }


// let formPicture = document.querySelector('#formPicture');
// formPicture.addEventListener('submit', sendForm);

// async function sendForm(e) {
// 	e.preventDefault();

// 	let response = await fetch('/article/formdata/post/user-avatar', {
// 		method: 'POST',
// 		body: new FormData(formPicture)
// 	});

// 	let result = await response.json();

// 	console.log(result.message);
// }


// let canvasElem = document.querySelector('#canvasElem');
// canvasElem.addEventListener('mousemove', paintOnCanvas);

// function paintOnCanvas(e) {
// 	let ctx = canvasElem.getContext('2d');
// 	ctx.lineTo(e.clientX, e.clientY);
// 	ctx.stroke();
// }

// let butSubmit = document.querySelector('.submit');
// butSubmit.addEventListener('click', sendAvatar);

// async function sendAvatar(e) {
// 	let imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

// 	let formData = new FormData();
// 	formData.append('firstName', 'Ruslan');
// 	formData.append('image', imageBlob, 'image.png');

// 	let response = await fetch('/article/formdata/post/image-form', {
// 		method: 'POST',
// 		body: formData
// 	});

// 	let result = await response.json();
// 	console.log(result.message);
// }


// ! Fetch: ход загрузки

// async function showResponse() {
// 	let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

// 	const reader = response.body.getReader();

// 	const contentLength = +response.headers.get('Content-Length');

// 	let receivedLength = 0;
// 	let chunks = [];
// 	while (true) {
// 		const { done, value } = await reader.read();

// 		if (done) {
// 			break;
// 		}

// 		chunks.push(value);
// 		receivedLength += value.length;

// 		console.log(`Полученно ${receivedLength} из ${contentLength}`);
// 	}

// ! Через строку

// let chunksAll = new Uint8Array(receivedLength);
// let position = 0;
// for (const chunk of chunks) {
// 	chunksAll.set(chunk, position);
// 	position += chunk.length;
// }

// let result = new TextDecoder('utf-8').decode(chunksAll);

// let commits = JSON.parse(result);
// alert(commits[0].author.login);

// ! Через blob

// 	let blob = new Blob(chunks);
// 	const responseStr = new FileReader();
// 	responseStr.readAsText(blob);


// 	responseStr.onload = function () {
// 		const commit = JSON.parse(responseStr.result);
// 		console.log(commit);
// 		alert(commit[0].author.login);
// 	}

// }

// showResponse();


// ! fetch abort

// let controller = new AbortController();
// let signal = controller.signal;

// signal.addEventListener('abort', () => alert('отмена!'));

// controller.abort();
// alert(signal.aborted);


// let controller = new AbortController();
// fetch(url, {
// 	signal: controller.signal
// });
// controller.abort();


// let controller = new AbortController();
// setTimeout(() => {
// 	controller.abort();
// }, 1000);

// try {
// 	let response = await fetch('/article/fetch-abort/demo/hang', {
// 		signal: controller.signal
// 	});
// } catch (error) {
// 	if (err.name == 'AbortError') {
// 		alert('Прервано!')
// 	}else{
// 		throw err;
// 	}
// }


// let controller = new AbortController();
// setTimeout(() => {
// 	controller.abort();
// }, 2);


// async function send() {
// 	let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100', {
// 		signal: controller.signal
// 	});
// 	console.log(response);
// 	return response;
// }

// send()
// 	.then(async response => await response.json())
// 	.then(result => console.log(result[0].author))
// 	.catch(err => {
// 		if (err.name == 'AbortError') {
// 			alert('Прерванно!');
// 		}
// 	});


// let urls = [...];

// let controller = new AbortController();

// let fetchJobs = urls.map(url => fetch(url, {
// 	signal:controller.signal
// }));

// let results = await Promise.all(fetchJobs);


// let controller = new AbortController();
// setTimeout(() => {
// 	controller.abort();
// }, 10);

// async function getUsers(names) {
// 	let jobs = [];

// 	for (let name of names) {
// 		let job = fetch(`https://api.github.com/users/${name}`, {
// 			signal: controller.signal
// 		}).then(
// 			successResponse => {
// 				if (successResponse.status != 200) {
// 					return null;
// 				} else {
// 					return successResponse.json();
// 				}
// 			},
// 			failResponse => {
// 				if (failResponse.name == 'AbortError') {
// 					alert('Прерванно!');
// 				} else {
// 					console.log(failResponse);
// 				}
// 			}
// 		);
// 		jobs.push(job);
// 	}

// 	let results = await Promise.all(jobs);

// 	return results;
// }

// console.log(getUsers(['iliakan', 'remy', 'no.such.users']));


// ! Fetch: запросы на другие сайты

// async function fetchRequest() {
// 	try {
// 		await fetch('http://example.com')
// 	} catch (err) {
// 		alert(err);
// 	}
// }

// fetchRequest();


// function gotWeather({ temperature, humidity }) {
// 	alert(`Температура: ${temperature}, влажность: ${humidity}`);
// }

// let script = document.createElement('script');
// script.src = `http://another.com/weather.json?callback=gotWeather`;
// document.body.append(script);


// async function requestSite() {
// 	let response = await fetch('https://site.com/service.json', {
// 		method: 'PATCH',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'API-Key': 'secret'
// 		}
// 	});

// 	console.log(response);
// 	return response;
// }

// requestSite().then((resp) => console.log(resp));


// ! Fetch API

// let promise = fetch(url, {
// 	method: 'GET', // POST, PUT, DELETE, etc.
// 	headers: {
// обысчно ставиться автоматически, в зависимости от тела запроса
// 		'Content-Type': 'text/plain;charset=UTF-8'
// 	},
// 	body: undefined, // string, FormData, Blob, BufferSource, URLSearchParams
// 	referrer: 'about:client', // или '' если не хотим посылать Referrer
// 	referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, origin, same-origin
// 	mode: 'cors', // same-origin, no-cors
// 	credentials: 'same-origin', // omit, includ
// 	cache: 'default', // no-store, reload, no-cache, force-cache или only-if-cached
// 	redirect: 'follow', // manual, error
// 	integrity: '', // контрольная сумма
// 	keepalive: false, //true
// 	signal: undefined, //AbortController
// 	window: window //null
// })


// ! Обьект URL

// let url1 = new URL('https://javascript.info/profile/admin');
// let url2 = new URL('/profile/admin', 'https://javascript.info');

// console.log(url1);
// console.log(url2);
// console.log(url1.toString());
// console.log(url2.toString());


// let url = new URL('http://javascript.info/profile/admin/reh');
// let newUrl = new URL('tester/re', url);
// let newUrl1 = new URL('/tester/re', url);

// console.log(newUrl.toString());
// console.log(newUrl1.toString());


// let url = new URL('http://javascript.info/url');

// console.log(url.protocol);
// console.log(url.host);
// console.log(url.pathname);
// console.log(url.href);


// let url = new URL('https://google.com/search');
// url.searchParams.set('q', 'test me!');

// console.log(url.href);

// url.searchParams.set('tbs', 'qdr:y');

// console.log(url.href);

// for (const [name, value] of url.searchParams) {
// 	console.log(`${name} = ${value}`);
// }
// console.log(url);
// console.log(url.search);


// let url = new URL('https://ru.wikipedia.org/wiki/Тест');

// url.searchParams.set('key', 'ъ');
// console.log(url.href);


// let url = encodeURI('https://site.com/привет');
// console.log(url);

// let music = encodeURIComponent('Rock&Roll');
// let url1 = `https://google.com/search?q=${music}`;
// console.log(url1);

// let music1 = encodeURI('Rock&Roll');
// let url2 = `https://google.com/search?q=${music1}`;
// console.log(url2);


// let url = 'http://[2607:f8b0:4005:802::1007]/';

// console.log(encodeURI(url));
// console.log(new URL(url));
// console.log(new URL(url).href);


// ! XMLHttpRequest

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/remy');
// xhr.send();

// xhr.addEventListener('load', getResponse);
// xhr.addEventListener('error', errorResponse);
// xhr.addEventListener('progress', progressResponse);

// function getResponse() {
// 	if (xhr.status != 200) {
// 		console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
// 	} else {
// 		console.log(`Готово, получили ${xhr.response.length} байт`);
// 	}
// }

// function errorResponse() {
// 	alert('Запрос не удался!');
// }

// function progressResponse(event) {
// 	if (event.lengthComputable) {
// 		console.log(`Получено ${event.loaded} из ${event.total} байт`);
// 	} else {
// 		console.log(`Получено ${event.loaded} байт`);
// 	}
// }


// let url = new URL('https://google.com/search');
// url.searchParams.set('q', 'test me!');

// let xhr = new XMLHttpRequest();
// xhr.open('GET', url);

// xhr.send();
// xhr.addEventListener('load', getResponse);
// xhr.addEventListener('error', errorResponse);
// xhr.addEventListener('progress', progressResponse);

// function getResponse() {
// 	if (xhr.status != 200) {
// 		console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
// 	} else {
// 		console.log(`Готово, получили ${xhr.response.length} байт`);
// 	}
// }

// function errorResponse() {
// 	alert('Запрос не удался!');
// }

// function progressResponse(event) {
// 	if (event.lengthComputable) {
// 		console.log(`Получено ${event.loaded} из ${event.total} байт`);
// 	} else {
// 		console.log(`Получено ${event.loaded} байт`);
// 	}
// }


// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/remy');
// xhr.responseType = 'json';
// xhr.send();

// xhr.addEventListener('load', getResponse);
// xhr.addEventListener('error', errorResponse);
// xhr.addEventListener('progress', progressResponse);

// function getResponse() {
// 	if (xhr.status != 200) {
// 		console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);

// 	} else {
// 		let responseObj = xhr.response;
// 		console.log(`Готово, получили пользователя ${responseObj.login}`);

// 		console.log(responseObj);
// 	}
// }

// function errorResponse() {
// 	alert('Запрос не удался!');
// }

// function progressResponse(event) {
// 	if (event.lengthComputable) {
// 		console.log(`Получено ${event.loaded} из ${event.total} байт`);
// 	} else {
// 		console.log(`Получено ${event.loaded} байт`);
// 	}
// }


// ! Синхронные запросы

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/remy', false);
// // xhr.responseType = 'json';  //! В синхронных запросах нельза изменить responseType

// try {
// 	xhr.send();

// 	if (xhr.status != 200) {
// 		alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
// 	} else {
// 		console.log(xhr.response);
// 	}
// } catch (error) {
// 	alert(`Запрос не удался, код ошибки ${error}`);
// }


// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/remy');
// xhr.responseType = 'json';
// xhr.send();

// xhr.addEventListener('load', getResponse);
// function getResponse() {
// 	if (xhr.status != 200) {
// 		console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);

// 	} else {
// 		let responseObj = xhr.response;

// 		let headers = xhr.getAllResponseHeaders()
// 			.split('\r\n')
// 			.reduce((result, current) => {
// 				let [name, value] = current.split(': ');
// 				console.log(`${name}: ${value}`);
// 				result[name] = value;
// 				return result;
// 			}, {});

// 		console.log(`Готово, получили пользователя ${responseObj.login}`);
// 		console.log(headers);
// 		console.log(responseObj);
// 	}
// }


// let form = document.querySelector('#formElem');

// let formData = new FormData(form);
// formData.append('middle', 'Sergeevich');

// let xhr = new XMLHttpRequest();
// xhr.open('POST', '/article/xmlhttprequest/post/user');
// xhr.send(formData);

// xhr.onload = () => console.log(xhr.response);


// let xhr = new XMLHttpRequest();

// let json = JSON.stringify({
// 	name: 'Ruslan',
// 	surname: 'Sidorov'
// });

// xhr.open('POST', '/submit');
// xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

// xhr.send(json);


// ! Отправка данных

// let xhr = new XMLHttpRequest();

// xhr.upload.onprogress = function (event) {
// 	console.log(`Отправлено: ${event.loaded} из ${event.total} байт`);
// };

// xhr.upload.onload = function (event) {
// 	console.log(`Данные успешно отправленны`);
// };

// xhr.upload.onerror = function (event) {
// 	console.log(`Произошла ошибка во время отправки: ${xhr.status}`);
// };


// let uploadInp = document.querySelector('.download');
// uploadInp.addEventListener('change', upload);

// function upload(event) {
// 	let file = event.target.files[0];

// 	let xhr = new XMLHttpRequest();

// 	xhr.upload.onprogress = function (event) {
// 		console.log(`Отправлено ${event.loaded} из ${event.total}`);
// 	};

// 	xhr.onloadend = function () {
// 		if (xhr.status == 200) {
// 			console.log('Успех');
// 		} else {
// 			console.log('Ошибка' + this.status);
// 		}
// 	};

// 	xhr.open('POST', 'https://learn.javascript.ru/article/xmlhttprequest/post/upload');
// 	xhr.send(file);
// }


// let xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.open('POST', 'http://anywhere.com/request');


// ! Возобнавлемая загрузка файлов

// let butStop = document.querySelector('.but-stop');
// butStop.addEventListener('click', uploader.stop);

// class Uploader {
// 	constructor({ file, onProgress }) {
// 		this.file = file;
// 		this.onProgress = onProgress;
// 		this.fileId = file.name + '-' + file.size + '-' + +file.lastModifiedDate;
// 	}

// 	async getUploadedBytes() {
// 		let response = await fetch('status', {
// 			headers: {
// 				'X-File-Id': this.fileId
// 			}
// 		});

// 		if (response.status != 200) {
// 			throw new Error("Can't get uploaded bytes: " + response.statusText);
// 		}

// 		let text = await response.text();

// 		return +text;
// 	}

// 	async upload() {
// 		this.startByte = await this.getUploadedBytes();

// 		let xhr = this.xhr = new XMLHttpRequest();
// 		xhr.open('POST', 'upload', true);

// 		xhr.setRequestHeader('X-File-Id', this.fileId);

// 		xhr.upload.onprogress = (e) => {
// 			this.onProgress(this.startByte + e.loaded, this.startByte + e.total);
// 		};

// 		console.log('send the file, starting from', this.startByte);
// 		xhr.send(this.file.slice(this.startByte));

// 		return await new Promise((resolve, reject) => {
// 			xhr.onload = xhr.onerror = () => {
// 				console.log('upload end status: ' + xhr.status + ' text: ' + xhr.statusText);

// 				if (xhr.status == 200) {
// 					resolve(true);
// 				} else {
// 					reject(new Error('Upload failed: ' + xhr.statusText));
// 				}
// 			};
// 			xhr.onabort = () => resolve(false);
// 		});
// 	}

// 	stop() {
// 		if (this.xhr) {
// 			this.xhr.abort();
// 		}
// 	}
// }


// ! Длинные опросы

// ! Отправка сообщений, простой POST

// function PublishForm(form, url) {

// 	function sendMessage(message) {
// 		fetch(url, {
// 			method: 'POST',
// 			body: message
// 		});
// 	}

// 	form.onsubmite = function () {
// 		let message = form.message.value;
// 		if (message) {
// 			form.message.value = '';
// 			sendMessage(message);
// 		}
// 		return false;
// 	};
// }


// ! Получение сообщений путём длинного опроса

// function SubscribePane(elem, url) {

// 	function showMessage(message) {
// 		let messageElem = document.createElement('div');
// 		messageElem.append(message);
// 		elem.append(messageElem);
// 	}

// 	async function subscribe() {
// 		let response = await fetch(url);

// 		if (response.status == 502) {
// 			await subscribe();
// 		} else if (response.status != 200) {
// 			showMessage(response.statusText);

// 			await new Promise(resolve => setTimeout(resolve, 1000));
// 			await subscribe();
// 		} else {
// 			let message = await response.text();
// 			showMessage(message);
// 			await subscribe();
// 		}
// 	}


// 	subscribe();
// }


// ! WebSocket

// let socket = new WebSocket('ws://localhost:8080/');

// socket.onopen = function (e) {
// 	alert('[open] Соединение установлено');
// 	alert('Отправляем данные на сервер');
// 	socket.send('Меня зовут Руслан');
// };

// socket.onmessage = function (event) {
// 	alert(`[message] Данные получены с сервера: ${event.data}`);
// };

// socket.onclose = function (event) {
// 	if (event.wasClean) {
// 		alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
// 	} else {
// 		alert('[close] Соединение прервано');
// 	}
// };

// socket.onerror = function (error) {
// 	alert(`[error] ${error.message}`);
// };


// ! Пример чата

// let socket = new WebSocket('ws://localhost:8080/ws');
// console.log('qtrqh');

// document.forms.publish.onsubmit = function () {
// 	let outgoingMessage = this.message.value;
// 	console.log('outgoingMessage');

// 	socket.send(outgoingMessage);
// 	this.message.value = '';
// 	return false;
// };

// socket.addEventListener('message', function (event) {
// 	let message = event.data;

// 	let messageElem = document.createElement('div');
// 	messageElem.textContent = message;
// 	console.log(event.data);
// 	document.querySelector('.messages').prepend(messageElem);
// })


// ! Server Send Events

// let eventSource = new EventSource('https://anouther-site.com/events');

// eventSource.addEventListener('message', readSend);

// function readSend(event) {
// 	console.log('Новое сообщение', event.data);
// }


// let eventSource = new EventSource('https://anouther-site.com/events', {
// 	withCredentials: true
// });

// eventSource.addEventListener('join', event => {
// 	console.log((`${event.data} зашёл`));
// });

// eventSource.addEventListener('message', event => {
// 	console.log(`Сказал ${event.data}`);
// });

// eventSource.addEventListener('leave', event => {
// 	console.log(`${event.data} вышел`);
// })

// eventSource.close();


// ! Пример ServerSendEvents  

// let eventSource;
// const butStart = document.querySelector('.start');
// const butStop = document.querySelector('.stop');
// const logElem = document.querySelector('.logElem');

// butStart.addEventListener('click', start);
// butStop.addEventListener('click', stop);

// function start() {
// 	if (!window.EventSource) {
// 		alert('Ваш браузер не поддерживает EventSourse.');
// 		return;
// 	}

// 	eventSource = new EventSource('/digits');

// 	eventSource.addEventListener('open', openStream);
// 	function openStream(e) {
// 		log('Событие: open');
// 	}

// 	eventSource.addEventListener('error', errorStream);
// 	function errorStream(e) {
// 		log('Событие: error');

// 		if (this.readyState == EventSource.CONNECTING) {
// 			log(`Переподключение (readyState=${this.readyState})...`);
// 		} else {
// 			log('Произошла ошибка.')
// 		}
// 	};

// 	eventSource.addEventListener('bye', byeStream);
// 	function byeStream(e) {
// 		log('Событие: bye, данные: ' + e.data);
// 	}

// 	eventSource.addEventListener('message', messageStream);
// 	function messageStream(e) {
// 		log('Событие: message, данные: ' + e.data)
// 	}
// }

// function stop() {
// 	eventSource.close();
// 	log('Соединение закрыто.');
// }

// function log(msg) {
// 	let str = document.createElement('div');
// 	str.innerHTML = msg;
// 	logElem.prepend(str);
// }


// ! Генераторы

// function* generateSequence() {
// 	yield 1;
// 	yield 2;
// 	return 3;
// }

// let generator = generateSequence();
// console.log(generator);

// let one = generator.next();
// alert(JSON.stringify(one));
// console.log(one);

// const two = generator.next();
// console.log(two);

// const three = generator.next();
// console.log(three);


// for (const value of generator) {
// 	console.log(value);
// }


// function* generateSequence() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// let generator = generateSequence();

// for (const value of generator) {
// 	console.log(value);
// }

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// console.log(...generator);

// let sequence = [0, ...generateSequence()];
// console.log(sequence);


// ! Использование генераторов для перебираемых обьектов

// let range = {
// 	from: 1,
// 	to: 5,

// 	[Symbol.iterator]() {
// 		return {
// 			current: this.from,
// 			last: this.to,

// 			next() {
// 				if (this.current <= this.last) {
// 					return { done: false, value: this.current++ };
// 				} else {
// 					return { done: true };
// 				}
// 			}
// 		};
// 	}
// };

// alert([...range]);
// console.log(...range);


// let range = {
// 	from: 1,
// 	to: 5,

// 	*[Symbol.iterator]() {
// 		for (let value = this.from; value <= this.to; value++) {
// 			yield value;
// 		}
// 	}
// };

// alert([...range]);
// console.log(...range);
// for (const value of range) {
// 	console.log(value);
// }


// ! Композиция генераторов

// function* generateSequence(start, end) {
// 	for (let i = start; i <= end; i++) yield i;
// }

// function* generatePasswordCodes() {
// 	yield* generateSequence(48, 57);

// 	yield* generateSequence(65, 90);

// 	yield* generateSequence(97, 122);
// }

// let str = '';

// for (const code of generatePasswordCodes()) {
// 	str += String.fromCharCode(code);
// }

// console.log(str);



// function* generatePasswordCodes() {
// 	for (let i = 48; i <= 57; i++) yield i;

// 	for (let i = 65; i <= 90; i++) yield i;

// 	for (let i = 97; i <= 122; i++) yield i;

// }

// let str = '';

// for (const code of generatePasswordCodes()) {
// 	str += String.fromCharCode(code);
// }

// console.log(str);


// ! yield - дорога в обе стороны

// function* gen() {
// 	let result = yield '2 + 2 = ?';

// 	alert(result);
// }

// let generator = gen();

// let question = generator.next().value;
// console.log(question);
// generator.next(4);


// function* gen() {
// 	let ask1 = yield '2 + 2 = ?';
// 	alert(`ask1 = ${ask1}`);

// 	let ask2 = yield '3 * 3 = ?';
// 	alert(`ask2 = ${ask2}`);
// }

// let generator = gen();

// alert(generator.next().value);
// alert(generator.next(4).value);
// alert(generator.next(9).done);


// ! generator.throw

// function* gen() {
// 	try {
// 		let result = yield '2 + 2 = ?';

// 		alert('Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение');
// 	} catch (error) {
// 		alert(error);
// 	}
// }

// let generator = gen();

// let question = generator.next().value;
// console.log(question);
// generator.throw(new Error('Ответ не найден в моей базе данных'));


// function* generate() {
// 	let result = yield '2 + 2 = ?';
// }

// let generator = generate();

// let question = generator.next().value;
// console.log(question);

// try {
// 	generator.throw(new Error('Ответ не найден в моей базе данных'));
// } catch (error) {
// 	alert(error);
// }


// ! Задание 1

// function* pseudoRandom(seed) {
// 	let next = seed * 16807 % 2147483647;
// 	yield next;
// 	let next1 = next * 16807 % 2147483647;
// 	yield next1;
// 	let next2 = next1 * 16807 % 2147483647;
// 	yield next2;
// }

// let generator = pseudoRandom(1);

// alert(generator.next().value);
// alert(generator.next().value);
// alert(generator.next().value);


// ! Прокачанное решение для бесконечной генерации

// function* pseudoRandom(seed) {
// 	let previous;
// 	function f(num) {
// 		return num * 16807 % 2147483647;
// 	}

// 	while (true) {
// 		if (previous) {
// 			yield previous = f(previous);
// 		} else {
// 			yield previous = f(seed);
// 		}
// 	}
// }


// ? Проверка для себя в 1000 итераций

// let gen = pseudoRandom(2);

// let count = 0;
// let arr = [];

// for (const value of gen) {
// 	arr.push(value);
// 	count++;
// 	if (count == 1000) {
// 		break;
// 	}
// }

// console.log(arr);


// ! Асинхронные итераторы и генераторы
// * Асинхронные итераторы

// let range = {
// 	from: 1,
// 	to: 5,

// 	[Symbol.asyncIterator]() {
// 		return {
// 			current: this.from,
// 			last: this.to,

// 			async next() {
// 				await new Promise(resolve => setTimeout(resolve, 1000));

// 				if (this.current <= this.last) {
// 					return {
// 						done: false,
// 						value: this.current++
// 					};
// 				} else {
// 					return { done: true };
// 				}
// 			}
// 		};
// 	}
// };

// (async () => {
// 	for await (const value of range) {
// 		alert(value);
// 	}
// })();


// * Асинхронные генероторы

// async function* generateSequence(start, end) {
// 	for (let i = start; i <= end; i++) {
// 		await new Promise(resolve => setTimeout(resolve, 1000));

// 		yield i;
// 	}
// }

// (async () => {

// 	let generator = generateSequence(1, 5);
// 	for await (const value of generator) {
// 		console.log(value);
// 	}
// })();


// * Асинхронно перебираемый обьект

// let range = {
// 	from: 1,
// 	to: 5,

// 	async *[Symbol.asyncIterator]() { // * то же что и [Symbol.asyncIterator]: function*(){} 
// 		for (let value = this.from; value <= this.to; value++) {

// 			await new Promise(resolve => setTimeout(resolve, 1000));

// 			yield value;
// 		}
// 	}
// };

// (async () => {
// 	for await (const value of range) {
// 		console.log(value);
// 	}
// })();


// * Реальный пример

// async function* fetchCommits(repo) {
// 	let url = `https://api.github.com/repos/${repo}/commits`;

// 	while (url) {
// 		const response = await fetch(url, {
// 			headers: {
// 				'User-Agent': 'Our script'
// 			}
// 		});

// 		const body = await response.json();
// 		console.log(response.headers.get('Link'));

// 		let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
// 		console.log(nextPage);
// 		nextPage = nextPage && nextPage[1];

// 		url = nextPage;

// 		for (const commit of body) {
// 			yield commit;
// 		}
// 	}
// }

// (async () => {
// 	let count = 0;

// 	for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {

// 		console.log(commit.author.login);

// 		if (++count == 100) {
// 			break;
// 		}
// 	}

// })();


// ! Proxy and Reflect

// let worker = {
// 	someMethod() {
// 		return 1;
// 	},

// 	slow(x) {
// 		console.log('Called with ' + x);
// 		return x * this.someMethod();
// 	}
// }

// function cachingDecorator(func) {
// 	let cache = new Map();
// 	return function (x) {
// 		if (cache.has(x)) {
// 			return cache.get(x);
// 		}

// 		let result = func.call(this, x);
// 		console.log(this);

// 		cache.set(x, result);

// 		return result;
// 	}
// }
// console.log(worker.slow);

// worker.slow = cachingDecorator(worker.slow);
// console.log(worker.slow);

// console.log(worker.slow(2));


// function delay(f, ms) {
// 	return function () {
// 		setTimeout(() => {
// 			f.apply(this, arguments);
// 		}, ms);
// 	}
// }

// let f1000 = delay(alert, 1000);

// f1000('test');


// ! get traps

// let numbers = [0, 1, 2];

// numbers = new Proxy(numbers, {
// 	get(tar, property) {
// 		if (property in tar) {
// 			return tar[property]
// 		} else {
// 			return 0;
// 		}
// 	}
// });

// console.log(numbers[1]);
// console.log(numbers[123]);


// let dictionary = {
// 	'hello': 'hola',
// 	'bye': 'adios'
// };

// dictionary = new Proxy(dictionary, {
// 	get(target, phrase) {
// 		if (phrase in target) {
// 			return target[phrase];
// 		} else {
// 			return phrase;
// 		}
// 	}
// });

// console.log(dictionary['hello']);
// console.log(dictionary['fdaf']);


// ! Set traps

// let numbers = [];

// numbers = new Proxy(numbers, {
// 	set(target, prop, value) {
// 		if (typeof value == 'number') {
// 			target[prop] = value;
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// });

// try {
// 	numbers.push(1);
// 	numbers.push(123);
// 	numbers.push('test');
// } catch (error) {
// 	console.log(error);
// }

// for (const iterator of numbers) {
// 	console.log(iterator);
// }


// ! ownKeys


// let user = {
// 	name: 'Ruslan',
// 	age: 29,
// 	_password: 'react'
// };

// user = new Proxy(user, {
// 	ownKeys(target) {
// 		return Object.keys(target).filter(key => !key.startsWith('_'));
// 	}
// });

// for (const prop in user) {
// 	console.log(prop);
// }

// console.log(user._password);


// let user = {};

// user = new Proxy(user, {
// 	ownKeys(target) {
// 		return ['1', '2', '3'];
// 	}
// });

// console.log(Object.keys(user));


// let user = {};
// user = new Proxy(user, {
// 	ownKeys(target) {
// 		return ['a', 'b', 'c'];
// 	},

// 	getOwnPropertyDescriptor(target, prop) {
// 		return {
// 			enumerable: true,
// 			configurable: true
// 		};
// 	}
// });

// console.log(Object.keys(user));


// ! Защищённые свойства с ловушкой 'deleteProperty' и другими

// let user = {
// 	name: 'Ruslan',
// 	age: 29,
// 	_password: 'react',

// 	checkPassword(value) {
// 		return value === this._password;
// 	}
// };

// user = new Proxy(user, {
// 	get(target, prop) {
// 		if (prop.startsWith('_')) {
// 			throw new Error('Отказанно в доступе!');
// 		} else {
// 			let value = target[prop];
// 			return (typeof value === 'function') ? value.bind(target) : value;
// 		}
// 	},

// 	set(target, prop, value) {
// 		if (prop.startsWith('_')) {
// 			throw new Error('Отказанно в доступе!');
// 		} else {
// 			if (typeof value === 'function') {
// 				throw new Error('Нет права доступа для созания нового метода!');
// 			} else {
// 				target[prop] = value;
// 				return true;
// 			}
// 		}
// 	},

// 	deleteProperty(target, prop) {
// 		if (prop.startsWith('_')) {
// 			throw new Error('Отказанно в доступе!');
// 		} else {
// 			delete target[prop];
// 			return true;
// 		}
// 	},

// 	ownKeys(target) {
// 		return Object.keys(target).filter(key => !key.startsWith('_'));
// 	}
// });


// try {
// 	console.log(user._password);
// } catch (error) {
// 	console.log(error);
// }

// try {
// 	user._password = 'test';
// } catch (error) {
// 	console.log(error);
// }

// try {
// 	delete user._password;
// } catch (error) {
// 	console.log(error);
// }

// for (const key in user) {
// 	console.log(`${key}: ${user[key]}`);
// }

// console.log(user.checkPassword('react'));

// // * Добавил доступ при помощи функции

// try {
// 	user.log = function () {
// 		console.log(this._password);
// 	}

// 	user.log();
// } catch (error) {
// 	console.log(error);
// }


// ! В диапозоне с ловушкой has

// let range = {
// 	start: 1,
// 	end: 10,

// 	*[Symbol.iterator]() {
// 		for (let value = this.start; value <= this.end; value++) {
// 			yield value;
// 		}
// 	}
// };

// for (const key in range) {
// 	console.log(key, range[key]);
// }
// for (const num of range) {
// 	console.log(num);
// }

// range = new Proxy(range, {
// 	has(target, prop) {
// 		return prop >= target.start && prop <= target.end
// 	}
// });

// for (const key in range) {
// 	console.log(key, range[key]);
// }
// for (const num of range) {
// 	console.log(num);
// }

// console.log(3 in range);
// console.log(40 in range);


// ! Оборачиваем функции: 'apply'

// function delay(f, ms) {
// 	return function () {
// 		setTimeout(() => f.apply(this, arguments), ms);
// 	};
// }

// function sayHi(user) {
// 	console.log(`Hello ${user}`);
// }

// console.log(sayHi.length);

// sayHi = delay(sayHi, 1000);

// console.log(sayHi.length);

// sayHi('Ruslan');


// function delay(f, ms) {
// 	return new Proxy(f, {
// 		apply(target, thisArg, args) {
// 			setTimeout(() => {
// 				target.apply(thisArg, args);
// 			}, ms);
// 		}
// 	});
// }

// function sayHi(user) {
// 	console.log(`Hello ${user}!`);
// }

// sayHi = delay(sayHi, 1000);

// console.log(sayHi.length);
// sayHi('Ruslan');


// ! Reflect

// let user = {};

// Reflect.set(user, 'name', 'Ruslan');

// console.log(user);


// let user = {
// 	name: 'Ruslan'
// };

// user = new Proxy(user, {
// 	get(target, prop, receiver) {
// 		console.log(`GET ${prop}`);
// 		return Reflect.get(target, prop, receiver);
// 	},

// 	set(target, prop, value, receiver) {
// 		console.log(`SET ${prop} = ${value}`);
// 		return Reflect.set(target, prop, value, receiver);
// 	}
// });

// let name = user.name;
// user.name = 'Peter';


// * Прокси для геттера

// let user = {
// 	_name: 'guest',

// 	get name() {
// 		return this._name;
// 	}
// };

// let userProxy = new Proxy(user, {
// 	get(target, prop, receiver) {
// 		return target[prop];
// 	}
// });

// console.log(userProxy.name);

// let admin = {
// 	__proto__: userProxy,
// 	_name: 'Admin'
// };

// console.log(admin.name);


// * Правильный вариант


// let user = {
// 	_name: 'guest',

// 	get name() {
// 		return this._name;
// 	}
// };

// let userProxy = new Proxy(user, {
// 	get(target, prop, receiver) {
// 		// return Reflect.get(target, prop, receiver);
// 		return Reflect.get(...arguments);
// 	}
// });

// console.log(userProxy.name);

// let admin = {
// 	__proto__: userProxy,
// 	_name: 'Admin'
// };

// console.log(admin.name);


// ! Ограничения прокси

// let map = new Map();

// let proxy = new Proxy(map, {});

// proxy.set('test', 1);

// * Так работает

// let map = new Map();

// let proxy = new Proxy(map, {
// 	get(target, prop, receiver) {
// 		let value = Reflect.get(...arguments);
// 		return typeof value == 'function' ? value.bind(target) : value;
// 	}
// });

// proxy.set('test', 123);
// console.log(proxy.get('test'));


// ! Приватные поля

// class User {
// 	constructor(name) {
// 		this.#name = name;
// 	}

// 	#user = 'Guest';

// 	getName() {
// 		return this.#name;
// 	}
// }

// let user = new User('Ruslan');

// user = new Proxy(user, {});

// console.log(user.getName);

// * Правильное решение


// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	#user = 'Guest';

// 	getName() {
// 		return this.#user;
// 	}
// }

// let user = new User('Ruslan');
// console.log(user.getName());

// user = new Proxy(user, {
// 	get(target, prop, receiver) {
// 		let value = Reflect.get(...arguments);
// 		return typeof value == 'function' ? value.bind(target) : value;
// 	}
// });

// console.log(user.getName());


// ! Прокси не оригинальный обьект

// let allUsers = new Set();

// class User {
// 	constructor(name) {
// 		this.name = name,
// 			allUsers.add(this);
// 	}
// }

// let user = new User('Ruslan');

// console.log(allUsers.has(user));

// user = new Proxy(user, {});

// console.log(allUsers.has(user));


// ! Отключаемый прокси

// let object = {
// 	data: 'Важные данные'
// };

// let { proxy, revoke } = Proxy.revocable(object, {});

// console.log(proxy.data);

// revoke();

// console.log(proxy.data);


// let revokes = new WeakMap();

// let object = {
// 	data: 'Важные данные'
// };

// let { proxy, revoke } = Proxy.revocable(object, {});
// revokes.set(proxy, revoke);

// console.log(proxy.data);

// revoke = revokes.get(proxy);
// revoke();

// console.log(proxy.data);


// ! Задание 1

// let user = {
// 	name: 'Ruslan'
// };

// function wrap(target) {
// 	return new Proxy(target, {
// 		get(target, prop, receiver) {
// 			if (prop in target) {
// 				return Reflect.get(...arguments);
// 			} else {
// 				return 'Ошибка: такого свойства не существует';
// 			}
// 		}
// 	})
// }

// user = wrap(user);

// console.log(user.name);
// console.log(user.age);


// ! Решение сайта


// let user = {
// 	name: 'Ruslan'
// };

// function wrap(target) {
// 	return new Proxy(target, {
// 		get(target, prop, receiver) {
// 			if (prop in target) {
// 				return Reflect.get(...arguments);
// 			} else {
// 				throw new ReferenceError(`Свойство не существует: '${prop}'`);
// 			}
// 		}
// 	})
// }

// user = wrap(user);

// console.log(user.name);
// console.log(user.age);


// ! Задание 2

// let array = [1, 2, 3, 4, 5];

// array = new Proxy(array, {
// 	get(target, prop, receiver) {
// 		if (prop < 0) {
// 			// console.log(prop);
// 			prop = +prop + target.length;
// 			// console.log(prop);
// 			return Reflect.get(target, prop, receiver);
// 		} else {
// 			return Reflect.get(...arguments);
// 		}
// 	}
// });

// console.log(array[-1]);
// console.log(array[-2]);


// ! Задание 3

// function makeObservable(target) {
// 	let result;

// 	target.observe = function (f) {
// 		result = f;
// 	}

// 	return new Proxy(target, {
// 		set(target, prop, value, receiver) {

// 			result(prop, value);
// 			Reflect.set(target, prop, value, receiver);
// 			return true;

// 		},

// 	})
// }

// let user = {};

// user = makeObservable(user);

// user.observe((key, value) => {
// 	alert(`SET ${key}=${value}`);
// });

// user.name = 'Ruslan';
// console.log(user.name);


// ! Еще решение


// function makeObservable(target) {
// 	let hundlers = Symbol('hundlers');

// 	target[hundlers] = [];

// 	target.observe = function (f) {
// 		target[hundlers].push(f);
// 	}

// 	return new Proxy(target, {
// 		set(target, prop, value, receiver) {

// 			let success = Reflect.set(target, prop, value, receiver);
// 			if (success) {
// 				target[hundlers].forEach(f => {
// 					f(prop, value);
// 				});
// 			}
// 			return true;
// 		},
// 	})
// }

// let user = {};

// user = makeObservable(user);

// user.observe((key, value) => {
// 	alert(`SET ${key}=${value}`);
// });

// user.name = 'Ruslan';
// console.log(user.name);
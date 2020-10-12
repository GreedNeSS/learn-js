// let message = 'Hello',
// 	user = 'Ruslan',
// 	age = 29;

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


let phrase = "Hello";

if (true) {
	let user = "John";

	function sayHi() {
		alert(`${phrase}, ${user}`);
	}
}

sayHi();
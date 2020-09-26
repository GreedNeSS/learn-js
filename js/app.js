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


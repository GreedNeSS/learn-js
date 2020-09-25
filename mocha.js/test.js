// describe("pow", function () {

// 	it("возводит в степень n", function () {
// 		assert.equal(pow(5, 3), 125);
// 		assert.equal(pow(3, 4), 81);
// 		assert.equal(pow(2, 3), 8);
// 	});

// 	it("возводит в степень n", function () {
// 		assert.equal(pow(2, 2), 4);
// 		assert.equal(pow(5, 2), 25);
// 		assert.equal(pow(20, 3), 8000);
// 	});

// });
function pow(x, n) {
	let result = 1;

	if (n < 0) {
		return NaN;
	}

	if (Math.round(n) != n) {
		return NaN;
	}

	for (let index = 1; index <= n; index++) {
		result *= x;
	}

	return result;

	// return x**n;
}

describe("pow", function () {

	// describe('Возводит x в степень 3', function () {

	// before(() => console.log('Тестирование началось - перед тестами'));
	// after(() => console.log('Тестирование закончилось - после тестов'));

	// beforeEach(() => console.log('Перед тестом - начинаем выполнять тест'));
	// afterEach(() => console.log('После теста - заканчиваем выполнение теста'));

	// 	let numberOfChecks = +prompt('Введите количество проверок', '5');

	// 	function makeTest(x) {
	// 		let expected = x * x * x;
	// 		it(`${x} возводим в 3 степень и получаем результат ${expected}`, function () {
	// 			assert.equal(pow(x, 3), expected)
	// 		});
	// 	}

	// 	for (let i = 1; i <= numberOfChecks; i++) {
	// 		makeTest(i);
	// 	}
	// });

	// describe('Для отрицательных n возвращиет NaN', function () {

	// 	it('Для отрицательных n возвращиет NaN', function () {
	// 		assert.isNaN(pow(2, -23));
	// 	})
	// });

	// describe('Для дробных n возвращиет NaN', function () {

	// 	it('Для дробных n возвращиет NaN', function () {
	// 		assert.isNaN(pow(2, 3.76));
	// 	})
	// });

	describe('Возводим x в степень n', function () {
		let x = 3;
		let numberOfChecksN = +prompt('Введите количество n значений', '')

		function makeTest(n) {

			let result = x ** n;

			it(`Возводим ${x} в степень ${n} и получаем ${result}`, function () {

				assert.equal(pow(x, n), result);

			})
		}
		for (let n = 1; n <= numberOfChecksN; n++) {
			makeTest(n);
		}
	});

});

console.log(pow(5, 25));
console.log(5 ** 25);

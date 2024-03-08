let result = ( 5 === 5) ? alert(1) : alert(2);// поднобно if, 5 = 5 знаит сработает alert c 1
//&& - и, выводит первое ложное || - ввыводи первое верное ?? - выводит перове определённое значение
for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
  
    alert(i); // 1, затем 3, 5, 7, 9
  }
  let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
  }
  
  let age = prompt('Сколько вам лет?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "Вы согласны." );
  }
  
  function showCancel() {
    alert( "Вы отменили выполнение." );
  }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
  ask("Вы согласны?", showOk, showCancel);

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

  let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  () => alert('Привет!') :
  () => alert("Здравствуйте!");

welcome();

describe("pow", function() {

  it("возводит в степень n", function() {
    assert.equal(pow(2, 3), 8);
  });

});
Спецификация состоит из трёх основных блоков:

describe("заголовок", function() { ... })
Какую функциональность мы описываем. В нашем случае мы описываем функцию pow. Используется для группировки рабочих лошадок – блоков it.

it("описание", function() { ... })
В первом аргументе блока it мы человеческим языком описываем конкретный способ использования функции, а во втором – пишем функцию, которая тестирует данный случай.

assert.equal(value1, value2)
Код внутри блока it, если функция работает верно, должен выполняться без ошибок.

Функции вида assert.* используются для проверки того, что функция pow работает так, как мы ожидаем. В этом примере мы используем одну из них – assert.equal, которая сравнивает переданные значения и выбрасывает ошибку, если они не равны друг другу. Существуют и другие типы сравнений и проверок, которые мы добавим позже.

Спецификация может быть запущена, и при эт

function pow(x, n) {
  let res = x ** n;

  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  
  return res;
}

describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} в степени 3 будет ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

  it("для отрицательных n возвращает NaN", function() {
      assert.isNaN(pow(2, -1));
    });
  
    it("для дробных n возвращает NaN", function() {
      assert.isNaN(pow(2, 1.5));
    });

});
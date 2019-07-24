const getFunctionTasks = () => {
  const colorCons = '\x1b[33m%s\x1b[0m';
  console.log(colorCons, '**********FUNCTION***********');

  // Task 1.
  // RU: Создайте функцию conc, которая должна конкатенировать значения
  //     двух параметров a и b и возвращать строку.
  //     Используйте Function Declaration Statement (FDS).
  //     Вызовите функцию до ее объявления.
  //     Тестовые данные:
  //     a = '1', b = '1', result = '11'
  //     a = 1, b = 1, result = '11'
  // EN: Create a function conc, which should concatenate the values
  //     of two parameters a and b and return a string.
  //     Use Function Declaration Statement (FDS).
  //     Call a function before it declaration.
  //     Test data:
  //     a = '1', b = '1', result = '11'
  //     a = 1, b = 1, result = '11'

  function plus(a, b) {
    return a.toString() + b;
  }

  console.log('tasks 1:', plus(1, 1));

  // Task 2. FDE
  // RU: Создайте функцию comp, которая должна сравнивать значения
  //     двух параметров a и b и возвращать 1, если они равны и -1, если они не равны.
  //     Используйте Function Definition Expression (FDE).
  //     Вызовите функцию до ее объявления.
  //     Тестовые данные:
  //     a = 'abc', b = 'abc', result = 1
  //     a = 'abC', b = 'abc', result = -1
  // EN: Create a function comp, which should compare the values
  //     of two parameters a and b, and return 1, when they equal and return -1,
  //     when they are not equal.
  //     UseFunction Definition Expression (FDE).
  //     Call a function before it declaration.
  //     Test data:
  //     a = 'abc', b = 'abc', result = 1
  //     a = 'abC', b = 'abc', result = -1

  const sorting = function (a, b) {
    const result = a === b ? 1 : -1;
    return result;
  };

  console.log('tasks 2:', sorting('abc', 'abc'));

  // Task 3. AF
  // RU: Создайте анонимную функцию, которая должна
  //     выводить сообщение 'message in console' в коноль.
  //     Используйте ее как обработчик события click для кнопки.
  // EN: Create an anonymous function, which should display
  //     message 'message in console' in console.
  //     Use it as an event handler of event click of the button.

  // const element = document.getElementById('button');
  // element.onclick = function () {
  //   console.log('message in console');
  // };


  // Task 4. NFE
  // RU: Создайте функцию fibo, которая должна вычислять числа Фибоначчи по формуле
  //     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
  //     Создайте функцию factorial, которая должна вычислять факториал числа по формуле
  //     Fn = 1 * 2 *..*n.
  //     Используйте Named Function Expression (NFE).
  // EN: Create a function fibo should calculate Fibonacci numbers according to the formula
  //     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
  //     Create a function factorial which should calculate factorial of a number n
  //     according to the formula Fn = 1 * 2 *..*n.
  //     Use Named Function Expression (NFE).

  const arr4 = [0];
  function fibo(a, b, countNumber) {
    const sum = a + b;
    arr4.push(sum);
    if (arr4.length !== countNumber) {
      fibo(b, sum, countNumber);
    }
    return arr4;
  }
  console.log('tasks 4:', fibo(0, 1, 4));

  function factorial(count) {
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  }

  console.log('tasks 4:', factorial(10));

  // Task 5. FC
  // RU: Объявите две строчные переменные: params и body и проинициализируйте
  //     их строчными значениями, которые представляют список параметров и тело будущей функции.
  //     Создайте функцию, используя эту информацию с помощью Function Constructor (FC).
  //     Вызовите эту функцию.
  // EN: Declare two string variables: params and body and initialize them with string values,
  //     which represent the list of parameters and the body of future function.
  //     Create function using these variables with help of Function Constructor (FC).
  //     Call this function.

  const sum = new Function('a', 'b', 'return a + b');
  console.log('tasks 5:', sum(1, 2));


  // Task 6 We want to create a function that will add numbers
  //  together when called in succession.
  // add(1)(2);
  // returns 3

  // We also want to be able to continue to add numbers to our chain.

  // add(1)(2)(3); // 6
  // add(1)(2)(3)(4); // 10
  // add(1)(2)(3)(4)(5); // 15

  // and so on.

  // A single call should return the number passed in.

  // add(1); // 1

  // We should be able to store the returned values and reuse them.

  // var addTwo = add(2);
  // addTwo; // 2
  // addTwo + 5; // 7
  // addTwo(3); // 5
  // addTwo(3)(5); // 10

  // We can assume any number being passed in will be valid whole number.

  // https://www.codewars.com/kata/a-chain-adding-function/solutions/javascript/me/best_practice

  function add(n) {
    let sum = n;
    function resultFn(y) {
      sum += y;
      return resultFn;
    }

    resultFn.valueOf = function sum() {
      return sum;
    };
    return resultFn;
  }

  console.log('');
};


module.exports = getFunctionTasks;

const getNumberTasks = () => {
  const colorCons = '\x1b[33m%s\x1b[0m';

  console.log(colorCons, '**********NUMBERS***********');

  /**  1) 0.1 + 0.2 + '$' => 0.3$ but != 0.30000000000000004$ */
  const num1 = 0.1;
  const num$1 = 0.2;
  const result1 = +(num1 + num$1).toFixed(2);
  console.log('task 1:', result1);

  /**  2) 6.35 => get number 6.3 */
  const num2 = 6.35;
  const result2 = num2.toFixed(1);
  console.log('task 2:', result2);

  /** 3) Returns a random number between the specified values.
   *  The returned value is no lower than (and may possibly equal) min,
   *  and is less than (and not equal) max. */
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log('task 3:', getRandomNumber(4, 3));

  /** 4) Returns a random number integer between the specified values.
   *  The returned value is no lower than (and may possibly equal) min,
   *  and is less than (and not equal) max. */
  function getIntegerNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  console.log('task 4:', getIntegerNumber(10, 3));

  /** 5)Find the square root of number:379.
   * The result:array is rounded to whole, to tenths, to hundredths. */
  function getSqrtNumber(num) {
    const value = Math.sqrt(num);
    const res1 = +value.toFixed(1);
    const res2 = +value.toFixed(2);
    const res3 = +value.toFixed(3);
    return [res1, res2, res3];
  }
  console.log('task 5:', getSqrtNumber(379));

  // 6) Your task is to create a function
  // that does four basic mathematical operations.

  // The function should take three arguments - operation(string/char),
  //  value1(number), value2(number).
  // The function should return result of numbers after applying the chosen operation.

  // basicOp('+', 4, 7); // Output: 11
  // basicOp('-', 15, 18); // Output: -3
  // basicOp('*', 5, 5); // Output: 25
  // basicOp('/', 49, 7); // Output: 7

  function basicOp(operation, value1, value2) {
    const result = (operation === '+') ? value1 + value2
      : (operation === '-') ? value1 - value2
        : (operation === '/') ? value1 / value2 : value1 * value2;
    return result;
  }

  console.log('task 6:', basicOp('/', 49, 7));

  console.log('');
};

module.exports = getNumberTasks;

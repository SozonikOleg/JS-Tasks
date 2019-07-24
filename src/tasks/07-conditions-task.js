const getconditionsTasks = () => {
  const colorCons = '\x1b[33m%s\x1b[0m';

  console.log(colorCons, '**********CONDITIONS***********');

  // 1   The sum of x consecutive integers is y.
  //    What is the consecutive integer at position n?
  //    Given x, y, and n, solve for the integer.
  //     Assume the starting position is 0.

  // For example, if the sum of 4 consecutive integers is 14,
  //  what is the consecutive integer at position 3?

  // We find that the consecutive integers are [2, 3, 4, 5],
  //  so the integer at position 3 is 5.

  // Assume there will always be a sum of x consecutive integers
  //  that totals to y and n will never be indexed out of bounds.

  // Javascript
  // position(4, 14, 3) => 5`

  // https://www.codewars.com/kata/sums-of-consecutive-integers/javascript

  function position(x, y, n) {
    const sredn = Math.floor(y / x);
    if (x % 2 === 0) {
      const startNumber = sredn - x / 2 - 1;
      const result = startNumber + n + 2;
      return result;
    }
    const startNumber = sredn - Math.floor(x / 2);
    const result = startNumber + n;
    return result;
  }

  console.log('task 1:', position(4, 14, 3));
};

module.exports = getconditionsTasks;

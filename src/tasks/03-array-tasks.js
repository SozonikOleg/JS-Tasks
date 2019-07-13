const getArrayTasks = () => {
  const colorCons = '\x1b[33m%s\x1b[0m';

  console.log(colorCons, '**********ARRAYS***********');

  /** 1) Create an array of any elements. Get the last element from this array.
 * 1.    without deleting this element from an array;
 * 2.    with deleting this element from an array.
 * Display them in the console.
 */
  const arr1 = [1, 2, 3, 4, 5];
  console.log('task 1:', arr1[arr1.length - 1]);
  console.log('task 1:', arr1.pop());

  /** 2) Create an array of any elements. Add new element to the end of this array.
 * 1.    mutate current array;
 * 2.    create a new array.
 * Display them in the console.
 */
  const arr2 = [1, 2, 3, 4, 5, 6, 7];
  arr2.push('name');
  const arr$2 = arr2.slice();
  console.log('task 2:', arr2);
  console.log('task 2:', arr$2);

  /** 3) Create an array of any elements. Insert a new element with index 3.
 * 1.    mutate current array;
 * 2.    create a new array.
 * Display them in the console.
 */
  const arr3 = [10, 20, 30, 40, 50, 60, 70];
  arr3.splice(3, 0, 'name');
  const arr$3 = arr3.slice();
  console.log('task 3:', arr3);
  console.log('task 3:', arr$3);

  /** 4) Create an array of any elements.
 * 1.    Iterate over this array and display each element in the console.
 */
  const arr4 = ['Oleg', 'Inna', 'Mathew', 'Vera'];
  let str4 = '';
  arr4.forEach((item) => {
    str4 += `${item} `;
  });
  console.log('task 4:', str4);

  /** 5) Create an array of any elements.
 * 1.    Iterate over this array and display each element in the console.
 */

  const arr5 = [];
  let sum = 0;
  for (let i = 0; i < 101; i += 1) {
    arr5.push(i);
  }
  for (let i = 50; i < arr5.length; i += 1) {
    sum += arr5[i];
  }
  console.log('task 5:', sum);

  /** 6)
* const arr = [
*  { id: 1, name: 'Name1' },
*  { id: 1, name: 'Name3' },
*  { id: 2, name: 'Name4' },
*  { id: 3, name: 'Name5' },
*  { id: 2, name: 'Name6' },
* ];
*
* get object: =>
*
* { '1': { count: 2 },
    '2': { count: 2 },
    '3': { count: 1 },
  }
*/
  const arr = [
    { id: 1, name: 'Name1' },
    { id: 1, name: 'Name3' },
    { id: 2, name: 'Name4' },
    { id: 3, name: 'Name5' },
    { id: 2, name: 'Name6' },
  ];

  function get(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i += 1) {
      obj[arr[i].id]
        ? obj[arr[i].id].count += 1
        : obj[arr[i].id] = { count: 1 };
    }
    return obj;
  }

  console.log('task 6:', get(arr));


  const a = arr.reduce((acc, item) => {
    acc[item.id]
      ? acc[item.id].count += 1
      : acc[item.id] = { count: 1 };
    return acc;
  }, {});

  console.log('task 6:', a);
};
module.exports = getArrayTasks;

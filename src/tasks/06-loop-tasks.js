const getLoopTasks = () => {
  const colorCons = '\x1b[33m%s\x1b[0m';

  console.log(colorCons, '**********LOOP***********');

  // 1 Дан массив с числами. Найдите сумму первых N элементов до первого нуля.
  //  Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента,
  //  так как дальше стоит элемент с числом 0.
  const arr1 = [1, 2, 3, 0, 4, 5, 6];
  let result1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 0) { break; }
    result1 += arr1[i];
  }
  console.log('task 1:', result1);

  // 2 Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца.
  //  Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента,
  //  так как дальше стоит элемент с числом 0.
  const arr2 = [1, 2, 3, 0, 4, 5, 6];
  let result2 = 0;
  for (let i = 7; i > arr2.length; i--) {
    if (arr2[i] === 0) { break; }
    result2 += arr2[i];
  }
  console.log('task 2:', result2);
  console.log('');
};
module.exports = getLoopTasks;

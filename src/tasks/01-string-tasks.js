console.log('**********STRINGS***********');

/**  1) 'aaa@bbb@ccc' => get string 'aaa!bbb!ccc'; */
const str = 'aaa@bbb@ccc';
console.log('task 1:', str.replace(/@/g, '!'));


/** 2) 'aaa bbb ccc' => get string 'bbb'; */
const data = 'aaa bbb ccc';
console.log('task 2:', data.substring(4, 7));


/** 3) 'ololo fdfsdf osdsdfs sfs' => get string 'fdfsdf osdsdfs sfs'; */
const string = 'ololo fdfsdf osdsdfs sfs';
const newString = string.substring(6);
console.log('task 3:', newString);

/** 4) 'stringify' => get string 'ring'; */
const str4 = 'stringify';
const newStr4 = str4.substr(3, 4);
console.log(newStr4);

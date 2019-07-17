const getStringTasks = () => {
  const colorCons = '\x1b[33m%s\x1b[0m';
  console.log(colorCons, '**********STRINGS***********');

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
  const newStr4 = str4.substr(2, 4);
  console.log('task 4:', newStr4);

  /** 5) '   stringify   ' => get string 'stringify'; */
  const str5 = '   stringify   ';
  const newStr5 = str5.trim();
  console.log('task 5:', newStr5);

  /** 6) 'Hello world' => get string 'HELLO WORLD'; */
  const str6 = 'Hello world';
  const newStr6 = str6.toUpperCase();
  console.log('task 6:', newStr6);

  /** 7) 'Hello Mathew' => get string 'hello mathew'; */
  const str7 = 'Hello Mathew';
  const newStr7 = str7.toLowerCase();
  console.log('task 7:', newStr7);

  /** 8) 'hi' => get string 'hihihi'; */
  const str8 = 'hi';
  const newStr8 = str8.repeat(3);
  console.log('task 8:', newStr8);

  /** 9) 'How are you?' => get array ['How', 'are', 'you?']; */
  const str9 = 'How are you?';
  const newStr9 = str9.split(' ');
  console.log('task 9:', newStr9);

  /** 10) 'How are you?' and 'I'm ok' => get string 'How are you?I'm ok.'; */
  const str10 = 'How are you?';
  const str11 = ' I`m ok.';
  const newStr12 = str10.concat(str11);
  console.log('task 10:', newStr12);
  console.log('');
};

module.exports = getStringTasks;

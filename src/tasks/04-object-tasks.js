const getObjectTasks = () => {
  const colorCons = '\x1b[33m%s\x1b[0m';
  console.log(colorCons, '**********OBJECT***********');

  // Task 01
  //  RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
  //      с публичными свойствами title, artist и методом concat().
  //      Метод должен возвращать конкатенацию значений свойств title и artist.
  //      Создать несколько объектов. Вызвать их метод concat().
  //  EN: Create function-constructor Tune(title, artist) for creating objects
  //      with public properties title, artist and method concat().
  //      Mathod should return the concatenation of values of propeties title and artist.
  //      Create a few objects. Call their method concat().

  function Tune(title, artist) {
    this.title = title,
    this.artist = artist,
    this.concat = function () {
      return this.title + this.artist;
    };
  }
  const obj1 = new Tune('Pop', 'Ivanov');
  console.log('task 1:', obj1);
  console.log('task 1:', obj1.concat());


  // Task 02
  // RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
  //     с приватными свойствами title, artist и публичным методом concat().
  //     Метод должен возвращать конкатенацию значений свойств title и artist.
  //     Создать несколько объектов. Вызвать их метод concat().
  // EN: Create function-constructor Tune(title, artist) for creating objects
  //     with private properties title, artist and method concat().
  //     Mathod should return the concatenation of values of propeties title and artist.
  //     Create a few objects. Call their method concat().

  function Tune2() {
    const name = 'Ivan';
    const lastName = 'Ivanov';
    this.concat2 = () => name + lastName;
  }

  const obj2 = new Tune2('');
  console.log('task 2:', obj2);
  console.log('task 2:', obj2.concat2());


  // Task 03
  // RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
  //     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
  // EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
  //     Method should add exclaimation mark to the string and disply it in the console.

  class String {
    constructor(str) {
      this.str = str;
    }

    exclaim() {
      console.log('task 3:', `!${this.str}`);
    }
  }

  const obj3 = new String('oleg');
  obj3.exclaim();

  // Task 04
  // RU: Создать функцию-конструктор Book(title, author).
  //     Добавить два метода: getTitle, getAuthor.
  //     Создать функцию-конструктор TechBook(title, author, category).
  //     Передать значения title, author функции-конструктору Book.
  //     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
  //     Для реализации наследования используйте:
  //     1. Class
  // EN: Create function-constructor Book(title, author).
  //     Add two methods: getTitle, getAuthor.
  //     Create function-constructor TechBook(title, author, category).
  //     Pass the value of title, author to the function-constructor Book.
  //     Add two methods: getCategory, getBook - returns the string with values of all parameters.
  //     Implement inheritance using:
  //     1. Class

  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getTitle() { console.log(this.title); }

    getAuthor() { console.log(this.author); }
  }

  class TechBook extends Book {
    constructor(title, author, category) {
      super(title, author);
      this.category = category;
    }

    getCategory() { console.log(this.category); }

    getBook() { return this.title + this.author + this.category; }
  }

  const obj4 = new TechBook('Massage', 'Pushkin', 'Writer');
  console.log('task 4:', obj4);

  // Task 05
  // RU: Создать функцию-конструктор Person() для конструирования объектов.
  //     Добавить два метода: setFirstName() и setLastName().
  //     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
  // EN: Create function-constructor Person() for creating objects.
  //     Add two methods: setFirstName() и setLastName().
  //     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)

  function Person() {
    this.setFirstName = () => this;
    this.setLastName = () => this;
  }
  const obj5 = new Person();
  console.log('task 5:', obj5);
  console.log('');
};

module.exports = getObjectTasks;

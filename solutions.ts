//-------------------------Solution 1--------------------------
const arrOfNumbers: number[] = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers = (nums: number[]): number[] => {
  const newArr: number[] = nums.filter((num: number): boolean => num % 2 === 0);
  return newArr;
};
const result = filterEvenNumbers(arrOfNumbers);

//-------------------------Solution 2--------------------------
type ReverseString = (input: string) => string;
const reverseString: ReverseString = (reverse) => {
  return reverse.split("").reverse().join("");
};
const result2 = reverseString("typescript");

//-------------------------Solution 3--------------------------
type StringOrNumber = string | number;
const checkType = (stringOrNumber: StringOrNumber): "String" | "Number" => {
  if (typeof stringOrNumber === "string") {
    return "String";
  } else {
    return "Number";
  }
};
const result3 = checkType("hello");

//-------------------------Solution 4--------------------------
type User = {
  id: number;
  name: string;
  age: number;
};
const user: User = { id: 1, name: "Abdullah", age: 25 };
const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};
const result4 = getProperty(user, "name");

//-------------------------Solution 5--------------------------
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const book: Book = {
  title: "Harry Potter and the Deathly Hallows",
  author: "J. K. Rowling",
  publishedYear: 2007,
};
const toggleReadStatus = (book: Book) => {
  const isRead = true;
  return {
    ...book,
    isRead,
  };
};
const result5 = toggleReadStatus(book);

//-------------------------Solution 6--------------------------
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Abdullah", 25, "A+");
const result6 = student.getDetails();

//-------------------------Solution 7--------------------------
const arr: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [3, 4, 5, 6, 7];
const getIntersection = (arr: number[], arr2: number[]): number[] => {
  const include = arr.filter((item) => arr2.includes(item));
  return include;
};

const result7 = getIntersection(arr, arr2);

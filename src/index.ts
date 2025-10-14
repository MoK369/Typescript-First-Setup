let message: String = "Hello, world!";

console.log(typeof message);
console.log(message);
// -------------

let age: number = 25;
console.log(typeof age);
console.log(age);
// -------------

let flag: boolean = true;
console.log(typeof flag);
console.log(flag);
// -------------

let x: any = "Hello";
console.log(typeof x);
console.log(x);

x = 10;
console.log(typeof x);
console.log(x);

x = false;
console.log(typeof x);
console.log(x);
// -------------

let list: String[] = ["Apple", "Banana", "Orange"];
//let list: String[] = ["Apple", "Banana",555]; Error because 555 is not a string❌
console.log(typeof list);
console.log(list);
// -------------
// | is Types Literal here equivalent to XOR
let person: String[] | number[] = ["John", "Doe"]; // person can be either an array of strings or an array of numbers but not both❌
// () is Union Operator, here | is equivalent to OR
let person1: (String | number | String[])[] = ["John", 25]; // person can be an array of strings and numbers both✅
console.log(typeof person);
console.log(person);
person1.push("Doe");
person1.push(30);
person1.push(["Hello", "World"]);
console.log(typeof person1);
console.log(person1);
// -------------
// readonly array means it's a fixed array, you can't add or remove elements from it.
// readonly keyword is just used with array and tuple
let data: readonly (String | Number)[] = ["Hello", 123, "World", 456];
// data.push("New Data"); ❌ Error because data is readonly
// data.pop(); ❌ Error because data is readonly
// data[0] = "New Data"; ❌ Error because data is readonly
// data[1] = 789; ❌ Error because data is readonly
// but we can reassign the whole array
data = ["New Data", 789]; // we can reassign the whole array
console.log(typeof data);
console.log(data);
// -------------
// Tuple is a fixed size array, you can't add or remove elements from it.
// Tuple is a special type of array, where the type of each element is known.
let tuple: readonly [String, number] = ["Hello", 123];
//tuple.push("World"); // It will not give error but it's not recommended to use push method on tuple❌
// we can add the keyword readonly to make it fixed size
tuple = ["World", 456]; // we can reassign the whole tuple
console.log(typeof tuple);
console.log(tuple);
// -------------
enum GenderEnum {
  male = "male",
  female = "female",
}
let user: {
  fullName: { firstName: String; lastName: String };
  age?: Number; // ? means age is optional
  gender: GenderEnum;
} =
  // This way of specifying object type is called inline type annotation
  {
    fullName: {
      firstName: "John",
      lastName: "Doe",
    },
    age: 30, // age can be sent or not
    gender: GenderEnum.male,
  };
console.log(typeof user);
console.log(user);
// we use the type keyword to create a custom type
type FullNameType = { firstName: String; lastName: String };
type UserType = {
  fullName: FullNameType;
  age?: Number; // ? means age is optional
  gender: GenderEnum;
};
// & is used to combine two types
let user1: UserType & { address: String } = {
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
  age: 25, // age can be sent or not,
  gender: GenderEnum.male,
  address: "123, Main Street",
};
console.log(user1);

// -------------
let data1: (String | number)[] = ["Hello World", 456];
for (let i = 0; i < data1.length; i++) {
  if (typeof data1[i] === "number") continue; // Type Guard, we are checking the type of data1[i] is number or not
  const value = data1[i] as String; // Type Assertion, we are telling the compiler that we know the type of data1[i] is string
  console.log(value.split(" ")); // split is a method of string, it will give error if data1[i] is number❌
}

// ------------- Functions
function sum(a: number, b: number = 0): number {
  return a + b;
}
console.log(sum(10, 20));
console.log(sum(10)); // b is optional here because we have given it a default value of 0

// console.log(sum("10", "20")); ❌ Error because "10" and "20" are not numbers

function sum2(a: number, b?: number): number {
  // b is optional here because we have used ? after b
  if (b) return a + b;
  return a;
}
console.log(sum2(10, 20));
console.log(sum2(10)); // b is optional here
//! optional parameter should always be at the end
// optional parameters don't come before required parameters
// function sum3(a?: number, b: number): number { ❌ Error because optional parameter should always be at the end
//   if (b) return a + b;
//   return a;
// }

function sum3(a: number, b?: number, c?: number) {
  return (a + (b || 0)) * (c || 1);
}
console.log(sum3(5, undefined, 25)); // if we want to skip b, we have to pass undefined for b

// better uesage here is to use the named parameters:
function sum3Named({ a, b = 0, c = 1 }: { a: number; b?: number; c?: number }) {
  return (a + b) * c;
}
console.log(sum3Named({ a: 5, c: 25 })); // we can skip b here

// ------------- Arrow Function
const welcome = (name: String): String => {
  return `Welcome, ${name}`;
};
console.log(welcome("John"));

// ------------- Void Function
function logMessage(message: string): void {
  console.log(message);
  // return message; ❌ Error because void function should not return anything
  return; // we can return nothing or undefined
}
logMessage("Hello, world!");

// ------------- Never Function
// never function is a function that never returns anything, it either throws an error or has an infinite loop
// never means that this function doesn't have a reachable end point
// function throwError(message: string): never {
//   throw new Error(message);
// }
// throwError("This is an error message"); // Uncommenting this line will terminate the program

// ------------- Some TS Config Options
// 1. noImplicitAny: true - It will give error if we don't specify the type of a variable or parameter, default with true
// function test(a,b){ ❌ Error because a and b are of type any
//   console.log({a,b});
// }

// 2. noImlicitReturns: true - It will give error if a function doesn't have a return statement in all code paths, default with false
// function test1(a: number): number { ❌ Error because there is no return statement if a is less than 0
//   if (a > 0) return a;
// }

// 3. noUnusedParameters: true - It will give error if a function has unused parameters, default with false
// function test2(a: number, b: number): number { ❌ Error because b is unused
//   return a;
// }

// 4. noUnusedLocals: true - It will give error if a variable, function is declared but not used, default with false
// function test3() { ❌ Error because x is unused
//   let x = 10;
//   console.log("Hello, world!");
// }

// ------------- OOP Introduction
// interface is a way to define the structure of an object
// interface is a contract that a class or an object must follow
// interface can have properties and methods
// interface can be extended by another interface
// interface can be implemented by a class
// interface cannot be instantiated
// interface is a compile time construct, it will not be present in the compiled JavaScript code
// we use the implements keyword to implement an interface in a class
interface IUser {
  name: string;
  DOB: Date;
  age(currentYear: number): number;
}
const userObj: IUser = {
  name: "John Doe",
  DOB: new Date("2000-01-01"),
  age(currentYear: number): number {
    return currentYear - this.DOB.getFullYear();
  },
};
console.log(userObj);
console.log(userObj.age(2025));

// Type Vs Interface
// 1. We can use type to define primitive types, noneprimitive types, union types, tuple types, whereas we cannot do that with interface
// type ID = string | number;  we can define a union type using type
// interface IDInterface = string | number; ❌ Error because we cannot define a union type using interface
type LoginType = {
  email: string;
  password: string;
};
type SignupType = LoginType & {
  // we can extend a type using intersection &
  name: string;
};
type UserType2 = { id: number } & SignupType; // we can extend multiple types using intersection &

const users: UserType2[] = [
  {
    id: 1,
    name: "mohammed",
    email: "klilmohammed9@gmail.com",
    password: "12345",
  },
  { id: 2, name: "khalil", email: "klil48449@gmail.com", password: "12345" },
];
function login(user: LoginType): string {
  const found = users.find(
    (u) => u.email === user.email && u.password === user.password
  );
  if (found) return `Welcome, ${found.name}`;
  return "Invalid email or password";
}

console.log(login({ email: "klilmohammed9@gmail.com", password: "12345" }));

function signup(user: SignupType): string {
  const exists = users.some((u) => u.email === user.email);
  if (exists) return "User already exists";
  const newUser: UserType2 = {
    id: users.length + 1,
    name: user.name,
    email: user.email,
    password: user.password,
  };
  users.push(newUser);
  return `User ${user.name} registered successfully`;
}

console.log(
  signup({
    name: "Mazen",
    email: "mohammedklil321@gmail.com",
    password: "12345",
  })
);

// interface are always non-primitive types, unlike type
// Making the same example using interface
interface ILogin {
  email: string;
  password: string;
}
interface ISignup extends ILogin {
  // we can extend an interface using extends keyword
  name: string;
}
interface IUser2 extends ISignup {
  // we can extend multiple interfaces using extends keyword
  id: number;
}

const users2: IUser2[] = [
  {
    id: 1,
    name: "mohammed",
    email: "klilmohammed9@gmail.com",
    password: "12345",
  },
  { id: 2, name: "khalil", email: "klil48449@gmail.com", password: "12345" },
];
function login2(user: ILogin): string {
  const found = users2.find(
    (u) => u.email === user.email && u.password === user.password
  );
  if (found) return `Welcome, ${found.name}`;
  return "Invalid email or password";
}

console.log(login2({ email: "klilmohammed9@gmail.com", password: "12345" }));
function signup2(user: ISignup): string {
  const exists = users2.some((u) => u.email === user.email);
  if (exists) return "User already exists";
  const newUser: IUser2 = {
    id: users2.length + 1,
    name: user.name,
    email: user.email,
    password: user.password,
  };
  users2.push(newUser);
  return `User ${user.name} registered successfully`;
}

console.log(
  signup2({ name: "Ahmed", email: "ahmed231@gmail.com", password: "12345" })
);

// Re-open Concept in Interfaces (Declaration Merging)
interface ICar {
  name: String;
}
const car: ICar = { name: "TOYOTA", year: "2011" }; // Interfaces get hoisted
console.log(car);

interface ICar {
  year: String;
}

// ------------- Classes
// class is a blueprint for creating objects
// class is a way to define the structure of an object
// class can have properties and methods
// class can be extended by another class
// class can implement an interface
// class can be instantiated
// class is a runtime construct, it will be present in the compiled JavaScript code
class Person {
  // private, public, protected, readonly are access modifiers
  // public: default, it can be accessed from anywhere
  // private: it can be accessed only within the class
  // protected: it can be accessed within the class and its subclasses
  // readonly: it can be accessed but not modified outside the class
  // properties
  //name: String;
  //private _age: number; // private property, it can be accessed only within the class
  //readonly gender: String; // readonly property, it can be accessed but not modified outside the class
  //protected address: String = "123, Main Street"; // protected property, it can be accessed within the class and its subclasses

  // constructor
  // constructor(name: String, age: number, gender: String){
  //   this.name = name;
  //   this._age = age;
  //   this.gender = gender;
  // }

  // shortcut for defining and initializing properties in constructor
  constructor(
    public name: String,
    private _age: number,
    readonly gender: String,
    protected address: String = "123, Main Street"
  ) {}

  // methods
  getAge(): number {
    return this._age;
  }

  // getter and setter accessories
  get age(): number {
    return this._age;
  }
  set age(age: number) {
    if (age < 0 || age > 120) {
      throw new Error("Invalid age");
    }
    this._age = age;
  }
}

const p1 = new Person("John Doe", 30, "male");
console.log(p1);
console.log(p1.getAge());
//p1.age = 31; // accessing age using setter
console.log(p1.age); // accessing age using getter
//p1.age = -10; // it will throw an error because age is invalid
p1.age = 20; // accessing age using setter
console.log(p1.age);

// Inheritance
class Employee extends Person {
  static company: String = "ABC Corp"; // static property, it can be accessed without creating an instance of the class
  private static _employeeCount: number = 0; // private static property, it can be accessed only within the class
  public id: number;
  constructor(
    name: String,
    age: number,
    gender: String,
    public salary: number,
    address: String
  ) {
    super(name, age, gender, address); // calling the constructor of the parent class
    this.id = Employee._employeeCount;
    Employee._employeeCount++; // incrementing the employee count whenever a new employee is created
  }

  getDetails(): String {
    // accessing protected property address from parent class
    return `Id: ${this.id} ,Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}, Salary: ${this.salary}`;
  }
}

const emp1: Employee = new Employee(
  "Jane Doe",
  25,
  "female",
  50000,
  "456, Elm Street"
);
const emp2: Employee = new Employee(
  "Mark Twain",
  25,
  "male",
  50000,
  "456, Elm Street"
);
console.log(emp1);
console.log(emp1.getDetails());
console.log(emp2.getDetails());
// console.log(emp1.address); ❌ Error because address is a protected property
console.log(Employee.company); // accessing static property without creating an instance of the class
//console.log(Employee.employeeCount); // ❌ Error because employeeCount is a private static property

// const emp3:Person = new Employee("Alice", 28, "female", 60000, "789, Pine Street");
// console.log(emp3);
// // console.log(emp3.salary); ❌ Error because salary is not a property of Person class
// console.log(emp3.getAge()); // accessing method of parent class
// // console.log(emp3.getDetails()); ❌ Error because getDetails is not a method of Person class

// Polymorphism
class Manager extends Employee {
  constructor(
    name: String,
    age: number,
    gender: String,
    salary: number,
    address: String,
    public department: String
  ) {
    super(name, age, gender, salary, address);
  }

  // overriding the getDetails method of Employee class
  // method overriding is one of the Polymorphism forms
  // setting noImplicitOverride to true in tsconfig.json will give error if we don't use the override keyword while overriding a method
  override getDetails(): String {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}

// make the pointer of type the parent class Employee this is also polymorphism
const mgr1: Employee = new Manager(
  "Alice Johnson",
  35,
  "female",
  80000,
  "789, Pine Street",
  "Sales"
);
console.log(mgr1);
console.log(mgr1.getDetails());
console.log(mgr1.age); // accessing age using getter from Person class
// mgr1.age = 40; // accessing age using setter from Person class
// console.log(mgr1.age);

// class implementing an interface
interface IAnimal {
  name: String;
  sound(): String;
}

class Dog implements IAnimal {
  constructor(public name: String) {}
  sound(): String {
    return "Woof Woof";
  }
}

class Cat implements IAnimal {
  constructor(public name: String) {}
  sound(): String {
    return "Meow Meow";
  }
}

// partial class implementing an interface
// Partial makes all properties and methods of the interface optional
// so that the class can implement only some of them
// But it's not recommended to use Partial with interface implementation, instead we apply Interface Segregation Principle
// Interface Segregation Principle states that no client should be forced to depend on methods it does not use
// So it's better to split the interface into smaller interfaces
// and let the class implement only the interfaces it needs
// Here we are using Partial just for demonstration purpose
class Lion implements Partial<IAnimal> {
  constructor(public name: String) {}
  // sound() method is not implemented, it won't give an error because we are using Partial<IAnimal>
}

const dog1: IAnimal = new Dog("Buddy");
const cat1: IAnimal = new Cat("Kitty");
const lion1: Partial<IAnimal> = new Lion("Simba");
console.log(lion1);
//console.log(lion1.sound()); //❌ Error because sound() method is not implemented in Lion class
console.log(dog1);
console.log(dog1.sound());
console.log(cat1);
console.log(cat1.sound());

// Abstraction
// made the DBService here abstract class in order not to allow any one to make a direct instance from
// because the DBService class here is the basic unit or the abstract unit that will other DBServices will extend from
abstract class DBService {
  findOne(): any {
    console.log(`Finding one record`);
    return {};
  }
  create(): string {
    console.log(`Creating record`);
    return "done";
  }
  update(): string {
    return "updated";
  }
}

class UserDBService extends DBService {
  createUserIfNotExist() {
    if (!this.findOne()) {
      this.create();
    }
  }
}

class BlogDBService extends DBService {
  freezeBlog(): string {
    this.update();
    return "freezed";
  }
}

const userDB = new UserDBService();
console.log(userDB.findOne());

const blocDB = new BlogDBService();
console.log(blocDB.update());

// Generics
function testStr(param: string) {
  return param;
}

function testNum(param: number) {
  return param;
}

function testBool(param: boolean) {
  return param;
}
console.log(testStr("hello"));
console.log(testNum(20));
console.log(testBool(true));

// the above three methods can be replaced by one method with Generic/Template Parameter (Paramter for a type)
function test<T>(param: T): T {
  return param;
}

console.log(test<string>("hello"));
console.log(test<number>(25));
console.log(test<boolean>(true));

class GenericExample<T,Z=string> { // we can take more that generic param and we can set a default type to a generic param
  fn1(param: T) {
    console.log(param);
  }

  fn2(param:Z){
    console.log(param);
    
  }
}

const example = new GenericExample<number>();
example.fn1(25);
example.fn2("hello");


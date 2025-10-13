let message = "Hello, world!";
console.log(typeof message);
console.log(message);
let age = 25;
console.log(typeof age);
console.log(age);
let flag = true;
console.log(typeof flag);
console.log(flag);
let x = "Hello";
console.log(typeof x);
console.log(x);
x = 10;
console.log(typeof x);
console.log(x);
x = false;
console.log(typeof x);
console.log(x);
let list = ["Apple", "Banana", "Orange"];
console.log(typeof list);
console.log(list);
let person = ["John", "Doe"];
let person1 = ["John", 25];
console.log(typeof person);
console.log(person);
person1.push("Doe");
person1.push(30);
person1.push(["Hello", "World"]);
console.log(typeof person1);
console.log(person1);
let data = ["Hello", 123, "World", 456];
console.log(typeof data);
console.log(data);
let tuple = ["Hello", 123];
console.log(typeof tuple);
console.log(tuple);
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["male"] = "male";
    GenderEnum["female"] = "female";
})(GenderEnum || (GenderEnum = {}));
let user = {
    fullName: {
        firstName: "John",
        lastName: "Doe",
    },
    age: 30,
    gender: GenderEnum.male,
};
console.log(typeof user);
console.log(user);
let user1 = {
    fullName: {
        firstName: "Jane",
        lastName: "Doe",
    },
    age: 25,
    gender: GenderEnum.male,
    address: "123, Main Street",
};
console.log(user1);
let data1 = ["Hello World", 456];
for (let i = 0; i < data1.length; i++) {
    if (typeof data1[i] === "number")
        continue;
    const value = data1[i];
    console.log(value.split(" "));
}
function sum(a, b = 0) {
    return a + b;
}
console.log(sum(10, 20));
console.log(sum(10));
function sum2(a, b) {
    if (b)
        return a + b;
    return a;
}
console.log(sum2(10, 20));
console.log(sum2(10));
function sum3(a, b, c) {
    return (a + (b || 0)) * (c || 1);
}
console.log(sum3(5, undefined, 25));
function sum3Named({ a, b = 0, c = 1 }) {
    return (a + b) * c;
}
console.log(sum3Named({ a: 5, c: 25 }));
const welcome = (name) => {
    return `Welcome, ${name}`;
};
console.log(welcome("John"));
function logMessage(message) {
    console.log(message);
    return;
}
logMessage("Hello, world!");
const userObj = {
    name: "John Doe",
    DOB: new Date("2000-01-01"),
    age(currentYear) {
        return currentYear - this.DOB.getFullYear();
    },
};
console.log(userObj);
console.log(userObj.age(2025));
const users = [
    {
        id: 1,
        name: "mohammed",
        email: "klilmohammed9@gmail.com",
        password: "12345",
    },
    { id: 2, name: "khalil", email: "klil48449@gmail.com", password: "12345" },
];
function login(user) {
    const found = users.find((u) => u.email === user.email && u.password === user.password);
    if (found)
        return `Welcome, ${found.name}`;
    return "Invalid email or password";
}
console.log(login({ email: "klilmohammed9@gmail.com", password: "12345" }));
function signup(user) {
    const exists = users.some((u) => u.email === user.email);
    if (exists)
        return "User already exists";
    const newUser = {
        id: users.length + 1,
        name: user.name,
        email: user.email,
        password: user.password,
    };
    users.push(newUser);
    return `User ${user.name} registered successfully`;
}
console.log(signup({
    name: "Mazen",
    email: "mohammedklil321@gmail.com",
    password: "12345",
}));
const users2 = [
    {
        id: 1,
        name: "mohammed",
        email: "klilmohammed9@gmail.com",
        password: "12345",
    },
    { id: 2, name: "khalil", email: "klil48449@gmail.com", password: "12345" },
];
function login2(user) {
    const found = users2.find((u) => u.email === user.email && u.password === user.password);
    if (found)
        return `Welcome, ${found.name}`;
    return "Invalid email or password";
}
console.log(login2({ email: "klilmohammed9@gmail.com", password: "12345" }));
function signup2(user) {
    const exists = users2.some((u) => u.email === user.email);
    if (exists)
        return "User already exists";
    const newUser = {
        id: users2.length + 1,
        name: user.name,
        email: user.email,
        password: user.password,
    };
    users2.push(newUser);
    return `User ${user.name} registered successfully`;
}
console.log(signup2({ name: "Ahmed", email: "ahmed231@gmail.com", password: "12345" }));
const car = { name: "TOYOTA", year: "2011" };
console.log(car);
class Person {
    name;
    _age;
    gender;
    address;
    constructor(name, _age, gender, address = "123, Main Street") {
        this.name = name;
        this._age = _age;
        this.gender = gender;
        this.address = address;
    }
    getAge() {
        return this._age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (age < 0 || age > 120) {
            throw new Error("Invalid age");
        }
        this._age = age;
    }
}
const p1 = new Person("John Doe", 30, "male");
console.log(p1);
console.log(p1.getAge());
console.log(p1.age);
p1.age = 20;
console.log(p1.age);
class Employee extends Person {
    salary;
    static company = "ABC Corp";
    static _employeeCount = 0;
    id;
    constructor(name, age, gender, salary, address) {
        super(name, age, gender, address);
        this.salary = salary;
        this.id = Employee._employeeCount;
        Employee._employeeCount++;
    }
    getDetails() {
        return `Id: ${this.id} ,Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}, Salary: ${this.salary}`;
    }
}
const emp1 = new Employee("Jane Doe", 25, "female", 50000, "456, Elm Street");
const emp2 = new Employee("Mark Twain", 25, "male", 50000, "456, Elm Street");
console.log(emp1);
console.log(emp1.getDetails());
console.log(emp2.getDetails());
console.log(Employee.company);
class Manager extends Employee {
    department;
    constructor(name, age, gender, salary, address, department) {
        super(name, age, gender, salary, address);
        this.department = department;
    }
    getDetails() {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}
const mgr1 = new Manager("Alice Johnson", 35, "female", 80000, "789, Pine Street", "Sales");
console.log(mgr1);
console.log(mgr1.getDetails());
console.log(mgr1.age);
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Woof Woof";
    }
}
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Meow Meow";
    }
}
class Lion {
    name;
    constructor(name) {
        this.name = name;
    }
}
const dog1 = new Dog("Buddy");
const cat1 = new Cat("Kitty");
const lion1 = new Lion("Simba");
console.log(lion1);
console.log(dog1);
console.log(dog1.sound());
console.log(cat1);
console.log(cat1.sound());
class DBService {
    findOne() {
        console.log(`Finding one record`);
        return {};
    }
    create() {
        console.log(`Creating record`);
        return "done";
    }
    update() {
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
    freezeBlog() {
        this.update();
        return "freezed";
    }
}
const userDB = new UserDBService();
console.log(userDB.findOne());
const blocDB = new BlogDBService();
console.log(blocDB.update());
function testStr(param) {
    return param;
}
function testNum(param) {
    return param;
}
function testBool(param) {
    return param;
}
console.log(testStr("hello"));
console.log(testNum(20));
console.log(testBool(true));
function test(param) {
    return param;
}
console.log(test("hello"));
console.log(test(25));
console.log(test(true));
class GenericExample {
    fn1(param) {
        console.log(param);
    }
    fn2(param) {
        console.log(param);
    }
}
const example = new GenericExample();
example.fn1(25);
example.fn2("hello");
export {};

const person = {
    name: "Ludovica",
    age: 25,
    city: "Buccinasco",
}

console.log(person);
console.log(person.age);

person.age = 30;
console.log(person.age);

person.job = "Developer";
console.log(person.job);

for(let property in person) {
    console.log(property + ": " + person[property]);
}

function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }

    return innerFunction;
}

function outerFunction(x, initialValue) {
    let result = initialValue + x;

    function innerFunction(y) {
        return result = result + y;
    }

    return innerFunction;
}

let value = outerFunction(5, 2)(5);
console.log(value);

function createCounter() {
    let count = 0;

    return objCount = {
        method1: increment = () => {
            count++;
            return count;
        },
        method2: decrement = () => {
            count--;
            return count;
        },
    }
}

const count = createCounter();
count.method1();
console.log(count.method1());
count.method2();
console.log(count.method2());

const student = {
    name: "Gino",
    age: 17,
    grade: 65,
    school: "Carlona",
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

for (const key in student) {
    console.log(`${key}:  ${student[key]}`);
}

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
    console.log(number * 2);
})

const squareNumbers = numbers.map((number, index, array) => {
    return number * number;
})

console.log(squareNumbers);

const students = [{name: "Billy", grade: 78,}, {name: "Sara", grade: 59,}, {name: "Tim", grade: 64,}, {name: "Pina", grade: 93,}, {name: "Alice", grade: 47,}];

const passedStudents = students.filter((student) => {
    return student.grade >= 60;
})

console.log(passedStudents);

const firstBadStudent = students.find((student) => {
    return student.grade < 60;
})

console.log(firstBadStudent);

const expenses = [37.2, 59.5, 26.22, 10.65, 5.8, 49.5, 37, 24.59, 38, 51.5];

const sumExpenses = expenses.reduce((accumulator, current) => {
    return accumulator + current
}, 0);

console.log(sumExpenses);

const words = ["banana", "apple", "cherry", "date"];

words.sort((a, b) => {
    return a.localeCompare(b);
})

console.log(words);

/* class Person {
    #age;

    constructor(name = "Jon", surname = "Doe", age = 10) {
        this.name = name;
        this.surname = surname;
        this.#age = age;
    }

    set compleanno(number) {
        this.#age = number;
    }

    get displayAge() {
        console.log(this.#age);
    }
}

const ludovica = new Person ();
console.log(ludovica);

ludovica.compleanno = 26;
ludovica.displayAge; */
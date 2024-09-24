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

/* function createCounter() {
    return objCount = {
        count: undefined,
        method1: increment = () => {
            count ++;
        },
        method2: decrement = () => {
            count--;
        },
    }
} */
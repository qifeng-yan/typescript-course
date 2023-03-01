# This is a learning diary of the udemy Typescript course by Colt Steele

## Declaration of type

March 1st, 2023

In Typescript, a variable should be declared in the following format:

{declaration method} {value name} : {type name} = {variable value}

Example:

const catName : string = 'Micky';

let age : number = 20;

let gameOver : boolean = false;

However, it is not necessary. A less verbose way to do this is by **type inference**.

For example, by declaring **let age = 20**, number is **inferred** by Typescript to be a number.

### Typescript knows what methods are available according to the declared type of the variable.

### Typescript notifies the author when the author tries to assign the variable a value of a different type.

There is a special type in Typescript: **any**. When there is no type specified, nor an variable assigned to the variable when it is declared, the type will be any. A variable of any type will behave just like in JavaScript. No Typescript features are applied to it. Therefore, whenever possible, avoid using **any**.

In a function, when not specified, the parameters will have the **any** type. To declare a type for the parameter, do the same as for a variable, see example below:

function greet(name: string) {
console.log(`Hi, ${name}`)
}

Typescript also checks whether enough parameters have been provided for the function, and if each of the parameter is of the correct type.

When giving a default value to the parameter, it should come after the annotation such as:

function greet(name: string = 'world') {
console.log(`Hi, ${name}`)
}

Just like the parameter, a function's output's type can also be annotated, and can be inferred. When there is no returned value, the type of return value will be set to **void**. Another special type is **never**. It is used when a function should never be given the opportunity to return any value. For example, a while loop whose condition is always true.

Type restrictions can be applied to objects. By using **type alias**, you can reuse the same object structure.

Example:

type Cat = {
readonly id: number
name: string;
weight: number;
breed?: string;
parent {
father: string;
mother: string;
}
}

By adding a readonly keyword, you can prevent any attempt to change the property if its value is of primitive type.

BY placing a question mark, you can make a property of a type alias optional. Otherwise, all properties will be set as required in default.

Type can be "intersected", which means that you can create a new type alias by using ampersand linking existing type aliases. You can also link further inline declaration. Example below:

type Cat = {
name: string;
}

type Dog = {
breed : string;
}

type CatDog = Cat & Dog & {
age: number;
}

In this case, the new type CatDog will have three required properties.

In Typescript, arrays can be annotated, and thereby allowing only one type of values to be in the array. There are two ways to annotate an array. See below for examples:

let name: string [] = [];

let names: Array<string> = [];

---

March 2nd, 2023

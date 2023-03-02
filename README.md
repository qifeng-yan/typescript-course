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

Type union uses the OR operator **|** to allow multiple types. When a variable is annotated with multiple types, Typescript will notify the user when the user tries to apply a function which works only with one of the annotated types. To fix this, you can use Type Narrowing, performing a simple type check before working with the variable.

You can annotate an array in which both strings and numbers are allowed as the following example:

let age: (string | number)[] = [];

### Literal Type

You can annotate a variable to be from a range of certain values by using the literal type.

For example, if you want to allow only valid options such as 'yes' and 'no', do the following:

let answer: 'yes' | 'no' = 'yes';

The answer is initialized as 'yes'. It can be reassigned as 'no' and 'yes'. Other values will cause Typescript complaint.

### Tuple

Tuple is a special type of array with a fixed length, and its elements are of fixed types in a specific order.

However, strangely method that can alter the array such as push() and pop() can still be applied to tuple. This is also a limitation of Typescript.

To declare a tuple, do

type Car = [ string ];

In this case, the type Car is a tuple that can contain one string element.

### Enum

Enum is a set of values that are usually used to refer to e.g. status, which will be reused again and again and not supposed to change.

### Interface

Interface is very similar to type alias, but only can be used to annotate object.

You can use Interface to describe the shape of an object, which can contain multiple types of values and even functions(methods).

Interface can be "reopen". By annotating an interface again, you add to the interface instead of overwriting the interface.

You can also extend interface. By declaring a new interface and use the keyword extend, you annotate the new interface with the same shape as one or more previously declared interfaces in addition to the new properties.

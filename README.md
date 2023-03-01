# This is a learning diary of the udemy Typescript course by Colt Steele

## Declaration of type

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

# This is a learning diary of the udemy Typescript course by Colt Steele

## Declaration of variable and type

In Typescript, a variable should be declared in the following format:

{declaration method} {value name} : {type name} = {variable value}

Example:

const catName : string = 'Micky';
let age : number = 20;
let gameOver : boolean = false;

However, it is not necessary. A less verbose way to do this is by _type inference_.

For example, by declaring _let age = 20_, number is _inferred_ by Typescript to be a number.

### Typescript knows what methods are available according to the declared type of the variable.

### Typescript notifies the author when the author tries to assign the variable a value of a different type.

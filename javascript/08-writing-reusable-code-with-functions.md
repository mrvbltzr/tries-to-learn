
<div id="title" align="center">
<a href="#"><img src="https://img.shields.io/badge/javascript-ffca28?style=for-the-badge&label=Mark%20Tries%20To%20Learn" alt="Mark Tries To Learn" /></a>
<a href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/">
<img src="https://img.shields.io/badge/The_Modern_JavaScript_Bootcamp_Course-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Modern JavaScript Bootcamp Course" />
</a>
<h1>Writing Reusable Code With Functions</h1>
<br />
</div>

## What is a Function?

- A **function** is a **reusable procedure**. It is a chunk of code that we wrap up together so we can use it again later.

- We can think of functions like **little machines**. We build the machine once, and every time we want it to do its job, we just "press a button" to run it.

- Using functions helps us keep our code organized and prevents us from writing the same code over and over.

### Functions vs. Methods

- We have actually been using functions already. Things like `toUpperCase` or `indexOf` are **built-in functions**.

- In JavaScript, these are often called **methods**. Methods are just functions that are built into the language or belong to a specific object.

```js
/**
 * Syntax:
 *
 * @returns {string} - A new string converted to uppercase.
 */
string.toUpperCase();
```

### The Two-Step Process

- Every function has a **two-step process**.

- The first step is to **define** the function. This is like "registering" the code or telling JavaScript how the machine should work. Defining the function does not run the code.

- The second step is to **execute** or **run** the function. We can run it one time, 100 times, or whenever we need it.

## Creating and Executing Functions

### Function Declaration Syntax

- We start with the `function` keyword, followed by a **space** and a **name**.

- The name must be a **valid identifier**. This means it cannot have spaces, cannot start with a number, and cannot be a reserved word like `const` or `if`.

- After the name, we add **parentheses** `()`. Sometimes we put information inside these, but they are always required.

- Finally, we use **curly braces** `{}`. All the code we want the function to run goes inside these braces. This is called the **function body**.

```js
/** Syntax: */
function funcName() {}
```

### How to Execute a Function

- To run a function we created, we write the function name followed by **parentheses** `()`.

- If we forget the parentheses and only type the name, JavaScript will just show us the code inside the function instead of **executing** it.

- We can call functions inside other pieces of logic, such as **loops**, to make them run multiple times automatically.

```js
/* --------------------------------------------
Example: Defining and calling a simple function
-------------------------------------------- */

// Step 1: Define the function
function grumpus() {
  console.log("UG... you again?");
  console.log("For the last time...");
  console.log("Leave me alone!");
}

// Step 2: Execute the function
grumpus();

// This will run the grumpies function 5 times
for (let i = 0; i < 5; i++) {
  grumpus();
}
```

```js
/* ----------------------------------------
Example: Logic for a single random die roll
---------------------------------------- */

function rollDie() {
    // Generate a number from 1 to 6
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`rolled ${roll}`);
}

rollDie();
```

### Calling Functions Inside Other Functions

- We can call a function from **inside** another function.

- This is helpful when we want to group multiple actions together, like rolling **six dice** at once for a game.

- By putting a function call inside another function, we can organize our code and make it easier to read.

```js
/* ------------------------------------------------
Example: Calling a function within another function
------------------------------------------------ */

function throwDice() {
    // We call the rollDie function multiple times
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

throwDice();
```

## Function Arguments & Parameters

### Arguments

- **Arguments** are a fancy way of saying inputs to a function.

- Most functions we have seen so far do the same thing every time, but **arguments** let us change their behavior.

- We can use **arguments** to make functions more flexible, like telling a greeting function which name to use.

- We already use **arguments** with built-in methods, such as passing a string into `indexOf` to find its location.

- Some methods, like `toUpperCase`, do not take any **arguments** and just do one set task.

### Parameters

- When we write a function, we put a variable name inside the parentheses. This variable is called a **parameter**.

- A **parameter** acts as a placeholder for the value we will pass in later.

- We can name a **parameter** almost anything, but it must be a valid JavaScript identifier. It cannot have spaces or start with a number.

- In JavaScript, the function does not care what type of data we pass in. It could be a string, a number, or even an array.

- If we do not pass any value when calling the function, the **parameter** will be `undefined`, but the code will not crash.

### What's the Difference?

- A **parameter** is the placeholder name we use when we define a function. For example, in `function square(num)`, `num` is the **parameter**.

- An **argument** is the actual value we pass into the function when we run it. If we call `square(4)`, then `4` is the **argument**.

- We can use these inputs to control things like loops. For example, we can tell a dice function exactly how many times to roll.

```js
/* -----------------------
Example: Greeting a person
----------------------- */

function greet(nickname) {
    console.log(`Hi, ${nickname}!`);
}

greet('Tim');
/* Result: Hi, Tim! */

greet(25);
/* Result: Hi, 25! */

greet();
/* Result: Hi, undefined! */


/* ---------------------------------------------
Example: Rolling dice a specific number of times
--------------------------------------------- */

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        console.log(rollDie());
    }
}

throwDice(3);
/* Result: (Prints 3 random numbers) */
```

> [!info] MARK'S NOTE
>
> - Ang **arguments** ang dahilan bakit ~~naghihiwalay ang magkasintahan~~ nag-iiba ang takbo o nagiging flexible/dynamic ang result ng function. Ito yung pinapasa pag **tinawag** ang function.
> 
> - Huwag malito between arguments and parameters. Ang **parameter** ang term sa "variable inside the function's parenthesis". Also known as **placeholders**.
> 
> Isipin na lang natin na ang:
>
> - **parameters** - when defining a function
> - **arguments** - when executing a function

### Using Multiple Parameters

#### Definition and Input Order

- We can define functions that take more than one input by separating **parameters** with **commas**.

- The **order** of the **arguments** is very important. JavaScript assigns values to **parameters** from left to right.

- If we change the order of the **arguments**, the result of the function may change, especially in math like division.

```js
/* ---------------------------------
Example: Adding and dividing numbers
--------------------------------- */

// We use x and y as parameters
function sum(x, y) {
  console.log(x + y);
}

sum(4, 5);
/* Result: 9 */

function divide(a, b) {
  console.log(a / b);
}

// Order matters: 1 is a, 4 is b
divide(1, 4);
/* Result: 0.25 */

// Now 4 is a, 1 is b
divide(4, 1);
/* Result: 4 */
```

#### Data Types and Missing Arguments

- JavaScript is **type agnostic**, which means it does not check if the input is a number, a string, or something else. It will try to run the code with whatever we provide.

- If we do not provide enough **arguments** when calling a function, the missing **parameter** will be **undefined**.

- Performing math with **undefined** usually results in **NaN**, which stands for **Not a Number**.

```js
/* ---------------------------------------
Example: Passing strings or missing values
--------------------------------------- */

// Passing a string instead of a number
divide("hi", 4);
/* Result: NaN */

// Missing the second argument (b becomes undefined)
divide(5);
/* Result: NaN */
```

## The `return` Statement vs. Printing

### Understanding Return Values

- In JavaScript, there is a big difference between printing a value and **returning** a value.

- When we use `console.log`, we are only printing text to the screen for us to see, but the computer does not save it.

- If we run a method like `toUpperCase`, it **returns** a value that we can see in the console with a small arrow pointing to the left.

- We must **capture** a return value in a **variable** if we want to save it and use it later in our code.

- In real world applications, we rarely use `console.log` because we mostly **return** values to be used by other functions.

- If we make a function that only prints a value but does not have a **return statement**, it will output **undefined** when we try to save it to a variable.

```js
/* --------------------------------------------
Example: Capturing return values from functions
-------------------------------------------- */

// Storing a return value in a variable
const scream = "hello".toUpperCase();

// A function that only prints (returns undefined)
function addAndPrint(x, y) {
  console.log(x + y);
}

const sum = addAndPrint(1, 2);
/* sum is undefined */

// A function that returns a value correctly
function add(x, y) {
  return x + y;
}

const total = add(4, 5);
/* total is 9 */
```

## Using the Return Keyword

### Rules

- We use the **return keyword** to tell the function what specific value it should send back as an output.

- When we use an **expression** like `x + y` after the keyword, it figures out the math first and then returns the result.

- A function can only return **one thing** at a time; it cannot return two separate values at once.

- If we need to send back multiple pieces of data, we can group them into an **array** or a **string**.

- We can write **multiple return statements** in a single function to handle different situations.

### Execution

- We use the `return` statement to send a value back from a function, but it also **ends function execution**.

- When JavaScript reaches a `return` statement, the function **stops immediately**. Any code written after that `return` will not run.

- This behavior happens regardless of how many lines of code come after the `return`.

### Conditional Returns

- If we put a `return` inside an `if` statement, it will only stop the function if that **specific condition is met**.

- We can have multiple `return` statements in one function, but **only the first one that gets executed** will run. Once it runs, the rest of the function is ignored.

```js
/* ----------------------------------------
Example: Code after return will not execute
---------------------------------------- */

function square(x) {
  return x * x;
  console.log('All done'); // This will never run
}

/* ------------------------------------
Example: Multiple returns in a function
------------------------------------ */

function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
    console.log('Yay'); // This will never run
  }
  return false;
}
```

### Removing Else Blocks

- We can make our code shorter by **removing the else block**.

- Since a `return` inside an `if` block stops the function, we do not need an `else` to handle the other case. If the `if` condition is false, the function naturally moves to the next line.

### Returning Boolean Expressions

- For simple "yes or no" checks, we can return the **result of a comparison** directly.

- A comparison like `color === 'purple'` already results in `true` or `false`, so we can just `return` that expression on one line.

```js
/* -----------------------------------
Example: Shortening a boolean function
----------------------------------- */

// Instead of using if/else, we can just do this:
function isPurple(color) {
  return color.toLowerCase() === 'purple';
}

console.log(isPurple('red'))
```

### Using Returns in Loops

- A `return` statement will **stop the entire function**, even if it is inside a loop.

- It does not just break out of the loop. It **halts the whole function execution** immediately.

- We can use this to our advantage by returning `true` as soon as we find what we are looking for.

- If the loop finishes and we have not returned anything, we can put a **final return statement** at the end of the function to act as a "last resort."

```js
/* ---------------------------------------
Example: Using return to stop a loop early
--------------------------------------- */

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true; // Found it, so stop everything and return true
    }
  }
  return false; // Loop finished without finding it, so return false
}

const colors = ['blue', 'pink', 'magenta'];
containsPurple(colors); 
/* Result: true */
```

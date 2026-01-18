
<div id="title" align="center">
<a href="#"><img src="https://img.shields.io/badge/javascript-ffca28?style=for-the-badge&label=Mark%20Tries%20To%20Learn" alt="Mark Tries To Learn" /></a>
<a href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/">
<img src="https://img.shields.io/badge/The_Modern_JavaScript_Bootcamp_Course-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Modern JavaScript Bootcamp Course" />
</a>
<h1>An Advanced Look at Functions</h1>
<br />
</div>

## Intro to Function Scope

- **Scope** is the idea of variable visibility in our code. It refers to the specific part of the code where we can access or use a variable.

- Depending on where we define a variable, other pieces of our code may or may not be able to see it.

- When we define a variable inside a **function**, it is only accessible inside that specific function. If we try to use that variable outside of the function, JavaScript will give us an error because it does not exist in the outer scope.

```js
function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'teal';
}

lol();
console.log(person); // Uncaught ReferenceError: person is not defined
```

- This rule is the same whether we use `let`, `const`, or `var` to define the variable.

- Even if we execute the function first, the variables inside it remain locked to that function's **scope**.

- We can have multiple functions that use the same variable names because they are in different **scopes**. A variable named `age` in one function is completely separate from a variable named `age` in another function.

- We can also have a variable outside a function and another one with the exact same name inside a function.

- When we are inside the function, JavaScript will look for the nearest version of that variable in the current **scope**.

```js
let bird = 'Mandarin Duck';

function birdWatch() {
    let bird = 'Golden Pheasant';
    console.log(bird);
}

birdWatch(); /* Result: Golden Pheasant */
console.log(bird); /* Result: Mandarin Duck */
```

> [!info] MARK'S NOTE
>
> Imagine ang function scoping ay isang kwarto na may mga tao sa loob. Kung nasa labas ka ng kwartong ito, hindi mo malalaman ang gender ng mga taong ito kung hindi mo sila nakikita.

## Block Scope

- Blocks in JavaScript are defined by **curly braces** `{}`.

- We use blocks in things like `if` statements, `for` loops, and `while` loops.

- It is important to remember that a code block is different from an **object literal**, even though they both use curly braces.

- When we use `let` or `const` to create a variable inside a block, that variable is **block scoped**.

- This means we cannot use that variable outside of the specific curly braces where it was made.

- If we try to access a `let` or `const` variable outside its block, JavaScript will give us an **error**.

### Comparing `let`, `const`, and `var`

- The keyword `var` does not follow block scope rules. If we declare a variable with `var` inside a block, we can still access it **outside** of that block.

- This is a major difference between `var` and the newer `let` and `const` keywords. See: [Variables](02-js-values-and-variables.md#Variables)

- Using `var` can be risky because it can lead to **unintended consequences** by keeping variables alive longer than they are needed.

```js
if (true) {
    let animal = 'eel';
    var fish = 'shrimp';
}

console.log(animal); /* Result: Error: animal is not defined */
console.log(fish); /* Result: shrimp */
```

### Re-declaring Variables

- We cannot **re-declare** a variable in the same scope using `let` or `const`. If we try to use the same name twice in the same scope with `let`, the code will break.

- With `var`, we can re-declare variables as much as we want, which can make it hard to track our data.

- Because `let` and `const` are block scoped, we can use the same variable name if they are in **different blocks**.

#### Problem with `var`

- A common problem with `var` happens in **loops**. If we use `var i` in a loop, that `i` continues to exist even after the loop finishes.

- If we have another variable named `i` elsewhere in our code, the loop variable might **overwrite** it.

```js
var i = 10;

for (var i = 0; i < 3; i++) {
    // This loop uses var
}

console.log(i); /* Result: 3 (The value 10 was overwritten) */
```

- Using `let` in a loop prevents this because the variable is destroyed as soon as the loop block ends.

```js
let j = 10;

for (let j = 0; j < 3; j++) {
    // This loop uses let
}

console.log(j); /* Result: 10 (The loop variable did not leak) */
```

```js
function doubleArray(arr) {
    const result = []; // This is function scoped

    for (let num of arr) {
        let double = num * 2; // This is block scoped
        result.push(double);
    }

    // We can access result here, but not double
    return result;
}

const doubled = doubleArray([1, 2, 3]);

console.log(doubled); /* Result: [2, 4, 6] */
```

## Lexical Scope

- **Lexical scope** happens when we have **nested functions**, which are functions defined inside other functions.

- In this setup, an **inner function** has access to variables defined in its **parent function**.

- This is a one-way relationship. While the **inner function** can see the parent's variables, the **parent function** cannot see variables defined inside the **inner function**.

- We say that these functions are **lexically bound**, meaning they are tied to the scope of their outer environment.

```js
function outer() {
  let movie = 'Amadeus';

  function inner() {
    // We can access 'movie' from the parent function
    console.log(movie.toUpperCase());
  }

  inner();
}

outer(); /* Result: AMADEUS */
```

### The Variable Lookup Process

- When we use a variable, JavaScript first looks for it inside the **current function**.

- If it does not find the variable there, it moves up to the **nearest outer scope** to look again.

- This continues level by level until it finds the variable or runs out of parent functions.

- If an **inner function** defines its own variable with the same name as a parent's variable, it will use its own local version first.

```js
function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Shining';

        function extraInner() {
            // It looks at 'inner' first,
            // finds 'The Shining', and stops searching.
            console.log(movie.toUpperCase());
        }

        extraInner();
    }

    inner();
}

outer(); /* Result: THE SHINING */
```

### Practical Applications

- We use **lexical scope** frequently when working with modern libraries like **React**.

- It allows us to group a main component, like a `TodoList`, with several smaller helper functions inside it.

- By doing this, functions like `addTodo` or `removeTodo` can share access to parent variables like `toDos` or `username`.

- This helps us keep our code organized while making sure different parts of the code can still talk to each other.

> [!info] MARK'S NOTE
>
> Ang **lexical scope** ay parang room na may one-way mirror. Kung nasa reflective side (outer room) ka, ang makikita mo lang ay ang sarili mong kwarto. Pero kung nasa other side ka naman (inner room), makikita mo ang nasa loob kasama ang sarili mong kwarto.

## Function Expressions

- We have been using **function statements** where we give a function a name right away.

- A **function expression** is another way to define a function by storing it inside a **variable**.

- We can call these functions by referencing the **variable name** and adding parentheses.

- While there are small differences in how they behave, like **hoisting**, they mostly work the same way as regular functions.

### Named Function Expressions

- We can give the function a name even when it is stored in a variable. This is called a **named function expression**.

- Even if we give the function a name, we still use the **variable name** to call it.

- Using the internal name to call the function from the outside will not work and will result in an error.

```js
const product = function multiply(x, y) {
    return x * y;
};

product(3, 5);  /* Result: 15 */
multiply(3, 5); /* This would result in an error */
```

## Functions as Objects

- In JavaScript, **functions** are treated as **objects**. This means we can treat them like any other value, such as a number or a string.

- Because they are values, we can store **functions** in variables, **arrays**, or even **objects**.

- This flexibility allows us to pass **functions** around our code and use them in many different ways.

### Storing Functions in Arrays

- We can group different **functions** together by putting them into an **array**.

- To run a **function** that is inside an **array**, we first access it using its **index** and then add parentheses `()` to execute it.

- We can use a **loop**, like a `for...of` loop, to go through an **array** of **functions** and run each one one by one.

- When we reference a **function** name without the parentheses `()`, we are just looking at the **function** value. We must use `()` to actually make the **function** do its work.

```js
function add(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// We store them in an array
const operations = [add, subtract, multiply, divide];

// We can run one by its index
operations[1](100, 4); /* Result: 96 */

// We can loop over the array to run all of them
for (let func of operations) {
    let result = func(30, 5);
    console.log(result);
}

/* 
Result: 35
Result: 25
Result: 150
Result: 6
*/
```

### Methods: Functions in Objects

- We can store a **function** as a property inside an **object**.

- When a **function** is part of an **object**, it is called a **method**.

- We use this all the time with built-in JavaScript features. For example, when we use `toUpperCase` on a string or `indexOf` on an array, we are calling a **method**.

```js
function multiply(x, y) {
    return x * y;
}

const thing = {
    doSomething: multiply
};

thing.doSomething(50, 2); // Result: 100
```

## Higher Order Functions

- **Higher order functions** are functions that operate on or with other functions.

- This term usually refers to functions that do one of two things: they either accept a function as an **argument** or they **return** a function.

- We can pass a function into another function just like we pass a string or a number.

- When we define a function that accepts another function, we can name the **parameter** whatever we want, such as `func`, `f`, or `action`.

- Inside the higher order function, we use the parameter name followed by parentheses `()` to **execute** the function that was passed in.

```js
function callThreeTimes(f) {
    f();
    f();
    f();
}

function cry() {
    console.log("Boo hoo! I'm so sad.");
}

function rage() {
    console.log("I hate everything.");
}

callThreeTimes(cry);

/* Result: 
Boo hoo! I'm so sad.
Boo hoo! I'm so sad.
Boo hoo! I'm so sad.
*/
```

- This is a very common pattern in **JavaScript**, and we will see it often when using built-in methods for arrays.

- We use this logic to create flexible code, such as a function that repeats an action a specific number of times or a function that randomly chooses between two different actions.

```js
function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

function rage() {
    console.log("I hate everything.");
}

repeatNTimes(rage, 5); // Calls rage 5 times
```

```js
function pickOne(f1, f2) {
    let rand = Math.random();
    
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
}

pickOne(cry, rage); // Randomly calls either cry() or rage()
```

## Function Factories

- We can create functions that **return other functions** as their output. We can think of these as **function factories**. The outer function acts like a machine that builds and returns a new, specific function for us to use.

- This is possible because functions in JavaScript are **values**. Just like we can return a number or a string, we can return a function.

- The inner function keeps access to the variables defined in the outer function. This is called **lexical scope**. It means the returned function "remembers" the values it was created with.

```js
function multiplyBy(num) {
    return function(x) {
        return x * num;
    };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

console.log(triple(6)); /* Result: 18 */
console.log(double(5)); /* Result: 10 */
console.log(halve(9));  /* Result: 4.5 */
```

> [!info] MARK'S NOTE
>
> Sa example sa taas, isipin mo na lang na ganito: kapag tinawag mo ang multiplyBy at pinasahan mo ng value, ganito ang final function:
>
> ```js
> const triple = function (x) {
>    return x * 3;
> }
> ```
>
> Pero... hindi sya hard-coded, isa lamang syang reference.
> The function **captures a reference** to the variable `num` from its parent scope.

```js
function makeBetweenFunc(x, y) {
    return function(num) {
        return num >= x && num <= y;
    };
}

const isChild = makeBetweenFunc(0, 18);
const isNineties = makeBetweenFunc(1990, 1999);
const isNiceWeather = makeBetweenFunc(60, 79);

console.log(isChild(17));       /* Result: true */
console.log(isNineties(1992));  /* Result: true */
console.log(isNiceWeather(98)); /* Result: false */
```

## Callbacks

- **Callbacks** are functions that we pass into other functions as arguments.

- The outer function then calls the callback function inside itself.

- We use callbacks all the time in JavaScript, even if we did not use the name for them before.

- They are very useful for tasks that take time, like getting data from an API or waiting for a user to click a button.

```js
function grumpy() {
    alert('Go away!');
}

// We pass the function name without parentheses
setTimeout(grumpy, 5000);
```

### Using Anonymous Functions

- We often use **anonymous functions** as **callbacks**. These are functions that do not have a name.

- We use them when we only need the function for a one time task and do not need to use it anywhere else in our code.

- This keeps our code cleaner because we do not have to create a separate variable or name for every small task.

```js
setTimeout(function() {
    alert('Welcome!');
}, 3000);
```

```js
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    alert('Why did you click me?');
});
```

## Function Hoisting

- **Function declarations** are fully hoisted, which means we can call a function even before we write it in our file. This works because the JavaScript interpreter processes these functions first before running the rest of the code.

```js
howl(); /* Result: AWOOOO */

function howl() {
    console.log('AWOOOO');
}
```

- **Function expressions** behave differently because they are stored in variables.

- If we use `var` for a function expression, the variable name is hoisted but its value is `undefined`. If we try to call it, we get an error saying it is not a function, because `undefined` is not callable.

```js
hoot(); /* Result: Uncaught TypeError: hoot is not a function */

var hoot = function() {
    console.log('Whoo hoo!');
};
```

- If we use `let` or `const` for a function expression, it is not hoisted at all, and we will get an error if we try to call it too early.

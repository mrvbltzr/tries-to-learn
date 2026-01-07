
<div id="title" align="center">
<a href="#"><img src="https://img.shields.io/badge/javascript-ffca28?style=for-the-badge&label=Mark%20Tries%20To%20Learn" alt="Mark Tries To Learn" /></a>
<a href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/">
<img src="https://img.shields.io/badge/The_Modern_JavaScript_Bootcamp_Course-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Modern JavaScript Bootcamp Course" />
</a>
<h1>Controlling Program Logic and Flow</h1>
<br />
</div>

## Making Decisions in JS

- Logic is the foundation for implementing **decisions** and **choices** within our code, allowing for different outcomes based on specific conditions.

- We need logic to build anything remotely interesting, such as **applications** or **games**, so the program isn't the exact same every time.

- Most modern applications we interact with daily rely on hundreds of **decision-making** processes to function correctly.

> [!info] MARK'S NOTE
> Malaking parte ng coding ang conditions. Basta, importante sya...

## Comparison Operators

- We use comparison operators to evaluate the relationship between two values, which is fundamental for **making decisions** in our programs.

- A practical example of this is a website tracking how many free articles a user has read to see if they have reached their **monthly limit**.

- Every comparison operation will always return a **boolean value**, meaning the result is either `true` or `false`.

- There are four primary relational operators:
    - `>` (**greater than**)
    - `<` (**less than**)
    - `>=` (**greater than or equal to**)
    - `<=` (**less than or equal to**)

```js
/* Example: Basic Numeric Comparisons */

-2 > 1; // false
10 < 9999; // true
2 >= 2; // true
2 >= 5; // false
```

- Although we can compare hardcoded numbers, we usually use these operators with **variables** or data we don't control, such as checking a `string.length`.

```js
/* Example: Comparing Length Properties */

"Hello!".length >= "Hello".length; // true
```

> [!info] MARK'S NOTE
> - Laging `true` or `false` ang resulta ng mga comparisons. Tulad sa tunay na buhay.

### String Comparisons

- We can also compare strings using relational operators, but the behavior is not always based on standard **alphabetical order**.

- Behind the scenes, JavaScript uses **Unicode** values (a unique number assigned to every character) to determine the result of a comparison.

- A notable rule in this system is that all **uppercase letters are considered "less than" lowercase letters**.

- Symbols, punctuation, and spaces also have specific positions in the **Unicode table**, which can lead to results that aren't immediately intuitive.

- While comparing strings this way is possible, it is much more common to use these operators with **numbers**.

```js
/* Example: String Comparisons via Unicode */

'a' > 'A'; // true (lowercase has a higher Unicode value)
'B' < 'a'; // true (all uppercase come before lowercase)
'#' < '$'; // true (based on their specific Unicode order)
```

> [!info] MARK'S NOTE
> Although pwede ito sa strings (via unicode), there's no sense na gamitin ito sa relational operators. More sa numbers lang dapat. Ano ba iko-compare mo sa letters? Mas malaki ang "A" kaysa kay "a"? Palakihan ba ito ng titik?

## Double Equal (`==`)

- The `==` operator is commonly known as the **equality operator**. It checks for the equality of values but **ignores the data type**.

- JavaScript uses a process called **coercion** to facilitate this. Coercion is simply a term for **converting** values to a common type so they can be compared directly.

- If the values are the same after this conversion, the expression returns `true`. Otherwise, it returns `false`.

- This behavior often leads to **unexpected results** because JavaScript will try to force different types—like strings and numbers—to match.

- Note that **null** and **undefined** are considered equal when using `==`, despite being two distinct primitive values.

```js
/* Example: Basic Equality with Same Types */

5 == 5; // true
'apple' == 'apple'; // true
false == false; // true
```

```js
/* Example: Equality with Coercion (Different Types) */

5 == '5'; // true (number vs string)
0 == ''; // true (number vs empty string)
0 == false; // true (number vs boolean)
null == undefined; // true (distinct primitives)
```

> [!info] MARK'S NOTE
> - **coercion** = "sapilitang pagpapalit"
> - Sa modern dev, hindi na masyadong ginagamit ang double equals. Mas nagko-cause ito ng bug sa mga large projects.

## Triple Equals (`===`)

- We use **triple equals** (`===`), also known as the **strict equality operator**, to check for both **value and type**.

- **Triple equals** is more **precise** and specific because it does not perform type coercion.

- Using `==` can lead to **weird behavior** or **unexpected results**; for example, `0 == false` evaluates to `true`, which could cause errors if we are checking for a specific boolean value.

- In general, we should use `===` **99.9% of the time** to ensure our comparisons are accurate.

```js
/* Example: Strict vs. Loose Equality */

2 == '2'; // true (value is the same, type is ignored)
2 === '2'; // false (types are different)

0 == false; // true
0 === false; // false

undefined == null; // true
undefined === null; // false
```

```js
/* Example: Checking Login Status */

let isLoggedIn = 0;

isLoggedIn == false; // true (this could be a bug)
isLoggedIn === false; // false (this is more accurate)
```

> [!info] MARK'S NOTE
> - Mas strict pa sa nanay mo.
> - Ginagamit ng almost lahat ng devs at codebases.
> - Bukod sa value, kino-compare din nito ang type ng value.

## Non-equality Operators

- We have two ways to check if values are **not equal**, which function as the counterparts to the equality operators.

- The **loose non-equality** operator (`!=`) is the cousin of `==` and **ignores type** differences.

- The **strict non-equality** operator (`!==`) is the cousin of `===` and cares about both **value and type**.

- We should almost always use the **strict version** (`!==`) to avoid the same coercion issues found with double equals.

```js
/* Example: Non-equality Comparisons */

1 != '1'; // false (they are treated as equal)

1 !== '1'; // true (they are not strictly equal because types differ)
```

## JavaScript Console (REPL)

- The JavaScript console in the browser is a **REPL**, which stands for **Read-Evaluate-Print-Loop**.

- It **reads** the code we type, **evaluates** the logic, **prints** the result immediately, and **loops** to wait for the next command.

- While the REPL is great for testing small snippets, it is **not suitable for building applications** because our code is not saved; refreshing the page wipes everything out.

### Running JavaScript via HTML

```html
<!-- Syntax: -->
<script src="path/to/file.js"></script>
```

- To create persistent scripts, we must write our code in a text editor (like **VS Code**) and save it as a `.js` file.

- Browsers cannot execute a standalone `.js` file; we must **link the JavaScript file** to an **HTML file** for it to run.

- We use the **`<script>` tag** with a `src` (source) attribute to point to our JavaScript file path.

- In VS Code, we can use the `!` followed by `tab` shortcut to quickly generate a **standard HTML boilerplate**.

- The placement of the `<script>` tag doesn't strictly matter for simple code, but it is common practice to place it at the **bottom of the `<body>` tag** to ensure it doesn't interfere with HTML loading.

- We run our code by **opening the HTML file** in a browser (e.g., double-clicking the file or right-clicking to "Open with Chrome").

```js
/* Example: Linking a Script in HTML */

/* index.html */
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My First JS Script</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>

/* app.js */
alert("it's working");
```

### Printing Values in Console

```js
/* Syntax: */
console.log(obj1, obj2, /* … , */ objN);

console.error(data, /* … , */ objN);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ----------------------------------------------------------- | -------------------------- |
| `obj1, obj2,...` | The values or expressions we want to output to the console. | <center>✔️</center> |

- In a script file, simple expressions like `3 + 4` are evaluated by JavaScript, but the **results are not displayed** automatically.

- We use **`console.log()`** to explicitly print values to the console so we can see what our code is doing.

- This method is essential for **debugging** and checking the values of our variables while the script runs.

- **`console.error()`** is a variation that prints messages specifically as errors, typically highlighting them in **red** within the console.

- We can pass **multiple arguments** into `console.log()` by separating them with commas; the browser will print them all on one line separated by spaces.

```js
/* Example: Logging different values */

console.log(7);

console.log(3 + 4, "Hello", true);

console.error("This is a custom error message");
```

## Logic and Conditionals

- We use **conditional statements** to incorporate logic into our scripts, allowing our code to make decisions rather than just running linearly.

- A **conditional statement** typically consists of three parts: `if`, `else if`, and `else`.

- These structures allow us to control which blocks of code execute based on specific conditions.

### `if`

- The `if` statement is the core mechanism for running code only when a **given condition is true**.

- If the condition inside the parentheses evaluates to **true**, the code within the following block (curly braces) will execute.

- If the condition evaluates to **false**, JavaScript simply skips that block of code and continues with the rest of the script.

- **Conditions** rely on comparison and logical **operators** to determine the flow of the program.

- Every condition we write must evaluate to a **boolean** value: either `true` or `false`.

- We can use operators like `===` (strict equality), `!==` (not equal), or `<` (less than) to create these conditions.

```js
/* Example: Simple Equality Check */

if (1 === 1) {
  console.log("It's true");
}
```

- We can use **variables** to store data, such as a numeric, and then use an `if` statement to print specific feedback based on that value.

```js
/* Example: Performance Review Logic */

let rating = 3;

if (rating === 3) {
  console.log("YOU ARE A SUPERSTAR");
}
```

- We can determine if a number is **odd** by using the **modulo operator** (`%`). By checking if `num % 2!== 0`, we can confirm the number has a remainder when divided by two.

```js
/* Example: Checking for Odd Numbers */

let num = 37;

if (num % 2 !== 0) {
  console.log("Odd number");
}
```

### `else if`

- **`else if`** allows us to provide an additional condition to check, but only if the previous **`if` condition** was **false**.

- Unlike having two separate **`if` statements**, which can both run if both conditions happen to be true, an **`else if` chain** ensures that only **one block of code** will ever execute.

- We can chain as many **`else if`** blocks as we need to handle various scenarios, though we should avoid over-complicating our code with too many of them.

- An **`else if`** statement is only valid if there is an **`if` statement** before it. JavaScript will throw an error if we try to use **`else if`** on its own.

- We use this structure to create a logic flow where we say: "If the first thing isn't true, try this next thing. If that isn't true, try this third thing."

```js
/* Example: Difference between separate if statements vs else if */

let rating = 3;

// With two separate ifs, BOTH could run if conditions overlap
if (rating === 3) {
    console.log("SUPERSTAR");
}
if (rating >= 2) {
    console.log("MEETS EXPECTATIONS"); 
}
// Result: Both "SUPERSTAR" and "MEETS EXPECTATIONS" print.

// With else if, only the FIRST true condition runs
if (rating === 3) {
    console.log("SUPERSTAR");
} else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
}
// Result: Only "SUPERSTAR" prints.
```

```js
/* Example: Using multiple else if statements for a performance review */

let rating = 1;

if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR!");
} else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
} else if (rating === 1) {
    console.log("NEEDS IMPROVEMENT");
}
```

### `else`

- We use the `else` statement as the **otherwise** part of a conditional, which acts as a **fallback** when none of the previous conditions are met.

- The code inside the `else` block executes only if every condition before it—specifically the `if` and any `else if` blocks—is **false**.

- Unlike `if` and `else if`, we do not specify a condition in parentheses for `else` because it is designed to run regardless of the specific value if no other block ran.

- We **must** have an `if` statement to use an `else`; it is impossible to have an "otherwise" without an initial condition.

- While we can have multiple `else if` blocks, we can only have **one** `else` block per `if` statement.

### Binary Logic with `if` and `else`

- We often use a simple `if` and `else` structure for "yes or no" scenarios where there are only two possible outcomes.

- This structure is useful because it ensures that **one** of the code blocks will always run, providing consistent feedback to the user.

```js
/* Example: Using else as a fallback for invalid ratings */
let rating = 5;

if (rating === 3) {
    console.log('YOU ARE A PRO!');
} else if (rating === 2) {
    console.log('MEH');
} else if (rating === 1) {
    console.log('TERRIBLE');
} else {
    console.log('invalid rating');
}
```

- We can use this logic to handle high score systems, where we either update the record or notify the user that they did not beat the existing score.

```js
/* Example: Simple if/else for high score tracking */
let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
} else {
    console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}
```

### Nested Conditionals

- We can **nest conditionals** inside of one another to create multiple layers of logic, checking for specific conditions within other conditions.

- We place these nested statements—whether they are `if`, `else`, or `else if`—inside the **curly braces** of the outer conditional.

- Nesting allows us to perform **sequential validation**, such as checking a password's length first, and then checking for spaces only if the length is sufficient.

- While there is no technical limit to nesting, it can make code **difficult to read** and understand if we have too many levels (e.g., five levels of nested `if` and `else` statements).

- In many cases, we can replace nested logic with a **single conditional** that checks multiple requirements at once.

### Truthy and Falsy Values

- Every value in JavaScript has an inherent **truthiness** or **falsiness** associated with it, even if it is not a boolean.

- While there are only two actual boolean values, `true` and `false`, we can evaluate any variable in a **conditional** context to see if it is **truthy** or **falsy**.

- Almost every value in JavaScript is **truthy**.

- There are only six specific **falsy** values: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN` (**Not a Number**).

- Any value that is not on the falsy list is automatically considered **truthy**, including all numbers except `0` and `NaN`.

- We often use truthy/falsy checks as a shorthand to see if a variable has **content** or **exists**.

- A common pattern is to check if a variable like `loggedInUser` or `username` has a value before running specific code.

```js
/* Example: Checking the truthiness of a number */
let mystery = 5;

if (mystery) {
    console.log("truthy");
} else {
    console.log("falsy");
}
// This prints "truthy" because 5 is not 0.
```

- This allows us to avoid writing complex comparisons; we simply check `if (variable)` to ensure it isn't `null`, `undefined`, or an empty string.

```js
/* Example: Checking for a logged in user */
let loggedInUser = null;

if (loggedInUser) {
    console.log("You are logged in");
} else {
    console.log("Please log in");
}
// This prints "Please log in" because null is falsy.
```

```js
/* Example: Checking if a username string is empty */
let username = "";

if (username) {
    console.log("Header: Welcome " + username);
} else {
    console.log("Header: Please enter a username");
}
// This fails the check because an empty string is falsy.
```

## Logical "AND" Operator (&&)

- **Logical operators** allow us to build more **complex expressions** by modifying or combining Boolean values within our conditionals.

- The **AND operator** is written using two ampersands `&&`. It is important to remember that a single ampersand `&` will not work for this logic.

- This operator evaluates two separate expressions (a left side and a right side). The entire statement is **only true if both sides evaluate to true**.

- If **either side is false**, the entire expression becomes **false**. This applies whether it is the left side, the right side, or both that are false.

- We use this when we have **multiple conditions** that must all be met simultaneously to execute a block of code.

> [!info] MARK'S NOTE
> - Kailangan ang parehong condition ay **true** para maging true ang buong statement.

### Combining Validations

- We can use `&&` to **combine multiple requirements** into a single statement instead of using **nested `if` statements**.

- For example, if we are validating a password, we can check if it meets the **minimum length** and **does not contain spaces** in one line.

- While combining expressions makes our code **shorter and easier to read**, we lose the ability to provide **specific feedback** for each error (e.g., telling the user specifically that the password is too short versus specifically saying it cannot have spaces).

```js
/* Example: Validating password length and spaces */

const password = 'chicken gal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}
```

### Checking for a Specified Range

- A very common use case for the AND operator is checking if a number falls **within a specific range**.

- To see if a number is between 1 and 10, we must verify that it is **greater than or equal to** 1 and **less than or equal to** 10 at the same time.

- This logic prevents numbers outside the range (like 30 or -5) from passing the conditional, even if they satisfy one part of the expression.

```js
/* Example: Checking if a number is between 1 and 10 */

let num = 3;

if (num >= 1 && num <= 10) {
    console.log("Number is between 1 and 10");
} else {
    console.log("Number is out of range");
}
```

## Logical "OR" Operator (`||`)

- The **OR operator** is represented by two **pipe characters** `||`.

- Like the **AND operator**, it evaluates two sides (left and right), but it only requires **one side to be true** for the entire expression to be considered **true**.

- If both sides are `true`, the expression is still `true`. It only evaluates to `false` when **neither side is true** (`false || false`).

- We can use **OR** to evaluate the **truthiness** of values. For example, `0 || undefined` results in `false` because both `0` and `undefined` are **falsy** values.

- This operator allows us to **combine multiple conditions** into a single line of code, preventing the need for nested or repetitive `if` and `else if` statements.

- We use the **OR operator** to handle scenarios where multiple different criteria should trigger the same outcome.

- A common example is a theater box office where different age groups (like children under 6 and seniors 65 or older) both receive the same discount or free entry. By using `||`, we can check if a person meets **either** the youth criteria **or** the senior criteria in one expression.

```js
/* Example: Theater Ticket Pricing */

let age = 78;

if (age < 6 || age >= 65) {
    console.log("You get in for free");
} else {
    console.log("You must pay");
}
```

### Chaining Multiple OR Operators

- We can **chain multiple OR operators** together to check a single variable against several potential values.

- This is useful when we want to see if a variable matches any item in a specific set of options, such as checking if a color is one of several shades of purple.

- While we can chain many `||` statements, we should keep in mind that JavaScript offers other tools like **arrays** and **built-in methods** to handle long lists of options more efficiently.

```js
/* Example: Chaining Multiple OR Conditions */

let color = "violet";

if (color === "purple" || color === "lilac" || color === "violet") {
    console.log("Great choice");
}
```

## Logical NOT Operator (`!`)

- The **Logical NOT** operator is represented by a single exclamation point `!`.

- Unlike the **AND** (`&&`) or **OR** (`||`) operators which compare two expressions, the `!` operator operates on a **single expression**.

- It works by **negating** the expression: it returns `true` if the expression is `false`, and returns `false` if the expression is `true`.

- We can use it to flip the boolean value of **falsy** values. For example, `!null`, `!0`, and `!""` all evaluate to `true`.

- Conversely, applying `!` to a **truthy** value, like a non-zero number or a non-empty string, will result in `false`.

- We can also negate the result of a comparison or expression, such as `!(0 === 0)` or `!(3 <= 4)`.

### Practical Application and Logic Rewriting

- We use the `!` operator to check for the **absence** of a value. For example, we can check if a user is **not** logged in using `if (!loggedInUser)` to perform an action like redirecting them.

- This operator provides **flexibility**, allowing us to write the same logic in multiple ways. Often, we can choose between using nested `if` statements, complex `&&`/`||` chains, or negations.

- When we have multiple conditions to check, we can wrap an `||` expression in parentheses and negate the whole thing. For instance, `!(flavor === 'grape' || flavor === 'cherry')` checks if the flavor is **neither** grape nor cherry.

- While there are many ways to achieve the same logical outcome, we should aim for the version that is the most **readable** and uses the fewest operators.

```js
/* Example: Simple Negation */

!null;           // true
!0;              // true
!""              // true
!45;             // false
!"hello";        // false
!(0 === 0);      // false
```

```js
/* Example: Checking for the absence of a user */

let loggedInUser; // currently undefined (falsy)

if (!loggedInUser) {
    console.log("Get out of here!");
}
```

```js
/* Example: Validating flavor options */

const flavor = 'watermelon';

// Checking if the flavor is NOT grape AND NOT cherry
if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log("We don't have that flavor.");
}

// Alternative way: Negating an OR expression
if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log("We only have grape and cherry.");
}
```

## Understanding Operator Precedence

- **Operator precedence** determines the specific order in which different operators are evaluated in an expression.

- Just as multiplication happens before addition in math, certain JavaScript operators take priority over others, meaning expressions do not always evaluate strictly from **left to right**.

- We can consult the **MDN precedence table** to see the exact ranking of every operator; the higher the operator is on the list, the earlier it executes.

### Order of Logical Operators

- When we work with logical operators, there is a specific hierarchy we must follow: **Logical NOT** `!`, followed by **Logical AND** `&&`, and finally **Logical OR** `||`.

- Because `&&` has a **higher precedence** than `||`, the `&&` portion of an expression will be evaluated first.

- This explains why an expression like `true || false && false` evaluates to `true`; the `false && false` is processed first, resulting in `true || false`.

```js
/* Example: Precedence of && over || */

let x = 7;

// Even though we might read this left-to-right, the AND (&&) runs first
// x === 3 (false) && x > 10 (false) evaluates to false
// Then we are left with: x (7, which is truthy) || false
// The final result is true
x || x === 3 && x > 10; 
```

> [!info] MARK'S NOTE
> So parang ganito yan:
>
> Step 1: `true || false && true`
> Step 2: `true || false` << logical "and", both conditions must be true.
> Step 3: `true` << logical "or", either conditions is true.

### Precedence of Comparison Operators

- **Comparison operators** (like `<` and `>`) have a higher precedence than **logical operators** (like `&&` and `||`).

- This allows us to write complex logic like `x < 3 && x > 1` without using parentheses, because the engine evaluates the **comparisons** first and then applies the **logical operator** to the results.

> [!info] MARK'S NOTE
> Kino-convert muna ni JS engine ang mga comparison operations into booleans and then magpo-proceed sa logical operators.

### Using Parentheses for Clarity

- **Parentheses** `()` have the **highest precedence** of all operators and will always run first.

- We should use parentheses whenever we want to **override** the default order of operations or to make our logic **clearer** for other developers.

- There is no shame in adding extra parentheses; it ensures that we and our teammates don't have to memorize the entire precedence table to understand the code.

```js
/* Example: Using parentheses to change evaluation order */

let x = 7;

// By wrapping the OR expression, we force it to run first
// (x || x === 3) evaluates to true
// Then we check: true && x > 10 (false)
// The final result becomes false
(x || x === 3) && x > 10;
```

## The Switch Statement

```js
/* Syntax: */
switch (expression) {
  case value1:
    // code to run
    break;
  case value2:
    // code to run
    break;
  default:
    // fallback code
}
```

- We use the `switch` statement as an alternative to the standard `if`, `else if`, and `else` conditional structure for **decision making and logic**.

- It is most effective in scenarios where we take **one variable** and check it against **multiple potential values**.

- Using `switch` is often **easier to read** than writing numerous `else if` statements because it eliminates the need to repeatedly write the variable name and comparison operators like `===`.

- Each potential match is defined by the `case` keyword, followed by the value we are checking for.

### The `break` Keyword and `default` Case

- One critical behavior of `switch` is that it looks for the **first match** and then executes **all subsequent code** after that match, regardless of the other cases.

- To prevent this "fall-through" behavior, we must include the `break` keyword after the code in each `case`. This tells JavaScript to **exit the switch block** once the match is handled.

- The `default` keyword acts as the **fallback**, similar to the `else` statement in a traditional conditional. It will run if none of the defined cases match the expression.

```js
/* Example: Day of the Week */

let day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('invalid day');
}
```

### Grouping Multiple Cases

- We can leverage the "fall-through" behavior of `switch` to **group multiple cases** that should execute the same piece of code.

- By placing multiple `case` labels together without a `break` between them, we can ensure that any of those matches will trigger the same result.

- This is a clean way to handle different inputs that share a **common output**, reducing duplicated code.

```js
/* Example: Grouping Emojis by Color */

let emoji = 'sad face';

switch (emoji) {
  case 'sad face':
  case 'happy face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  case 'heart':
  case 'lips':
    console.log('red');
    break;
}
```

> [!info] MARK'S NOTE
> Para syang gumagamit nang logical operator but instead na "AND", "OR" ang gamit ni switch.
>
> `if (emoji === 'sad face' || emoji === 'happy face') {}`

## The Ternary Operator

```js
/* Syntax: */
condition ? expressionIfTrue : expressionIfFalse;
```

- We use the **ternary operator** as a shortcut to condense an `if` and an `else` statement into a **single line of code**.

- It is called "ternary" because it consists of **three pieces** (unlike binary), specifically a **condition**, a **question mark** `?`, and a **colon** `:`.

- This operator only works for simple **yes or no** logic. We cannot use it if our logic requires an `else if` statement.

- The first part is the **condition**. If that condition evaluates to **true**, the code immediately following the `?` runs. If the condition is **false**, the code after the `:` runs.

- A very common and powerful use case for the ternary operator is **assigning a value to a variable** based on a specific condition.

- Although it helps shorten our code, we should avoid using it for overly complex logic that might make the code harder to read.

```js
/* Example: Rewriting a simple if/else statement */

let num = 7;

// Original version:
if (num === 7) {
  console.log('Lucky');
} else {
  console.log('bad');
}

// Ternary version:
num === 7 ? console.log('Lucky') : console.log('bad');
```

```js
/* Example: Assigning a value to a variable */

let status = 'offline';

// We want to assign a color based on the status
let color = status === 'offline' ? 'red' : 'green';

console.log(color); // Logs 'red'
```

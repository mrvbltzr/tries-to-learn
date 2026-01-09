
<div id="title" align="center">
<a href="#"><img src="https://img.shields.io/badge/javascript-ffca28?style=for-the-badge&label=Mark%20Tries%20To%20Learn" alt="Mark Tries To Learn" /></a>
<a href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/">
<img src="https://img.shields.io/badge/The_Modern_JavaScript_Bootcamp_Course-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Modern JavaScript Bootcamp Course" />
</a>
<h1>How to Model Data Efficiently</h1>
<br />
</div>

## Booleans

- We use **Booleans** as a fundamental **primitive type** that represents only two possible values: `true` or `false`.

- These values are very **efficient** regarding memory space because there are only two options.

- We use Booleans constantly for **logic** and tracking states, such as determining if a user is logged in or if a game has ended.

- When writing Booleans, we must **omit quotes**; if we use quotes, like `"true"`, JavaScript treats it as a **string** rather than the Boolean primitive.

- We can store these values in variables using `let` or `const`, depending on whether we expect the state to change.

```js
/* Example: Storing boolean values in variables */

let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true; 
```

```js
/* Example: Updating a boolean variable */

let isHungry = true;
isHungry = false;
```

### Dynamic Typing

- A key concept in JavaScript is that **variables can change type** at any point during execution.

- Unlike many other languages where a variable is locked to a specific type (like a number), JavaScript allows us to reassign a **number** to a **boolean** or vice versa.

- While this flexibility is part of the language, it is often criticized for leading to bugs, which is why **TypeScript** was created to enforce **stricter rules** and prevent type changes.

- We should be aware that even if it is possible to change types, it isn't always considered a good practice in organized code.

```js
/* Example: Changing a variable's type */

let isAngry = false;
isAngry = 1239; // The variable changes from a boolean to a number
```

## Strings

- We use strings to represent data like names, emails, and reviews by wrapping the text in **quotes**.

- We can use either **single quotes** (`'`) or **double quotes** (`"`) to define a string.

- While JavaScript accepts both, we must be **consistent** within our files to avoid confusing other developers; we should not mix quote styles for no reason.

- We can use the **`typeof` operator** to check the data type of a value. It is lowercase in JavaScript.

- Strings can contain letters, numbers, and **special characters**.

```js
/* Example: Basic string declarations and typeof */

"Ziggy" // Double quotes
'Ziggy' // Single quotes
"123"   // This is a string, not a number

typeof 87;   // "number"
typeof "87"; // "string"
```

### Working with Quotes and Errors

- If we start a string with a quote but fail to close it, JavaScript returns an **"invalid or unexpected token"** error.

- We can **nest quotes** inside other quotes as long as we use different types for the inner and outer layers.

- If we try to use the same quote type inside a string without proper handling, the string **closes prematurely**, leading to an **"unexpected identifier"** error.

```js
/* Example: Nesting quotes correctly */

// Using single quotes outside and double quotes inside
let phrase1 = 'He said, "ha ha ha"';

// Using double quotes outside and single quotes inside
let phrase2 = "He said, 'LOL'";

/* Example: Incorrect nesting that causes errors */

// This fails because the string ends at "said,"
// "OMG" becomes an unexpected identifier
// let invalid = "She said, "OMG"";
```

### String Concatenation and Variables

- We can store strings in variables using the `let` keyword.

- We use the **`+` operator** to perform **concatenation**, which is the process of shoving multiple strings together into one.

- When we concatenate, we often need to manually add a **space string** (`" "`) between variables to ensure the text is formatted correctly.

- JavaScript has "quirky" behavior when mixing types; adding a number to a string will result in the number being converted to a string and **concatenated**.

- Mathematical operators like **`-` (minus)** or **`/` (division)** do not work with strings and will result in **`NaN` (Not a Number)**.

```js
/* Example: Concatenation and variables */

let firstName = "Ziggy";
let lastName = "Canary Face";

// Concatenating with a space in between
let fullName = firstName + " " + lastName; 

console.log(fullName); // "Ziggy Canary Face"
```

```js
/* Example: Mixed types and invalid operations */

"high" + 5; // "high5" (Concatenation)

"hi" - "h"; // NaN
"hi" / 2;   // NaN
```

### String Indexing

- Strings in JavaScript are **indexed**, meaning every character is assigned a specific number based on its position.

- Indexing starts at **0** for the first character and increments by one for each character moving from left to right.

- We use **square bracket syntax** `[]` to access individual characters by passing the index number.

- If we try to access an index that doesn't exist (like an index higher than the number of characters), JavaScript returns **`undefined`**.

- This indexing pattern is common in JavaScript and will appear again when we learn about **arrays**.

```js
/* Example: Accessing characters by index */
let mySong = "Surfin USA";

mySong[0]; // "S"
mySong[1]; // "u"

// Accessing an index that does not exist
mySong[11]; // undefined
```

> [!info] MARK'S NOTE
>
> Isipin na lang natin na para tayong nagbibilang ng letters sa string pero starting from 0.

### The `length` Property

- Every string has a built-in property called **`length`** which stores the total number of characters in that string.

- The `length` counts **every single character**, including spaces, numbers, and punctuation.

- Because indexing starts at 0, the **greatest index** of any string is always **`length - 1`**.

- We can use this relationship to dynamically access the **last character** of any string, regardless of how long it is.

```js
/* Example: Using the length property */
let mySong = "Surfin USA";
mySong.length; // 11

/* Example: Accessing the last character */
let gibberish = "asdkjfhslkjdfh";
let lastChar = gibberish[gibberish.length - 1]; 
```

### String Immutability

- Strings in JavaScript are **immutable**, which means we cannot change an individual character within a string once it is created.

- While we can access a character using its index, we cannot **assign a new value** to that specific position.

- To change a string, we must create an entirely **new string** and assign it to a variable; we cannot manipulate the original value character-by-character.

```js
/* Example: Attempting to change a character */
let faveSong = "Surfin USA";

// Attempting to change the first letter to 'D'
faveSong[0] = "D";

// The string remains unchanged
console.log(faveSong); // "Surfin USA"
```

> [!info] MARK'S NOTE
>
> **immutable** = hindi nababago

### String Methods

- **Methods** are built-in pieces of functionality or actions that we can perform on specific values, such as strings or numbers.

- To call a method, we use the format `string.methodName()`, utilizing a dot and **parentheses**.

- These methods allow us to perform various tasks like searching, replacing parts of a string, changing text case, or removing extra spacing.

#### `toUpperCase` and `toLowerCase`

```js
/* Syntax: */
string.toUpperCase();
string.toLowerCase();
```

- These methods allow us to change the casing of a string to either all **uppercase** or all **lowercase**.

- Strings in JavaScript are **immutable**, which means these methods do not change the original string. Instead, they return a **new string** with the changes applied.

- We must use **parentheses** `()` to execute the action. If we omit them, the code won't run the method; it will simply reference the function itself.

- To keep the changes, we must store the result in a new variable or reassign the original variable to the returned value.

```js
/* Example: Changing Case */
let message = "you are so grounded mister";

// Returns a new uppercase version
let yell = message.toUpperCase(); 

// Original message is unchanged unless we reassign it
message = message.toUpperCase(); 
```

#### `trim`

```js
/* Syntax: */
string.trim();
```

- The `trim()` method is used to remove **leading and trailing whitespace**, including spaces and tabs at the start and end of a string.

- It is important to note that `trim()` does **not** remove spaces in the middle of a string; it only cleans up the exterior ends.

- We can utilize **method chaining**, which allows us to run multiple methods in a sequence on a single line, such as `string.trim().toUpperCase()`. Chaining works because `trim()` returns a string, and since the result is a string, we can immediately call another string method on it.

```js
/* Example: Using trim and Method Chaining */
let color = "   purple   ";

// Removes spaces from both ends
let cleanColor = color.trim(); 

// Chaining: Trims first, then converts the result to uppercase
let bigColor = color.trim().toUpperCase(); // "PURPLE"
```

### String Methods with Arguments

- Many methods require additional information, known as **arguments**, to modify their behavior.

- These **arguments** are passed inside the parentheses of the method.

- We can pass a single argument or multiple arguments, depending on the method's requirements.

#### `indexOf`

```js
/* Syntax: */
string.indexOf(searchValue);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ---------------------------- | -------------------------- |
| `searchValue` | The substring we are searching for within the string. | <center>✔️</center> |

- We use `indexOf` to find where a specific substring occurs within a string.

- The method returns the **index number** where the match starts.

- If we search for a character or substring that appears multiple times, it only returns the index of the **first occurrence**.

- This method is **case sensitive**; a capital letter will not match a lowercase letter.

- If the value is not found, the method returns **-1**. We often use this in **conditional logic** to check if a value exists.

```js
/* Example: Finding the index of substrings */
let tvShow = 'catdog';

tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z');   // -1 (not found)

/* Example: Case sensitivity and first occurrence */
'baseball'.indexOf('ball'); // 4
'baseball'.indexOf('b');    // 0 (first instance only)
'Baseball'.indexOf('b');    // 4 (ignores the capital 'B')
```

#### `slice`

```js
/* Syntax: */
string.slice(beginIndex, endIndex);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ---------------------------- | -------------------------- |
| `beginIndex` | The index where the extraction should begin. | <center>✔️</center> |
| `endIndex` | The index before which to end extraction (not inclusive). | |

- We use `slice` to extract a portion of a string and return it as a new string.

- It is important to remember that strings are **immutable**; `slice` does not change the original variable.

- If we provide only one argument (`beginIndex`), we get a slice starting from that index all the way to the end of the string.

- If we provide two arguments, the slice starts at the first index and stops **immediately before** the second index (it is not inclusive of the `endIndex`).

- We can use `slice` to isolate specific data patterns, such as removing a currency symbol from a price string.

```js
/* Example: Using slice with one and two arguments */
let sport = 'baseball';

sport.slice(4);      // "ball"
sport.slice(0, 5);   // "super" (if string was "superhero")
'superhero'.slice(0, 5); // "super"
'superhero'.slice(5, 7); // "he"

/* Example: Immutability */
let fruit = 'apple';
fruit.slice(1); 
console.log(fruit); // "apple" (original is unchanged)
```

#### `replace`

```js
/* Syntax: */
string.replace(pattern, replacement);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ---------------------------- | -------------------------- |
| `pattern` | The substring we want to find and replace. | <center>✔️</center> |
| `replacement` | The new string that will replace the pattern. | <center>✔️</center> |

- We use `replace` to search for a specific value and swap it with a different string.

- By default, this method only replaces the **first occurrence** of the pattern it finds.

- To replace all occurrences, we would need to use **regular expressions**.

- If the pattern we are trying to replace is not found, the method returns the original string unchanged without throwing an error.

```js
/* Example: Replacing a substring */
let announcement = 'baseball is entertaining';
announcement.replace('entertaining', 'ok'); // "baseball is ok"

/* Example: Replacing only the first occurrence */
'ha ha ha'.replace('ha', 'hee'); // "hee ha ha"
```

### String Escape Notation

- **Escape characters**, also known as **escape notation** or **escape sequences**, are combinations of characters used within a string to represent characters that would otherwise be difficult or impossible to include.

- These sequences always begin with a **backslash** `\`.

- When we use a backslash, it tells JavaScript that the following character has a **different meaning** than it normally would.

- While the specific characters might vary between programming languages, the concept of **escape sequences** is a standard feature across most of them.

#### Escaping Quotes and Backslashes

- We use `\'` to represent a **single quote** and `\"` for a **double quote**.

- This is particularly useful when we want to use the same type of quote for both the string wrapper and the internal text without "breaking" the string.

- If we need an actual **backslash** to appear in our string, we must use a **double backslash** `\\`.

- A single backslash on its own is **invalid** because JavaScript expects it to be followed by a character to form a valid escape sequence.

```js
/* Example: Escaping quotes within a string */
const message = "He said, \"I ain't happy\"";

/* Example: Escaping a backslash */
const backslash = "This is a backslash: \\";
```

#### Formatting Sequences

- We use `\n` to create a **new line**. This allows us to format a single string so that it displays across multiple lines.

- We use `\t` to insert a **tab** for indentation, though this is less commonly used in modern JavaScript.

- There are many other escape notations listed in the **MDN documentation**, but most are rarely used in daily coding.

```js
/* Example: Inserting a new line */
const lines = "hello\ngoodbye";

/* Example: Inserting a tab */
const tabbed = "\tha";
```

### Template Literals

- **Template literals** are special strings that allow us to embed expressions, variables, and other data directly into a single string.

- To define a template literal, we must wrap our text in **backticks** (`` ` ``) instead of standard single or double quotes.

- Backticks are usually located above the **Tab key** on a keyboard, sharing the same key as the tilde (`~`) symbol.

- One immediate advantage of using backticks is that we can include single or double quotes within our string without needing to use **escape characters**.

#### String Interpolation

```js
/* Syntax: */
`${expression}`
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
|:--- |:--- |:---: |
| `expression` | Any valid JavaScript expression, such as a variable, mathematical operation, or function call, that evaluates to a value. | <center>✔️</center> |

- The process of embedding data into a string is known as **interpolation**.

- We use the **dollar sign and curly braces** (`${}`) syntax inside backticks to tell JavaScript to step out of the string context and evaluate the code inside.

- Before template literals were introduced, we had to rely on **string concatenation** using the `+` operator, which often resulted in messy code that was difficult to read and write.

- We can perform complex logic within the braces, such as mathematical calculations or calling string methods like `.toUpperCase()`.

- This feature is particularly useful when creating **reusable templates**, such as a format for displaying multiple blog comments where only the username and timestamp change.

```js
/* Example: Basic Math Interpolation */

const result = `I counted ${3 + 4} sheep`;

console.log(result); // "I counted 7 sheep"
```

```js
/* Example: Variable Interpolation */

const animal = 'pig';
const sound = 'oink';

// Using template literals
const simple = `${animal} says ${sound}`;

// Comparison to the old concatenation method
const oldWay = animal + " says " + sound + "!";

console.log(simple); // "pig says oink"
```

```js
/* Example: Using Methods and Math Expressions */

const item = 'cucumbers';
const price = 1.99;
const quantity = 4;

const receipt = `You bought ${quantity} ${item}. Total price: $${price * quantity}`;

const shout = `${animal.toUpperCase()} says ${sound.toUpperCase()}!!!`;

console.log(receipt); // "You bought 4 cucumbers. Total price: $7.96"
console.log(shout); // "PIG says OINK!!!"
```

```js
/* Example: Logic for Age Requirements */

const minAge = 21;
const yourAge = 19;

const message = `You must be ${minAge} or older to enter. Come back in ${minAge - yourAge} years.`;

console.log(message); // "You must be 21 or older to enter. Come back in 2 years."
```

## `null` and `undefined`

- Both `null` and `undefined` are **primitive types** in JavaScript that represent the idea of **nothingness** or the **lack of a value**.

- While they share similar concepts, there is a **clear distinction** between how they are used and why they appear in our code.

- We can explicitly assign both to variables, but they serve different **semantic purposes**.

### The `null` Primitive

- **null** is the **intentional absence** of any value.

- We **explicitly assign** `null` to a variable when we want to indicate that it is **intentionally empty** or has no value yet.

- We use `null` as a **placeholder** to tell JavaScript that there is a value here, but that value is currently **nothing**.

```js
/* Example: Explicitly setting a variable to null */

let loggedInUser = null; // Starting with no user logged in

loggedInUser = 'Alan Rickman'; // A value is assigned

loggedInUser = null; // Resetting to nothing after logout
```

### The `undefined` Primitive

- **undefined** represents a variable that has been **declared but not assigned** a value.

- While we can technically set a variable to `undefined` ourselves, it is normally the **default value** we receive from JavaScript when a value is missing.

- We see `undefined` frequently when we try to access **indices that do not exist** (like in a string) or when we **initialize a variable without a value**.

- We will encounter `undefined` much more often than `null` because it is JavaScript's way of saying something is **not defined**.

```js
/* Example: JavaScript returning undefined for missing values */

let color; 
console.log(color); // undefined because it was declared but not initialized

let greet = "LOL";
console.log(greet[4]); // undefined because there is no character at index 4
```

## The `Math` Object

- We use the `Math` object as a **built-in collection** of mathematical properties and functions.

- This object is not a function itself; it is a container for **mathematical constants** and functionality.

- We must always use an **uppercase** `M` when referencing `Math`, as JavaScript is case-sensitive and will not recognize lowercase versions.

- We have access to constants like `Math.PI` (used for geometry) and `Math.E` (Euler's number), though we primarily use the object for its **methods**.

### Common Mathematical Methods

```js
/* Syntax: */
Math.floor(n);
Math.round(n);
Math.pow(base, exponent);
```

| <center>Parameter</center> | <center>Description</center>       | <center>Required?</center> |
| -------------------------- | ---------------------------------- | -------------------------- |
| `n`                        | The numeric value to be processed. | <center>✔️</center>        |
| `base`                     | The number to be raised.           | <center>✔️</center>        |
| `exponent`                 | The power used to raise the base.  | <center>✔️</center>        |

- We use `Math.floor()` to **remove the decimal portion** of a number. It does not round to the nearest integer; it simply chops off everything after the decimal.

- We use `Math.round()` to perform **standard rounding** to the nearest whole integer.

- We use `Math.pow()` to calculate the **power of a number**, taking a base and an exponent as arguments.

- Other available methods include those for **trigonometry** (sine, cosine, tangent), absolute values, and finding the hypotenuse.

```js
/* Example: Flooring and Rounding */
Math.floor(3.9999); // Returns 3
Math.round(4.6);    // Returns 5
Math.round(4.4);    // Returns 4

/* Example: Exponents */
Math.pow(7, 2);     // Returns 49 (7 squared)
```

### Generating Random Numbers

```js
/* Syntax: */
Math.random();
```

- We use `Math.random()` to generate a **random decimal** between 0 (inclusive) and 1 (exclusive).

- Because this method only returns a decimal, we must **transform the result** using other operators and methods to get a workable whole number.

- To generate a random integer within a specific range, we typically follow a **three-step pattern**: multiply the random decimal by our range, use `Math.floor()` to make it a whole number, and add a number to shift the starting point.

- Unlike some other programming languages, JavaScript does not have a built-in "random integer" method; we must **manually calculate** it using this pattern.

```js
/* Example: Random integer from 1 to 10 */
// Multiply by 10 to get 0-9.999, floor it to get 0-9, then add 1.
Math.floor(Math.random() * 10) + 1;

/* Example: Simulating a 6-sided die roll (1 to 6) */
Math.floor(Math.random() * 6) + 1;
```

> [!info] MARK'S NOTE
> 
> - **inclusive** = kasama
> - **exclusive** = hindi kasama
>
> Meaning, dahil inclusive ang `0`, kasama ito sa randomization, while hindi naman kasama ang `1`. Ang range lang ng randomization ay from `0` to `0.9999999999999999`. Hindi ito mag-ge-generate ng exact `1`.

## The `typeof` Operator

```js
/* Syntax: */
typeof value
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ------------------------------------------------------------------------------------------- | -------------------------- |
| `value` | The expression or variable representing the value whose type we want to evaluate. | <center>✔️</center> |

- We use the `typeof` operator to **determine the data type** of a given value.

- It is important to remember that `typeof` is **not written in camelCase**; it is always all lowercase.

- When we use this operator, it returns a **string** containing the name of the type, such as `"number"`, `"boolean"`, or `"string"`.

- Even if a string contains numbers, `typeof` will still identify it as a **string** because it is wrapped in quotes.

- Note that `typeof null` returns `"object"`. This is widely considered a **mistake or a weird quirk** in JavaScript's history rather than a functional feature.

- A common point of confusion is that people try to use parentheses with `typeof`, but it is actually an **operator**, not a function. Just like the `+` or `-` signs, we do not need parentheses to execute it.

- It is a **unary operator**, meaning it only acts on one side (the value to its right), unlike addition which has two sides.

- We will find `typeof` especially useful when we start writing **functions**, as it allows us to **validate** if a user passed the correct type of data, such as a `number` instead of a `string`.

```js
/* Example: Checking basic data types */
typeof 99; // "number"
typeof true; // "boolean"
```

```js
/* Example: Checking variables and strings */
let mystery = "12345";
typeof mystery; // "string"
```

```js
/* Example: Evaluating undefined and the null quirk */
typeof undefined; // "undefined"
typeof null; // "object"
```

## The `parseInt` and `parseFloat`

### `parseInt`

```js
/* Syntax: */
parseInt(string);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ----------------------------------------------------------- | -------------------------- |
| `string`                   | The string value that we want to extract an integer from. | <center>✔️</center>        |

- We use `parseInt` to convert a **string** into a **numeric integer** value so we can perform math or other numerical operations.

- This function is very common when we work with **form data**, because information entered into forms usually comes in as a string by default.

- If we try to parse a string that contains a decimal (like `24.987`), `parseInt` will stop at the decimal point and return only the **integer part**.

- The function requires the string to **start with a digit**. If the first character is a non-number (like a dollar sign `$`), it will return **NaN** (Not a Number).

- If a string starts with digits but contains non-digit characters later on (like `"99 cents"`), `parseInt` will successfully extract the leading numbers and stop where the non-digit characters begin.

```js
/* Example: Basic usage and decimal truncation */
parseInt("24"); // returns 24
parseInt("24.987"); // returns 24

/* Example: Extracting number for math operations */
const ageInput = "21";
const agePlusOne = parseInt(ageInput) + 1; // returns 22

/* Example: Non-digit characters */
parseInt("$99"); // returns NaN
parseInt("99 cents"); // returns 99
```

### `parseFloat`

```js
/* Syntax: */
parseFloat(string);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ----------------------------------------------------------- | -------------------------- |
| `string`                   | The string value that we want to convert into a decimal number. | <center>✔️</center>        |

- We use `parseFloat` when we need to extract the **entire decimal number** from a string rather than just the integer.

- Similar to `parseInt`, if we have a string that starts with a valid digit, it will keep parsing until it encounters a character it doesn't recognize as part of a **float**.

- We should keep in mind that it also returns **NaN** if the very first character is a non-digit, such as a currency symbol.

- We can include **spaces** in the string and it will still function correctly, but other symbols will cause it to stop parsing or fail.

```js
/* Example: Parsing a decimal value */
parseFloat("33.5"); // returns 33.5

/* Example: Behavior with leading and trailing characters */
parseFloat("$0.99"); // returns NaN
parseFloat("0.99 cents"); // returns 0.99
```

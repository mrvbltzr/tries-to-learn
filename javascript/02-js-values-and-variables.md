
<div id="title" align="center">
<a href="#"><img src="https://img.shields.io/badge/javascript-ffca28?style=for-the-badge&label=Mark%20Tries%20To%20Learn" alt="Mark Tries To Learn" /></a>
<a href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/">
<img src="https://img.shields.io/badge/The_Modern_JavaScript_Bootcamp_Course-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Modern JavaScript Bootcamp Course" />
</a>
<h1>JS Values and Variables</h1>
<br />
</div>

## Comments

- We use **comments** to write notes or labels that JavaScript will completely ignore during execution.

- To create a comment, we type **two forward slashes** `//` at the start of the line or before the text we want to hide.

- Comments are helpful for **explaining code** or temporarily disabling a line of code to prevent errors during testing.

## Primitive Types

- Every programming language has **primitive types**, which are basic categories for data that act like the **DNA of the language**.

- We use these types to represent and store information in our code, such as data entered into an HTML form.

- There are three common types of information we encounter:
    
    - **Textual information**, which is called a `string` in JavaScript.
    
    - **Numeric data**, which is represented by the `number` type.
    
    - **True or false** values (like a checkbox for terms and conditions), which are represented by the `boolean` type.

- JavaScript identifies a specific group of **primitive types** at the lowest level:
   
    - `number`: For numeric values.
    
    - `string`: For text or words (often enclosed in quotation marks).
    
    - `boolean`: For `true` or `false` values.
    
    - `null` and `undefined`
    
    - `symbol` and `big int`: Less common types.

### Number Type

- We use the `number` type to store or represent any kind of numeric value, as JavaScript has **only one type for all numbers**.

- This single type handles **positive numbers, negative numbers, whole numbers (integers), and decimal numbers (floats)**.

- We must be aware that JavaScript has **limitations with extreme precision**; because numbers are stored in memory, there is a maximum size and very long decimals may be cut off or approximated.

#### Basic Mathematical Operations

- We can use JavaScript as a **glorified calculator** to perform basic arithmetic using standard symbols.

- We perform addition with `+`, subtraction with `-`, multiplication with `*`, and division with `/`.

- **Spacing** between numbers and operators does not affect the result, but we should use it consistently to ensure our code is easy to read.

- For **irrational numbers** or repeating decimals (like `10 / 3`), JavaScript provides an **approximation** rather than an infinite sequence of digits.

```js
/* Example: Addition and Subtraction */
3 + 4; // 7
1.5 + 8; // 9.5
12 - 4.567; // 7.433

/* Example: Multiplication and Division */
4 * 1.2; // 4.8
4 / 2; // 2
10 / 3; // 3.3333333333333335
```

#### Modulo and Exponentiation

- The **Modulo operator** `%` (also known as the remainder operator) divides the first number by the second and **returns the remainder**.

- We frequently use modulo to **determine if a number is even or odd**; if a number `% 2` equals 0, it is even.

- The **Exponentiation operator** `**` allows us to raise a base number to the power of an exponent.

```js
/* Example: Modulo (Remainder) */
27 % 2; // 1
25 % 5; // 0
14 % 4; // 2

/* Example: Exponentiation */
2 ** 3; // 8 (2 cubed)
5 ** 2; // 25 (5 squared)
```

#### Order of Operations

- We follow the **standard mathematical order of operations (PEMDAS)**: Parentheses, Exponents, Multiplication, Division, Addition, and Subtraction.

- **Multiplication and Division** occur before **Addition and Subtraction** unless we specify otherwise.

- We use **parentheses** `()` to manually override the default order and ensure specific parts of an expression are calculated first.

```js
/* Example: Standard Order vs. Parentheses */
3 - 9 * 2; // -15 (Multiplication happens first)

(3 - 9) * 2; // -12 (Parentheses happen first)
```

#### NaN (Not a Number)

- We use a special value called `NaN`, which stands for **Not a Number**.

- Even though it represents something that is not a number, JavaScript technically considers `NaN` to be a **numeric value**.

- We must use the correct capitalization for this value: `NaN`. Writing it as `nan` or `Nan` will not work.

- We can generate `NaN` by performing invalid mathematical operations, such as dividing **zero by zero**.

- If we try to perform math on `NaN`, such as adding a number to it, the result will **always remain** `NaN`.

- Seeing `NaN` in our code doesn't necessarily mean there is an error; it just means the result is **not standard math** or cannot be represented as a true numeric value.

```js
/* Example: Operations resulting in NaN */

0 / 0; // NaN
NaN + 5; // NaN
```

#### Infinity and -0

- We can represent **Infinity** in JavaScript, which we can generate by dividing a number like one by zero.

- We also have access to a value for **-Infinity**.

- We should be aware that JavaScript tracks both `0` and `-0` as their own distinct values.

```js
/* Example: Generating Infinity */

1 / 0; // Infinity
-1 / 0; // -Infinity
```

> [!info] MARK'S NOTE
> - Ang `0` at `-0`, kapag ginamitan ng `==` o `===`, true pa rin ang lalabas dahil pareho itong zero.
> - Ang JavaScript ay gumagamit ng **IEEE 754** standard para sa mga floating-point numbers. Sa standard na ito, may isang bit na nakalaan para sa "sign" (0 para sa positive, 1 para sa negative). Dahil dito, teknikal na posible na magkaroon ng zero na may negative sign bit.

## Variables

- We use **variables** to capture information and recall values later, which allows us to keep track of and update data whenever we need it.

- We can think of variables as **labeled jars** where a value is placed inside a container with a name on it for storage.

- Storing values in variables makes our code easier to understand because we can use **descriptive names** instead of just using raw numbers.

### The `let` Keyword

- To create a variable, we start with the **`let`** keyword, followed by a name, an equal sign, and the value we want to store.

- While there are multiple ways to create variables in JavaScript, **`let`** and **`const`** are the most common modern options.

- Once a variable is declared, we can **recall** it at any point in our code to perform operations or pass it to other functions.

```js
/* Example: Declaring and recalling variables */
let age = 72;
let hens = 4;
let roosters = 2;

// We can recall the variables to perform math
let totalChickens = hens + roosters; 
```

#### Updating Variables

- Simply performing a mathematical operation on a variable, such as `age + 1`, does **not** change the value stored in that variable.

- To update a variable's value based on its current state, we must **re-assign** it using the equal sign (e.g., `age = age + 1`).

- We can also **completely overwrite** a variable with a new value that has nothing to do with the previous one.

```js
/* Example: Updating variable values */
let age = 72;

// This doesn't change age
age + 1; 

// This updates age to 73
age = age + 1; 

// This completely changes the value to 18
age = 18; 
```

#### Naming Rules and Conventions

- We cannot use **reserved keywords** like `let` as variable names because JavaScript will get confused.

- We should avoid using names that are already declared in the browser environment, such as **`document`**.

- **Naming is very important** for clarity; we should use names like `rating` or `score` instead of vague letters like `x` or `z`.

- JavaScript follows the **camelCase** convention, where the first word is lowercase and every subsequent word starts with a capital letter (e.g., `numOfHens`).

- We should avoid using **snake_case** (underscores), dashes, or letting words bleed together without capitalization.

```js
/* Example: Naming conventions */
let numOfHens = 6;
let averageRating = 9.7;
```

#### Re-declaration Restrictions

- When using **`let`**, we are not allowed to **re-declare** a variable that has already been created in the same scope.

- If we try to use **`let`** again with the same name, JavaScript will throw an error stating that the identifier has **already been declared**. This happens because JavaScript has already allocated space in memory for that specific name and cannot create a second one with the same label.

#### Shorthand Assignment Operators

```js
/* Example: Updating values with shorthand */
let score = 0;
score = score + 10; // score is 10

score += 1; // score is 11
score += 10; // score is 21

/* Example: Using subtraction and multiplication */
score -= 100; // score is -79

let score = 150;
let bonusMult = 3;
score *= bonusMult; // score is 450
```

- We can update a variable by writing `score = score + 10`, but there is a **shorthand** available to keep our code concise:

    - The `+=` operator updates the variable by adding the specified amount without needing to reference the variable name twice.
    
    - This shorthand works with other operators like **subtraction** (`-=`), **multiplication** (`*=`), and **division** (`/=`).

- We can use other **variables** as the value for these shorthand operations, such as `score *= bonusMult`, which multiplies the current value by the value stored in another variable.

#### Unary Operators

```js
/* Example: Incrementing a counter */
let counter = 0;
counter++; // counter is 1
counter++; // counter is 2

/* Example: Decrementing a value */
let counter = 4;
counter--; // counter is 3
```

- When we need to change a value by exactly one, we can use **unary operators**.

- **Unary operators** are unique because they only have one side (operand) instead of two.

- The `++` operator is used to **increment** a value by one, which is extremely common when we need a **counter** to track how many times something occurs.

- The `--` operator is used to **decrement** a value by one.

### The `const` Keyword

- We use the `const` keyword, which stands for **constant**, to declare variables that **cannot be reassigned** once they have been initialized.

- Unlike `let`, which allows us to update values, any attempt to change a `const` variable will result in a **TypeError: assignment to constant variable**.

- Once a value is set with `const`, it is **fixed for good**; we cannot use operators like `+=`, `++`, or basic assignment to modify it.

```js
/* Example: Attempting to reassign a constant */

const year = 1973;

year += 1; // Results in a TypeError
```

#### Use Cases for `const`

- We use `const` to provide **meaningful labels** for values that are intended to remain unchanged throughout our code, such as `PI` or `daysInAWeek`.

- Using `const` helps prevent our code from being filled with "magic numbers" (like `3.14159`), making the script **easier to read and maintain**.

- Although we are currently using it for simple values, `const` is also very useful when working with complex data structures like **arrays and objects**.

#### Naming Restrictions

- We cannot have two variables with the **same name** in the same scope, even if we try to use different keywords like `let` and `const`.

- Once a variable name is "taken" by a declaration, it is **unavailable** for any other variable until that scope is resolved.

```js
/* Example: Attempting to reuse a variable name */

const peopleCount = 10;

let peopleCount = 10; // Results in an error because the name is already taken
```

### The `var` Keyword

- Before `let` and `const` existed, `var` was the only way we could declare variables in JavaScript.

- The syntax follows the same format we are used to: `var variableName = value`.

- We can **reassign** variables declared with `var`, making it function more like `let` than `const`.

- While it is the **old way** of doing things, we need to be aware of it because it still appears in **older codebases** and many online resources or documentation.

- There are significant differences in how `var` handles **scoping** compared to `let` and `const`, particularly regarding functions, conditionals, and blocks.

```js
/* Example: Declaring and reassigning a variable using var */

var eggs = 12;

eggs++; // We now have 13

eggs = 0; // We can reset the value
```

#### Browser Support and Modern Usage

- We might see `var` used in older tutorials because `let` and `const` are **relatively new** compared to the overall lifespan of JavaScript.

- According to resources like **MDN**, modern keywords like `let` are now **supported across all major browsers**.

- Even though some older browsers like **Internet Explorer** had minor edge cases with optimization, `let` is safe to use and will not cause errors.

- Because of this universal support, there is **no longer a practical reason** for us to use `var` in our modern code.

- **We should avoid writing new `var` declarations unless we are specifically working on a legacy project that requires it.**

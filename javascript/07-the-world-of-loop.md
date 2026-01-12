
<div id="title" align="center">
<a href="#"><img src="https://img.shields.io/badge/javascript-ffca28?style=for-the-badge&label=Mark%20Tries%20To%20Learn" alt="Mark Tries To Learn" /></a>
<a href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/">
<img src="https://img.shields.io/badge/The_Modern_JavaScript_Bootcamp_Course-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Modern JavaScript Bootcamp Course" />
</a>
<h1>The World of Loop</h1>
<br />
</div>

## The `for` Loop Syntax

```js
/* Syntax: */
for (initialExpression; condition; updateExpression) {
    // code to be executed
}
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ----------------------------------------------------------- | -------------------------- |
| `initialExpression` | Sets the starting value for a counter variable (usually `i`). | <center>✔️</center> |
| `condition` | The loop will continue to run as long as this evaluates to `true`. | <center>✔️</center> |
| `updateExpression` | Defines how the variable changes after each iteration (e.g., incrementing or decrementing). | <center>✔️</center> |

- The `for` loop is our first major tool for **repetition**, allowing us to run a block of code multiple times without writing it out manually.

- We follow a specific pattern: the `for` keyword, parentheses containing three pieces of logic, and **curly braces** `{}` containing the code we want to repeat.

- Using loops is essential for handling **arrays** or large datasets; manually logging 1,000 items would be impossible, but a loop handles it in a few lines.

- The standard variable name used in loops is `i` (often standing for **index** or **integer**), though we can name it whatever we want, such as `num`.

- The loop execution follows a strict order: initialize the variable, check if the **condition** is true, execute the code block, and then apply the **update**.

### Loop Logic and Directions

- We can control the number of **iterations** by adjusting the three parts of the loop. If we want to run something 10 times, we can start at 1 and stop when we hit 10.

- While `i++` (adding one) is the most common update, we are not limited to it. We can use `+=` to increment by any value, such as 3 or 5.

- We can also loop **backwards** by starting the variable at a high value and using a decrement (like `--` or `-=`) while the condition checks for a minimum value.

- If the **condition** is false from the very beginning, the loop will never run, and JavaScript will move directly to the code following the loop.

```js
/* Example: Standard loop to print "Hello" and the counter 10 times */

for (let i = 1; i <= 10; i++) {
    console.log(`Hello: ${i}`);
}
```

```js
/* Example: Generating the first 20 perfect squares */

for (let num = 1; num <= 20; num++) {
    console.log(`${num} x ${num} = ${num * num}`);
}
```

```js
/* Example: Counting down from 200 in intervals of 25 */

for (let i = 200; i >= 0; i -= 25) {
    console.log(i);
}
```

### Infinite Loops

- An **infinite loop** occurs when we write a loop where the **ending condition is never met**, causing the loop to run indefinitely.

- We should absolutely avoid these because they make the **browser unresponsive**, lead to **lagging**, and can cause the browser to "freak out" or crash.

- When an infinite loop runs, the computer performs intensive computations with no end in sight, which can cause the **fans to spin** and the **hardware to get warm**.

- Eventually, the browser will usually prompt us to **kill the process** to stop the execution and regain control of the window.

### Prevention and Best Practices

- We must ensure we are going in the **right direction**. For example, if we are counting down from 100, we need to use a decrement and a condition that will eventually become `false`.

- We should generally **avoid using equality** (`==`) or **non-equality** (`!=`) in our loop conditions.

- It is much safer to use **relational operators** like **greater than or equal to** (`>=`) or **less than or equal to** (`<=`).

- Using relational operators ensures that even if our logic skips a specific number (e.g., jumping from 19 to 21 when looking for 20), the loop will still **terminate** once the threshold is passed.

```js
/* Example: An infinite loop caused by the wrong direction */

// !! WARNING: Do not run these snippets. It will cause infinite loop.

// i starts at 20 and increases. It will always be greater than 0.
for (let i = 20; i >= 0; i++) {
    console.log(i);
}
```

```js
/* Example: An infinite loop caused by skipping a value */

// !! WARNING: Do not run these snippets. It will cause infinite loop.

// i starts at 1 and adds 2 each time (1, 3, 5...). 
// It will never exactly equal 20, so the condition i != 20 is always true.
for (let i = 1; i != 20; i += 2) {
    console.log(i);
}
```

```js
/* Example: A safer approach using relational operators */

// Even though we skip 20, the loop stops because 21 is not <= 20.
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}
```

### Iterating Over Arrays

- We use **for loops** to iterate over arrays by generating the **indices** of the elements, starting from **index 0**.

- The standard loop pattern continues as long as our counter variable `i` is **less than the length** of the array (`i < array.length`).

- We avoid using `i <= array.length` because the length is always one greater than the **highest index**, and attempting to access it would return `undefined`.

- Within the loop, we use **square bracket notation** (e.g., `examScores[i]`) to access each individual element in the sequence.

```js
/* Example: Iterating over an array of scores */
const examScores = [98, 77, 84, 91, 85, 77];

for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
}
```

### Working with Arrays of Objects

- When looping over an array containing **objects**, we can assign `array[i]` to a **temporary variable** (like `student`) to make the code cleaner and easier to read.

- Once we have a reference to the current object, we use **dot notation** to access specific properties, such as `student.firstName` or `student.grade`.

- We can use **template literals** (backticks) to combine these object properties into descriptive strings during the iteration.

```js
/* Example: Printing names and grades from an array of objects */
const myStudents = [
    { firstName: 'Zeus', grade: 86 },
    { firstName: 'Artemis', grade: 97 },
    { firstName: 'Hera', grade: 72 },
    { firstName: 'Apollo', grade: 90 }
];

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}
```

### Iterating Over Strings and Looping Backwards

- We can iterate over **strings** using the same logic as arrays because strings also have **indices** and a `.length` property.

- To loop **backwards**, we initialize our counter at the **last index** of the string or array, which is `length - 1`.

- For a reverse loop, we continue as long as the counter is **greater than or equal to 0** (`i >= 0`) and **decrement** the counter (`i--`) on each turn.

- This technique is useful for tasks like **reversing a string**, where we start from the end and add each character to a new variable.

```js
/* Example: Reversing a word using a backwards loop */
const word = 'stressed';
let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log(reversedWord); // Output: "desserts"
```

### Accumulating Data in Loops

- When we need to calculate a **sum** or **average**, we must declare an **accumulator variable** (like `total`) **outside** the loop.

- If the variable is declared inside the loop, it will be **reset to zero** during every iteration, preventing us from keeping a running total.

- To find an **average**, we first sum all items in the loop and then divide the final total by the **length** of the array.

```js
/* Example: Averaging student grades */
let total = 0;

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    total += student.grade;
}

const average = total / myStudents.length;
console.log(average);
```

### Nested Loops

- We can nest **for loops** inside one another, similar to how we nest **conditional statements**.

- In a nested structure, the **inner loop** completes its entire cycle for every single iteration of the **outer loop**.

- The total number of iterations performed is the product of the outer loop's iterations (A) and the inner loop's iterations (B), resulting in `A x B` total runs.

- We should avoid using the same variable name (like `i`) for both the outer and inner loops. Although they exist in different **scopes**, using the same name is confusing and makes it difficult to reference both variables at once.

- The standard convention is to use `i` for the outer loop, `j` for the first nested loop, and `k` for any subsequent nesting. We should generally try to limit nesting to two levels for better readability.

```js
/* Example: Basic Nested Loop Logic */

for (let i = 1; i <= 10; i++) {
  console.log("outer loop", i);
  
  // This inner loop runs fully for every 1 increment of i
  for (let j = 10; j >= 0; j -= 2) {
    console.log("  inner loop", j);
  }
}
```

### Iterating Over Nested Arrays (2D Data)

- Nested loops are particularly useful when we need to iterate over **multi-dimensional arrays**, such as a grid or a game board.

- We use the **outer loop** to iterate through the main array (accessing each row) and the **inner loop** to iterate through the elements within those sub-arrays (accessing each cell).

- To avoid hard-coding values, we use the `.length` property of the array and the sub-arrays to ensure our loops work even if the board size changes.

- When calculating a sum, we define a **total variable** outside the loops and add each individual element to it during the inner loop's execution.

```js
/* Example: Summing Values in a 2D Array */

const gameBoard = [
  [4, 32, 8, 4],
  [2, 16, 4, 8],
  [8, 4, 32, 2],
  [4, 8, 16, 4]
];

let totalScore = 0;

for (let i = 0; i < gameBoard.length; i++) {
  // Access the sub-array (the row)
  let row = gameBoard[i];
  
  for (let j = 0; j < row.length; j++) {
    // Add each individual element to the total
    totalScore += row[j];
  }
}

console.log(totalScore); 
```

## The `while` Loop Syntax

- We use the **while loop** as our second type of loop in JavaScript, which is **syntactically simpler** and more **flexible** than a `for` loop.

- The loop functions by checking a **condition**; as long as that condition remains **true**, the code inside the block will continue to run.

- We can think of a `while` loop as a combination of a **conditional (if statement)** and a loop.

- Once the **condition** evaluates to **false**, the loop stops, and the script continues with any code following the loop block.

### `while` vs. `for`

- We find that `for` loops are generally better for **iterating through numbers** (like 0 to 5) because they handle the counter variable internally.

- When using a `while` loop for counting, we have to do more work: we must **initialize a variable** (like `let j = 0`) before the loop and manually **increment** it (like `j++`) inside the loop.

- It is considered **better practice** to use a `for` loop for counting to avoid creating variables outside the loop, which helps manage **scope**.

- While the `while` loop works for simple counting, it is better suited for other specific scenarios where we aren't just generating a sequence of numbers.

```js
/* Example: Printing numbers 0 through 5 with a while loop */

let j = 0;

while (j <= 5) {
    console.log(j);
    j++;
}
```

```js
/* Example: Comparison with a for loop */

for (let i = 0; i <= 5; i++) {
    console.log(i);
}
```

### When to Use `while` and `for`

- We use `for` loops when we need to iterate over a **set range of numbers**, such as 0 to 10 or 100 to 10.

- `while` loops excel in situations where we **don't know exactly how many times** the loop will run.

- This uncertainty makes `while` loops ideal for conditions like `while (!gameOver)` or `while (livesLeft > 0)`, where the number of turns depends on player performance.

### `while` Loop Logic and Patterns

- A common pattern for `while` loops is: `while (someCondition)` -> **update or attempt to make that condition false** inside the loop.

- We must ensure the loop has a way to eventually stop; otherwise, we create an **infinite loop**, which is not desirable.

```js
/* Example: Random Guessing Game */

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`);
    // Updating the guess to eventually make the condition false
    guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log("Congrats, you win!");
```

## The `break` Keyword

- The `break` keyword is a special tool we use to **immediately exit a loop** and stop its execution.

- When JavaScript encounters `break`, the loop it is currently enclosed in is **terminated instantly**, regardless of how many iterations were originally planned.

- If we use `break` inside **nested loops**, it will only terminate the **inner loop** where the statement is located; it does not stop the outer loops from running.

- This keyword is useful for **stopping execution cold in its tracks**, even if a loop was set to run thousands of more times.

### `break` in `for` Loops

- Using `break` inside a `for` loop is **relatively uncommon** because we typically define the exact start and end rules within the loop's own syntax.

- It is generally considered better practice to **write a precise loop condition** (e.g., `i < 5`) rather than running a larger loop and breaking halfway through.

```js
/* Example: Breaking a for loop when i equals 5 */

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}
```

### `break` in `while` Loops

- We often use `break` in `while` loops to restructure logic, such as in a **guessing game** where we want to loop until a condition is met.

- We can use the `while (true)` pattern to create a loop that **runs forever** until we manually trigger a `break` based on a specific condition.

- While functional, the `while (true)` approach is often discouraged because it can easily lead to **infinite loops** if the `break` condition is never met.

- Another downside to `while (true)` is that it is **not very explanatory or informational**; it is often better to use a descriptive boolean variable (like `while (!gameOver)`) to make our code more intuitive.

```js
/* Example: Using break to exit a while (true) guessing game */

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
    if (target === guess) {
        break; 
    }
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}

console.log("Congrats you win!");
```

## The `for...of` Loop

- The **for...of loop** is a newer way to loop in JavaScript that is very simple to write.

- It is not supported in **Internet Explorer**, but it works in all other modern browsers like **Chrome**, **Firefox**, and **Safari**.

- We use this loop to iterate over **iterables**, such as **arrays** and **strings**.

- This loop is a better choice when we only care about the elements in an array and do not need to use the **index** or the numbers of the items.

- In a regular `for` loop, we have to set up a variable like `i`, check the **length** of the array, and then use `array[i]` to get the item.

- With **for...of**, we just create a variable that represents each individual element automatically.

- We can name the variable whatever we want, but it is best to use a name that makes sense, like `sub` for an array of subreddits.

```js
/* -------------------------------------
Example #1: Using for...of with an array
------------------------------------- */

const subreddits = ['soccer', 'popheads', 'cringe', 'books'];

// The old way with a regular for loop
for (let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i]);
}

// The new way with a for...of loop
for (let sub of subreddits) {
    console.log(sub);
}
```

### Using `for...of` with Strings

- We can also use the **for...of loop** to go through every single letter in a **string**.

- Each time the loop runs, the variable we created will hold one **character** from that string.

- This is a clean way to work with each letter, such as changing it to **uppercase** or printing it to the console.

```js
/* -------------------------------------
Example: Using for...of with a string
------------------------------------- */

const sound = "cock-a-doodle-do";

for (let char of sound) {
    console.log(char.toUpperCase());
}
```

### Using `for...of` with Nested Arrays

- We can use the `for...of` loop to handle **nested arrays**, which are simply arrays inside of other arrays.

- In the example of a **magic square**, we want to sum the numbers in each row to see if they equal 15.

- Using a regular `for` loop for this is **annoying** because we have to manage multiple index variables like `i` and `j`.

- With `for...of`, the code is **cleaner** because we can directly access each `row` and then each `num` inside that row without needing index numbers.

- This makes the logic **easier to read** and understand compared to the older way of writing loops.

```js
/* ---------------------------------------
Example #1: Summing Rows in a Nested Array
--------------------------------------- */

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`Row summed to ${sum}`);
}
/* Result: 
Row summed to 15
Row summed to 15
Row summed to 15 
*/

/* -------------------------------------------
Example #2: Combining Two Arrays Using Indices
------------------------------------------- */

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`);
}
/* Result: 
mailbox
milkshake
bathtub
blackberry 
*/
```

### When to Avoid `for...of`

- The `for...of` loop is not always the best choice, especially when we need the **index** or the **position** of an item.

- If we are working with **two separate arrays** at the same time and need to get items from the same spot in both, a traditional `for` loop is better.

- In a regular `for` loop, we have an index variable `i` that lets us look at the **same position** in different arrays simultaneously.

- Using `for...of` for this task is difficult because it does not give us the **index** naturally.

- We would have to use extra steps like `indexOf` to find where we are, which is **not efficient** and makes the code messy.

- We should choose `for...of` when we only care about the **data**, but we should use a traditional loop when the **position** of the data matters.

### Problem with Objects and Loops

- We have seen how to use a `for` loop and a `for...of` loop with arrays or strings.

- However, these loops do not work easily with **objects**.

- Objects do not have **indices** (like 0, 1, 2), so a standard `for` loop cannot find specific positions.

- If we try to use a `for...of` loop on an object, we will get a **TypeError** because objects are not **iterable**.

### `Object.keys` and `Object.values`

```js
/**
 * Syntax:
 *
 * @param {object} obj - The object to extract keys from
 */
Object.keys(obj);

/**
 * Syntax:
 *
 * @param {object} obj - The object to extract values from
 */
Object.values(obj);
```

- To loop over an object, we can use built-in methods called `Object.keys()` and `Object.values()`.

    - `Object.keys()` takes an object and returns an **array** of all the keys inside it.
    
    - `Object.values()` takes an object and returns an **array** of all the values inside it.

- Since these methods give us an **array**, we can then use a `for...of` loop to go through the data.

- When we use `Object.keys()`, we can still get the values by using **square bracket notation** like `object[variable]`.

- We use the capital `Object` to call these methods.

- If we only need to calculate things like an **average**, we can just loop over the results of `Object.values()`.

```js
/* ------------------------------------------------------------
Example: Looping over keys and values to find an average rating
------------------------------------------------------------ */

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9
};

// Iterating over keys to print movie name and score
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

// Using values to calculate the average score
const ratings = Object.values(movieReviews);
let total = 0;

for (let r of ratings) {
  total += r;
}

let average = total / ratings.length;
console.log(average);
/* Result: 8.875 */
```

## The `for...in` Loop

```js
/**
 * Syntax:
 *
 * @param {string} variable - A variable that holds the property name during each loop.
 * @param {object} object - The object that we want to loop through.
 */
for (variable in object) {
  // code to be executed
}
```

- We use the `for...in` loop to go through the **keys** or **properties** of an object.

- This is different from the `for...of` loop. A `for...of` loop looks for **values** in an iterable like an array, but `for...in` looks for the **property names** in an object.

- To get the **value** associated with a key during the loop, we must use the **square bracket notation** with the object name.

- We can use this loop to perform math, like adding up all the numbers stored inside an object.

```js
/* --------------------------------------------------
Example: Using for...in to loop and sum object values
-------------------------------------------------- */

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  ultimateTournamentOfChampions: 100000
};

let total = 0;

for (let prop in jeopardyWinnings) {
  // This prints the keys: regularPlay, watsonChallenge, etc.
  console.log(prop);
  
  // This adds the values to the total
  total += jeopardyWinnings[prop];
}

console.log(`Ken Jennings total earnings: $${total}`);
/* Result: Ken Jennings total earnings: $3422700 */
```

### Why We Avoid Using It for Arrays

- Technically we can use `for...in` with an array because arrays are actually **objects** in JavaScript.

- If we use `for...in` on an array, it will give us the **indices** (0, 1, 2, 3) instead of the actual data inside the array.

- We should not use this for arrays because the **order** of the loop is not guaranteed. It can change depending on the browser we use or how we change the data.

- For arrays, it is much better to use a `for...of` loop because it always gives us the values in the correct order.

```js
/* --------------------------------------------------------
Example: Showing how for...in returns indices from an array
-------------------------------------------------------- */

const nums = [88, 99, 77, 66];

for (let k in nums) {
  // This prints the index (the key), not the number
  console.log(k);
}
/* Result:
0
1
2
3 
*/
```


<div id="title" align="center">
<a href="#"><img src="https://img.shields.io/badge/javascript-ffca28?style=for-the-badge&label=Mark%20Tries%20To%20Learn" alt="Mark Tries To Learn" /></a>
<a href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/">
<img src="https://img.shields.io/badge/The_Modern_JavaScript_Bootcamp_Course-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Modern JavaScript Bootcamp Course" />
</a>
<h1>Objects&colon; The Core of JavaScript</h1>
<br />
</div>

## Limitations of Arrays for Structured Data

- Arrays are excellent for **ordered information**, but they are not a great fit for grouping different types of related data. If we use an array to store steps, floors, and miles, we are forced to follow **arbitrary rules** regarding the order of elements (e.g., deciding that index `0` is always total steps). Without labels, a piece of data like `[308000, 10, 5]` is difficult to understand and requires a "key" or comments to explain what each value represents.

- Maintaining consistency across different sets of data becomes difficult because we must ensure the **index order** is identical every time. While we could use separate variables, this fails to **group the data together** logically.

- An **object** is a data structure that allows us to store data in **key-value pairs**, associating specific labels with pieces of information.

- Unlike arrays, which use a numeric **index** (like `0`, `1`, `2`), objects allow us to access data using descriptive keys like `totalSteps` or `avgSleep`. We can think of an object as a **collection of properties**.

- A **property** is the combination of a **key** and its corresponding **value**.

- We have already encountered properties in a limited way, such as the `.length` property used on strings to find their size.

- While an array is like an ordered container, an object is more like a "blob" of data where **order is not the priority**—storing and retrieving information by name is the main goal.

> [!info] MARK'S NOTE
>
> - Ang **array** ay base sa index/position. Ang **objects** naman ay mayroong identifiers or keys.
> 
> - Ang **object** ay parang table, may header at may data sa kada header.

## The Dictionary Metaphor

- In other programming languages, such as _Python_, these structures are known as **dictionaries**.

- This metaphor is helpful because, in a dictionary, we use a **key** (a word) to find a **value** (the definition).

- This is a **one-way relationship**: we provide the key to get the value, but we don't usually use the value to look up the key.

## Objects vs. Arrays

- We should choose an **object** when we have data that requires labels to be meaningful, such as a user profile or a set of fitness stats.

- Objects make it much easier to write code that interacts with data because we can simply ask for the value associated with a specific label, like `totalSteps`.

- We should choose an **array** when the **order of data is more important than anything else**, such as storing the results of a marathon where the sequence of finishers is the most important information.

```js
/* Example: Inefficient Array Approach */
// It is hard to tell what these numbers represent without labels
const fitbitData = [308000, 1814, 12.5]; 

/* Example: Conceptual Object Structure */
// Data is grouped with descriptive keys
// username: 'crazycatlady'
// upvotes: 7
// text: 'great post'
```

## Defining Objects with Literals

- We use **curly braces** `{}` to define a new object. This specific syntax is technically known as an **object literal**.

- When we store an object in a variable using `const`, it creates a **reference** ([Reference Type](05-capture-collections-of-data-with-arrays.md#Reference%20Type)) to that object. This allows us to modify the properties inside the object even though the variable itself cannot be reassigned.

- Objects allow us to store data in **key-value pairs**. Each piece of data is associated with a specific name (the key).

- We separate keys and values using a **colon** `:`, and we must use a **comma** `,` to separate different properties.

- Unlike arrays, **objects do not encode order**. When we view an object in a console, the properties might appear alphabetized or in a different order than we wrote them, but this does not affect how we use the data.

```js
/* Example: Creating a Fitbit Data Object */

const fitbitData = {
    totalSteps: 308000,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2 hours 13 minutes'
};
```

## Accessing Data Using Dot Syntax

- We can retrieve information from an object using the **dot syntax**, which involves typing the object name followed by a period and the key name.

- We have used similar syntax before, such as when we check a string's length using `.length`.

- While dot syntax is the standard way to access properties, it is different from executing a method because we do not use parentheses unless we are calling a function stored within the object.

```js
/* Example: Accessing Object Properties */

const fitbitData = {
    totalMiles: 211.7,
    avgCalorieBurn: 5755
};

// Accessing the totalMiles property
fitbitData.totalMiles; // Returns 211.7

// Accessing the avgCalorieBurn property
fitbitData.avgCalorieBurn; // Returns 5755
```

## Object Keys and Data Types

- We can use any data type as a **value** in an object, including numbers, strings, booleans, arrays, and even other objects.

- **Keys** are handled differently; JavaScript automatically converts keys into **strings**.

- Even if we use a number as a key, it is stored as a string behind the scenes. However, we cannot always use dot syntax to access keys that are numbers (e.g., `object.45` will cause an error). The only exception to the "keys are strings" rule is a data type called a **symbol**, though these are less commonly used.

```js
/* Example: Numeric Keys are Converted to Strings */

const data = {
    45: "forty-five"
};

// Behind the scenes, 45 is treated as "45"
```

## Formatting and Commas

- **Commas** are mandatory between properties in an object so JavaScript knows where one property ends and the next begins.

- If an object has only one property, the comma is **optional**.

- The **trailing comma** (a comma after the very last property) is also optional.

- **Spacing** around colons and commas does not affect the functionality of the code. Different companies and developers have different style preferences for how they align their object properties.

```js
/* Example: Valid and Invalid Commas */

// Correct: Single property, no comma needed
const data = { a: 1 };

// Correct: Multiple properties separated by commas
const stuff = {
    b: 2,
    c: 3, // Trailing comma is optional
};
```

## Automatic String Conversion of Keys

- Even if we attempt to use a **number** or a **boolean** as a key, JavaScript will automatically convert it into a **string**.

- Internally, we can think of numeric keys as being wrapped in quotes (e.g., `100` becomes `"100"`).

- We can verify this by accessing a property using both the number and the string version of that number; they will yield the same result.

## Accessing Properties with Square Brackets

- We cannot use **dot notation** to access keys that are numbers. For example, `numbers.100` will result in a **syntax error**.

- To access these values, we use **square bracket notation** by placing the key inside brackets: `numbers[100]`.

- When we use this notation, the value inside the brackets is converted to a string before JavaScript looks for a matching key.

```js
/* Example: Accessing Number Keys */

const numbers = {
  100: 'one hundred',
  16: 'sixteen'
};

// console.log(numbers.100); // Error: Unexpected number
console.log(numbers[100]); // 'one hundred'
console.log(numbers['100']); // 'one hundred'
```

## Handling Invalid Identifiers

- In JavaScript, an **identifier** is a name used for variables. There are rules for what makes an identifier valid; for instance, they cannot start with a number or contain spaces.

- While we cannot use invalid identifiers as variable names, we can use them as **object keys**.

- Because **dot notation** only works with valid identifiers, we must use **square bracket notation** to access keys that contain spaces or start with numbers.

```js
/* Example: Keys with Spaces and Numbers */

const occupations = {
  '76 trombones': 'great song',
  'favorite food': 'pizza'
};

// console.log(occupations.76 trombones); // Syntax Error
console.log(occupations['76 trombones']); // 'great song'
```

## Dynamic Data Access

- A major advantage of **square bracket notation** is that it allows us to use **dynamic values**, such as variables, to access data.

- If we use **dot notation** with a variable name, JavaScript looks for a literal property with that specific name rather than the value stored inside the variable.

- **Square brackets** will evaluate the expression or variable inside them first and then use the result to find the key.

- If we try to access a property that does not exist in the object, JavaScript returns `undefined`, similar to how it handles out-of-bounds indices in an array.

- As a general rule, we should use **dot notation** whenever possible because it is shorter and cleaner, but we must use **square brackets** for dynamic keys or invalid identifiers.

```js
/* Example: Using Variables and Expressions */

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
};

const mysteryColor = 'yellow';

// This looks for a property literally named 'mysteryColor'
console.log(palette.mysteryColor); // undefined

// This evaluates 'mysteryColor' to 'yellow' and finds the value
console.log(palette[mysteryColor]); // '#f9ca24'

// We can even use expressions inside brackets
console.log(palette['bl' + 'ue']); // '#30336b'
```

## Adding and Updating Properties

- We use **dot notation** or **square brackets** to add new properties or update existing ones within an object.

- To assign a value, we use the **equal sign** `=` operator.

- We don't need to define all properties when an object is first created; we can start with an **empty object** and add data as it becomes available.

- If we try to access a property that doesn't exist, JavaScript returns `undefined`. Assigning a value to that key will **initialize** it.

- To **update** a value, we use the same syntax as adding one; assigning a new value simply overwrites the old one.

```js
/* Example: Adding and Updating Properties */

const userReviews = {};

// Adding properties
userReviews['Queen b 49'] = 4.0;
userReviews.MrSmith78 = 3.5;

// Initializing a property that was undefined
userReviews['Colt'] = 5;

// Updating a property value
userReviews['Colt'] = 5; 
```

## Modifying Values with Operators

- We can use shorthand operators like `+=` (**addition assignment**) or `++` (**increment**) to update numerical values stored in properties.

- This allows us to modify a property's current value without manually re-typing the entire assignment logic.

```js
/* Example: Using Operators on Properties */

// Using += to add to a value
userReviews['Queen b 49'] += 2;

// Using ++ to increment a value
userReviews.MrSmith78++;
```

## Nesting Objects and Arrays

- We can nest arrays inside of objects and objects inside of arrays to model complex data.

- Most real-world data is a combination of **ordered lists** and **key-value pairs**.

- This flexibility allows us to represent sophisticated data structures, such as a `student` object that contains an array of `strengths` and another object for `exams` scores.

```js
/* Example: Student Object with Nested Data */
const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
};
```

## Accessing Nested Data

- To access properties within nested objects, we use **chaining** with **dot notation**.

- If we need to access an element within a nested array, we combine **dot notation** to reach the array key and **square bracket notation** with an index to reach the value.

- We can chain these notations as deeply as the data is nested to retrieve or manipulate specific values.

```js
/* Example: Accessing and Calculating Nested Values */
// Calculating an average from nested object properties
const average = (student.exams.midterm + student.exams.final) / 2;

// Accessing an element from a nested array
const favoriteArt = student.strengths[1];
```

## Arrays of Objects

- A highly common pattern in JavaScript is an **array of objects**.

- This format is particularly useful when we start working with **loops**, as we can easily iterate through the list to calculate totals or print receipts.

```js
/* Example: Shopping Cart Array of Objects */
const shoppingCart = [
    { product: 'Jenga Classic', price: 6.88, quantity: 1 },
    { product: 'Echo Dot', price: 29.99, quantity: 3 },
    { product: 'Fire Stick', price: 39.99, quantity: 2 },
];
```

## Complex Data Modeling

- We can use deep nesting to represent entire application states, such as a **tic-tac-toe game**.

- This allows us to keep the **game board** (stored as a multi-dimensional array) bundled with other relevant data like player names and symbols.

- By nesting objects within objects, we can expand simple values into more detailed data points, such as changing a player's name string into an object containing a `username` and their `playingAs` character.

```js
/* Example: Modeling a Tic-Tac-Toe Game */
const game = {
    player1: {
        username: 'Blue',
        playingAs: 'X'
    },
    player2: {
        username: 'Muffins',
        playingAs: 'O'
    },
    board: [
        ['X', 'O', 'X'],
        [null, 'O', 'X'],
        ['O', 'O', 'X']
    ]
};
```

## Equality and Reference Types

- When we use equality operators like `===` or `==` with **primitive types**, they compare values. However, with **reference types** (arrays and objects), JavaScript compares the **reference** in memory, not the contents.

- Variables for arrays do not store the actual elements; instead, they store a **memory address** (a reference) pointing to where the data is kept.

- Even if two arrays look identical and contain the same values in the same order, they are stored in **different locations in memory**. Therefore, comparing them will return `false`.

- To make two array variables equal, they must point to the **same reference**. This happens when we assign one variable to another.

```js
/* Example: Comparing Identical Arrays */
let nums = [1, 2, 3];
let mystery = [1, 2, 3];

// Returns false because they have different references in memory
console.log(nums === mystery); 

/* Example: Comparing References */
let moreNums = nums;

// Returns true because they point to the same memory address
console.log(nums === moreNums); 

// Modifying one affects the other because the reference is shared
moreNums.push(4);
console.log(nums); // [1, 2, 3, 4]
```

## Checking for Array Content and Length

- We cannot check if an array is empty by comparing it to `[]` (e.g., `if (arr === [])`) because a new empty array literal creates a **new memory reference**, making the comparison always `false`.

- To properly check if an array is empty, we should check its **length property**.

- Currently, JavaScript does not have a built-in way to check if two different arrays "look the same" (have the same values). To check for **equality of contents**, we must manually compare every element using loops.

```js
/* Example: Checking for Empty Arrays */
const user = {
    notifications: []
};

// This WILL NOT work
if (user.notifications === []) {
    console.log("This block will never run.");
}

// This IS the correct way
if (user.notifications.length === 0) {
    console.log("No new notifications.");
}

// Or using a "truthy/falsy" shorthand
if (!user.notifications.length) {
    console.log("No new notifications.");
}
```

### Equality in Objects

- **Objects** behave exactly the same way as arrays regarding equality.

- Two separate objects are never equal, even if they have the same properties and values, because they occupy **different spaces in memory**.

- Equality only returns `true` if the variables refer to the **exact same object instance**.

```js
/* Example: Object Equality */
// Returns false
console.log({ a: 1 } === { a: 1 });

// Returns false
console.log({} === {});

/* Example: Shared Object Reference */
let data1 = { a: 1 };
let data2 = data1;

// Returns true because they share the same reference
console.log(data1 === data2);
```

> [!info] MARK'S NOTE
>
> Parang ganito yan:
> - Ang bawat object ay may ID sa memory. Imbes na data yung kino-compare, yung ID (reference/address) ang gamit sa pag-compare.

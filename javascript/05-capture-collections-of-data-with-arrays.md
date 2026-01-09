
<div id="title" align="center">
<a href="#"><img src="https://img.shields.io/badge/javascript-ffca28?style=for-the-badge&label=Mark%20Tries%20To%20Learn" alt="Mark Tries To Learn" /></a>
<a href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/">
<img src="https://img.shields.io/badge/The_Modern_JavaScript_Bootcamp_Course-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Modern JavaScript Bootcamp Course" />
</a>
<h1>Capture Collections of Data with Arrays</h1>
<br />
</div>

## Arrays: Collections of Values

- An **array** is an **ordered collection of values**.

- Arrays can collect all the different values we've seen so far, such as strings, numbers, booleans, `null`, and `undefined`.

- We can visualize arrays like a pill container with ordered slots, where each slot holds a piece of data.

- The values in an array have a specific **order** (first, second, third, etc.).

- Arrays on their own don't do much until we put information into them.

- They can also collect other data, including other arrays.

- **Real-world examples** of arrays include:
   
    - **Spotify playlists**: Songs are stored in a particular, user-defined order.
    
    - **Comments on a blog post or Reddit**: Comments are displayed in a specific order (e.g., by upvotes, recency).

### Creating Arrays

- The easiest and most common way to create an array is using **array literal syntax** with **square brackets `[]`**.

```js
/* Example: Creating an empty array */

let emptyArray = [];
```

```js
/* Example: Initializing an array with data */

let shoppingList = ['cereal', 'cheese', 'ice'];
```

- We can initialize an array with data already in it.

- **Arrays are flexible** and can store any type of value we've seen so far (strings, numbers, booleans, `null`, `NaN`).

- We can even **mix different data types** within a single array in JavaScript, which is not allowed in some other programming languages.

```js
/* Example: Array with mixed data types */

let collection = ['dog', 12, true, null, NaN];
```

- There is an alternative way to create an array using the `new Array()` constructor:

```js
/* Example: Creating an array using the Array constructor */

let numbersArray = new Array(1, 2, 3, 4, 5);
```

- However, the `new Array()` syntax is **less common** because the array literal syntax `[]` is shorter and more straightforward.

## Indices and Length

- The numbering for array indices always **starts at zero**.

- Just like strings, arrays have a **`length` property** that tells us the total number of items they contain.

- The highest index in any array is always **`length - 1`** because of the zero-based numbering system.

> [!info] MARK'S NOTE
> 
> Ang `.length` ay literal na bilang ng items sa isang array, habang ang index ay zero-based (starts at 0). Kung gusto natin makuha ang last item sa array, kinakailangan nating bawasan ng `1` ang length para makuha ang item na ito.
>
> Tinagalog ko lang talaga pero you get the point...

## Accessing Data

```js
/* Syntax: */
array[index];
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ---------------------------- | -------------------------- |
| `index` | The numerical position of the element we want to retrieve, starting from `0`. | <center>✔️</center> |

- We use **square brackets `[]`** after the name of the array to access individual items.

- To access the **first item**, we use index `0` (e.g., `array[0]`).

- If we try to access an index that does not exist or is out of bounds, JavaScript returns **`undefined`**.

- We can dynamically access the **last item** in an array by using the formula `array[array.length - 1]`.

```js
/* Example: Accessing items and checking length */
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors.length); // 7
console.log(colors[0]); // "red"
console.log(colors[3]); // "green"
```

```js
/* Example: Accessing the last item and out-of-bounds indices */
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// The last index is length (7) minus 1
console.log(colors[colors.length - 1]); // "violet"

// Accessing an index that doesn't exist
console.log(colors[7]); // undefined
```

## Mutability

- Arrays are **mutable**. This means we can change, modify, or overwrite elements within an array directly after it has been created.

- In an array, we can use the index syntax to **assign a new value**.

### Modifying & Adding Elements via Index

- We use the square bracket syntax `[]` combined with an **index** and the assignment operator `=` to update a specific element.

- If we assign a value to an existing index, it **overwrites** the data at that position rather than shifting items.

- We can add a new item to the end of an array by using the next available index.

- To add an item to the end dynamically without knowing the exact count, we use the `length` property of the array as the index, since `array[array.length]` always points to the position immediately after the last element. Although using `length` works to add items, it is considered a bit **clunky**, and there are better **built-in methods** for this.

```js
/* Example: Modifying an existing element */

let shoppingList = ['cheddar cheese', '2% milk'];

// Changing '2% milk' to 'whole milk' at index 1
shoppingList[1] = 'whole milk'; 

console.log(shoppingList); // ['cheddar cheese', 'whole milk']
```

```js
/* Example: Adding elements to the end of an array */

let shoppingList = ['cheddar cheese', 'whole milk'];

// Adding an item at a specific index
shoppingList[2] = 'ice cream';

// Adding an item dynamically using the length property
shoppingList[shoppingList.length] = 'tomatoes';
shoppingList[shoppingList.length] = 'potatoes';

console.log(shoppingList); // ['cheddar cheese', 'whole milk', 'ice cream', 'tomatoes', 'potatoes']
```

```js
/* Example: Overwriting the first element */

let shoppingList = ['cheddar cheese', 'whole milk', 'ice cream'];

// This replaces the first item instead of shifting the list
shoppingList[0] = 'bread';

console.log(shoppingList); // ['bread', 'whole milk', 'ice cream']
```

## Methods

### `push`, `pop`, `unshift`, and `shift`

#### `push`

```js
/* Syntax: */
array.push(element1, element2, /* ..., */ elementN);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ------------------------------------------------------------ |:------------------: |
| `element1,..., elementN` | The element(s) to add to the end of the array. | <center>✔️</center> |

- We use the `push` method to **add one or more elements to the end** of an array.

- Unlike string methods that return a new string because strings are **immutable**, array methods like `push` **mutate** (directly change) the original array.

- When we call `push`, the method returns the **new length** of the array as a numeric value.

- This is a more efficient way to add items than manually calculating the index using `array.length`.

```js
/* Example: Pushing elements to an array */
const topSongs = [
  'First Song',
  'Second Song',
  'Third Song',
  'Fourth Song'
];

topSongs.push('Fortunate Son'); 
// The array now has 5 items. Returns: 5
```

#### `pop`

```js
/* Syntax: */
array.pop();
```

- The `pop` method **removes the last element** from an array.

- Similar to `push`, this method **mutates** the original array.

- Instead of returning the length, `pop` **returns the value of the removed element**. This is useful if we want to store that specific item in a variable to use it elsewhere.

- If we continue to call `pop` on an empty array until nothing is left, the method will return `undefined`.

- We often use this in scenarios like a **to-do list**, where we remove a completed task from the end of the list.

```js
/* Example: Removing the last element */
const topSongs = ['First Song', 'Second Song', 'Third Song', 'Fourth Song', 'Fortunate Son'];

const nextSong = topSongs.pop(); 
// nextSong is now 'Fortunate Son'
// topSongs no longer contains 'Fortunate Son'
```

#### `unshift`

```js
/* Syntax: */
array.unshift(element1, element2, ..., elementN);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | --------------------------- | -------------------------- |
| `element1,..., elementN` | The elements to add to the front of the array. | <center>✔️</center> |

- We use `unshift` to **add one or more elements to the beginning** of an array.

- This method **returns the new length** of the array after the elements have been added.

- The name originates from other programming languages and data structures like **stacks and queues** that predate JavaScript.

- When we pass **multiple arguments** into a single `unshift` call, they are added to the start of the array as a single chunk, meaning their **original order is preserved** within the array.

```js
/* Example: Adding dishes to the start of an array */

const dishesToDo = ['big platter'];

// Adding one item
dishesToDo.unshift('large plate'); 

// Adding another item
dishesToDo.unshift('small plate');

// dishesToDo is now ['small plate', 'large plate', 'big platter']
console.log(dishesToDo);
```

#### `shift`

```js
/* Syntax: */
array.shift();
```

- We use `shift` to **remove the first element** from the start of an array.

- This method **returns the element that was removed**, which allows us to store it in a variable for later use.

- Because it removes the first item, the **indices of all remaining items are moved** (or shifted) down by one.

- Unlike `push` and `pop`, which work at the end of an array, `shift` and `unshift` specifically target the **start of the array**.

```js
/* Example: Removing the top dish from the stack */

const dishesToDo = ['dirty spoon', 'mug', 'cereal bowl'];

const nextDish = dishesToDo.shift();

console.log(nextDish); // 'dirty spoon'
console.log(dishesToDo); // ['mug', 'cereal bowl']
```

#### `unshift` vs. `push`

- If we call `unshift` multiple times individually, the final order will be different than if we passed multiple arguments at once, because each new call **prepends items to the very front**.

- For `push`, it does not matter if we add items one at a time or as multiple arguments; since we are **adding to the end**, the order remains the same in both scenarios.

- While `push` and `pop` are generally more common, `shift` and `unshift` are essential tools to have when we need to **manipulate the beginning** of a data set.

```js
/* Example: Multiple arguments vs individual calls */

let items = ['middle'];

// Adding multiple at once preserves the chunk order
items.unshift('fork', 'knife'); 
// Result: ['fork', 'knife', 'middle']

// Adding individually reverses the expected sequence at the start
let items2 = ['middle'];
items2.unshift('small spoon');
items2.unshift('large spoon');
// Result: ['large spoon', 'small spoon', 'middle']
```

> [!info] MARK'S NOTE
> 
> Remember: `push` and `pop`, laging end of array ang target. `unshift` and `shift` naman, laging unahan ang target.

### `concat`

```js
/* Syntax: */
array.concat(value1, value2, ..., valueN);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
|:--- |:--- |:---: |
| `value1,..., valueN` | Arrays or values to concatenate into a new array. | |

- We use the `concat` method to **merge two or more arrays** into a single collection.

- This method **does not mutate** or update the original arrays; instead, it creates and returns a **new array** (a new copy).

- The **order of elements** in the resulting array depends on which array we call the method on and the order of the arguments we pass in.

```js
/* Example: Merging two arrays */

const fruits = ['apple', 'banana'];
const veggies = ['asparagus', 'brussel sprouts'];

// The order of the arrays in the result changes
// based on which one is called first
const mix1 = fruits.concat(veggies);
// Result: ['apple', 'banana', 'asparagus', 'brussel sprouts']
const mix2 = veggies.concat(fruits);
// Result: ['asparagus', 'brussel sprouts', 'apple', 'banana']
```

- We can pass **multiple arrays** as optional arguments to combine three or more arrays at the same time.

```js
/* Example: Merging multiple arrays */

const fruits = ['apple', 'banana'];
const veggies = ['asparagus', 'brussel sprouts'];
const meats = ['steak', 'chicken breast'];

// We can pass multiple arrays as arguments to merge them all at once
const allFoods = fruits.concat(veggies, meats);

console.log(allFoods); 
// Output: ['apple', 'banana', 'asparagus', 'brussel sprouts', 'steak', 'chicken breast']
```

### `includes` and `indexOf`

#### `includes`

```js
/* Syntax: */
array.includes(valueToFind, fromIndex);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ----------------------------------------------------------- | -------------------------- |
| `valueToFind`              | The value we are searching for in the array.                | <center>✔️</center>        |
| `fromIndex`                | The array index at which to begin the search.               |                            |

- `includes` is a **boolean method**, meaning it strictly returns either `true` or `false`.

- This method tells us if an array contains a specific value, but it does **not** tell us the location of that value.

- It looks for an **exact match**. For example, searching for `corn` will return `false` if the array only contains `corn starch`.

- We can use the optional `fromIndex` parameter to specify where the search should start within the array.

- Because it returns a boolean, we can use it directly in **conditionals** without needing to compare it to `true`.

```js
/* Example: Basic usage of includes */
const ingredients = ['water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter'];

ingredients.includes('fish'); // false
ingredients.includes('shrimp'); // true
```

```js
/* Example: Using the fromIndex parameter */
// Searching for 'water' starting from index 3
ingredients.includes('water', 3); // false
```

```js
/* Example: Using includes in a conditional */
if (ingredients.includes('flour')) {
    console.log("I'm gluten free. I cannot eat that.");
}
```

#### `indexOf`

```js
/* Syntax: */
array.indexOf(searchElement, fromIndex);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ----------------------------------------------------------- | -------------------------- |
| `searchElement`            | The value we want to locate in the array.                   | <center>✔️</center>        |
| `fromIndex`                | The array index at which to begin the search.               |                            |

- `indexOf` searches for a value and returns the **index (position)** where it is found.

- If the value is not present in the array, the method returns **-1**.

- It functions identically to the string version of `indexOf`, but operates on array elements instead of string characters.

- Just like `includes`, we can provide an optional `fromIndex` to ignore earlier parts of the array during the search.

- This method is necessary when we need to know the specific **location** of an item, such as when we want to replace an element at a certain position.

```js
/* Example: Finding the index of an element */
const ingredients = ['water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter'];

ingredients.indexOf('eel'); // 6
ingredients.indexOf('maple syrup'); // -1
```

```js
/* Example: Searching with fromIndex */
ingredients.indexOf('cheese', 2); // 3
```

#### `includes` vs. `indexOf`

- We should use `includes` if we only need a simple **yes or no** answer regarding a value's presence.

- We should use `indexOf` if we need the **index** to perform an action, like substituting one ingredient for another.

- Using `includes` makes our code more readable for simple checks compared to checking if `indexOf` is **not equal to -1**.

### `reverse`

```js
/* Syntax: */
array.reverse();
```

- We use `reverse()` to **flip the order** of elements in an array.

- This method **mutates the original array** in place, meaning it does not create a copy but changes the array itself.

- It is highly straightforward and will reverse contents regardless of the data types, such as **numbers, booleans, or strings**.

```js
/* Example: Reversing an array of strings */
const letters = ['C', 'E', 'P', 'S', 'E', 'R'];
letters.reverse(); 

console.log(letters); // ["R", "E", "S", "P", "E", "C"]
```

### `join`

```js
/* Syntax: */
array.join(separator);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
| -------------------------- | ----------------------------------------------------------- | -------------------------- |
| `separator`                | A string used to separate each element in the resulting string. Defaults to a comma if omitted. |                            |

- We use the `join()` method to take all elements in an array and **concatenate them into a single string**.

- The **default separator** between values is a **comma**, but we can pass in a specific string (like an ampersand, dash, or multiple characters) to customize how the elements are joined.

- If the array contains elements that are not strings, such as **numbers or booleans**, the method will automatically **convert them into their string representation** before joining them.

```js
/* Example: Using join with different separators */
const letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
letters.join(); // "T,C,E,P,S,E,R"
letters.join(' & '); // "T & C & E & P & S & E & R"

/* Example: Joining non-string values */
const mixed = [12.3, 60, false];
mixed.join(' # -> '); // "12.3 # -> 60 # -> false"

/* Example: Chaining reverse and join */
const word = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
const result = word.reverse().join('-'); 

console.log(result); // "R-E-S-P-E-C-T"
```

### `slice`

```js
/* Syntax: */
array.slice(start, end);
```

| <center>Parameter</center> | <center>Description</center>                                                             | <center>Required?</center> |
| -------------------------- | ---------------------------------------------------------------------------------------- | -------------------------- |
| `start`                    | The index where the extraction begins. If negative, it counts from the end of the array. |                            |
| `end`                      | The index before which to end extraction. The element at this index is **not included**. |                            |

- We use the `slice` method to take a portion of an existing array and place it into a **new array**.

- A key feature of `slice` is that it is **non-destructive**, meaning it **does not impact or modify the original array**.

- The method takes a starting index and an optional ending index. It extracts elements from the start index up to, but **not including**, the end index.

- If we provide only one argument, `slice` will extract everything from that starting index to the **end of the array**.

```javascript
/* Example: Slicing to the end and using negative indices */
// Starts at index 4 and goes to the end
const reptiles = animals.slice(4); 
// ['lizard', 'tortoise']
```

```js
/* Example: Selecting specific ranges */
const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// Gets elements from index 0 up to (but not including) 3
const swimmers = animals.slice(0, 3); 
// ['shark', 'salmon', 'whale']

// Gets elements from index 2 up to (but not including) 4
const mammals = animals.slice(2, 4); 
// ['whale', 'bear']
```

- We can use **negative numbers** as arguments to work backwards from the end of the array. For example, `-3` selects the last three elements.

```js
// Starts 3 elements from the end and goes to the end
const quadrupeds = animals.slice(-3); 
// ['bear', 'lizard', 'tortoise']

// Starts 3 elements back and stops 1 element before the end
const middle = animals.slice(-3, -1);
// ['bear', 'lizard']
```

- If we call `slice()` with no arguments, it creates a **complete copy** or **clone** of the entire array. This is a common shortcut used in development.

```js
/* Example: Making a copy of an array */
// Creating a new, independent copy of the original array
const copy = animals.slice();

// Now, we can modify the `copy` array without changing the `animals` array.
```

### `splice`

```js
/* Syntax: */
array.splice(start, deleteCount, item1, item2, /* ... */);
```

| <center>Parameter</center> | <center>Description</center> | <center>Required?</center> |
|:--- |:--- |:---: |
| `start` | The index at which to start changing the array. | <center>✔️</center> |
| `deleteCount` | The number of elements to remove from the array, starting at the `start` index. | <center>✔️</center> |
| `item1, item2,...` | The elements to add to the array, beginning at the `start` index. | |

- We use `splice` to **remove, replace, or add new elements** specifically in the **middle of an array**.

- Unlike many other methods, `splice` **mutates the original array**, meaning it directly changes the array it is called on.

- The method **returns an array containing the deleted elements**. If no elements are removed, it returns an empty array `[]`.

```js
/* Example: Deleting elements */

const animals = ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// Start at index 3, delete 2 items
const deleted = animals.splice(3, 2);

console.log(deleted); // ["whale", "bear"]
console.log(animals); // ["shark", "octopus", "salmon", "lizard", "tortoise"]
```

- The second argument, `deleteCount`, is **order-dependent**. If we want to insert items without deleting any, we **must provide `0`** as the second argument; otherwise, JavaScript will treat the first item we want to insert as the number of items to delete.

```js
/* Example: Inserting an element without deleting */

const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// Start at index 1, delete 0, add 'octopus'
animals.splice(1, 0, 'octopus'); 

console.log(animals); 
// ["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]
```

- While `push`, `pop`, `shift`, and `unshift` are more common for modifying array ends, `splice` is the primary tool for **updating the middle** or **deleting large chunks** of an array.

```js
/* Example: Inserting multiple values */

const animals = ['shark', 'octopus', 'salmon', 'lizard', 'tortoise'];

// Start at index 3, delete 0, add 'snake' and 'frog'
animals.splice(3, 0, 'snake', 'frog');

console.log(animals); 
// ["shark", "octopus", "salmon", "snake", "frog", "lizard", "tortoise"]

/* Example: Replacing elements */

const animals = ['shark', 'octopus', 'salmon', 'snake', 'frog', 'lizard', 'tortoise'];

// Start at index 0, delete 2 items, and insert the new values
animals.splice(0, 2, 'SHARK', 'OCTOPUS');

console.log(animals); 
// ["SHARK", "OCTOPUS", "salmon", "snake", "frog", "lizard", "tortoise"]
```

### `sort` (Default Behavior)

```js
/* Syntax: */
array.sort();
```

- We use the `sort` method to arrange elements within an array, but its default behavior can be surprising.

- This method sorts elements **in place**, meaning the **original array is mutated** and updated.

- It also **returns the sorted array**, so we have the option to capture the result in a new variable.

- When we use it on an array of strings, it typically works as expected by sorting them **alphabetically**.

- The default behavior of `sort` is to convert every value into a **string** and then compare their **UTF-16 character codes**.

```js
/* Example: Sorting Strings Alphabetically */

const people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Roxanne', 'Maggie Mae'];

people.sort();

// Array is mutated to: ['Angie', 'Jolene', 'Maggie Mae', 'Mrs. Robinson', 'Roxanne']
console.log(people);
```

#### Sorting Behavior with Numbers

- We should be careful when using `sort` on numbers because it does **not sort by numeric value** by default.

- Because it converts numbers to **strings** first, a number like `10` or `100,000` will come before `34` because the string "1" has a lower character code than "3".

- This **unexpected behavior** is unique to JavaScript compared to other programming languages, so we rarely use the default `sort` for numerical data.

```js
/* Example: Unexpected Numeric Sorting */

const nums = [34, 10, 100000, 67, 99];

nums.sort();

// Result is based on string character codes: [10, 100000, 34, 67, 99]
console.log(nums);
```

## Reference Type

- **Arrays** are **reference types**. Because arrays can contain a massive amount of data, JavaScript does not store the actual array values directly inside the variable's memory slot.

- Instead, the variable stores a **reference** to the array's location in memory. You can think of this reference as a **pointer** or a **memory address**.

- When we set one array variable equal to another, we are not copying the array itself; we are copying the **reference**. This means both variables are now **pointing to the exact same thing in memory**.

- If we modify the contents of the array using one variable (e.g., using `push` or `pop`), the changes are reflected in the other variable because they both look at the same data.

```js
/* Example: Arrays sharing a reference */

let nums = [5, 6, 7, 8];
let otherNums = nums; // Both variables point to the same reference

nums.push(9);

console.log(nums);      // [5, 6, 7, 8, 9]
console.log(otherNums); // [5, 6, 7, 8, 9] (reflects the change)

otherNums.pop();
otherNums.pop();

console.log(nums);      // [5, 6, 7] (affected by changes to otherNums)
```

See also: [06-objects-the-core-of-javascript](06-objects-the-core-of-javascript.md)

### `const` with Arrays

- Arrays are **reference types**, which means the variable does not store the actual content of the array in its memory slot.

- Instead, the variable stores a **reference** (or a pointer) to the location in memory where the array data is kept.

- When we use `const` with an array, the **reference** itself is what must stay constant, not the data inside the array.

- We can change the **internals** or contents of a `const` array—such as adding, removing, or modifying items—as long as we do not try to point the variable to a **new array**.

- We use `const` for arrays the **majority of the time** in professional development because we rarely need to change the reference to a completely different array.

```js
/* Example: Mutating a const array */
const myEggs = ['brown', 'brown'];
myEggs.push('white'); // Allowed
myEggs[0] = 'green'; // Allowed

/* Example: Reassignment Error */
// myEggs = ['blue', 'pink']; // Error: Assignment to constant variable
```

## Nested Arrays

- We can also **nest arrays** inside of other arrays. This is as simple as using array brackets `[]` where each element itself is another array.

- While we can use nested arrays to store pairs of data, **objects** are often a better choice for organizing complex information because they help us understand the significance of the data better than a simple list.

- **Arrays** are generally the best choice when there is an **explicit or important order** that needs to be preserved.

### Multi-dimensional Arrays

- **Multi-dimensional arrays** is the formal term for arrays nested inside of other arrays.

- A common use case for these is modeling **grids** or **game boards**, such as a **tic-tac-toe board** or **chessboard**.

- We can nest arrays to various depths; for example, a **two-dimensional array** represents a grid, while a **three-dimensional array** could model something like a **Rubik's Cube**.

### Accessing and Updating Nested Data

- To access an element inside a nested array, we **chain square brackets** together. The first index gets us into the outer array, and the second index gets us into the nested array.

- We can continue chaining brackets (e.g., `array[0][1][1]`) if we have multiple levels of nesting.

- **Updating elements** works the same way; we locate the specific index using chained brackets and then use the assignment operator to change the value.

```js
/* Example: Animal Pairs Access and Update */

const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram'],
  ['peahen', 'peacock']
];

// Accessing 'peahen'
console.log(animalPairs[2][0]); 

// Updating 'buck' to 'stag'
animalPairs[0][1] = 'stag';
```

```js
/* Example: Tic-Tac-Toe Board */

// Using null to represent an empty square
const board = [
  ['O', null, 'X'],
  [null, 'X', 'O'],
  ['X', 'O', null]
];
```

```js
/* Example: Deeply Nested Array Access */

const animalPairs = [
  ['doe', ['buck', 'stag']],
  ['ewe', 'ram']
];

// Accessing 'stag'
console.log(animalPairs[0][1][1]);

// Updating to 'STAG'
animalPairs[0][1][1] = 'STAG';
```

// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `colors` that contains three colors.
// Type your solution immediately below this line:

var colorsArray = [
  "red",
  "blue",
  "yellow"
];

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:

var last = colorsArray[colorsArray.length - 1];

// #3: Create an empty array called `favoriteColors`.
// Type your solution immediately below this line:

var favoriteColors = [];

// #4: Create a `for` loop that adds each string in `colors` to `favoriteColors`.
// Type your solution immediately below this line:

for (i = 0; i < colorsArray.length; i++) {
  favoriteColors.push(colorsArray[i]);
}

// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:

var instructor = {
  name: "Spen",
  age: 29,
  language: "Javascript"
}

// #6: Add a `facial-hair` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:

instructor['facial-hair'] = true;

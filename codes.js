const localQuotes = [
    {
      text: "The pop() method removes the last element from an array and returns that element. This method changes the length of the array.",
      author: 'Array.prototype.pop()',
    },
    {
      text: "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
      author: 'Array.prototype.push()',
    },
    {
      text: "The reduce() method executes a user-supplied 'reducer' callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. The first time that the callback is run there is no 'return value of the previous calculation'. If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0). Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:",
      author: 'Array.prototype.reduce()',
    },
    {
      text: "The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.",
      author: 'Array.prototype.reduceRight()',
    },
    {
      text: "The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.",
      author: 'Array.prototype.reverse()',
    },
    {
      text: "The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.",
      author: 'Array.prototype.shift()',
    },
    {
      text: "The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.",
      author: 'Array.prototype.slice()',
    },
    {
      text: "The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.",
      author: 'Array.prototype.some()',
    },
    {
      text: "The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.",
      author: 'Array.prototype.sort()',
    },
    {
      text: "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().",
      author: 'Array.prototype.splice()',
    },
    {
      text: "The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ',').",
      author: 'Array.prototype.toLocaleString()',
    },
    {
      text: "The toString() method returns a string representing the specified array and its elements.",
      author: 'Array.prototype.toString()',
    },
    {
      text: "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.",
      author: 'Array.prototype.unshift()',
    },
    {
      text: "The values() method returns a new array iterator object that iterates the value of each index in the array.",
      author: 'Array.prototype.values()',
    },
]
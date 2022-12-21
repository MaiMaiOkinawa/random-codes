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
    {
      text: "The length data property of an Array instance represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.",
      author: 'Array.prototype.length',
    },
    {
      text: "The @@iterator method of an Array object implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an iterator that yields the value of each index in the array. The initial value of this property is the same function object as the initial value of the Array.prototype.values property.",
      author: 'Array.prototype[@@iterator]()',
    },
    {
      text: "The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.",
      author: 'Array.prototype.at()',
    },
    {
      text: "The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
      author: 'Array.prototype.concat()',
    },
    {
      text: "The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.",
      author: 'Array.prototype.copyWithin()',
    },
    {
      text: "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
      author: 'Array.prototype.entries()',
    },
    {
      text: "The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.",
      author: 'Array.prototype.every()',
    },
    {
      text: "The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.",
      author: 'Array.prototype.fill()',
    },
    {
      text: "The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
      author: 'Array.prototype.filter()',
    },
    {
      text: "The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.",
      author: 'Array.prototype.find()',
    },
    {
      text: "The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.",
      author: 'Array.prototype.findIndex()',
    },
    {
      text: "The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.",
      author: 'Array.prototype.findLast()',
    },
    {
      text: "The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.",
      author: 'Array.prototype.findLastIndex()',
    },
    {
      text: "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
      author: 'Array.prototype.flat()',
    },
    {
      text: "The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.",
      author: 'Array.prototype.flatMap()',
    },
    {
      text: "The forEach() method executes a provided function once for each array element.",
      author: 'Array.prototype.forEach()',
    },
    {
      text: "The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.",
      author: 'Array.from()',
    },
    // {
    //   text: "",
    //   author: '',
    // } 
]
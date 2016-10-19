// Recursion Practice

// Write a recursive method, range, that takes a start and an end and
// returns an array of all numbers between.
//

function range(start, end) {

}

console.log(range(1,10)); // [2,3,4,5,6,7,8,9]

// Write a recursive and an iterative Fibonacci method.
// The method should take in an integer n and return the first n Fibonacci
// numbers in an array.
//

function fib(n) {

}

console.log(fib(6)); // [1,1,2,3,5,8]


// Write a recursive Binary Search. Note that binary search only works on
// sorted arrays. Make sure to return the location of the found object
// (or nil if not found!).

// Hint: you will probably want to use subarrays.
//

function bsearch(arr, target) {

}

console.log(bsearch([1, 2, 3], 1)); // => 0
console.log(bsearch([2, 3, 4, 5], 3)); // => 1
console.log(bsearch([2, 4, 6, 8, 10], 6)); // => 2
console.log(bsearch([1, 3, 4, 5, 9], 5)); // => 3
console.log(bsearch([1, 2, 3, 4, 5, 6], 6)); // => 5
console.log(bsearch([1, 2, 3, 4, 5, 6], 0)); // => -1
console.log(bsearch([1, 2, 3, 4, 5, 7], 6)); // => -1

// Write a recursive MergeSort
// hint: The base cases are for arrays of length zero or one.

function mergeSort(array) {

}

function merge() {

}

console.log(mergeSort([192,28,43,29,1,2,200,4])); // [1,2,4,28,29,43,192,200]


// Write a method, subsets, that will return all subsets of an array.
//

function subsets(array) {

}

console.log(subsets([])); // => [[]]
console.log(subsets([1])); // => [[], [1]]
console.log(subsets([1, 2])); // => [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])); // => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

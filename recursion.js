// Recursion Practice

// Write a recursive method, range, that takes a start and an end and
// returns an array of all numbers between.
//

function range() {

}


// Write a recursive and an iterative Fibonacci method.
// The method should take in an integer n and return the first n Fibonacci
// numbers in an array.
//

function fib() {

}

// Write a recursive Binary Search. Note that binary search only works on
// sorted arrays. Make sure to return the location of the found object
// (or nil if not found!).

// Hint: you will probably want to use subarrays.
//

function bsearch() {

}

bsearch([1, 2, 3], 1) // => 0
bsearch([2, 3, 4, 5], 3) // => 1
bsearch([2, 4, 6, 8, 10], 6) // => 2
bsearch([1, 3, 4, 5, 9], 5) // => 3
bsearch([1, 2, 3, 4, 5, 6], 6) // => 5
bsearch([1, 2, 3, 4, 5, 6], 0) // => nil
bsearch([1, 2, 3, 4, 5, 7], 6) // => nil

// Write a recursive MergeSort
// hint: The base cases are for arrays of length zero or one.

function mergeSort() {

}

function merge() {

}


// Write a method, subsets, that will return all subsets of an array.
//

function subsets() {

}

subsets([]) // => [[]]
subsets([1]) // => [[], [1]]
subsets([1, 2]) // => [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// Iterations

function bubbleSort(arr) {

}

console.log(bubbleSort([192,28,43,29,1,2,200,4])); // [1,2,4,28,29,43,192,200]

Array.prototype.bubbleSort = function () {

};

console.log([192,28,43,29,1,2,200,4].bubbleSort()); // [1,2,4,28,29,43,192,200]


function substrings(string) {

}

console.log(substrings("hello")); // ['h','he','hel','hell','hello','e','el','ell','ello','l','ll','llo','l','lo','o']

String.prototype.substrings = Function () {
  
}

console.log("hello".substrings();) // ['h','he','hel','hell','hello','e','el','ell','ello','l','ll','llo','l','lo','o']

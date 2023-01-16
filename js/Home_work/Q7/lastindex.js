

//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".


let arr = ["ineuron","pw skills","google","facebook","amazone","flipkart","pw skills","payPal","zomato"];

let lastIndex = arr.lastIndexOf("pw skills")

let firstIndex= arr.indexOf("pw skills")

let checkForCaseSensitive = arr.lastIndexOf("Pw skills");

console.log(`Last index of pw skills is ${lastIndex}`)
console.log(`First index of pw skills is ${firstIndex}`)
console.log(`case sensitive example ${checkForCaseSensitive}`)





// let baseString = 'this is a base string.';
// let stringToSearch = 'apple';

// console.log('The index of last position of the first character of "'+ stringToSearch + '" is ' + baseString.lastIndexOf(stringToSearch[0]));
// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method



// The spread operator(...) allows an iterable to expand in places where multiple arguments are expected.In this case, it automatically expands the array and gives the numbers to the functions.


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

console.log(ages.length)
function maxAge(arr){
    return Math.max(...arr)
}

function minAge(arr){
    return Math.min(...arr)
}

// function median(arr){
//     let len = arr.length;
//     if(len % 2===0){
//         let ans = arr[len/2]+
//     }
//}

// let maxAge = Math.max(...ages);
// let minAge = Math.min(...ages);
// console.log("Maximum age ",maxAge);
// console.log("Minimum age ",minAge);


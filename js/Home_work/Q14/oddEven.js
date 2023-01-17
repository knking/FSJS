//14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

//using normal funtion

// function oddEven(num){
//     if(num %2 ===0){
//         console.log(`${num } is Even`)
//     }else{
//         console.log(`${num} is Odd`)
//     }
// }

// oddEven(10);
// oddEven(11);
// oddEven(1);
// oddEven(121);

//using normal function assign to a vriable

// let checkOddEven = function(num1){
//     if(num1 % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let check = checkOddEven(21);

// if(check){
//     console.log("Number is Even")
// }else{
//     console.log("Number is odd")
// }



///using Arrow function

let checkOddEven = (ele)=>{
return ele % 2 ===0;
}

let n=checkOddEven(120);

if(n){
    console.log("Number is Even")
}else{
    console.log("Number is odd")
}

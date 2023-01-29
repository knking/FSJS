

// 09. Boolean value is either true or false.
// - Write three JavaScript statement example which provide truthy value.
// - Write three JavaScript statement example which provide falsy value.



function truthyOrFalsy(a) {
  return a ? "truthy" : "falsy";
}

//truthy valuse
let ans1 = truthyOrFalsy("0")
let ans2 = truthyOrFalsy(" ")
let ans3 = truthyOrFalsy("yy")
let ans4 = truthyOrFalsy([])
let ans5 = truthyOrFalsy({})

console.log(ans1)
console.log(ans2)
console.log(ans3)
console.log(ans4)



//faslse value

let ans10 = truthyOrFalsy(0)
let ans6 = truthyOrFalsy(false)
let ans7 = truthyOrFalsy(null)
let ans8 = truthyOrFalsy(undefined)
let ans9 = truthyOrFalsy(-0)

console.log(ans10)
console.log(ans6)
console.log(ans7)
console.log(ans8)
console.log(ans9)





let isMorning = false;
let isDayTime = true;
let isEvening = false;

function greetFriend() {
  if (isMorning === true && isDayTime === false && isEvening === false) {
    return `Good morning, friend!`;
  } else if (isMorning === false && isDayTime === true && isEvening === false) {
    return `Good afternoon, friend!`;
  } else if (isMorning === false && isDayTime === false && isEvening === true) {
    return `Good night, friend!`;
  } else {
    return `Hi friend!`;
  }
}

console.log(greetFriend())







// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();
// console.log(now)
// console.log(now.toString())

console.log("Today year is ",now.getFullYear());

const monthIs = now.getMonth()+1;
console.log("Today Month is ", monthIs);

const todayDate = now.getDate();
console.log("Today Date is ", todayDate);

const todayDAY = now.getDay();
console.log("Today Day is ",todayDAY);

const hrs = now.getHours();
console.log("Current Hours ",hrs)

const minute = now.getMinutes();
console.log("Current minutes is ",minute)


console.log("numbers of seconds elapsed from January 1, 1970 to now",Date.now())
 
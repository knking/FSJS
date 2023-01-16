// 12. Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

let now = new Date();

let YEAR = now.getFullYear();

let MONTH = now.getMonth()+1;
MONTH=("0"+MONTH).slice(-2);

let DATE = now.getDate();
DATE = ("0"+DATE).slice(-2);

let hrs = now.getHours();
hrs = ("0"+hrs).slice(-2);

let MINUTE = now.getMinutes();
MINUTE = ("0"+MINUTE).slice(-2);

console.log(`Date in YYYY-MM-DD HH:mm Formate:-${YEAR}-${MONTH}-${DATE} ${hrs}:${MINUTE} `) 
console.log(`Date in DD-MM-YYYY HH:mm Formate:-${DATE}-${MONTH}-${YEAR} ${hrs}:${MINUTE} `)
console.log(`Date in DD/MM/YYYY HH:mm Formate:-${DATE}/${MONTH}/${YEAR} ${hrs}:${MINUTE} `)

//OUTPUT

// Date in YYYY-MM-DD HH:mm Formate:-2023-01-16 23:47 
// Date in DD-MM-YYYY HH:mm Formate:-16-01-2023 23:47 
// Date in DD/MM/YYYY HH:mm Formate:-16/01/2023 23:47 












// let d = new Date();
// date = [
//   d.getFullYear(),
//   ('0' + (d.getMonth() + 1)).slice(-2),
//   ('0' + d.getDate()).slice(-2)
// ].join('/');
// console.log(date)
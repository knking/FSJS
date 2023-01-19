

//08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

let str ="   krishna  ";

console.log(str)
console.log(`Before removing trailing spaces its length ${str.length}`)

let newStr = str.trim()

console.log(newStr)

console.log(`After removing trailing spaces String and its length ${newStr.length}`)
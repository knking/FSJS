
// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.



let num1 =10;
let num2 =20;

let operation = "substractio";

switch (operation) {
    case "add":
        console.log(num1+num2)
        break;
    case "substraction":
        console.log(num1-num2)
        break;
    case "multipilcation":
        console.log(num1*num2)
    case "division":
        console.log(num1/num2)
    default:
        console.log("Pleae enter correct operatot")
        break;
}

// function calculator(num1,num2,operation){
//     if(operation =="+"){
//         return num1+num2;
//     }if(operation==="-"){
//         return num1-num2;
//     }if(operation==="*"){
//         return num1 * num2;
//     }if(operation==="%" || operation ==="/"){
//         return num1 / num2;
//     }
// }

// console.log(calculator(10,20,"*"))
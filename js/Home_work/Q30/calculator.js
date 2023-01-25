
// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.


function calculator(num1,num2,operation){
    if(operation =="+"){
        return num1+num2;
    }if(operation==="-"){
        return num1-num2;
    }if(operation==="*"){
        return num1 * num2;
    }if(operation==="%" || operation ==="/"){
        return num1 / num2;
    }
}

console.log(calculator(10,20,"*"))
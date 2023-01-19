// 4. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included)

let evenNum =[];
let oddNum =[];

for(let i=0;i<=100;i++){
    if(i%2==0){
        evenNum.push(i)
    }else{
        oddNum.push(i)
    }
}

console.log(evenNum)
console.log(oddNum)
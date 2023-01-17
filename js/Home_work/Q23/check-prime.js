// 23. Write a program to check that the number given by the user is a prime number or not.


function checkPrime(num){
    if(num===0){
        return "0 is neither a prime nor a composite number."
    }else if(num ==1){
        return "1 is not a prime number";
    }else{
        for(let i=2;i<=num/2;i++){
            if(num %i ==0){
                return "Not prime"
            }
        }
        return "prime"
    }
}
let ans = checkPrime(121)
console.log(ans);
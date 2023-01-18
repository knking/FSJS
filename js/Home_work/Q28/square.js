// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let n =4;

let str="";
for (let index = 0; index <=4; index++) {
  
    for(let j=0;j<=n;j++){
        str+="*";
    }
    console.log(str);
    str="";
    
}
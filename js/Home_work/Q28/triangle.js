// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***


let n =3;

// let str="";
// for(let i=0;i<n;i++){
//     for(let j=0;j<=i;j++){
//        str+="*";
//     }
//     console.log(str)
//    str="";
// }



for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
       process.stdout.write("*")
    }
    console.log()
  
}
// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

let n =3;

let str="";
for(let i=0;i<n;i++){
    for(let j=1;j<=(i*2)+1;j++){
        str+="*";
    }
    console.log(str)
    str="";

}

// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


let countries = ["India","Nepal","abc","Japan"]

// let check = countries.includes("Ethiopia")

// if(check){
//     let idx = countries.indexOf("Ethiopia")

// }
// console.log(check)

let ck = true;
for(let i=0;i<countries.length;i++){
    if(countries[i]==="Ethiopia"){
        countries[i]=countries[i].toUpperCase()
        console.log(countries[i]);
        ck=false;
        break;
    }
}
if(ck){
    countries.push("Ethiopia")
    console.log(countries)
}


// 20. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea


let shoppingCart = ['Milk','Coffee','Tea','Honey']

console.log("Initial shopping cart")

//checking for meat
if(shoppingCart.includes("Meat")){
    console.log("meat is already in shopping list")
    console.log(shoppingCart)
}else{
    shoppingCart.unshift("Meat")
    console.log("Meat is added in shopping cart",shoppingCart)
}

//checcking for Sugar
if(shoppingCart.includes("Sugar")){
    console.log("Sugar is lready present",shoppingCart)
}else{
    shoppingCart.push("Sugar")
    console.log("Sugar is added at the end", shoppingCart)
}

//removing honey

for(let i=0;i<shoppingCart.length;i++){
    if(shoppingCart[i]==="Honey"){
        shoppingCart.slice(i,1)
    }
}
console.log("After removing honey from the shopping list ", shoppingCart)

//modifying tea to green tea

let teaIdx=shoppingCart.indexOf("Tea");

shoppingCart[teaIdx]="Green Tea"
console.log("Green Tea Added at the place of Tea", shoppingCart)
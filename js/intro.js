// let myArr = ["krishna","nand","ray",1000,9.0,true];
// console.log(myArr.length);

// let arr1 = ['krishna', 'ray', 'nand'];
// let arr2 = [1, 2, 3];
// let arr3 = arr1.concat(arr2);
// console.log(arr3)

// indexof

// let myArr = [10,20,20,30,40,50,"krishna","krishna"]
// console.log(myArr.indexOf(40));
// console.log(myArr.indexOf(20));
// console.log(myArr.indexOf("krish"));

//lastIndexOf


// let numbers = [10,50,90,20,20,30,100];
// console.log(numbers.lastIndexOf(20));
// console.log(numbers.lastIndexOf(90));
// console.log(numbers.lastIndexOf(30,2));
// console.log(numbers.lastIndexOf(10,-1));

// push

//  let list_of_eleemnt = [10,50,90,100];
//  console.log("original array:- ", list_of_eleemnt)
//  list_of_eleemnt.push(60)
//  list_of_eleemnt.push("krishna")
//  list_of_eleemnt.push('a')
//  list_of_eleemnt.push(10.10)
//  console.log("After push operation new array is :- ")
//  console.log(list_of_eleemnt)

// pop

// let arr = [10, 50, 90, 100, 60, 'krishna', 'a', 10.1];
// arr.pop();
// console.log(arr)

// let poped_element = arr.pop()
// console.log(poped_element);

         //reverse

// let arr1 = [1,2,3,4,5];
// console.log(arr1.reverse())

// let arr2 = ["Krishna","is","Name","My"]
// console.log(arr2.reverse())
  
            //  Shift

// let arr1 = [1,2,3,4,5];
// arr1.shift();
// console.log(arr1);

// let shifted_ele = arr1.shift();
// console.log(shifted_ele);
// console.log(arr1); 

                         // unshfit

// let myArr = [2,3,4,5];
// myArr.unshift(1);
// console.log(myArr);

// let myArr2 = ["is","krishna"];
// myArr2.unshift("my","name");
// console.log(myArr2);

//sort
// let myArr = [5,4,3,2,1];
// console.log(myArr.sort())

// let list  = ["dog","cat","ball","apple"];
// list.sort();
// console.log(list);

//splice

// const months = ['Jan', 'March', 'April','august'];
// let removed = months.splice(2,0)
// console.log(months);
// console.log(removed);

// const months = ['Jan', 'March', 'April','august'];
// let removed = months.splice(2,0,'may');  
// console.log(months);
// console.log(removed);

// const months = ['Jan', 'March', 'April','august'];
// let removed = months.splice(1,1);  
// console.log(months);
// console.log(removed);

// const months = ['Jan', 'March', 'April','august'];
// let removed = months.splice(1,2,'june','july');  
// console.log(months);
// console.log(removed);
// const months = ['Jan', 'March', 'April','august'];
// let removed = months.splice(1);  
// console.log(months);
// console.log(removed);

// let ar =[1,2,3,4,5,6];
// console.log(ar.slice())
// console.log(ar.slice(2))
// console.log(ar.slice(1,4))

// let nums = [4, 9, 16, 25];
// let newArr = nums.map(Math.sqrt)
// console.log(newArr)

// const numbers = [6, 4, 1, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }

// console.log(newArr)

// filter

// let ages = [20, 25, 16, 39,44,14];
// let valid_age = ages.filter(checkForAdult);

// function checkForAdult(age) {
//   return age >= 18;
// }
// console.log(valid_age)

////////////fill

// let myArr = [10,20,30,40,50]
// myArr.fill(0)
// console.log(myArr)
// let arr2 = [10,20,30,40,50];
// arr2.fill(0,1,4)
// console.log(arr2)

// let elements = ['apple', 'bal', 'cat'];

// console.log(elements.join());


// console.log(elements.join(''));


// console.log(elements.join('-'));

let arr= ["apple", "bal", "cat","dog"];
let copyItems = [];

// before for each loop 
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// after for each loop 
arr.forEach((item) => {
  console.log(item)
});

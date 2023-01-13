
// let user={
//     name:"krishns",
//     age:25,
//     email:"knr020498@gmail.com",
//     dream:function(){
//         return "Lots of money";
//     },
//     hardworker :true,
// }
// console.table(user)

// console.log(user.dream());

const obje1={
    name:"krishna",
    roll_num:"1111",
    age:23,
    set:()=>{
        this.age+=24;
    },
   
    getAge: function(){
        return this.age;
    },
    myage : function(){
        this.age=25;
    }
    
}
console.table(obje1)
console.log(obje1.set())
console.log(obje1.myage())
console.log(obje1.getAge())
console.table(obje1)
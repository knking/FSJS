// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F




let score =100;


if(score >= 80){
    console.log("Your Grade is A");
}else if(score <80 && score >= 70 ){
    console.log  ("Your Grade is B")
}else if(score < 70 && score>= 60){
    console.log("Your Grade is C")
}else if(score < 60 && score >=50){
    console.log("Your Grade is D")
}else{
    console.log("Youre grade is F and You are Fail 😒😒😒")
}



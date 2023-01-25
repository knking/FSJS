
// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more


function getBmi(weight,height){
    
    let bmi= weight/(height * height);
    return bmi;
}

let bmiWight = getBmi(60,1.8)
if(bmiWight >= 30){
    console.log(`You are Obese`)
}
else if(bmiWight >=25 && bmiWight <=29.9){
    console.log(`You are Overwight`)
}else if(bmiWight >=18.5 && bmiWight <= 24.9){
    console.log(`You are normal weight `)
}else{
    console.log(`You are under weight `)
}
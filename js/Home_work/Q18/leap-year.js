


//18. Write a program which tells the number of days in a month, now consider leap year.

let month = "NovembeR";
month=month.toLowerCase();

if(month==="january" || month==="march" || month==="may" || month==="july" || month==="august" || month==="october" || month==="december"){
    console.log(`Total number od days in ${month} is 31`)
}else if(month==="april" || month==="june" || month==="sepetember" || month==="november"){
    console.log(`Total number of days in ${month} is 30`)
}else if(month==="february"){
    console.log(`Total number od days in ${month} is 28 and In Leap year total number of days is 29`)
}else{
    console.log("Please Enter correct month name")
}
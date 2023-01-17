//  16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer 



let season = "AprIl";
season=season.toLowerCase();

if(season ==="september" || season==="october" || season ==="november"){
    console.log("Season is Autumn");
}else if(season ==="december" || season==="january" || season ==="february"){
    console.log("Season is Winter");
}else if(season==="march" || season==="april" || season==="may"){
console.log("Season is Spring");
}
else if(season==="june"|| season==="july" | season==="august" ){
    console.log("Season is Summer");
}else{
    console.log("please enter correct Season");
}


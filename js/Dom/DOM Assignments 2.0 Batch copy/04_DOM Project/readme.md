# DOM Assignment 4
## Taks 
- User has to chnage Unit section color
- User has to change Level Text in two Crad
- User has to display all the in one line
### After update
![card updated](./Output/DOM%20P1%20SS.png)

### Project Solution
```javascript
//background color
let element = document.querySelectorAll(".clash-card__unit-stats");
        element[0].style.backgroundColor = "#ec9b3b"
        element[1].style.backgroundColor = "#ee5487"
        element[2].style.backgroundColor = "#f6901a"
        element[3].style.backgroundColor = "#82bb30"
        element[4].style.backgroundColor = "#4facff"

//// Text Color
        let col = document.querySelectorAll(".one-third");
        col.forEach((e) => {
            e.style.color = "#FFFFFF"
        });
 /// Level Heading Description
        let archer = document.querySelector(".archer div:nth-child(3)");
        archer.innerText = "The Archer"

        let goblin = document.querySelector(".goblin div:nth-child(3)");
        goblin.innerText = "The Goblin";

// changing width and hight to fir all card in one line
        let container = document.querySelector(".slide-container");
        container.style.gap = "30px";

        let card = document.querySelectorAll(".clash-card")
        card.forEach((ans) => {
            ans.style.width = "260px";
        });

        let img = document.querySelectorAll(".slide-container img");
        img[0].style.width="350px";
        img[1].style.width="350px";
        img[2].style.width="300px";
        img[3].style.width="330px";
        img[4].style.width="330px";

  let h = document.querySelectorAll(".clash-card__image")
  h.forEach((hig)=>{
    hig.style.height="200px"
  })
```
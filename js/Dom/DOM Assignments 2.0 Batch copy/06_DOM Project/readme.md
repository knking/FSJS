# DOM Assignment 6
## Task 1
User has to change heder image 
### After solution
![image updated](./Output/DOM%20P3%20SS-1.png)
### Project Solution
```javascript
//header imge 
let imgTag = document.querySelector("header img");
imgTag.src="./assets/ineuron-logo.png";
```

## Task 2
User has to change price **$4** to **$10** and also user need to add one more social media icon **Linkedin**
### After Update
![price changed](./Output/DOM%20P3%20SS-2.png)
### Project Solution
```javascript
///price changing code
let cost = document.querySelector(".app_price span")
cost.innerText = "$10";

// new social media icon
let ansDiv = document.querySelector(".footer_social")
let newDiv =document.createElement("div");
newDiv.className="footer_social_ico";

newDiv.innerHTML='<i class="fa-brands fa-linkedin"></i>';
ansDiv.appendChild(newDiv)
```

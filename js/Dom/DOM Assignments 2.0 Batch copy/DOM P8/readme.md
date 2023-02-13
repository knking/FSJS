# DOM Assignment 8
## Task 1
User has to add **scrollbar** to the right section
### After Update
![scroll bar added](./output-1.png)
### Project Solution
```javascript
 //code for adding scroll bar
let scrollDiv = document.querySelector(".col-lg-4") ;
scrollDiv.style.overflowX="hidden";
scrollDiv.style.overflowY="auto";

let scrollh2 = document.createElement("h2");
scrollh2.className="new-head";
scrollh2.innerText="This is my custom heading";

let scrollPara =document.createElement("p");
scrollPara.className="new-p";
scrollPara.innerText="I am custom paragraph which is added by Krishna";

let hrLine = document.createElement("hr");
hrLine.className="hr-line";
scrollDiv.appendChild(hrLine);
scrollDiv.appendChild(scrollh2);
scrollDiv.appendChild(scrollPara);
```
## Task 2
User has to remove **background Color and Background image**
### After Update
![Background remove](./ass8.2-after.png)s
### Project solution
```javascript
//code for removing background image and color
document.body.style.background="none";
```
## Task 3
User has to dispaly navbar elements when web page **open in mobile view**
### After update
![navbar updated](./ass8.3-after.png)
### Project solution
```javascript
///code for displaying navbar elements
let nav= document.querySelector("#navbarTogglerDemo01");
   
function displayNav(ele) {  
  if (ele.matches) { // If media query matches
   nav.classList.remove("collapse");
  }
}
let fun = window.matchMedia("(max-width: 990px)")
displayNav(fun) // Call listener function at run time
fun.addListener(displayNav)
```

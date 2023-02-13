# DOM Assignment 9
## Task 1
user has to change **heading color** and update cart logo imge
### After Update
![color changed](./ass9.1-after.png)
### Project Solution
```javascript
    //code for cart image
let img = document.querySelector(".add-to-cart img");
img.src="./images/icon-cart.svg";
//code for color change
let h1 = document.querySelector(".caption h1");
h1.style.color="#e6133c";
```
## Task 2
user has to change **Cart section background color**
### After Update
![color changed](./ass9.2-after.png)
### Project Solution
```javascript
   //code for addto cart color change

let col= document.querySelector(".add-to-cart")
col.style.backgroundColor="#e6133c";
```
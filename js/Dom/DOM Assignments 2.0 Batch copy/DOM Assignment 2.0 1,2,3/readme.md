# DOM Assignment 1
## Task 1
The user has to append a new element in the navigation menu named **Hire Me** after the projects

### After Update
![Hire Me added](./firstAssignmentImage/task1Output.png)

### Project Solution
```javascript
let listItem = document.createElement("li");
listItem.innerHTML="<a> Hire Me </a>"
let parent = document.querySelector("header nav ul")
parent.appendChild(listItem)
```
## Task 2
The user needs to change the placeholder message to **Search My Project**
### After Update
![Placehoder text changed](./firstAssignmentImage/task2Output.png)
### Project solution
```javascript
let searchItem =document.querySelector(".search-field input");
searchItem.placeholder="Search My Project";
```
## Task 3
The user has to change text  **a Freelancer** to **an Employee** and **National and international Client** to **iNeruron inteligance Pvt Ltd**
### After Update
![text changed ](./firstAssignmentImage/task3Output.png)
### Project Solution
```javascript
  
      // method 1
let para = document.querySelector(".hero-left-section p");
para.innerHTML=" <p> I am an aspiring <span>Full Stack JavaScript Developer</span>,<br />who is currently working an <span> Empolyee</span> for <br /> <span>iNeuron intelligence Pvt Ltd</span>.</p>"

       // method 2
let para = document.querySelectorAll(".hero-left-section p span");
para[1].innerText="an Employee";
para[2].innerText="iNeuron intelligence Pvt Ltd";

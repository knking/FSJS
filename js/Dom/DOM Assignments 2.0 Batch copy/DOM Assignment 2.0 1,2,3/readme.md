# DOM Assignment 1
## Task 1
The user has to append a new element in the navigation menu named ** Hire Me ** after the projects

### After Update
![Hire Me added](./firstAssignmentImage/task1Output.png)

### Project Solution
```
let listItem = document.createElement("li");
listItem.innerHTML="<a> Hire Me </a>"
let parent = document.querySelector("header nav ul")
parent.appendChild(listItem)
```
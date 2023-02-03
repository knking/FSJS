let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
//one
// let para = document.querySelectorAll(".accordian-wrapper p");
// para[2].style.display="block";
// para[3].style.display="block";

//two

let element = document.createElement("div");
element.className="accordian";


let ele1= document.createElement("h3");
let ele2 = document.createElement("p");


ele1.innerText="Skills";
ele2.innerText="i Posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";

element.appendChild(ele1)
element.appendChild(ele2);

console.log(element)

document.querySelector(".accordian-wrapper").appendChild(element)

let demo = document.querySelectorAll(".accordian p")
console.log(demo[4].innerText)
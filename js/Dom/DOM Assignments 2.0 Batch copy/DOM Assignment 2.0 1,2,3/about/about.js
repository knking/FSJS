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

let elem = document.createElement("div");
elem.className="accordian";
// elem.setAttribute('class','accordian')

let h3= document.createElement("h3");
let p = document.createElement("p");


h3.innerText="Skills";
p.innerText="i Posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";

elem.appendChild(h3)
elem.appendChild(p);


document.querySelector(".accordian-wrapper").appendChild(elem)

// let demo = document.querySelectorAll(".accordian-wrapper")
// demo.forEach((e)=>{
//   console.log(e)
// })

Array.from(accordian);
accordian.forEach((element) =>{
  element.style.background = "#DADAF8";
} )




//one
// let para = document.querySelectorAll(".accordian-wrapper p");
// para[2].style.display="block";
// para[3].style.display="block";

//two

// let elem = document.createElement("div");
// elem.className="accordian";
// document.querySelector(".accordian-wrapper").appendChild(elem)
// // elem.setAttribute('class','accordian')

// let head3= document.createElement("h3");
// let newPara = document.createElement("p");


// head3.innerText="Skills";
// newPara.innerText="i Posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";

// elem.appendChild(head3)
// elem.append(newPara)


let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    console.log(para)
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


// Array.from(accordian);
// accordian.forEach((element) =>{
//   element.style.background = "#DADAF8";
// } )



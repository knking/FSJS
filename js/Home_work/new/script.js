

const addKeyCodeAndName = (event) => {
    const keyCode = document.querySelector(".keyCode");
    keyCode.innerText = event.keyCode;
    const keyName = document.querySelector(".keyName");
    if (event.keyCode === 32) {
      keyName.innerText = "space";
    } else {
      keyName.innerText = event.key;
    }
  };
  
  document.addEventListener("keydown", addKeyCodeAndName);



  
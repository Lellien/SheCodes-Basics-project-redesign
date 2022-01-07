//Kettle switch
let kettleStatus = document.querySelector(".kettle-status");
function switchKettle() {
  if (kettleStatus.innerHTML === "<strong>OFF</strong>") {
    kettleStatus.innerHTML = "<strong>ON</strong>";
    kettleStatus.classList.toggle("kettle-status-on");
  } else {
    kettleStatus.innerHTML = "<strong>OFF</strong>";
    kettleStatus.classList.toggle("kettle-status-on");
  }
}

let bottom = document.querySelector(".bottom");
function activateBottom() {
  bottom.classList.toggle("bottom-highlight");
  switchKettle();
}
let cupMade = document.querySelector(".result");
function makeTea() {
  let milk = prompt("Sure thing! Do you prefer it with or without milk?");
  if (milk === null) {
    alert("Ok, no tea then, but you're missing out!");
  } else {
    milk.toLowerCase();
    milk = milk.replace("black", "no milk");
    milk = milk.replace("none", "no milk");
    milk = milk.replace("yes", "milk");
    if (milk === "without" || milk === "without milk" || milk === "milkless") {
      milk = "no milk";
    }
    if (milk === "with" || milk === "with milk" || milk === "milky") {
      milk = "milk";
    }

    if (milk !== "milk" && milk !== "no milk") {
      alert(
        `Sorry, I don't understand "${milk}". Please try again and choose between milk or no milk`
      );
    } else {
      let sugar = prompt(`Ok, ${milk} it is. And how many sugars?`);

      if (sugar === null) {
        alert("Ok, no tea then, but you're missing out!");
      } else {
        while (sugar >= 5) {
          sugar = prompt(
            "Sorry, for the sake of your health, you can have a maximum of 4 sugars (which is very sweet indeed!) How many? (0-4)"
          );
        }
        {
          {
            switch (sugar) {
              case "1": {
                if (milk === "no milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar} sugar! 😀 </div>
                                         <br />
                                         <img
                                          class="img-teapot"
                                          src="/images/teapot.png"
                                          alt="traditional ceramic teapot"/>
                                         <img
                                          class="img-sugar"
                                          src="/images/sugar cube.png"
                                          alt="sugar cube"/>
                                          <br/>`;
                } else if (milk === "milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar} sugar! 😀 </div>
                                          <br />
                                          <img
                                           class="img-teapot"
                                           src="/images/teapot.png"
                                           alt="traditional ceramic teapot"/>
                                          <img
                                           class="img-milk"
                                           src="/images/milk.png"
                                           alt="milk jug pouring to a splash"/>
                                          <img
                                          class="img-sugar"
                                          src="/images/sugar cube.png"
                                          alt="sugar cube"/>
                                          <br/>`;
                }

                break;
              }

              case "2": {
                if (milk === "no milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar} sugars! 😀 </div>
                                         <br />
                                         <img
                                          class="img-teapot"
                                          src="/images/teapot.png"
                                          alt="traditional ceramic teapot"/>
                                         <img
                                          class="img-sugar-2"
                                          src="/images/2 sugars.png"
                                          alt="2 sugar cubes"/>
                                          <br/>`;
                } else if (milk === "milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar} sugars! 😀 </div>
                                          <br />
                                          <img
                                           class="img-teapot"
                                           src="/images/teapot.png"
                                           alt="traditional ceramic teapot"/>
                                          <img
                                           class="img-milk"
                                           src="https://www.pngkey.com/png/full/67-671533_milk-jug.png"
                                           alt="milk jug pouring to a splash"/>
                                          <img
                                          class="img-sugar-2"
                                          src="/images/2 sugars.png"
                                          alt="2 sugar cubes"/>
                                          <br/>`;
                }

                break;
              }

              case "3": {
                if (milk === "no milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar} sugars! 😀 </div>
                                         <br />
                                         <img
                                          class="img-teapot"
                                          src="/images/teapot.png"
                                          alt="traditional ceramic teapot"/>
                                         <img
                                          class="img-sugar-3"
                                          src="/images/3 sugars.png"
                                          alt="3 sugar cubes"/>
                                          <br/>`;
                } else if (milk === "milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar} sugars! 😀 </div>
                                          <br />
                                          <img
                                           class="img-teapot"
                                           src="/images/teapot.png"
                                           alt="traditional ceramic teapot"/>
                                          <img
                                           class="img-milk"
                                           src="/images/milk.png"
                                           alt="milk jug pouring to a splash"/>
                                          <img
                                          class="img-sugar-3"
                                          src="/images/3 sugars.png"
                                          alt="3 sugar cubes"/>
                                          <br/>`;
                }

                break;
              }

              case "4": {
                if (milk === "no milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar} sugars (That's quite a sweet tooth you have!) </div>
                                         <br />
                                         <img
                                          class="img-teapot"
                                          src="/images/teapot.png"
                                          alt="traditional ceramic teapot"/>
                                         <img
                                          class="img-sugar-4"
                                          src="/images/4 sugars.png"
                                          alt="4 sugar cubes"/>
                                          <br/>`;
                } else if (milk === "milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar} sugars (That's quite a sweet tooth you have!) </div>
                                          <br />
                                          <img
                                           class="img-teapot"
                                           src="/images/teapot.png"
                                           alt="traditional ceramic teapot"/>
                                          <img
                                           class="img-milk"
                                           src="/images/milk.png"
                                           alt="milk jug pouring to a splash"/>
                                          <img
                                          class="img-sugar-4"
                                          src="/images/4 sugars.png"
                                          alt="4 sugar cubes"/>
                                          <br/>`;
                }

                break;
              }

              case "0": {
                sugar = sugar.replace(
                  0,
                  "no sugar. (You're clearly sweet enough on your own)"
                );
                if (milk === "no milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar}!</div>
                                         <br />
                                         <img
                                          class="img-teapot"
                                          src="/images/teapot.png"
                                          alt="traditional ceramic teapot"/>
                                          <br/>`;
                } else if (milk === "milk") {
                  cupMade.innerHTML = `<div class="make-cuppa">Enjoy your tea with ${milk} and ${sugar}!</div>
                                          <br />
                                          <img
                                           class="img-teapot"
                                           src="/images/teapot.png"
                                           alt="traditional ceramic teapot"/>
                                          <img
                                           class="img-milk"
                                           src="/images/milk.png"
                                           alt="milk jug pouring to a splash"/>
                                           <br/>`;
                }

                break;
              }
            }
          }
        }
      }
    }
  }
}

let makeCupButton = document.querySelector("button");
makeCupButton.addEventListener("click", makeTea);
makeCupButton.addEventListener("mouseover", activateBottom);
makeCupButton.addEventListener("mouseout", activateBottom);

//Boxes click events

function showImage(element) {
  element.classList.remove("image-hide");
  element.lastElementChild.classList.add("text-hide");
}

function showText(element) {
  element.classList.add("image-hide");
  element.lastElementChild.classList.remove("text-hide");
}

function checkbox(event) {
  if (event.currentTarget.className.includes("image-hide")) {
    showImage(event.currentTarget);
  } else {
    showText(event.currentTarget);
  }
}

let boxes = document.querySelectorAll(".box");
let box1 = document.querySelector(".box-1");
let box2 = document.querySelector(".box-2");
let box3 = document.querySelector(".box-3");
let box4 = document.querySelector(".box-4");

box1.addEventListener("click", checkbox);
box2.addEventListener("click", checkbox);
box3.addEventListener("click", checkbox);
box4.addEventListener("click", checkbox);

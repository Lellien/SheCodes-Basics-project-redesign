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

let image1 = document.querySelector(".img-1");
let image2 = document.querySelector(".img-2");
let image3 = document.querySelector(".img-3");
let image4 = document.querySelector(".img-4");

function hideImage1() {
  image1.classList.toggle("img-1-hidden");
}

function hideImage2() {
  image2.classList.toggle("img-2-hidden");
}

function hideImage3() {
  image3.classList.toggle("img-3-hidden");
}

function hideImage4() {
  image4.classList.toggle("img-4-hidden");
}

image1.addEventListener("mousedown", hideImage1);
image2.addEventListener("mousedown", hideImage2);
image3.addEventListener("mousedown", hideImage3);
image4.addEventListener("mousedown", hideImage4);

function checkImages() {
  if (image1.className === "img-1 img-1-hidden") {
    hideImage1();
  }
  if (image2.className === "img-2 img-2-hidden") {
    hideImage2();
  }
  if (image3.className === "img-3 img-3-hidden") {
    hideImage3();
  }
  if (image4.className === "img-4 img-4-hidden") {
    hideImage4();
  }
}
document.onmouseup = checkImages;

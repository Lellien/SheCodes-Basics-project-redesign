// display result HTML

function createHTML(milk, sugar) {
  function formatSugarResult(sugar) {
    let sugarResult = "";
    {
      switch (sugar) {
        case 0: {
          sugarResult = `no sugar. (You're clearly sweet enough)`;
          break;
        }
        case 1: {
          sugarResult = `one sugar!`;
          break;
        }
        case 2: {
          sugarResult = `${sugar} sugars!`;
          break;
        }
        case 3: {
          sugarResult = `${sugar} sugars!`;
          break;
        }
        case 4: {
          sugarResult = `4 sugars (You've quite the sweet tooth!)`;
          break;
        }
      }
    }
    return sugarResult;
  }
  let resultElement = document.querySelector(".result");
  let resultHTML = `<div class="mt-3 mb-3 enjoy">Enjoy your tea with ${milk} and ${formatSugarResult(
    sugar
  )} <i class="fas fa-grin smiley-symbol"></i></div>
  <img
      class="img-fluid img-teapot"
      src="/images/teapot.png"
      alt="traditional ceramic teapot"/>`;
  if (milk === "milk") {
    resultHTML =
      resultHTML +
      ` 
  <img
   class="img-fluid img-milk"
   src="/images/milk.png"
   alt="milk jug pouring to a splash"/>`;
  } else if (milk === "no milk") {
    resultHTML = resultHTML;
  }
  if (sugar > 0) {
    resultHTML =
      resultHTML +
      `<img class="img-fluid img-sugar-${sugar}"
            src="/images/${sugar} sugar.png"
            alt="${sugar} sugar cube"/>`;
  } else {
    resultHTML = resultHTML;
  }
  resultElement.innerHTML = resultHTML;
}

//make tea

function takesSugar(milk, sugar) {
  let sugars = [0, 1, 2, 3, 4];
  if (sugars.includes(sugar)) {
    createHTML(milk, sugar);
  } else {
    alert(`That is not a number. Please try again`);
  }
}

function checkMilkAnswers(answer) {
  let milkAnswers = ["milk", "yes", "with", "with milk", "milky"];
  let noMilkAnswers = [
    "no",
    "no milk",
    "black",
    "black tea",
    "none",
    "without",
    "without milk",
    "milkless",
  ];

  if (milkAnswers.includes(answer)) {
    return "milk";
  } else if (noMilkAnswers.includes(answer)) {
    return "no milk";
  } else {
    return answer;
  }
}

function makeTea() {
  let milk = prompt("Sure thing! Do you prefer it with or without milk?");
  if (milk === null) {
    alert("Ok, no tea then, but you're missing out!");
  } else {
    milk = milk.toLowerCase();
    milk = checkMilkAnswers(milk);

    if (milk !== "milk" && milk !== "no milk") {
      alert(
        `Sorry, I don't understand "${milk}". Please try again and choose between milk or no milk`
      );
    } else {
      let sugar = Number(prompt(`Ok, ${milk} it is. And how many sugars?`));
      if (sugar === null) {
        alert("Ok, no tea then, but you're missing out!");
      } else {
        while (sugar >= 5) {
          sugar = Number(
            prompt(
              "Sorry, for the sake of your health, you can have a maximum of 4 sugars (which is very sweet indeed!) How many? (0-4)"
            )
          );
        }
        {
          takesSugar(milk, sugar);
        }
      }
    }
  }
}

let makeCupButton = document.querySelector("button");
makeCupButton.addEventListener("click", makeTea);

//Boxes click events

function showImage(element) {
  element.classList.remove("image-hide");
  element.lastElementChild.classList.add("text-hide");
  element.lastElementChild.classList.remove("read");
}

function showText(element) {
  element.classList.add("image-hide");
  element.lastElementChild.classList.remove("text-hide");
  element.lastElementChild.classList.add("read");
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

//Kettle switch

function deactivateBottom() {
  bottom.classList.remove("bottom-highlight");
  kettleStatus.innerHTML = "<strong>OFF</strong>";
  kettleStatus.classList.remove("kettle-status-on");
}

function activateBottom() {
  bottom.classList.add("bottom-highlight");
  kettleStatus.innerHTML = "<strong>ON</strong>";
  kettleStatus.classList.add("kettle-status-on");
}

let observer = new IntersectionObserver(
  function (entries) {
    if (entries[0]["isIntersecting"] === true) {
      if (entries[0]["intersectionRatio"] === 1) {
        activateBottom();
      }
    } else {
      deactivateBottom();
    }
  },
  { threshold: [1] }
);

let bottom = document.querySelector(".bottom");
let kettleStatus = document.querySelector(".kettle-status");

observer.observe(document.querySelector(".make-cuppa"));

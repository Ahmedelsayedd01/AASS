const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const navMobile = document.getElementById("nav-mobile");

btnOpen.addEventListener("click", () => {
  btnOpen.style.display = "none";
  btnClose.style.display = "flex";
  navMobile.style.opacity = 1;
  navMobile.style.top = "100%";
});
btnClose.addEventListener("click", () => {
  btnOpen.style.display = "flex";
  btnClose.style.display = "none";
  navMobile.style.opacity = 0;
  navMobile.style.top = "-200%";
});

const btnLinks2 = document.getElementById("btn-links2");
const details2 = document.getElementById("details2");
btnLinks2.addEventListener("click", () => {
  if (details2.style.display == "none") {
    details2.style.display = "flex";
  } else {
    details2.style.display = "none";
  }
});

const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("card-two");
const cardThree = document.getElementById("card-three");
const cardFour = document.getElementById("card-four");
const cardFive = document.getElementById("card-five");
const cardSix = document.getElementById("card-six");
cardOne.addEventListener("click", () => {
  // console.log("own");
  cardOne.style.top = "40%";
  cardOne.style.height = "50%";
  cardOne.style.left = "42%";
  cardOne.style.transform = "rotate(0deg) ";
  // When you Hover to another card
  cardTwo.style.top = "-40%";
  cardTwo.style.height = "50%";
  cardTwo.style.left = "15%";
  cardTwo.style.transform = "rotate(-50deg)";

  cardThree.style.top = "-40%";
  cardThree.style.height = "50%";
  cardThree.style.left = "30%";
  cardThree.style.transform = "rotate(-50deg)";

  cardFour.style.top = "-40%";
  cardFour.style.height = "50%";
  cardFour.style.left = "45%";
  cardFour.style.transform = "rotate(-50deg)";

  cardFive.style.top = "-40%";
  cardFive.style.height = "50%";
  cardFive.style.left = "60%";
  cardFive.style.transform = "rotate(-50deg)";

  cardSix.style.top = "-40%";
  cardSix.style.height = "50%";
  cardSix.style.left = "75%";
  cardSix.style.transform = "rotate(-50deg)";
});
cardTwo.addEventListener("click", () => {
  // console.log("Two");
  cardTwo.style.top = "40%";
  cardTwo.style.height = "50%";
  cardTwo.style.left = "42%";
  cardTwo.style.transform = "rotate(0deg) ";
  // When you Hover to another card
  cardOne.style.top = "-40%";
  cardOne.style.height = "50%";
  cardOne.style.left = "0%";
  cardOne.style.transform = "rotate(-50deg)";

  cardThree.style.top = "-40%";
  cardThree.style.height = "50%";
  cardThree.style.left = "30%";
  cardThree.style.transform = "rotate(-50deg)";

  cardFour.style.top = "-40%";
  cardFour.style.height = "50%";
  cardFour.style.left = "45%";
  cardFour.style.transform = "rotate(-50deg)";

  cardFive.style.top = "-40%";
  cardFive.style.height = "50%";
  cardFive.style.left = "60%";
  cardFive.style.transform = "rotate(-50deg)";

  cardSix.style.top = "-40%";
  cardSix.style.height = "50%";
  cardSix.style.left = "75%";
  cardSix.style.transform = "rotate(-50deg)";
});
cardThree.addEventListener("click", () => {
  // console.log("Three");
  cardThree.style.top = "40%";
  cardThree.style.height = "50%";
  cardThree.style.left = "42%";
  cardThree.style.transform = "rotate(0deg) ";
  // When you Hover to another card
  cardOne.style.top = "-40%";
  cardOne.style.height = "50%";
  cardOne.style.left = "0%";
  cardOne.style.transform = "rotate(-50deg)";

  cardTwo.style.top = "-40%";
  cardTwo.style.height = "50%";
  cardTwo.style.left = "15%";
  cardTwo.style.transform = "rotate(-50deg)";

  cardFour.style.top = "-40%";
  cardFour.style.height = "50%";
  cardFour.style.left = "45%";
  cardFour.style.transform = "rotate(-50deg)";

  cardFive.style.top = "-40%";
  cardFive.style.height = "50%";
  cardFive.style.left = "60%";
  cardFive.style.transform = "rotate(-50deg)";

  cardSix.style.top = "-40%";
  cardSix.style.height = "50%";
  cardSix.style.left = "70%";
  cardSix.style.transform = "rotate(-50deg)";
});
cardFour.addEventListener("click", () => {
  // console.log("Four");
  cardFour.style.top = "40%";
  cardFour.style.height = "50%";
  cardFour.style.left = "42%";
  cardFour.style.transform = "rotate(0deg) ";
  // When you Hover to another card
  cardOne.style.top = "-40%";
  cardOne.style.height = "50%";
  cardOne.style.left = "-5%";
  cardOne.style.transform = "rotate(-50deg)";

  cardTwo.style.top = "-40%";
  cardTwo.style.height = "50%";
  cardTwo.style.left = "10%";
  cardTwo.style.transform = "rotate(-50deg)";

  cardThree.style.top = "-40%";
  cardThree.style.height = "50%";
  cardThree.style.left = "25%";
  cardThree.style.transform = "rotate(-50deg)";

  cardFive.style.top = "-40%";
  cardFive.style.height = "50%";
  cardFive.style.left = "55%";
  cardFive.style.transform = "rotate(-50deg)";

  cardSix.style.top = "-40%";
  cardSix.style.height = "50%";
  cardSix.style.left = "70%";
  cardSix.style.transform = "rotate(-50deg)";
});
cardFive.addEventListener("click", () => {
  // console.log("Five");
  cardFive.style.top = "40%";
  cardFive.style.height = "50%";
  cardFive.style.left = "42%";
  cardFive.style.transform = "rotate(0deg) ";
  // When you Hover to another card
  cardOne.style.top = "-40%";
  cardOne.style.height = "50%";
  cardOne.style.left = "-5%";
  cardOne.style.transform = "rotate(-50deg)";

  cardTwo.style.top = "-40%";
  cardTwo.style.height = "50%";
  cardTwo.style.left = "10%";
  cardTwo.style.transform = "rotate(-50deg)";

  cardThree.style.top = "-40%";
  cardThree.style.height = "50%";
  cardThree.style.left = "25%";
  cardThree.style.transform = "rotate(-50deg)";

  cardFour.style.top = "-40%";
  cardFour.style.height = "50%";
  cardFour.style.left = "40%";
  cardFour.style.transform = "rotate(-50deg)";

  cardSix.style.top = "-40%";
  cardSix.style.height = "50%";
  cardSix.style.left = "70%";
  cardSix.style.transform = "rotate(-50deg)";
});
cardSix.addEventListener("click", () => {
  // console.log("Six");
  cardSix.style.top = "40%";
  cardSix.style.height = "50%";
  cardSix.style.left = "42%";
  cardSix.style.transform = "rotate(0deg) ";
  // When you Hover to another card
  cardOne.style.top = "-40%";
  cardOne.style.height = "50%";
  cardOne.style.left = "-5%";
  cardOne.style.transform = "rotate(-50deg)";

  cardTwo.style.top = "-40%";
  cardTwo.style.height = "50%";
  cardTwo.style.left = "10%";
  cardTwo.style.transform = "rotate(-50deg)";

  cardThree.style.top = "-40%";
  cardThree.style.height = "50%";
  cardThree.style.left = "25%";
  cardThree.style.transform = "rotate(-50deg)";

  cardFour.style.top = "-40%";
  cardFour.style.height = "50%";
  cardFour.style.left = "40%";
  cardFour.style.transform = "rotate(-50deg)";

  cardFive.style.top = "-40%";
  cardFive.style.height = "50%";
  cardFive.style.left = "55%";
  cardFive.style.transform = "rotate(-50deg)";
});

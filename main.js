const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const aside = document.getElementById("aside");
// const btnLinks = document.getElementById("btn-links");
// const details = document.getElementById("details");
const btnLinks2 = document.getElementById("btn-links2");
const details2 = document.getElementById("details2");
const card = document.querySelector(".card");

btnOpen.addEventListener("click", () => {
  aside.style.right = "0";
  document.getElementById("content").style.marginTop = "0";
});

btnClose.addEventListener("click", () => {
  aside.style.right = "-100%";
  document.getElementById("content").style.marginTop = "50rem";
  details.style.display = "none";
  details2.style.display = "none";
});

// btnLinks.addEventListener("click", () => {
//   if (details.style.display == "none") {
//     details.style.display = "flex";
//     details2.style.display = "none";
//   } else {
//     details.style.display = "none";
//   }
// });
btnLinks2.addEventListener("click", () => {
  if (details2.style.display == "none") {
    details2.style.display = "flex";
    // details.style.display = "none";
  } else {
    details2.style.display = "none";
  }
});

// card.addEventListener("click", () => {
//   card.style.width = "30%";
//   card.style.height = "60%";
//   card.style.top = "0";
//   card.style.zIndex = "4";
//   card.style.left = "210px";
//   card.style.transform = "translateY(120px)";
//   card.style.transition = "translateY(120px)";
// });
// z-index: -10;
// width: 30%;
// height: 60%;
// top: 0;
// cursor: pointer;
// z-index: 4;
// left: 210px;
// transform: translateY(120px);
// transition: all 0.5s ease-in-out;

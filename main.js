const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const aside = document.getElementById("aside");
const btnLinks = document.getElementById("btn-links");
const details = document.getElementById("details");
const btnLinks2 = document.getElementById("btn-links2");
const details2 = document.getElementById("details2");

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

btnLinks.addEventListener("click", () => {
  if (details.style.display == "none") {
    details.style.display = "flex";
    details2.style.display = "none";
  } else {
    details.style.display = "none";
  }
});
btnLinks2.addEventListener("click", () => {
  if (details2.style.display == "none") {
    details2.style.display = "flex";
    details.style.display = "none";
  } else {
    details2.style.display = "none";
  }
});

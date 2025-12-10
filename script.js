const menuBtn = document.querySelector(".menu");
const nav = document.getElementById("nav");
const box = document.querySelector(".box");
const body = document.querySelector("body");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    nav.classList.remove("active");
    box.style.display = "none";
  }
});

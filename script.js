const hamburger = document.getElementById("hamburger");
const modal = document.querySelector(".open-modal");

hamburger.addEventListener("click", function () {
  modal.classList.toggle("display");
});

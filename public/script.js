const smartphone = document.querySelector("#smartphone");

document.addEventListener("click", function (e) {
  if (!smartphone.contains(e.target) && !socialNavigate.contains(e.target)) {
    socialNavigate.classList.remove("active");
  }
});
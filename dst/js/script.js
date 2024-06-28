const profileTab = document.getElementById("profile-tab");



document.getElementById("profile-img").onclick = () => {
  profileTab.classList.toggle("active");
};

// const pp = document.getElementById("profile-img");

// document.addEventListener("click", function (e) {
//   if (!profile.contains(e.target) && !pp.contains(e.target)) {
//     profile.classList.remove("active");
//   }
// });
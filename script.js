// Menu Icon
let menuIcon = document.querySelector(".menu-icons");
let navBar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("move");
  navBar.classList.toggle("open-menu");
};
// Close menu on scroll

window.onscroll = () => {
  menuIcon.classList.remove("move");
  navBar.classList.remove("open-menu");
};

// Date input

window.onload = (params) => {
  let today = new Date().toISOString().split("T")[0];
  document.getElementById("start-date").value = today;
  document.getElementById("return-date").value = new Date(
    Date.now() + 7 * 86400000
  )
    .toISOString()
    .split("T")[0];
};

// ScrollReveal

const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2000",
  delay: "300",
});

animate.reveal(".nav, .heading");
animate.reveal(".home-img img", { origin: "right" });
animate.reveal(".input-form", { origin: "bottom" });
animate.reveal(".trend-box,.rental-box,.team-box,.t-box, .newsletter", { interval: 100 });

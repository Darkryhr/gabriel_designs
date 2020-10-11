//set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//fixed transparent navbar
const navbar = document.getElementById("nav");
window.addEventListener("scroll", () => {
  scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (navHeight < scrollHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

//navbar links to down page

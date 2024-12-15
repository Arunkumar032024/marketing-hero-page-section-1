"use strict";

const container = document.getElementsByClassName("container-div")[0];
const navLogin = document.getElementsByClassName("navbar-login")[0];
const listIcon = document.getElementsByClassName("fa-bars")[0];
const xmarkIcon = document.getElementsByClassName("fa-xmark")[0];
let navLinks = document.getElementsByTagName("li");
navLinks = [...navLinks];
const loginBtn = document.getElementsByClassName("login-btn")[0];

listIcon.onclick = () => {
  listIcon.setAttribute("style", "display: none");
  xmarkIcon.setAttribute("style", "display: block");
  navLogin.setAttribute(
    "style",
    "display: block; background: oklch(0.21 0.034 284.665);"
  );
  navLogin.classList.remove("navbar-hide");
  navLogin.classList.add("navbar-show");
};

xmarkIcon.onclick = () => {
  xmarkIcon.setAttribute("style", "display: none");
  listIcon.setAttribute("style", "display: block");
  navLogin.classList.remove("navbar-show");
  navLogin.classList.add("navbar-hide");
};

// Close navbar if click is outside
document.addEventListener("click", (event) => {
  if (!navLogin.contains(event.target) && !listIcon.contains(event.target)) {
    navLogin.classList.remove("navbar-show");
    navLogin.classList.add("navbar-hide");
    listIcon.setAttribute("style", "display: block");
  }
});

console.log();
navLinks.forEach((navLink) => {
  navLink.onclick = () => {
    location.reload();
  };
});

loginBtn.onclick = () => {
  location.reload();
};

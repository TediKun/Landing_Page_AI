/**
 *** TediKun
 *** tedisenpai7@gmail.com
 */

// Back Home
window.addEventListener("scroll", function () {
    const backHome = document.querySelector(".scroll_top");
    backHome.classList.toggle("active", window.scrollY > 500);
});

// Nav Toggle
const menuNav = document.querySelector(".nav__menu");
const BtnNav = document.querySelector(".btn__menu");
const icnBtnNav = BtnNav.querySelector("span");

BtnNav.addEventListener("click", () => {
    menuNav.classList.toggle("active");

    const isActive = menuNav.classList.contains("active");
    icnBtnNav.setAttribute("class", isActive ? "fa fa-close" : "fa fa-bars");
});

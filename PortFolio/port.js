// Menu hidden
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// Show
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// Hidden
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// Remove Menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Section
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollX > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

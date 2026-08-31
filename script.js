document.getElementById("year").textContent = new Date().getFullYear();

const siteHeader = document.querySelector(".site-header");
const updateHeaderShadow = () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 10);
};
updateHeaderShadow();
window.addEventListener("scroll", updateHeaderShadow, { passive: true });

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

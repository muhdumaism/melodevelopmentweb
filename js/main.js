// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.boxShadow = window.scrollY > 50
    ? "0 10px 30px rgba(0,0,0,0.6)"
    : "none";
});

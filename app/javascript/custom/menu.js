document.addEventListener("turbo:load", function() {
  const hamburger = document.querySelector("#hamburger");
  const navbarNav = document.querySelector("#navbarNav");

  if (hamburger && navbarNav) {
    hamburger.addEventListener("click", function(event) {
      event.preventDefault();
      navbarNav.classList.toggle("show");
      hamburger.setAttribute("aria-expanded", navbarNav.classList.contains("show"));
    });
  }

  let account = document.querySelector("#account");
  if (account) {
    account.addEventListener("click", function(event) {
      event.preventDefault();
      let menu = document.querySelector("#dropdown-menu");
      menu.classList.toggle("active");
    });
  }
});
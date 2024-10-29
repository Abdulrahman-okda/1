// Select the menu toggle button and the main navigation menu
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

// Add event listener to toggle the visibility of the main navigation menu
menuToggle.addEventListener("click", function () {
  // Toggle the "open" class on the main navigation menu
  mainNav.classList.toggle("open");
});


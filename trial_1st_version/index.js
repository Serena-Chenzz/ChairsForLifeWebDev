console.log("Connected");
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickTop()};

// Get the navbar
var navbar = document.getElementById("filter-bar");
var navbartop = document.getElementById("toppest-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
console.log(sticky);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickTop() {
  if (window.pageYOffset >= sticky) {
    console.log("here");
    navbar.classList.add("sticky-second")
  } else {
    navbar.classList.remove("sticky-second");
  }
}

const box1 = document.querySelector(".box-1");
const doOverlay = document.querySelector(".do-overlay");
const img_1 = document.querySelector(".img-1");
var logo = document.querySelector(".logo");



// addEventListener
window.addEventListener("scroll", handleScroll);


// handle event function
function change(e) {
  console.log(e.type);
  img_1.style.background = "pink";
}
function changeBack(e) {
  console.log(e.type);
  img_1.style.background = "yellow";
}

function handleScroll() {
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);

  // Check if scrolling down
  if (scrollPosition > 0) {
    // Adjust the scale based on the scroll position
    var scale = 1 - scrollPosition / 800; // You can adjust this factor
    console.log(scale);
    if (scale >= 0.1) {
      logo.style.transform = "scale(" + scale + ")";
    }
    // Apply the scaling using the transform property
    //   image.style.transform = "scale(" + scale + ")";
  }
}


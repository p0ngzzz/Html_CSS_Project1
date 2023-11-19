// image.style.transform = "scale(0.8)";
var image = document.querySelector("img");
console.log("width: ", image.width, "px"); //default 1462
console.log("height: ", image.height, "px"); //default 144

// 0.4 = 40%
console.log(0.4 * image.width, "px"); // 584
console.log(0.4 * image.height, "px"); // 57.6
window.addEventListener("scroll", handleScroll);

// console.log(window);
function handleScroll() {
  var image = document.querySelector("img");
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
  
  // Check if scrolling down
  if (scrollPosition > 0) {
    
      // Adjust the scale based on the scroll position
      var scale = 1 - scrollPosition / 800; // You can adjust this factor
      console.log(scale)
        if( scale >= 0.3 ) {
            image.style.transform = "scale(" + scale + ")";
        }
      // Apply the scaling using the transform property
    //   image.style.transform = "scale(" + scale + ")";
    
  }
}

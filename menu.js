// jQuery(document).ready(function($) {
//   // Scroll to the desired section on click
//   // Make sure to add the `data-scroll` attribute to your `<a>` tag.
//   // Example: 
//   // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
//   function scrollToSection(event) {
//     event.preventDefault();
//     var $section = $($(this).attr('href')); 
//     $('html, body').animate({
//       scrollTop: $section.offset().top
//     }, 500);
//   }
//   $('[data-scroll]').on('click', scrollToSection);
// }(jQuery));

function fillBars(x, name) {
  var progressBar = document.getElementById(name);
  var i = 0;
  while (i < x) {
    i = i + 1;
    progressBar.style.width = i + "%";
  }
}

window.addEventListener('scroll', function () {
  var element = document.querySelector('#about');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    // if(position.top < window.innerHeight && position.bottom >= 0) {
    fillBars(95, "bar-html");
    fillBars(85, "bar-css");
    fillBars(80, "bar-js");
    fillBars(60, "bar-angular");
    fillBars(40, "bar-nodejs");
    fillBars(50, "bar-rest");
    fillBars(70, "bar-java");
    fillBars(60, "bar-c");
    fillBars(20, "bar-flutter");
    fillBars(50, "bar-ux");
  }

  // // checking for partial visibility
  // if(position.top < window.innerHeight && position.bottom >= 0) {
  // 	console.log('Element is partially visible in screen');
  // }
});


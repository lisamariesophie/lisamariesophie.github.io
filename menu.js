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
    fillBars(30, "bar-flutter");
    fillBars(50, "bar-ux");
  }

  // // checking for partial visibility
  // if(position.top < window.innerHeight && position.bottom >= 0) {
  // 	console.log('Element is partially visible in screen');
  // }
});


//add event construct for modern browsers or IE
//which fires the callback with a pre-converted target reference
function addEvent(node, type, callback) {
  if (node.addEventListener) {
    node.addEventListener(
      type,
      function(e) {
        callback(e, e.target);
      },
      false
    );
  } else if (node.attachEvent) {
    node.attachEvent("on" + type, function(e) {
      callback(e, e.srcElement);
    });
  }
}

//identify whether a field should be validated
//ie. true if the field is neither readonly nor disabled,
//and has either "pattern", "required" or "aria-invalid"
function shouldBeValidated(field) {
  return (
    !(field.getAttribute("readonly") || field.readonly) &&
    !(field.getAttribute("disabled") || field.disabled) &&
    (field.getAttribute("pattern") || field.getAttribute("required"))
  );
}

//field testing and validation function
function instantValidation(field) {
  //if the field should be validated
  if (shouldBeValidated(field)) {
    //the field is invalid if:
    //it's required but the value is empty
    //it has a pattern but the (non-empty) value doesn't pass
    var invalid =
      (field.getAttribute("required") && !field.value) ||
      (field.getAttribute("pattern") &&
        field.value &&
        !new RegExp(field.getAttribute("pattern")).test(field.value));

    //add or remove the attribute is indicated by
    //the invalid flag and the current attribute state
    if (!invalid && field.getAttribute("aria-invalid")) {
      field.removeAttribute("aria-invalid");
    } else if (invalid && !field.getAttribute("aria-invalid")) {
      field.setAttribute("aria-invalid", "true");
    }
  }
}

//now bind a delegated change event
//== THIS FAILS IN INTERNET EXPLORER <= 8 ==//
//addEvent(document, 'change', function(e, target)
//{
//  instantValidation(target);
//});

//now bind a change event to each applicable for field
var fields = [
  document.getElementsByTagName("input"),
  document.getElementsByTagName("textarea")
];
for (var a = fields.length, i = 0; i < a; i++) {
  for (var b = fields[i].length, j = 0; j < b; j++) {
    addEvent(fields[i][j], "change", function(e, target) {
      instantValidation(target);
    });
  }
}
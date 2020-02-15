$(document).ready(function() {
  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
      $("#name").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});



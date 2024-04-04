
/*navbar*/
function toggleNavbars() {
    var nav1 = document.getElementById("nav1");
    var nav2 = document.getElementById("nav2");
    
    if (window.innerWidth < 768) { // If screen size is less than 768px (Bootstrap's sm breakpoint)
      nav1.style.display = "none"; // Hide nav1
      nav2.style.display = "block"; // Show nav2
    } else {
      nav1.style.display = "block"; // Show nav1
      nav2.style.display = "block"; // Hide nav2
    }
  }

  // Initial toggle
  toggleNavbars();

  // Toggle navbars on window resize
  window.addEventListener("resize", toggleNavbars);

//*******************sidebar */
  $(document).ready(function(){
    // Toggle sidebar when clicking on navbar toggle button
    $('[data-toggle="sidebar"]').click(function(){
        $('#sidebar').toggleClass('show');
    });
});


//Owl carousell
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

//class single page
//for button
$(document).ready(function(){
  $('#myButton').click(function(){
    $(this).toggleClass('btn-warning');
  });
});
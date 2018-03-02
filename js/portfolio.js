$(document).ready(function(){
  $('.parallax').parallax();

  $(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 800);
  });

  $('#floating_hamburger').on('click', function(event){
    //const icon = $('#hamburger-icon').html();

    // if (icon === 'menu') {
    //   $('#hamburger-icon').html('close');
    // } else {
    //   $('#hamburger-icon').html('menu');
    // }
    const clicked = $('#hamburger-icon').hasClass('clicked');

    if (clicked) {
      $('#hamburger-icon').removeClass('clicked');
      $('#hamburger-icon').addClass('unclicked');
      $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        function(event) {
          $('#hamburger-icon').html('menu');
      });
    } else {
      $('#hamburger-icon').removeClass('unclicked');
      $('#hamburger-icon').addClass('clicked');
      $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        function(event) {
          $('#hamburger-icon').html('close');
      }); 
    }
  });

  $('.modal').modal();
});



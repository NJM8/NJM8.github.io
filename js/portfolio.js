$(document).ready(function(){
  $('.parallax').parallax();

  $(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 800);
  });

  $('#hamburger-icon').on('click', function(event){
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



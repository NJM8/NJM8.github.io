$(document).ready(function(){
  // materializeCSS parallax initializer for parallax pictures
  $('.parallax').parallax();

  // simple lazy loader for images, switchws data-src attribute to src 
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });

  // simple scrolling animator. when clicking a # link it will get the offset to the linked element and animate there
  $(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 800);
  });

  // hamburger icon animation using classes, switches to X icon after animation
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

  // materializeCSS modal initializer.
  $('.modal').modal();
});



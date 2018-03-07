$(document).ready(function(){
  $('.parallax').parallax();
  console.log('hi');

  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    console.log(img);
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });

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



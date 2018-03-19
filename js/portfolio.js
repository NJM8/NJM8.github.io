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

  // toggle open class on hamburger when button is clicked for css animations
  $('#hamburger-button').click(function(){
		$('#hamburger').toggleClass('open');
	});

  // materializeCSS modal initializer.
  $('.modal').modal();
});



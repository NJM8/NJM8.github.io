$(document).ready(function(){
  $('.parallax').parallax();
});

$.extend($.scrollTo.defaults, {
     duration: 800,
});
$('#navpersonal').click(function() {
     $.scrollTo('#personal');
});

$('#navportfolio').click(function() {
     $.scrollTo('#portfolio');
});

$("#navcontact").click(function(){
  $.scrollTo("#contact");
});

$("document").ready(function(){
  $(".modal-trigger").leanModal();
});


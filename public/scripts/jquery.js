$(document).ready(function() {
  $('.sidebar').click(function(){
    $('.header_mobileNav').slideToggle(500);
  });
});

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;

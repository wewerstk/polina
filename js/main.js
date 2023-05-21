$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu,.header__logo').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

const btnScrollTop = document.querySelector("#btnScrollTop");
btnScrollTop.addEventListener("click", function(){
  $("html,body").animate({scrollTop:0}, "slow");
});

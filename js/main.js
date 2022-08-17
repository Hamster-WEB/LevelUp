let reg = /^(\7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let inp = document.querySelector('#phone-num');
let inpName = document.querySelector('#input-name');

$('.reviews-slider').slick({
  infinite: true,
  slidesToShow: 1,
  variableWidth: true,
  arrows: false,
  centerMode: true,
  adaptiveHeight: true,
});

$(".buy-btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".form-sell").offset().top},
        'slow');
});

$(".buy-btn-ingr").click(function() {
    $('html,body').animate({
        scrollTop: $(".form-sell").offset().top},
        'slow');
});

$(".buy-btn-mob-ingr").click(function() {
    $('html,body').animate({
        scrollTop: $(".form-sell").offset().top},
        'slow');
});

document.querySelector('.form-btn').onclick = function(e) {
  e.preventDefault();
  if(!reg.test(inp.value)) {
    inp.classList.add("invalid");
  }
  else {
    if(inpName.value == 0) {
      inpName.classList.add("invalid");
    }
    else {
      alert("Мы вскоре с вами свяжемся!");
      inp.classList.remove("invalid");
      inpName.classList.removeыы("invalid");
    }
  }
}


var h3 = document.getElementsByTagName("h3");

var sec         = 1800,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';

        secpass();
    }, 1000);

function secpass() {
    'use strict';

    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;

    if (remSec < 10) {

        remSec = '0' + remSec;

    }
    if (min < 10) {

        min = '0' + min;

    }
    countDiv.innerHTML = min + ":" + remSec;

    if (sec > 0) {

        sec = sec - 1;

    } else {

        clearInterval(countDown);

    }
}

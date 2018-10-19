//
// Beertime
//
// #################################################################################

// function fadeIn(el, time) {
//     el.style.opacity = 0;

//     var last = +new Date();
//     var tick = function() {
//         el.style.opacity = +el.style.opacity + (new Date() - last) / time;
//         last = +new Date();

//         if (+el.style.opacity < 1) {
//             (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
//         }
//     };

//     tick();
// }

function beerTimer() {

    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();

    var currtime = h * 100 + m;

    if( d.getDay() == 5 && currtime >= 1559 && currtime < 1602 ){
        beerTimeFastJQ()
    }

}

function beerTimeFastJQ(){
    var biervid     = document.getElementById("biervid");
    var biervidloop = document.getElementById("biervidloop");
    var alarmaudio  = document.getElementById("alarmaudio");
    var bieraudio   = document.getElementById("bieraudio");

    biervid.addEventListener('play', function() {}, false);
    biervidloop.addEventListener('play', function() {}, false);
    bieraudio.addEventListener('play', function() {}, false);
    alarmaudio.addEventListener('play', function() {}, false);

    alarmaudio.play();

    setTimeout(function () {

        $('#beercontainer').fadeIn(400);
        bieraudio.play();

        setTimeout(function () {

            biervid.play();

            setTimeout(function () {
                $('#biervidloop').fadeIn();
                $('#biervid').delay(150).fadeOut();
                biervidloop.play();
            }, 12000);

        }, 5000);

        $('#logo , h1').delay(11000).fadeIn(1000);

    }, 12000);

}

/*
function beerTimeFast(){
    var beercontainer = document.getElementById("beercontainer");
    var biervid     = document.getElementById("biervid");
    var biervidloop = document.getElementById("biervidloop");
    var alarmaudio  = document.getElementById("alarmaudio");
    var bieraudio   = document.getElementById("bieraudio");

    biervid.addEventListener('play', function() {}, false);
    biervidloop.addEventListener('play', function() {}, false);
    bieraudio.addEventListener('play', function() {}, false);
    alarmaudio.addEventListener('play', function() {}, false);

    alarmaudio.play();

    setTimeout(function () {

        // document.querySelector('#beercontainer').fadeIn(400);
        // $('#beercontainer').fadeIn(400);
        fadeIn(beercontainer, 3000);
        bieraudio.play();

        setTimeout(function () {

            biervid.play();

            setTimeout(function () {
                // $('#biervidloop').fadeIn();
                fadeIn(biervidloop, 3000);
                // $('#biervid').delay(150).fadeOut();
                fadeIn(biervid, 1500);
                biervidloop.play();
            }, 12000);

        }, 5000);

        $('#logo , h1').delay(11000).fadeIn(1000);

    }, 12000);

}
*/




$(window).on('load', function(){

    beerTimer()

    initTimeout();

});




function initTimeout(){

    timeout = setTimeout(function(){
        $('body').removeClass('show').addClass('fadeout');
        setTimeout(function(){
            window.location.reload(true);
        }, 1*1000);
    //}, 15*60*1000); // 1.5 minuten
    }, 3*60*1000); // 3 minuten
    
}


function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '')
      .replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function(n, prec) {
        var k = Math.pow(10, prec);
        return '' + (Math.round(n * k) / k)
          .toFixed(prec);
      };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
      .split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
      .length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1)
        .join('0');
    }
    return s.join(dec);
  }
  
  
  
  
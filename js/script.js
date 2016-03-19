$( document ).ready(function() {
    $(".button-collapse").sideNav();

    $('.parallax').parallax();
    var telaAlt = $( window ).height();
    // Aplica o tamanho da foto de acordo com a tela
    $('.home').css('height',telaAlt);

    /*var menuAlt = $('.menuSite').height();

    var contentHomeAlt = telaAlt - menuAlt;
    $('.contentHome').css('height',contentHomeAlt);*/
});

$(document).ready(function(){
  				 $('.ancora').click(function(){
     			 var alvo = $(this).attr('href').split('#').pop();
      		$('html, body').animate({scrollTop: $('#'+alvo).offset().top }, 1000);
      		return false;
        });
		});
$(document).ready(function() {
	var iframe = $('iframe')
      navbar = $('.navbar');
      winW   = $(window).width();
      winH   = $(window).height();

      iframe.height(winH-=232);

		  $(window).resize(function(){
       iframe.height(winH);
		  });

        $(window).scroll(function () {
      if ($(window).scrollTop() > 201) {
        navbar.scrollTop(function(){navbar.css({
           height: "91px"
           });
          });
        }
      if ($(window).scrollTop() < 200) {
        navbar.scrollTop(function(){navbar.css({
            height: "112px"
           });
         });
        }
      });

});

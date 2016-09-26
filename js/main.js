$(function(){

	$('#Container').mixItUp({
    load: {
  		filter: '.category-1'
  	}
  });

  $('.c-menu_link').on('click', function(e){
    e.preventDefault();
  });

	$(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

	$('.deals_slider').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true
	});

});

$(function(){

	$('.fancybox-product').fancybox({
		// maxWidth	: 550,
		// maxHeight	: 600,
		fitToView	: false,
		// width		: '70%',
		// height		: '70%',
		autoSize	: true,
		scrolling: 'no'
		// closeClick	: false,
		// openEffect	: 'none',
		// closeEffect	: 'none'
	});

	$('.fancybox').fancybox({
		// Width	: 380,
		fitToView	: false,
		autoSize	: true,
		scrolling: 'no'
	});

	$('#js-up').on('click', function(e){
		e.preventDefault();
		$(".submenu-two").animate({"scrollTop":0},"1100");
	});

	$('#js-down').on('click', function(e){
		e.preventDefault();
		var height = $(".submenu-two").height();
		$(".submenu-two").animate({"scrollTop":height}, 1100);
	});

	$(".submenu-two_item").hover(function () {
		$('.submenu-three-first').toggleClass('show-last-menu');
	});



	$('#Container').mixItUp({
    load: {
        filter: '.category-1'
    }
    });

    $('#Container-portfolio').mixItUp({
    load: {
        filter: 'all'
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

	$('.top-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear'
	});

	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	///spiner
    $(".spinner").spinner();


    $('.js-second_label').on('click', function(){
        $(this).siblings('.c-basket-form_radio').find('input').attr('checked', 'checked');
        $('.js-second_block').addClass('is-visible');
        $('.js-first_block').removeClass('is-visible');
    });

    $('.js-first_label').on('click', function(){
        $(this).siblings('.c-basket-form_radio').find('input').attr('checked', 'checked');
        $('.js-first_block').addClass('is-visible');
        $('.js-second_block').removeClass('is-visible');
    });

	//
		$('.filter-goods_list').readmore({
			speed: 200,
			moreLink: '<a href="#" class="c-show-all c-show-all--left">показать все</a>',
			lessLink: '<a href="#" class="c-show-all c-show-all--up-left">скрыть список</a>',
			embedCSS: true,
			blockCSS: 'display: block; width: 100%;',
			startOpen: false

		});
});

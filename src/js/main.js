$(function(){

	$('#Container').mixItUp({
    load: {
  		filter: '.category-1'
  	}
  });

  $('.c-menu_link').on('click', function(e){
    e.preventDefault();
  })
});

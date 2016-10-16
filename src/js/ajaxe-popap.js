$(function(){

  //call-popap

  $('#fast-call').submit(function() {
    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data) {
        $.fancybox({
          href: '#popap-question',
          openEffect: 'elastic',
          closeEffect: 'elastic',
          afterLoad: function() {
            setTimeout(function() {
              $.fancybox.close({
                closeEffect: 'elastic'
              });
            }, 3000);
          }
        });
      }
    });
  });

});

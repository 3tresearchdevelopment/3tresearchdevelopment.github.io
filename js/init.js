(function($){
  $(function(){

    $('.button-collapse').sideNav({
    	edge: 'left',
    	closeOnClick: true
    });

    var thumbs = jQuery('#thumbnails').slippry({
      // general elements & wrapper
      slippryWrapper: '<div class="slippry_box thumbnails" />',
      // options
      transition: 'horizontal',
      pager: true,
      auto: true
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
$(document).ready(function() {
    // Home Slider	
    $('.bxslider-wrap').bxSlider({
        mode: 'fade',
        captions: false,
        controls: false,
        pager: false,
        auto: true,
        speed: 2500,
        pause: 5000,
    });
    // Testimonials	
    $('.quotes').bxSlider({
        mode: 'fade',
        captions: false,
        controls: false,
        pager: false,
        auto: true,
        speed: 2500,
        pause: 7000,
    });
    // Portfolio(default)
    $('.default ul').bxSlider({
    	adaptiveHeight: true,
		auto: true,
		captions: true,
		mode: 'fade',
		pagerCustom: '#thumb-pager',
		speed: 2500,
        pause: 7000,
	});
	// Portrait View
	$('.portrait ul').bxSlider({
		adaptiveHeight: true,
		auto: true,
		captions: false,
		mode: 'fade',
		pager: false,
		preloadImages: 'all',
		speed: 2500,
        pause: 7000,
	});
	
	
	(function() {
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider;
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 6 :
           (window.innerWidth < 900) ? 7 : 8;
  }
 
 
 
  $window.load(function() {
    // FlexSlider w/ Thumbnail Nav
	  $('#thumbnails').flexslider({
	    animation: "slide",
	    animationSpeed: 1500,	    
	    animationLoop: false,
	    controlNav: false,
	    directionNav: true,	    
	    slideshow: false,
	    itemWidth: 72,
	    itemMargin: 10,
	    asNavFor: '#sliderImage',
	    touch: true,
	    //minItems: getGridSize(), // use function to pull in initial value
		//maxItems: getGridSize() // use function to pull in initial value
	  });
	   
	  $('#sliderImage').flexslider({
	    animation: "fade",
	    animationSpeed: 1000,
	    controlNav: false,
	    directionNav: true,
	    animationLoop: true,
	    slideshow: true,
	    slideshowSpeed: 7000,
	    touch: true,
	    pauseOnAction: false,
	    pauseOnHover: false,
	    sync: "#thumbnails"
	  });
  });
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());
$(window).load(function(){
	var x = $('.navbar-collapse.in'); // this is your element
	var w = $(window).width();
	if(w >= 700) {
	    x.removeClass('in').addClass('test');
	}
   });
});
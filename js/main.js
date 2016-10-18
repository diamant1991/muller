$(".img-move").twentytwenty({
	'default_offset_pct': 0.15
});
if($('#works-slider').length){
	$('#works-slider').bxSlider({
	  pagerCustom: '#works-thumb'
	});
}
if($('.main-slider').length){
	$('.main-slider').bxSlider({
		adaptiveHeight:true,
		controls: false
	});
}

if (window.matchMedia("(max-width: 991px)").matches && window.matchMedia("(min-width: 768px)").matches){
	if($('#sentence-slider').length){
		$('#sentence-slider').bxSlider({
			adaptiveHeight:true,
			controls: false
		});
	}
}
if (window.matchMedia("(max-width: 991px)").matches){
	$('.thumb-wrapp').addClass('owl-carousel')
	$('#works-thumb').owlCarousel({
	  loop:false,
	  margin: 30,
	  dots:false,
	  nav:true,
	  responsive:{
	      0:{
	          items:2
	      },
	      600:{
	          items:3
	      }
	  }
	})
}
if (window.matchMedia("(max-width: 767px)").matches){
	$('#material').addClass('owl-carousel')
	$('#material').owlCarousel({
	  loop:false,
	  dots:true,
	  nav:true,
	  responsive:{
      0:{
          items:1
      }
	  }
	})
}
if (window.matchMedia("(max-width: 991px)").matches){
	$('#method').addClass('owl-carousel')
	$('#method').owlCarousel({
	  loop:false,
	  dots:true,
	  nav:true,
	  responsive:{
      0:{
          items:1
      }
	  }
	})
}
if($('#catalog-carousel').length){
	$('#catalog-carousel').bxSlider({
		pager: false
	});
}
if($('#catalog-carousel2').length){
	$('#catalog-carousel2').bxSlider({
		pager: false
	});
}
$('#partners-carousel').owlCarousel({
  loop:true,
  margin:20,
  dots:false,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
$( document ).ready(function() {
	$('.up-btn').click( function(){
		$('body,html').animate({scrollTop:0},800);
	});
});
// Select
$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(100);

		$(this).addClass('active');
		$('.drop').find('li').click(function(){
			var selectResult = $(this).html();
			$(this).parent().parent().find('input').val(selectResult);
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(100);
		});
	
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(100);
	}

	return false;
});

$(document).mouseup(function (e) {
    var container = $(".drop");
    if (container.has(e.target).length === 0){
        container.slideUp(100);
        $('.slct').removeClass('active');
    }
});
$(document).ready(function() {
  $(".fancybox").fancybox({
    padding : 0,
    openEffect	: 'elastic',
		closeEffect	: 'elastic',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});

$('.navbar-toggle').click(function(e) {
	e.preventDefault();
	var menu = $('#nav');
	if(menu.is(':hidden')){
		menu.slideDown(300)
	}
	else{
		menu.slideUp(300)
	}
});

var sliderSets = $('.catalog-wrapp');

function initSliders(targetSlider, targetPager) {
	if(window.matchMedia("(min-width: 992px)").matches){
		$(targetSlider).bxSlider({
	  	mode: 'fade',
	  	controls: false,
	    pagerCustom: targetPager
	  });
	}
	else{
		$(targetSlider).bxSlider({
	  	mode: 'fade',
	  	controls: false
	  });
	}
}

$(sliderSets).each(function() {
  var targetSlider = "#" + $(this).find('.slider-bx').attr('id');
  var targetPager = "#" + $(this).find('.catalog__thumb').attr('id');
  
  initSliders(targetSlider, targetPager);
});
"use strict";


if (document.querySelectorAll('.logos-slider').length > 0) {

	const slider_1 = tns({
	    container: '.logos-slider',
	    loop: true,
	    items: 6,
	    responsive: {
		    0: {
		        items: 3
		    },
		    576:{
	            items:4
	        },
	        992:{
	            items:6
	        },
		},
	    nav: false,   
	    autoplay: true, 
	    autoplayHoverPause: true,
	    autoplayTimeout: 3500,
	    autoplayButtonOutput: false,
	    mouseDrag: true,
	    navPosition: 'bottom',
	    controls: false,
	    autoplayTimeout: 9500,
	    speed: 800,
	
	});

}

if (document.querySelectorAll('.testimonials-slider').length > 0) {

	const slider_2 = tns({
	    container: '.testimonials-slider',
	    controlsText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
	    autoplay: true, 
	    autoplayHoverPause: true,
	    autoplayButtonOutput: false,
	    mouseDrag: true,
	    lazyload: true,
	    navPosition: 'bottom',
	    autoplayTimeout: 9500,
	
	});

}



if (document.querySelectorAll('.reviews-slider').length > 0) {
	
	const slider_3 = tns({
	    container: '.reviews-slider',
	    loop: true,
	    items: 1,
	    responsive: {
		    0: {
		        items: 1
		    },
		    576:{
	            items: 2
	        },
	        992:{
	            items: 3
	        },
		},  
	    autoplay: true, 
	    autoplayHoverPause: true,
	    autoplayTimeout: 9500,
	    autoplayButtonOutput: false,
	    mouseDrag: true,
	    lazyload: true,
	    controls: false,
	    edgePadding: 30,
	
	});
	
}




if (document.querySelectorAll('.press-slider').length > 0) {

	const slider_4 = tns({
	    container: '.press-slider',
	    loop: true,

	    responsive: {

		    576:{
	            items: 1
	        },
	        992:{
	            items: 2
	        },
		},
	    nav: true,    
	    autoplay: true,
	    autoplayHoverPause: true,
	    autoplayTimeout: 9500,
	    autoplayButtonOutput: false,
	    mouseDrag: true,
	    lazyload: true,
	    gutter: 0,
	    controls: false,
	    //edgePadding: 30,
	
	});


}


if (document.querySelectorAll('.product-reviews-slider').length > 0) {
	
	const slider_5 = tns({
	    container: '.product-reviews-slider',
	    loop: true,
	    items: 1,  
	    autoplay: true, 
	    autoplayHoverPause: true,
	    autoplayTimeout: 9500,
	    autoplayButtonOutput: false,
	    mouseDrag: true,
	    lazyload: true,
	    gutter: 15,
	    controls: true,
        controlsContainer: ".slider-custom-controls",
	
	});
	
}



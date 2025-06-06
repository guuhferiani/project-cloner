"use strict";
			
/* ======= Play/Stop Video in Bootstrpa Modal  ======= */		
		
//const videoModal = document.getElementById('modal-video');

//const videoModals = document.querySelectorAll('.modal-video');


//const videoTriggers = document.querySelectorAll('.video-play-trigger');

//const videoURL = videoModal.getElementsByTagName("iframe")[0].getAttribute('src');



"use strict";
			
/* ======= Play/Stop Video in Bootstrpa Modal  ======= */		
		
const videoModals = document.querySelectorAll('.modal-video');


videoModals.forEach((videoModal) => {
	
    let videoURL = videoModal.getElementsByTagName("iframe")[0].getAttribute('src');
    
	videoModal.addEventListener('show.bs.modal', function (event) {		
	
	    //console.log('video modal show');
	    
	    //This event fires immediately when the show instance method is called. If caused by a click, the clicked element is available as the relatedTarget property of the event.
	    
	    let videoModalID = event.relatedTarget.getAttribute('data-bs-target').substring(1);
	    let videoModal =  document.getElementById(videoModalID);
	    
	    console.log(videoModalID);
	    
	    
	    let videoURLAuto = videoURL + "?autoplay=1";
	    
	    videoModal.getElementsByTagName("iframe")[0].setAttribute ('src', videoURLAuto);
	    
	    
	});
	
	
	videoModal.addEventListener('hide.bs.modal', function () {

	    //console.log('video modal hide');	    
	    
	    videoModal.getElementsByTagName("iframe")[0].setAttribute ('src', '');
	    
	    
	});
	
	videoModal.addEventListener('hidden.bs.modal', function () {

	    //console.log('video modal hidden');
	    			    
	    videoModal.getElementsByTagName("iframe")[0].setAttribute ('src', videoURL);
	    
	    
	});
	
	

});






	



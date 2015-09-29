$('.blackout').click(function(){
	
	hideVideo();

});

$('.video-link').click(function(){
	
	showVideo();

});

$(document).keyup(function(e){

	if(e.keyCode === 27){
		hideVideo();
	}

});
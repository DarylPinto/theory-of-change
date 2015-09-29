var video_source = $('.video-player').attr('src');
var documentScrollBottom;
var documentScrollMiddle;
var farthest_bus_travel = 0;

function updateActivationPoints(){
	documentScrollBottom = $(document).scrollTop() + $(window).height();
	documentScrollMiddle = documentScrollBottom / 2;
}

function moveBus(){
	var speed = 3; //Modifier
	var distance = -1 * ( $(document).scrollTop() / speed ); //Bind bus drive distance to scroll

	distance = (distance < -200) ? -200 : distance; //Bus can't drive too far

	if(distance < farthest_bus_travel){ //Make sure bus never drives backwards
		$('#bus').css('transform', 'translate('+distance+'px, 0px)')
		farthest_bus_travel = distance;	
	}	
}

function changeNavBackgroundColor(){
	if( $(document).scrollTop() > 185){
		$('header nav ul').addClass('main-body-nav');
	}else{
		$('header nav ul').removeClass('main-body-nav');
	}
}

function hideVideo(){
	$('.overlay').css('opacity', '0');
	window.setTimeout(function(){
		$('.overlay').css('display', 'none');
		$('.video-player').attr('src', '');
	}, 700);
}

function showVideo(){
	$('.overlay').css('display', 'block');	
	window.setTimeout(function(){
		$('.overlay').css('opacity', '1');
		$('.video-player').attr('src', video_source + '?autoplay=1');
	}, 25);
}

function showOutcomes(){
	if(documentScrollMiddle > 484){
		$('#Outcome1, #Outcome2').attr('class', '');		
	}
	if(documentScrollMiddle > 662){
		$('#Outcome3, #Outcome5').attr('class', '');		
	}
	if(documentScrollMiddle > 793){
		$('#Outcome6').attr('class', '');		
	}
	if(documentScrollMiddle > 843){
		$('#Outcome7').attr('class', '');		
	}
}

function resizeVideo(){
	var videoWidth = $(window).width() * 0.7; //Video width is 70% of viewport
	var videoHeight = videoWidth * (9/16); //Video height is 9 out of 16 x the width

	if( videoHeight < ($(window).height() - 30) ){ //If video height is less than viewport height, resize the video
		$('.video-player').css('width', videoWidth.toString() + 'px');
		$('.video-player').css('height', videoHeight.toString() + 'px');
	}

	//Vertically center video
	$('.video-player').css('top', ($(window).height()/2) - ($('.video-player').height()/2));
}

$(document).ready(function() {
	updateActivationPoints()
	changeNavBackgroundColor();
	resizeVideo();
});

$(window).scroll(function(){
	updateActivationPoints()
	moveBus();
	changeNavBackgroundColor();
	showOutcomes();
});

$( window ).resize(function(){
	updateActivationPoints()
	resizeVideo();
});
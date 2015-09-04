var video_source = $('.video-box').attr('src');

function moveElement(element, speed, range){
	var distance =  -1 * ( $(document).scrollTop() / speed );

	if(distance < range[1] && distance > range[0]){
		$(element).css('transform', 'translate(' + distance.toString() + 'px, 0px)');
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
		$('.video-box').attr('src', '');
	}, 600);
}

function showVideo(){
	$('.overlay').css('display', 'block');	
	window.setTimeout(function(){
		$('.overlay').css('opacity', '1');
		$('.video-box').attr('src', video_source + '?autoplay=1');
	}, 25);
}

function resizeVideo(){
	var videoWidth = $(window).width() * 0.7; //Video width is 70% of viewport
	var videoHeight = videoWidth * (9/16); //Video height is 9 out of 16 x the width

	if( videoHeight < ($(window).height() - 30) ){ //If video height is less than viewport height, resize the video
		$('.video-box').css('width', videoWidth.toString() + 'px');
		$('.video-box').css('height', videoHeight.toString() + 'px');
	}

	//Vertically center video
	$('.video-box').css('top', ($(window).height()/2) - ($('.video-box').height()/2));
}

$(document).ready(function() {
	changeNavBackgroundColor();
	resizeVideo();
});

$(window).scroll(function(){
	moveElement('#bus', 2, [-280, 0]);
	changeNavBackgroundColor();
});

$( window ).resize(function(){
	resizeVideo(); 
});
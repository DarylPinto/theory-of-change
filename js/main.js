
function moveElement(element, speed, range){
	var distance =  -1 * ( $(document).scrollTop() / speed );

	if(distance < range[1] && distance > range[0]){
		$(element).css('transform', 'translate(' + distance.toString() + 'px, 0px)');
	}
}

function positionParallaxHeader(){
	$('main').css('margin-top', $('header').height().toString() + 'px');

	if( $(document).scrollTop() > 70 ){
		$('header').css({
			'height': '70px',
			'z-index': '30'
		});
	}
}

$(document).ready(function() {
	positionParallaxHeader();
});

$(window).scroll(function(){
	moveElement('#bus', 2, [-280, 0]);
	//moveElement('#land', 0.3, [-460, 0]);
	positionParallaxHeader();
});
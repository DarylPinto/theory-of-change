
function moveElement(element, speed, range){
	var distance =  -1 * ( $(document).scrollTop() / speed );

	if(distance < range[1] && distance > range[0]){
		$(element).css('transform', 'translate(' + distance.toString() + 'px, 0px)');
	}
}

function parallax() {
	//Make sure that the background-image you use with this function has a 
	//significantly greater height than its container, or is a repeating pattern.

	var strength = 0.5; //Effect Strength. Range: 0 - 1
	var element = '.parallax'; //Elements to target. Seperate with comma

	var scroll_dist = $(document).scrollTop();
	var dist_from_top = $(element).offset().top;
	var offset = ( ( scroll_dist + dist_from_top ) * strength).toString();
	var offset = Math.round(offset);

	//$(element).css('background-position-x', 'center');
	$(element).css('background-position-y', offset + 'px' );
}

$(document).ready(function() {
	parallax();
});

$(window).scroll(function(){
	moveElement('#bus', 2, [-280, 0]);
	parallax();

	if( $(document).scrollTop() > 185){
		$('nav').css('opacity', '1');
	}else{
		$('nav').css('opacity', '0');
	}

});
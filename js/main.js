
function moveElement(element, speed, range){
	var distance =  -1 * ( $(document).scrollTop() / speed );

	if(distance < range[1] && distance > range[0]){
		$(element).css('transform', 'translate(' + distance.toString() + 'px, 0px)');
	}
}

function parallax(){
	var parallax_diminish = 3;
	var element = '.parallax';

	var scroll_distance = $(document).scrollTop();
	var distance_from_top = $(element).offset().top;
	var parallax_offset = ( ( scroll_distance + distance_from_top ) / parallax_diminish).toString() + 'px';

	$(element).css('background-size', '110%');
	$(element).css('background-position', 'center');
	$(element).css('background-position-y', parallax_offset );
}

$(document).ready(function() {
	parallax();
});

$(window).scroll(function(){
	moveElement('#bus', 2, [-280, 0]);
	parallax();
});
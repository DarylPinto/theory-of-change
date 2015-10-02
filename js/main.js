var video_source = $('.video-player').attr('src');
var documentScrollBottom;
var documentScrollMiddle;
var farthest_bus_travel = 0;

function smoothScroll(){
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
  });
}

function resizeGraphic(){
	var desired_width = $(window).width() - 2;
	var grahpic_width = $('#infographic').width();
	var scale = desired_width / grahpic_width;

	if( $(window).width() > 1150 ){
		$('#infographic').css('transform', 'scale('+scale+')');
	}else{
		$('#infographic').css('transform', 'scale(1)');	
	}
}

function updateActivationPoints(){
	documentScrollBottom = $(document).scrollTop() + $(window).height();
	documentScrollMiddle = $(document).scrollTop() + ($(window).height() / 2);
}

function fadeLaurels(){
	if(documentScrollMiddle > $('#leftLaurel').offset().top){
		$('#leftLaurel, #rightLaurel').css('opacity', '1');
	}
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
		$('#logo').removeClass('larger-logo')
	}else{
		$('header nav ul').removeClass('main-body-nav');
		$('#logo').addClass('larger-logo')
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
	if(documentScrollMiddle > $('#Outcome1').offset().top){
		$('#Outcome1, #Outcome2').attr('class', '');		
	}
	if(documentScrollMiddle > $('#Outcome3').offset().top){
		$('#Outcome3, #Outcome5').attr('class', '');		
	}
	if(documentScrollMiddle > $('#Outcome6').offset().top){
		$('#Outcome6').attr('class', '');		
	}
	if(documentScrollMiddle > $('#ifThose').offset().top){
		$('#Outcome7').attr('class', '');		
	}
}

function showInShort(){
	if( documentScrollMiddle >= $('#inShortJump_1_').offset().top - 80){
		$('#inShort_group1').css('opacity', '1');		
	}
	if(documentScrollMiddle > $('#inShort_group2').offset().top){
		$('#inShort_group2, #inShort_line2').css('opacity', '1');		
	}
	if(documentScrollMiddle > $('#inShort_group3').offset().top){
		$('#inShort_group3, #inShort_line1').css('opacity', '1');		
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

function revealActionPlan(){

	var speed = 175;

	function delayAppear(el, delay){
		window.setTimeout(function(){
			$(el).attr('class', 'plan-visible')
		}, delay);
	}

	if( documentScrollMiddle >= $('#actionPlan').offset().top - 80 || documentScrollBottom >= $(document).height() - 30){
		delayAppear('.plan2016', 100);
		delayAppear('.connector1', 100 + speed);
		delayAppear('.plan2017', 100 + (speed * 2) );
		delayAppear('.connector2', 100 + (speed * 3) );
		delayAppear('.plan2018', 100 + (speed * 4) );
		delayAppear('.connector3', 100 + (speed * 5) );
		delayAppear('.plan2019', 100 + (speed * 6) );
		delayAppear('.connector4', 100 + (speed * 7) );
		delayAppear('.plan2020', 100 + (speed * 8) );
	}

}

$(document).ready(function() {
	resizeGraphic();
	smoothScroll();
	updateActivationPoints()
	changeNavBackgroundColor();
	showOutcomes();
	fadeLaurels();
	showInShort();
	resizeVideo();
	revealActionPlan();
});

$(window).scroll(function(){
	updateActivationPoints()
	moveBus();
	changeNavBackgroundColor();
	showOutcomes();
	fadeLaurels();
	showInShort();
	revealActionPlan();
});

$( window ).resize(function(){
	resizeGraphic();
	updateActivationPoints()
	resizeVideo();
});
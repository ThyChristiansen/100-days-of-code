var initialMouse = 0;
var slideMovementTotal = 0;
var mouseIsDown = false;
var slider = $('#slider');

slider.on('mousedown touchstart', function(event){
	mouseIsDown = true;
	slideMovementTotal = $('#button-background').width() - $(this).width() + 10;
	initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
});

$(document.body, '#slider').on('mouseup touchend', function (event) {
	if (!mouseIsDown)
		return;
	mouseIsDown = false;
	var currentMouse = event.clientX || event.changedTouches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;
	if (relativeMouse < slideMovementTotal) {
		$('.slide-text').fadeTo(300, 1);
		slider.animate({
			left: "-10px"
		}, 300);
		return;
	}
	slider.addClass('unlocked');
    $('#locker').html('<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="white" d="M23 19v18l5-5.058L33 37V19z"/></g></svg> <span class="slide-text">Bookmarked</span>');
	setTimeout(function(){
		slider.on('click tap', function(event){
			if (!slider.hasClass('unlocked'))
				return;
			slider.removeClass('unlocked');
			$('#locker').html('<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>');
			slider.off('click tap');
		});
	}, 0);
});

$(document.body).on('mousemove touchmove', function(event){
	if (!mouseIsDown)
		return;

	var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;
	var slidePercent = 1 - (relativeMouse / slideMovementTotal);

	$('.slide-text').fadeTo(0, slidePercent);

	if (relativeMouse <= 0) {
		slider.css({'left': '-10px'});
		return;
	}
	if (relativeMouse >= slideMovementTotal + 10) {
		slider.css({'left': slideMovementTotal + 'px'});
		return;
	}
	slider.css({'left': relativeMouse - 10});
});

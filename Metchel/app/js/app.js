//=require ../blocks/**/*.js
$(document).ready(function () {
	
	//burger
	if(document.querySelector('.burger-btn')){
		$('.burger-btn').click(function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open');
				$('.nav').removeClass('active');
				$('body').removeClass('overflow');
			} else {
				$(this).addClass('open');
				$('.nav').addClass('active');
				$('body').addClass('overflow');
			}
		})
	}

	$('.category-wrap').click(function(){
		$('.left-bar').toggleClass('active');
	});
});

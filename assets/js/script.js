


$(document).ready(function(){
	//alert("Hello World!");
	$('button#one').click(function(){
		$('.redbox').hide();
	});
	$('button#two').click(function(){
		$('.redbox').show();
	});

	$('.redbox').mouseenter(function(){
       $('.bluecircle').fadeOut('1000');
	});

	$('.redbox').mouseleave(function(){
       $('.bluecircle').fadeIn('3000');
	});

	$('.title').click(function(){
       $(this).parents('#text-container').find('.content').slideToggle();
	});

});

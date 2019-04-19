



$(document).ready(function(){
 //alert("Hello World!");
 $('button#one').click(function(){
  $('.redbox').hide();
 });

$('button#two').click(function(){
  $('.redbox').hide();
 });



$('.redbox').mouseenter(function(){
	$('.bluecircle').fadeOut('1000');

});

$('.redbox').mouseleave(function(){
    $('.bluecircle').fadeIut('3000');



});
});
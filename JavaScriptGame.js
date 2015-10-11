$(document).ready(function(){
	
	$('#trust').hide();
	$('#not').hide();
	$('#play').hide();
	$('#caveExperiment').delay(2000).fadeOut(2000);
	$('#aLie').hide().delay(4000).fadeIn(2000);
	$('#ok').hide().delay(6000).fadeIn(2000);
	$('#truth').hide().delay(8000).fadeIn(2000);
	$('#continue').hide().delay(10000).fadeIn(2000);
	$('.testSquares').hide().delay(2000).fadeIn(2000);
	
	$('#continue').click(function(){
		$(this).hide();
		$('#aLie').hide();
		$('#ok').hide();
		$('#truth').hide();
		$('#continue').hide();
		$('#trust').fadeIn(3000);
		$('#not').delay(2000).fadeIn(2000);
		$('#play').delay(4000).fadeIn(2000);
		
	});
	$('#blueSquare').hide().delay(1000).fadeIn(2000);
	$('#blackSquare').hide().delay(3000).fadeIn(2000);
	$('#greenSquare').hide().delay(5000).fadeIn(2000);
	$('#redSquare').hide().delay(7000).fadeIn(2000);
	$('#yellowSquare').hide().delay(9000).fadeIn(2000);
	$('#brownSquare').hide().delay(11000).fadeIn(2000);
	$('#beginTest').hide().delay(13000).fadeIn(2000);
	
	$('#congrats').hide().delay(2000).fadeIn(2000);
	$('#complete').hide().delay(4000).fadeIn(2000);
	
});

$(document).ready(function () {
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
    $('#mouth-bottom').fitText(.7); //keeps font the right size
});

function updateContainer() {

	//get viewport height and width
	var height = $(window).height();
	var width = $(window).width();

	//get max
	var minDimension = Math.min(height, width);

	var $leftEye = $('#eye-left');
	var $rightEye = $('#eye-right');
	var $middleMouth = $('#mouth-bottom');
	var $leftMouth = $('#mouth-left');
	var $rightMouth = $('#mouth-right');


	//set the sizes
	$leftEye.height(Math.ceil(minDimension * 3 / 16));
	$leftEye.width(Math.ceil(minDimension * 3 / 16));
	$rightEye.height(Math.ceil(minDimension * 3 / 16));
	$rightEye.width(Math.ceil(minDimension * 3 / 16));
	$middleMouth.height(Math.ceil(minDimension * 2 / 16));
	$middleMouth.width(Math.ceil(minDimension * 12 / 16));
	$leftMouth.height(Math.ceil(minDimension * 4 / 16));
	$leftMouth.width(Math.ceil(minDimension * 2 / 16));
	$rightMouth.height(Math.ceil(minDimension * 4 / 16));
	$rightMouth.width(Math.ceil(minDimension * 2 / 16));
	
	if(width > height){
		//landscape
		var extra = width - height;

		var topEyes = Math.ceil(minDimension * 3 / 16);
		var topBottomMouth = Math.ceil(minDimension * 11 / 16);
		var topLeftMouth = Math.ceil(minDimension * 9 / 16);
		var topRightMouth = Math.ceil(minDimension * 9 / 16);
		var leftLeftEye = Math.ceil(minDimension * 4 / 16 + (extra / 2));
		var leftRightEye = Math.ceil(minDimension * 9 / 16 + (extra / 2));
		var leftBottomMouth = Math.ceil(minDimension * 2 / 16 + (extra / 2));
		var leftLeftMouth = Math.ceil(minDimension * 2 / 16 + (extra / 2));
		var leftRightMouth = Math.ceil(minDimension * 12 / 16 + (extra / 2));
	} else {
		//portrait
		var extra = height - width;

		var topEyes = Math.ceil(minDimension * 3 / 16 + (extra / 2));
		var topBottomMouth = Math.ceil(minDimension * 11 / 16 + (extra / 2));
		var topLeftMouth = Math.ceil(minDimension * 9 / 16 + (extra / 2));
		var topRightMouth = Math.ceil(minDimension * 9 / 16 + (extra / 2));
		var leftLeftEye = Math.ceil(minDimension * 4 / 16);
		var leftRightEye = Math.ceil(minDimension * 9 / 16);
		var leftBottomMouth = Math.ceil(minDimension * 2 / 16);
		var leftLeftMouth = Math.ceil(minDimension * 2 / 16);
		var leftRightMouth = Math.ceil(minDimension * 12 / 16);
	}

	$leftEye.offset({ top: topEyes, left: leftLeftEye});
	$rightEye.offset({ top: topEyes, left: leftRightEye});
	$middleMouth.offset({ top: topBottomMouth, left: leftBottomMouth});
	$leftMouth.offset({ top: topLeftMouth, left: leftLeftMouth});
	$rightMouth.offset({ top: topRightMouth, left: leftRightMouth});

	var $output = $('#output');
	$output.css('border-left-width', minDimension * 1 / 100 + "px");
	$output.height(Math.ceil(minDimension * 2 / 16));
	$output.width(Math.ceil(minDimension * 12 / 16));
	// $('#output').css('bottom', minDimension / 200 + "px");
	// $('#output').css('right', minDimension / 200 + "px");
}
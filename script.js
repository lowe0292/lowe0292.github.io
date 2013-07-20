$(document).ready(function () {
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
    //make output text responsive
    $('#mouth-bottom').fitText(.7); 
    print("Hello, World! Ready to build awesome stuff!?");
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
	$output.css('border-right-width', minDimension * 1 / 100 + "px");
}

function print(output) {
	//first, clear the output span
	$('#output').html("");
	//iterate through the output
	(function myLoop (i, speed) {  
		speed = speed * (Math.random() * (1.1 - .9) + .9); //random percent change or %110 through 90%
		setTimeout(function () {   
		  type( output[output.length - (i)] );          //  your code here                
		  if (--i) myLoop(i, speed);      //  decrement i and call myLoop again if i > 0
		}, speed);
	})(output.length, 100);  
}

function type(character){
    $('#output').append(character);
}
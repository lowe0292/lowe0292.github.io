var typing = false;

$(document).ready(function () {
	var pull 		= $('#pull');
		menu 		= $('nav ul');
		menuHeight	= menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		pull.toggleClass("open");
		menu.slideToggle();
	});

    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
    
    //make output text responsive
    $('#mouth-bottom').fitText(1.2); 

    // print("Hello, World! Ready to build awesome stuff!?");
    $('nav ul li a').click(function(){
    	//clear timeouts
    	var id = window.setTimeout(function() {}, 0);
		while (id--) {
		    window.clearTimeout(id); // will do nothing if no timeout with id is present
		}

    	//if menu is open, close it
    	if(pull.hasClass("open")){
    		pull.removeClass("open");
    		menu.slideToggle();
    	}
    	if(!typing){
    		think($(this).html().toLowerCase());
    	}
    });

    print("What do we want?");
    setInterval(function () {
      print("What do we want?");
    }, 16000);
    setTimeout(function () {
      print("Evidence-based facts!");
      setInterval(function () {
        print("Evidence-based facts!");
      }, 16000);
    }, 4000);
    setTimeout(function () {
      print("When do we want it?");
      setInterval(function () {
        print("When do we want it?");
      }, 16000);
    }, 8000);
    setTimeout(function () {
      print("After peer review!");
      setInterval(function () {
        print("After peer review!");
      }, 16000);
    }, 12000);
});

function updateContainer() {
	//responsive menu icon 
	var w = $(window).width();
	if(w > 600 && menu.is(':hidden')) {
		menu.removeAttr('style');
	}

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
	$output.css('border-right-width', minDimension * 1 / 200 + "px");
	// $output.width(Math.ceil(minDimension * 12 / 16));
}

function print(output) {
	//first, clear the output span
	$('#output').html(">");
	//iterate through the output
	(function myLoop (i, speed) {  
		speed = speed * (Math.random() * (1.1 - .9) + .9); //random percent change or %110 through 90%
		setTimeout(function () {   
		  	type( output[output.length - (i)] );          //  your code here                
		  	if (--i){ 
		  		myLoop(i, Math.max(Math.min(speed, 150), 50)); //put a boundary on slow typing speed 
			} else {
				$('#output').html(originalOutput + "<br/>&#8250;" + output);
			}
		}, speed);
	})(output.length, 75);

}

function type(character){
    $('#output').html($('#output').html() + character);
}

function think(input){
	switch(input)
	{
	case "about":
		print("I'm Scott Lowe.");
		setTimeout(function(){print("I like riding bikes");
			setTimeout(function(){print("and playing guitar!");
				setTimeout(function(){print("Generally Irrelevant,");
					setTimeout(function(){print("Wrecklessly Idealistic,");
						setTimeout(function(){print("Lover of life.");
							setTimeout(function(){print("It's nice to meet you.");

							}, 3000);
						}, 3000);
					}, 3000);
				}, 3000);
			}, 3000);
		}, 3000);
		break;
	case "email":
		print('me@scottdlowe.com');
		break;	
	default:
		print("bye!");
	}
}

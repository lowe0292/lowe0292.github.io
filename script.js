//determine which prefixes to use for transforms
var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
prop,
el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
	if(typeof el.style[props[i]] !== "undefined") {
		prop = props[i];
		break;
	}
}

//determine the mapping from nav element to yAngle rotation
var navToDegreesMap = new Array();
$('.main-navigation').children().children().each(function(index){
	navToDegreesMap[$(this).children().text()] = index;
});
var numberOfNavElements = 0;
for (var key in navToDegreesMap) {
	numberOfNavElements++;
}
for (var key in navToDegreesMap) {
    //replace the index values with yAngle degrees
    navToDegreesMap[key] = navToDegreesMap[key] * 360 / numberOfNavElements;
}

function cyclePages(direction, oldPage){
	var newPage = "";
	if(direction == "Right"){
		switch(oldPage){
    		case "about":
				newPage = "thoughts";
				break;

			case "thoughts":
				newPage = "creations";
				break;

			case "creations":
				newPage = "contact";
				break;

			case "contact":
				newPage = "about";
				break;
    	};
	} else if(direction == "Left"){
		switch(oldPage){
    		case "about":
				newPage = "contact";
				break;

			case "contact":
				newPage = "creations";
				break;

			case "creations":
				newPage = "thoughts";
				break;

			case "thoughts":
				newPage = "about";
				break;
    	};
	}
	return newPage;
}


//setup master angles for the cube
var xAngle = 0;
var yAngle = 0;
var zAngle = 0;

//navigation listener
$('nav ul li a').click(function(){
	var newPage = $(this).text();
	$('.selected').removeClass("selected");
	$(this).addClass("selected");
	//generate random spins for x and z
	performNavigation(newPage);
});

$(window).resize(function() {
	resizeExperiment();
});

//spin the cube when the user presses left or right
$('body').keydown(function(evt) {
	oldPage = $('.selected').text();
	switch(evt.keyCode){
		case 37: // left
			yAngle += 360 / numberOfNavElements;
			$('.selected').toggleClass("selected");
			$("#"+cyclePages("Left",oldPage)).toggleClass("selected");
			break;

		case 39: // right
			yAngle -= 360 / numberOfNavElements;
			$('.selected').toggleClass("selected");
			$("#"+cyclePages("Right",oldPage)).toggleClass("selected");
			break;

		case 38: // up
			xAngle -= 360;
			break;

		case 40: //down
			xAngle += 360;
			break;
    };

	rotateExperiment(xAngle,yAngle,zAngle);
});


function toRadians (angle) {
		return angle * (Math.PI / 180);
}

function rotateExperiment(xAngle, yAngle, zAngle){
	document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) rotateZ("+zAngle+"deg)";
}

function resizeExperiment(){
	windowWidth = $(window).innerWidth();
	windowHeight = $(window).innerHeight();
	minDimension = Math.min(windowHeight,windowWidth);
	//set experiment size based on 10% margin at top and bottom.
	$('#experiment').css("height",Math.round((minDimension-43)*.8));
	$('#experiment').css("width",Math.round((minDimension-43)*.8));
	$('#experiment').css("margin-top",Math.round((minDimension-43)*.1));
	$('#experiment').css("margin-bottom",Math.round((minDimension-43)*.1));

	//set sizes of the faces and cube
	$('.face').css("height",Math.round((minDimension-43)*.8));
	$('.face').css("width",Math.round((minDimension-43)*.8));
	$('#cube').css("height",Math.round((minDimension-43)*.8));
	$('#cube').css("width",Math.round((minDimension-43)*.8));

	//find radius of polygon
	n = 4; //number of sides
	polygonAngle = ((n-2)*180)/n; //angle between sides
	rotationAngle = 360/n; //number of rotations for a full spin
	radius = minDimension / (2*Math.sin(toRadians(180)/n));
	height = radius*Math.cos(toRadians(rotationAngle)/2);

	//translate the faces to get them in the right spot to build a cube
	$('.one').css(prop,"translateZ("+Math.round(height)+"px)");
	$('.two').css(prop,"translateZ("+Math.round(height*Math.sin(toRadians(90-rotationAngle)))+"px) translateX("+Math.round(height*Math.cos(toRadians(90-rotationAngle)))+"px) rotateY("+rotationAngle+"deg)");
	$('.three').css(prop,"translateZ("+Math.round(height*Math.sin(toRadians(90-rotationAngle*2)))+"px) translateX("+Math.round(height*Math.cos(toRadians(90-rotationAngle*2)))+"px) rotateY("+rotationAngle*2+"deg)");
	$('.four').css(prop,"translateZ("+Math.round(height*Math.sin(toRadians(90-rotationAngle*3)))+"px) translateX("+Math.round(height*Math.cos(toRadians(90-rotationAngle*3)))+"px) rotateY("+rotationAngle*3+"deg)");
}

function performNavigation(pageName){
	//generate random spins for x and z
	if(Math.random() > .5){
		zAngle += 360;
	} else {
		zAngle += -360;
	}
	if(Math.random() > .5){
		xAngle += 360;
	} else {
		xAngle += -360;
	}

	yAngle = -navToDegreesMap[pageName];

	rotateExperiment(xAngle,yAngle,zAngle);
}

function selectDefaultPage(){
	$('#about').addClass("selected");
}

//setup after page has loaded
$(document).ready(
	function(){
		//get hash value from url
		if(window.location.hash) {
			var hash_value = window.location.hash;
			var pageName = hash_value.replace("#","");
			//determine if hash value is actually a page
			if(pageName in navToDegreesMap){
				$(hash_value).addClass("selected");	
				performNavigation(pageName);
			} else {
				selectDefaultPage();
			}
		} else {
			selectDefaultPage();
		}
		//set the appropriate size for the cube.
		resizeExperiment();
	}
);
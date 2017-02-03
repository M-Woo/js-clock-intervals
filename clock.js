document.addEventListener('DOMContentLoaded', function(){
	// var degrees = 45;

var i=0;
var interval;


var rotate = function(){
	i++;

	document.getElementById('second').style.transform = 'rotate('+ (i/60*360) + 'deg)';

	document.getElementById('minute').style.transform = 'rotate('+ (i/(60*60)*360) + 'deg)';

	document.getElementById('hour').style.transform = 'rotate('+ (i/(60*60*12)*360) + 'deg)';
};

setInterval(rotate,1000);

});






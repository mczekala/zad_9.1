function getTriangleArea (a, h) {
	if((a<=0)||(h<=0)) {
		console.log('Nieprawidlowe dane');
	}
	else {
		return a*h/2;
	}
}
function showResult(in1, in2, bx) {
		if ((input[in1].value>=0)&&(input[in2].value>=0)) {
			box[bx].innerHTML=getTriangleArea(input[in1].value, input[in2].value);
		}
		else {
			box[bx].innerHTML=0;
		}
}


var input = document.getElementsByTagName('input');
var button = document.getElementById('js-button');
var box = document.getElementsByClassName('js-box');
var div = document.getElementById('js-div');
button.addEventListener('click',function(event) {
		showResult(0,1,0);
	}
);

input[3].addEventListener('keydown',function(event) {
		if (event.keyCode!=13) {
			return;
		}
		showResult(2,3,1);
	} 
);

div.addEventListener('change',function(event) {
		showResult(4,5,2);
	} 
);
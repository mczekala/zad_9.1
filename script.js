function getTriangleArea (a, h) {
	if((a<=0)||(h<=0)) {
		console.log('Nieprawidlowe dane');
	}
	else {
		return a*h/2;
	}
}

var in1 = document.getElementById('js-input1');
var in2 = document.getElementById('js-input2');
var in3 = document.getElementById('js-input3');
var in4 = document.getElementById('js-input4');
var in5 = document.getElementById('js-input5');
var in6 = document.getElementById('js-input6');
var in56 = document.getElementById('js-input56');

var button1 = document.getElementById('js-button1');

var box1 = document.getElementById('js-box1');
var box2 = document.getElementById('js-box2');
var box3 = document.getElementById('js-box3');

button1.addEventListener('click',function(event) {
		if ((in1.value>=0)&&(in2.value>=0)) {
			box1.innerHTML=getTriangleArea(in1.value, in2.value);
		}
		else {
			box1.innerHTML=0;
		}
	}
);

in4.addEventListener('keydown',function(event) {
		if (event.keyCode!=13) {
			return;
		}
		if ((in3.value>=0)&&(in4.value>=0)) {
			box2.innerHTML=getTriangleArea(in3.value, in4.value);
		}
		else {
			box2.innerHTML=0;
		}
	} 
);

in56.addEventListener('change',function(event) {
		if ((in5.value>=0)&&(in6.value>=0)) {
			box3.innerHTML=getTriangleArea(in5.value, in6.value);
		}
		else {
			box3.innerHTML=0;
		}
	} 
);
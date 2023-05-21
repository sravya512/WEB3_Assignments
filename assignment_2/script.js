var button=document.getElementsByClassName("buttons");
var display=document.getElementById("display");
for (var i = 0; i < button.length; i++) {
 button[i].addEventListener('click',calculate);
}
function calculate(){
	var value=this.getAttribute("data-value");
	var text=display.innerHTML.trim();
	console.log(value);
	if(value=='+' || value=='-' || value=='*' || value=='/'){
		display.innerHTML+=value;
	}
	else if(value=="sign"){
		var existingtext=text;
		existingtext=-1*existingtext;
		display.innerHTML=existingtext;
	}
	else if(value=="ac"){
		display.innerHTML='';
	}
	else if(value=='%'){
		var existingtext=text;
		existingtext=existingtext/100;
		display.innerHTML=display.innerHTML + ' = ' + existingtext;
	}
	else if(value=='.'){
		var existingtext=text;
		display.innerHTML=existingtext+'.';
	}
	else if(value=='='){
		operand2=parseFloat(text);
		var x=display.innerHTML;
		console.log(x);
		var result=eval(x);
		console.log(result);
		display.innerHTML=x+' = '+ result;
	}
	else{
		display.innerHTML+=value;
	}
}
function newView1() {
	let userData = prompt("What is your complete name?");
	let answer;
	if(isNaN(userData)){
		document.getElementById('fondoModal').style.display='flex';
		document.getElementById('getData1').innerHTML = userData;	
	}else{
		alert('Sorry '+userData+' is not a name');
	}
}

function newView2(){
	let age = prompt('What is your age?');
	let status;

	if(isNaN(age)){
		alert('Invalid because '+age+ ' is not a number');
	}else{
		status = 'You are '+age + ' years old';

		document.getElementById('fondoModal2').style.display='flex';
		document.getElementById('getData2').innerHTML = status;
	}
}

function newView3(){
	let	num1 = parseInt(prompt("Insert a number between 1 to 10: "));
	let	num2 = parseInt(prompt("Insert another number between 1 to 10: "));
	let operation = num1+num2;
	let answer;
	
	if(isNaN(num1 && num2)||(num1 && num2)<1||(num1 && num2)>10){
		answer = 'Invalid numbers';
	}else{
		answer = 'The result of '+num1+' + '+num2+' is: '+operation;
	}

	document.getElementById('fondoModal3').style.display='flex';
	document.getElementById('resultPlus').innerHTML = answer;
}

function newView4(){
	document.getElementById('fondoModal4').style.display='flex';
}

function newView5(){
	let firstName = document.getElementById('userFirst').value;
	let lastName = document.getElementById('userLast').value;
	let	email = document.getElementById('userEmail').value;
	let password = document.getElementById('userPassword').value;

	document.getElementById('fondoModal5').style.display='flex'

	document.getElementById('CompleteName').innerHTML=(firstName +''+lastName);
	document.getElementById('Message').innerHTML=email;
}

function newView6(){
	document.getElementById('fondoModal6').style.display="flex";
}

function newView7(){
	document.getElementById('fondoModal7').style.display="flex";
}

function newView8(){
	document.getElementById('fondoModal8').style.display="flex";
}

function newView9(){
	document.getElementById('fondoModal9').style.display="flex";
}

function comeBack(){
	window.history.go('index2.html');
}

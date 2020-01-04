var secret_no= 23;
var guess_no=Number(prompt("pick any number"));
if (guess_no===secret_no) {
	alert("you are correct");
}
else if(guess_no<secret_no) {
	alert("your number is lower");
}
else if(guess_no>secret_no) {
	alert("your number is greater");
}
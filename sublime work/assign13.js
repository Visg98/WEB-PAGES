var age=Number(prompt("how old are you?"));
if (age<0) {
	console.log("error!!!");
}
if(age===21){
	console.log("HAPPY 21ST BIRTHDAY!!");
}
if (age%2!=0) {
	console.log("your age is odd");
}
if (age % Math.sqrt(age)===0) {
	console.log("Your age is perfect square");
}
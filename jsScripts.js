//By Richard Mable
//checks to make sure page is loaded before executing any function
window.onload = function(){

	//Create a multi-dimensional array related to a subject that interests you. 
	//Output two of the items in sub-arrays to the console
	//thanks to https://www.youtube.com/watch?v=Cta5s1QBD8E for the helpful tutorial!

	var skiSelect = [
		['powder', [185, 180, 175, 170, 165, 160, 155], ['blue', 'red', 'pink']],
		['carving', [185, 180, 175, 170, 165, 160, 155], ['blue', 'red', 'pink']], 
		['racing', [185, 180, 175, 170, 165, 160, 155], ['blue', 'red', 'pink']],
		['park', [185, 180, 175, 170, 165, 160, 155], ['blue', 'red', 'pink']],
		['kid', [185, 180, 175, 170, 165, 160, 155], ['blue', 'red', 'pink']],
		['punter', [185, 180, 175, 170, 165, 160, 155], ['blue', 'red', 'pink']]	
	];

	//order of array selection example: console.log(skiSelect[0][2][0])
	//[0] will select the first array, the powder ski array.
	//[2] then tell us to go to the second(/third) array inside of the powder ski array,
	//which is the color array. [0] then tells us to select the first(0 index) option for the color,
	//which is blue. Thus, this line should print to the console: 'blue'

	//this line prints out, powder, 175, red to the console.
	console.log((skiSelect[0][0]), (skiSelect[0][1][2]), (skiSelect[0][2][1]));

	//Write a program that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. 
	//If it is not, let the user know what the variable was and that it was greater than 10.

	//thanks to http://stackoverflow.com/questions/12627443/jquery-click-vs-onclick for helping figure out a good "click" method in native JS
	//when clicked, generates random number, check if >< than 10, and returns different message if > 10 or < 10
	document.getElementById("checkRand").addEventListener("click", (function(){
		//generates random number between 1 and 20 and assigns it to randNum
		var randNum = (Math.round(Math.random() * 20));
		//checks if randNum is greater or less than 10, alerts user to result
		if (randNum < 10){
			alert("The number was less than 10, it was " + randNum + "!");
		} else if (randNum > 10){
			alert("The number was greater than 10, it was " + randNum + "!");
		}
		}));

	//Declare a function that takes a name as an argument and tells the user what name they’ve entered, 
	//try running it after it has been declared
	//function to check if user inputted any text. If they did, prints in alert box. If not also alerts.
	function userName(firstName){
		if (firstName == ""){
			alert("Please enter a name");
		}else{
			alert("Your name is: " + firstName);
		}
	};
	//passes the user input into the userName parameter of firstName when "check" clicked
	document.getElementById("nameCheck").addEventListener("click", (function(){
		userName(document.getElementById("fname").value);
	}));

};




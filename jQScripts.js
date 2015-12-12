//By Richard Mable
$(document).ready(function(){

	//badClick starts printing "Nah ah ah, You didn't say the magic word!" repeatedley to page

	$("#badClick").click(function(){
		$("#image2").show();
		setInterval(function(){
				$("#toldYou").append("<p>Nah ah ah, You didn't say the magic word!</p>");
			}, 100);
	});

	//set some intial places for elements
	$("body").css({"width": "1000px", "height": "5000px"})
	$("h3").hide().css({"font-size": "600%"})
	$("h1").css({"font-size": "600%", "color": "red"});
	$("#randoAppear").css({"position": "absolute", "color": "red"})
	$("#color1").css({"position": "absolute"})
	$("#color2").css({"position": "absolute"})
	$("#color3").css({"position": "absolute"})
	$("#image2").hide();

	var imgWidth = 100
	//clicking in the body sets off the rest:
	$("body").click(function(){
			//random number generator, generating a number every second
		setInterval(function(){
			(function(){
				randNum1 = (Math.round(Math.random() * 800));
			})();
			(function(){
				randNum2 = (Math.round(Math.random() * 800));
			})();
			}, 1000);
		//random color generator, max 255 for use with rgb, generating every second
		setInterval(function(){
			(function(){
				colorNum1 = (Math.round(Math.random() * 255));
			})();
			(function(){
				colorNum2 = (Math.round(Math.random() * 255));
			})();
			(function(){
				colorNum3 = (Math.round(Math.random() * 255));
			})();
			}, 1000);
		//h1 grows absurdly small
		$("h1").css({"font-size": "2%", "color": "yellow"});
		//disappear...dissapears via fadeout
		$("#disappear").css({"font-size": "400%"});
		$("#disappear").fadeOut(10000);
		//h3 appears via slideDown, slowly. Very slowly
		$("h3").slideDown(20000);
		//randoAppear appears and disappears at random times (around the page ATM)
		setInterval(function(){
			$("#randoAppear").css({"top": randNum1, "left": randNum2})
		}, 1000);
		//image1 grows every 1 second by 1%
		setInterval(function(){
			imgWidth = (imgWidth * 1.01);
			$("#image1").css({"width": imgWidth})
		}, 1000);
		//color1 set size, appear randomly on page
		setInterval(function(){
			$("#color1").css({"width": randNum2, "height": randNum1, "background-color": "red", "top": randNum1, "left": randNum2})
		}, 1000);
		//color2, set size, set place, changes colors quickly
		//Thanks to https://css-tricks.com/forums/topic/jquery-variables-in-css/ 
		//for helping me with the syntax of placing variables into CSS with jQuery
		setInterval(function(){
			$("#color2").css({"top": randNum2, "left": colorNum1, "width": "200px", "height": "200px", "background-color": "rgb(" + colorNum1 + "," + colorNum2 + "," + colorNum3 + ")"})
		}, 1000);
		//div color 3 attributes
		setInterval(function(){
			$("#color3").css({"top": colorNum3, "left": randNum2, "width": randNum1, "height": "150px", "background-color": "rgb(" + colorNum2 + "," + colorNum3 + "," + colorNum1 + ")"})
		}, 1000);
	})
});



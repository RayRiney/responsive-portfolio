
$("#factButton").on("click", function() {

	var number = Math.floor((Math.random() * booFacts.length));

	$("#factText").text(booFacts[number])
})

var booFacts = [ "Boo has ceased to be.","Boo was a Pomeranian","Boo's best friend was another pomeranian named Buddy, who crossed over two years before Boo.", "Boo was born on March 16 making him a Pisces", "Boo's favourite food was grass", "Boo released two books before slipping the mortal coil."]


$("#textPink").on("click", function() {

	$("#funText").css("color", "pink")
})


$("#textOrange").on("click", function() {

$("#funText").css("color", "Orange")
})

$("#textGreen").on("click", function() {

	$("#funText").css("color", "green")
})


$("#boxGrow").on("click", function() {
	
	$("#box").animate({height:"+=100px", width:"+=100px"}, "fast");
		
})

$("#boxShrink").on("click", function() {
	
	$("#box").animate({height:"-=100px", width:"-=100px"}, "fast");
})
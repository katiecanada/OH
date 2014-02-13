//var classData= require('../questions.json')

$(document).ready(function(){
	$(".removeClass").click(removeClass);
	$("#submitPick").click(addClass);
});

/* temporary function to remove a class when user selects x button. 
* Needs to be updated to actually remove class from db
*/
function removeClass(e){
	$(this).prev().remove();
	$(this).remove();
}

/*NEED TO ACTUALLY ADD CLASS TO THE DB*/
function addClass(e){
	console.log("here");
	var classPick= $("#classes").val();
	var newClass={
		"name":classPick
	}
	$("#classList").append(' <a class="classbutton button" href="pickSession/">'+classPick+'</a> <a class="button removeClass" href="#">x</a> <br>');
}
$(document).ready(function(){
	$("a.joinButton").click(joinQ);
});

/* temporary function to remove a class when user selects x button. 
* Needs to be updated to actually remove class from db
*/
function joinQ(e){
	e.preventDefault();
	console.log("here");
	console.log($(this).parent());
	$(this).prev().append(" <br> <br>You've been added to the question! ");
	$(this).text('Leave Question');
}
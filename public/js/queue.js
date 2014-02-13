$(document).ready(function(){
	$("a.joinButton").click(joinQ);
	$("a.removeButton").click(removeQ);	

});

/*FIX BUG WITH TOGGLING BETWEEN CLICK FUNCTIONS */
/*update json/db to indicate student has joined question*/

function joinQ(e){
		console.log($(this).attr('class'));
	e.preventDefault();
	$(this).prev().text(" You've been added to the question! ").css("font-weight","bold").css("color", "black");
	$(this).text('Leave Question');
	$(this).toggleClass("joinButton removeButton");
	$(this).parent().toggleClass("member");
	$(this).click(removeQ);

}

function removeQ(e){
	console.log($(this).attr('class'));

	e.preventDefault();
	$(this).text('Join Question');

	$(this).prev().text(" You've been removed from the question! ").css("color", "#CC0000");
	$(this).toggleClass("removeButton joinButton");
	$(this).parent().removeClass("member");

	$(this).click(joinQ);

}
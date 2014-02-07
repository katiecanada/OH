$(document).ready(function(){
	$(".removeClass").click(removeClass);
});

/* temporary function to remove a class when user selects x button. 
* Needs to be updated to actually remove class from db
*/
function removeClass(e){
	$(this).prev().hide();
	$(this).hide();
}
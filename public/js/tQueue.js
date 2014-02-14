$(document).ready(function(){
	$("a.resolveButton").click(resolveQ);
});

function resolveQ(e){
	e.preventDefault();
	$(this).parent().css("background-color", "#B8B8B8");
	$(this).remove();
}
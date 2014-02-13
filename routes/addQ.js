var currentClass=require('../currentClass.json')

exports.view = function(req, res){
	console.log(currentClass);
	res.render('addQ', currentClass);
}

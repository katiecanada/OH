var schedule=require('../schedule.json');
var currentClass=require('../currentClass.json')


exports.view = function(req, res){
	console.log(currentClass);
	if(req.query.class!=undefined){
	currentClass['name']=req.query.class;
}
	res.render('pickSession', {'data':[schedule,currentClass]});
};

var schedule=require('../schedule.json');
var currentClass=require('../currentClass.json')

exports.view = function(req, res){
	if(req.query.class!=undefined){
	currentClass['name']=req.query.class;
}
	if(req.query.day!=undefined){
	var newSession ={
		'day':req.query.day,
		'startTime':req.query.start,
		'endTime':req.query.end,
		'ta':"katie",
		'status':"future",
		'location':req.query.location
	}
	schedule["schedule"].push(newSession);
}
	res.render('createOH', currentClass);
};

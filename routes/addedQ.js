var questionData= require('../questions.json')
var currentClass= require('../currentClass.json');



exports.added =function(req,res){
	console.log("here");
	var group="no";
	if(req.query.group=="Yup!"){
		group="yes";
	}
	newQuestion ={
		'number':req.query.problem,
		'description':req.query.description,
		'group':group,
		'numStudents':1,
		'member':"yes"
	}
	console.log(newQuestion);
	questionData["questions"].push(newQuestion);
	res.render('queue', {'data':[currentClass,questionData]});
};
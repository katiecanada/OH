var questionData= require('../questions.json')
var currentClass= require('../currentClass.json');

exports.view = function(req, res) {    
		console.log(currentClass);

	var className={'class':req.query.class};

	res.render('queue', {'data':[currentClass,questionData]});
 }
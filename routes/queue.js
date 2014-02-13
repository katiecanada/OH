var questionData= require('../questions.json')

exports.view = function(req, res) {    
	var className={'class':req.query.class};

	res.render('queue', questionData);
 }
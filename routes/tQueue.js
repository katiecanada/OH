var questionData= require('../questions.json')

exports.view = function(req, res) {    

	res.render('teacherQueue',questionData);
 }
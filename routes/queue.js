exports.view = function(req, res) {    
	var className={'class':req.query.class};
	res.render('queue', className);
 }
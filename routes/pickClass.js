exports.view = function(req, res){
	
	 email = {'email':req.query.email};
	console.log("email: "+email);
	//res.partial('faq');
	res.render('pickClass', email);
};

var myData= require('../myClasses.json')
var classes= require('../classes.json')


exports.view = function(req, res){
	
	 email = {'email':req.query.email};

	if(req.query.name!=undefined & req.query.name!=""){ 
		newClass={'name':req.query.name};
	 	myData["myClasses"].push(newClass);
	 }
	//res.partial('faq');
	res.render('pickClass', {"pickClassData":[myData,classes]} );
};

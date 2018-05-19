var express = require("express"),
	bodyParser = require("body-parser"),
	userService = require("../../service/userService");





var userRouter = express.Router();
userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({extended: true}));

userRouter.route("/login")
	.post(function(req,res) {
		console.log("inside the userRouter", req.body)
		userService.getUser(req.body, function(err, res){
			if(err) return(err)
				console.log("hello error hereee");
			if(res.body=={}){
				userService.createUser(req.body, function(err, response){
					if(err) return(err);
					console.log("created User",response.body)
				})
			}
			else{ 
				
				res.json(res.body)
			}
		})
	});
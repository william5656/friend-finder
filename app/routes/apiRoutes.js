var path = require("path");
var friendsData = require("../data/friends");

module.exports = function(app){

app.get("/api/friends", function(req,res){
   res.json(friendsData);
});

    app.post("/api/friends", function(req,res){
        var userInput = req.body;
        var userAnswers = userInput.scores;
        var compare = 1000;
        var userName = "";
        var userPhoto = "";

        for(var i=0; i < friendsData.length; i++){
            var userTotal = 0;
            for(var q=0; q < userAnswers.length; q++){
                userTotal += Math.abs(friendsData[i].scores[q] - userAnswers[q]);
            }
            if(userTotal < compare){

                compare = userTotal;
                // console.log(userTotal);
                userName = friendsData[i].name;
                userPhoto = friendsData[i].photo;
            }
        }
        console.log(userName)
        res.json({
			userName: userName,
			userPhoto: userPhoto
        });

        // do not want to push
        // friendsData.push(userInput);
    });
}
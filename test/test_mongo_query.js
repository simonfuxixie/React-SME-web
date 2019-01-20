// connect to mongodb
var dbs = require('../dbconnection/dbconnection.js');
dbs.mongodbConnection();


var Users =	require('../models/users_model');

var handleError = function (err){
  console.log(err);
}
// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
Users.findOne({ 'email': 'ff3@gg.com' }, function (err, users) {
  if (err) {
    return console.log(err);
  }else {
    console.log(users.username, users.password);
  }


});

var express = require("express");

var restaurantController = require('./controllers/restaurantController');
var commentController = require('./controllers/commentController');
var userController = require('./controllers/userController');

var app = express();

app.use(express.static("./public"));
app.use(express.json()); //link to json from client

app.route('/restaurants').get(restaurantController.getAllRestaurants);
app.route('/restaurants/:id').get(restaurantController.getAllRestaurantsById);
app.route('/searchRestaurants/:restaurantName').get(restaurantController.getRestaurantByName);


app.route('/comment').get(commentController.getAllComments);
app.route('/comment/:id').get(commentController.getAllCommentsById);
app.route('/comment').post(commentController.addComment);
app.route('/comment/:id').put(commentController.updateComment);
app.route('/comment/:id').delete(commentController.deleteComment);


app.route('/user').get(userController.getAllUsers);
app.route('/user/:id').get(userController.getAllUsersById);
app.route('/user').post(userController.addUser);
app.route('/user/:id').put(userController.updateUser);
app.route('/user/:id').delete(userController.deleteUser);
app.route('/login').post(userController.getLoginCredentials);


//start the nodejs to listen for incoming request
app.listen(8080,"127.0.0.1");
console.log("web server running @ http://127.0.0.1:8080"); //output to console


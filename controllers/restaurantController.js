"use strict";
const RestaurantsDB = require('../models/RestaurantsDB');
// const Restaurants = require('../models/Restaurants');

var restaurantsDB = new RestaurantsDB(); 

function getAllRestaurants(request,respond){
    restaurantsDB.getAllRestaurants(function(error, result){
        //for error handling
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllRestaurantsById(request,respond){
    var restaurantId = request.params.id;
    restaurantsDB.getAllRestaurantsById(restaurantId,function(error, result){
        //for error handling
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
// for search function
function getRestaurantByName(request, respond){
    restaurantsDB.getRestaurantByName(request.params.restaurantName, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    })
}


module.exports = {getAllRestaurants,getAllRestaurantsById,getRestaurantByName};
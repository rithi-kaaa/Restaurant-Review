"use strict";

var db = require('../db-connections');

class RestaurantsDB{
    getAllRestaurants(callback){
        var sql = "SELECT * from restaurant.restaurant";
        db.query(sql,callback)
    }

    getAllRestaurantsById(restaurantId, callback){
        var sql = "SELECT * from restaurant WHERE _id=?";
        db.query(sql,[restaurantId],callback)
    }
    
    getRestaurantByName(restaurantNameSearch2,callback){
        var sql = "SELECT * from restaurant WHERE restaurantName=?";
        db.query(sql, [restaurantNameSearch2], callback);
    }


}

module.exports = RestaurantsDB;

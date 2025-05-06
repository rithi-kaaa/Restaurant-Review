"use strict";

var db = require('../db-connections');
class UsersDB{
    getAllUsers(callback){
        var sql = "SELECT * From restaurant.user";
        db.query(sql,callback)
    }

    getAllUsersById(userId, callback){
        var sql = "SELECT * from user WHERE _id=?";
        db.query(sql,[userId],callback)
    }

    addUser(user, callback){
        var sql = "INSERT INTO user (password, username, email, mobile, profile_picture, gender, last_name, first_name, date_of_birth) VALUES (?,?,?,?,?,?,?,?,?)";
        db.query(sql, [user.getPassword(), user.getUsername(), user.getEmail(), user.getMobile(),
        user.getProfile_picture(), user.getGender(), user.getLast_name(), user.getFirst_name(), user.getDate_of_birth()], callback);

    }

    updateUser(user, callback){
        var sql = "UPDATE user SET password = ?, username = ?, email = ?, mobile = ?, profile_picture = ?, gender = ?, last_name = ?, first_name = ?, date_of_birth = ? WHERE _id = ?";
        return db.query(sql,[user.getPassword(), user.getUsername(), user.getEmail(), user.getMobile(),
            user.getProfile_picture(), user.getGender(), user.getLast_name(), user.getFirst_name(), user.getDate_of_birth(), user.getId()], callback);
    }

    deleteUser(userId, callback){
        var sql = "DELETE from user WHERE _ID = ?";
        return db.query(sql,[userId],callback);
    }

    getLoginCredentials(userId,callback){
        console.log('in USER DB',userId);
        var sql = "SELECT password FROM user WHERE username = ?";
        return db.query(sql, [userId],callback) ;
        }
        

}

module.exports = UsersDB ;


"use strict";

const UsersDB = require('../models/UsersDB');
const Users = require('../models/Users');

const bcrypt1 = require('bcrypt');

var jwt = require('jsonwebtoken');
var secret = "somesecretkey";


var usersDB = new UsersDB(); //create an instance of the class 

function getAllUsers(request,respond){
    usersDB.getAllUsers(function(error, result){
        //for error handling
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllUsersById(request,respond){
    var userId = request.params.id;
    usersDB.getAllUsersById(userId,function(error, result){
        //for error handling
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addUser(request,respond){
    // var now = new Date();
    var password = bcrypt1.hashSync(request.body.password, 10);
    var user = new Users(null,password,request.body.username, request.body.email,
        request.body.mobile, request.body.profile_picture,request.body.gender, request.body.last_name, request.body.first_name, request.body.date_of_birth);
    usersDB.addUser(user,function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        } 
    })
};


function updateUser(request,respond){
    // var now = new Date();
    var user = new Users(parseInt(request.params.id),request.body.password,request.body.username, request.body.email,
    request.body.mobile, request.body.profile_picture,request.body.gender, request.body.last_name, request.body.first_name, request.body.date_of_birth);
    usersDB.updateUser(user,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteUser(request, respond){
    var userID = request.params.id;
    usersDB.deleteUser(userID,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

// function getLoginCredentials(request,respond){
//     var userID = request.params.username;
//     var pwd = request.body.password;
//     var msg = "";
//     console.log('in user controller',userID,pwd); 
//     usersDB.getLoginCredentials(userID,function (error, result) {
//     if(error){
//     throw error;
//     }
//     else{
//     if(result.length > 0){
//     if(pwd == result[0].password){
//     msg = "SUCCESS!";
//     console.log(msg);
//     }
//     else{
//     msg = "FAIL!";
//     console.log(msg);
// }
// }
// else{
// msg = "USER NOT FOUND!";
// console.log(msg);
// }
// }
// respond.json(prepareMessage(msg));
// });
// }

// function prepareMessage(msg){
//     var obj = {"message": msg};
//     console.log(obj);
//     return obj;
//     }
    

function getLoginCredentials(request, respond) {
    //var userid = request.params.userid;
    var username = request.body.username;
    var pwd = request.body.password;
    var msg = "";
    //console.log('in user controller', userid, pwd);
    usersDB.getLoginCredentials(username, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            if (result.length > 0) {
                const hash = result[0].password;
                //console.log(hash);
                var flag = bcrypt1.compareSync(pwd, hash);
                //value of flag is true or false
                //console.log(flag);
                //if(pwd == result[0].password){
                if (flag) {
                    //jwt--jsonwebtoken
                    var token = jwt.sign(username, secret);
                    respond.json({result:token});
                    //msg = "SUCCESS!";
                    //console.log(msg);
                }
                else {
                    //msg = "FAIL!";
                    //console.log(msg);
                    respond.json({ result:"invalid password"});
                }
            }
            else {
                 respond.json({ result:"user not found"});
            }
        }
    });
}

function prepareMessage(msg) {
    var obj = { "message": msg };
    console.log(obj);
    return obj;
}



module.exports = {getAllUsers,getAllUsersById,addUser,updateUser,deleteUser,getLoginCredentials,prepareMessage};
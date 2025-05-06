"use strict";

const CommentsDB = require('../models/CommentsDB');
const Comment = require('../models/Comment');

var commentsDB = new CommentsDB(); //create an instance of the class MoviesDB

function getAllComments(request,respond){
    commentsDB.getAllComments(function(error, result){
        //for error handling
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllCommentsById(request,respond){
    var commentId = request.params.id;
    commentsDB.getAllCommentsById(commentId,function(error, result){
        //for error handling
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addComment(request,respond){
    var now = new Date();
    var comment = new Comment(null,request.body.username,request.body.restaurantId, request.body.review, now.toString(), request.body.rating,request.body.user_id, request.body.restaurantName);
    commentsDB.addComment(comment,function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        } 
    })
};

function updateComment(request,respond){
    var now = new Date();
    var comment = new Comment(parseInt(request.params.id),request.body.username,request.body.restaurantId, request.body.review, now.toString(), request.body.rating,request.body.user_id, request.body.restaurantName);
    commentsDB.updateComment(comment,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteComment(request, respond){
    var commentID = request.params.id;
    commentsDB.deleteComment(commentID,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllComments,getAllCommentsById,addComment,updateComment,deleteComment};
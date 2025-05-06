"use strict";

var db = require('../db-connections');
class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * From restaurant.comment";
        db.query(sql,callback)
    }

    getAllCommentsById(commentId, callback){
        var sql = "SELECT * from comment WHERE _id=?";
        db.query(sql,[commentId],callback)
    }

    addComment(comment, callback){
        var sql = "INSERT INTO comment (username, restaurantId, review, datePosted, rating, user_id, restaurantName) VALUES (?,?,?,?,?,?,?)";
        db.query(sql,[comment.getUsername(), comment.getRestaurantId(), comment.getReview(), comment.getDatePosted(), comment.getRating(), comment.getUser_id(), comment.getRestaurantName()], callback);

    }

    updateComment(comment, callback){
        var sql = "UPDATE comment SET username = ?, restaurantId = ?, review = ?, datePosted = ?, rating = ?, restaurantName = ? WHERE _id = ?";
        return db.query(sql,[comment.getUsername(), comment.getRestaurantId(), comment.getReview(), comment.getDatePosted(), comment.getRating(),
        comment.getRestaurantName(),comment.getId()], callback);
    }

    deleteComment(commentID, callback){
        var sql = "DELETE from comment WHERE _ID = ?";
        return db.query(sql,[commentID],callback);
    }

}
module.exports = CommentsDB ;
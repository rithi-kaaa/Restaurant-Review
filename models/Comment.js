"use strict";

class Comment {
constructor(id, username, restaurantId, review, datePosted, rating, user_id,restaurantName) {
this.id = id;
this.username = username;
this.restaurantId = restaurantId;
this.review = review;
this.datePosted = datePosted;
this.rating = rating;
this.user_id = user_id;
this.restaurantName = restaurantName;

}
setUsername(username) {
    this.username = username;
    }
    setRestaurantId(restaurantId) {
    this.restaurantId = restaurantId;
    }
    setReview(review) {
    this.review = review;
    }
    setDatePosted(datePosted) {
    this.datePosted = datePosted;
    }
    setRating(rating) {
    this.rating = rating;
    }
    setUserid(user_id) {
    this.user_id = user_id;
    }
    setRestaurantName(restaurantName) {
        this.restaurantName = restaurantName;
    }


    
getId() {
    return this.id;
    }
    getUsername() {
        return this.username;
    }
    getRestaurantId() {
        return this.restaurantId;
    }
    getReview() {
        return this.review;
    }
    getDatePosted() {
        return this.datePosted;
    }
    getRating() {
        return this.rating;
    }
    getUser_id() {
        return this.user_id
    }
    getRestaurantName() {
        return this.restaurantName;
    }
    
    
    
//add the set and get methods here
}
module.exports = Comment;



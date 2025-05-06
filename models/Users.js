"use strict";

class Users {
constructor(id, password, username, email, mobile, profile_picture, gender, last_name, first_name, date_of_birth) {
this.id = id;
this.password = password;
this.username = username;
this.email = email;
this.mobile = mobile;
this.profile_picture = profile_picture;
this.gender = gender;
this.last_name = last_name;
this.first_name = first_name;
this.date_of_birth = date_of_birth;

}
setUsername(password) {
    this.password = password;
    }
    setRestaurantId(username) {
    this.username = username;
    }
    setReview(email) {
    this.email = email;
    }
    setDatePosted(mobile) {
    this.mobile = mobile;
    }
    setRating(profile_picture) {
    this.profile_picture = profile_picture;
    }
    setUserid(gender) {
    this.gender = gender;
    }
    setLike(last_name) {
        this.last_name = last_name;
    }
    setDislike(first_name) {
        this.first_name = first_name;
    }
    setRestaurantName(date_of_birth) {
        this.date_of_birth = date_of_birth;
    }


    
getId() {
    return this.id;
    }
    getPassword() {
        return this.password;
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getMobile() {
        return this.mobile;
    }
    getProfile_picture() {
        return this.profile_picture;
    }
    getGender() {
        return this.gender;
    }
    getLast_name() {
        return this.last_name;
    }
    getFirst_name() {
        return this.first_name;
    }
    getDate_of_birth() {
        return this.date_of_birth;
    }
    
    
    
//add the set and get methods here
}
module.exports = Users;
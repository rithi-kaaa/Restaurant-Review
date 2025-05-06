"use strict";

class Restaurant {
constructor(id, restaurantName, address, phoneNumber, emailAddress, thumb, cuisine_display, region, opening_hour, res_description, about_us, history, average_rating, thumb1, cuisine, price, location, rating, thumb2) {
this.id = id;
this.restaurantName = restaurantName;
this.address = address;
this.phoneNumber = phoneNumber;
this.emailAddress = emailAddress;
this.thumb = thumb;
this.cuisine_display = cuisine_display;
this.region = region;
this.opening_hour = opening_hour;
this.res_description = res_description;
this.about_us = about_us;
this.history = history;
this.average_rating = average_rating;
this.thumb1 = thumb1;
this.cuisine = cuisine;
this.price = price;
this.location = location;
this.rating = rating;
this.thumb2 = thumb2;

}
setRestaurantName(restaurantName) {
    this.restaurantName = restaurantName;
    }
    setAddress(address) {
    this.address = address;
    }
    setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
    }
    setEmailAddress(emailAddress) {
    this.emailAddress = emailAddress;
    }
    setThumb(thumb) {
    this.thumb = thumb;
    }
    setCuisine_display(cuisine_display) {
    this.cuisine_display = cuisine_display;
    }
    setRegion(region) {
        this.region = region;
    }
    setOpening_hour(opening_hour) {
        this.opening_hour = opening_hour;
    }
    setRes_description(res_description) {
        this.res_description = res_description;
    }
    setAbout_us(about_us) {
        this.about_us = about_us;
    }
    setHistory(history) {
        this.history = history;
    }
    setAverage_rating(average_rating) {
        this.average_rating = average_rating;
    }
    setThumb1(thumb1) {
        this.thumb1 = thumb1;
    }
    setCuisine(cuisine) {
        this.cuisine = cuisine;
    }
    setPrice(price) {
        this.price = price;
    }
    setLocation(location) {
        this.location = location;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setThumb2(thumb2) {
        this.thumb2 = thumb2;
    }


    
getId() {
    return this.id;
    }
    getRestaurantName() {
        return this.restaurantName;
    }
    getAddress() {
        return this.address;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getEmailAddress() {
        return this.emailAddress;
    }
    getThumb() {
        return this.thumb;
    }
    getCuisine_display() {
        return this.cuisine_display;
    }
    getRegion() {
        return this.region;
    }
    getOpening_hour() {
        return this.opening_hour;
    }
    getRes_description() {
        return this.res_description;
    }
    getAbout_us() {
        return this.about_us;
    }
    getHistory() {
        return this.history;
    }
    getAverage_rating() {
        return this.average_rating;
    }
    getThumb1() {
        return this.thumb1;
    }
    getCuisine() {
        return this.cuisine;
    } 
    getPrice() {
        return this.price;
    }
    getLocation() {
        return this.location;
    }
    getRating() {
        return this.rating;
    }
    getThumb2() {
        return this.thumb2;
    }
    
    
    
//add the set and get methods here
}
module.exports = Restaurant;
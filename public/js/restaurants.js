//This function is to call the restaurants api and get all the restaurants
function getRestaurantData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', restaurant_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the restaurants records into our restaurant array        
	restaurant_array = JSON.parse(request.responseText);            
	fetchComments();
	console.log(restaurant_array) // output to console        
	//call the function so as to display all restaurants        	
    displayRestaurants(category);  
    //listRestaurant();  
};    

//This command starts the calling of the restaurants web api    
request.send();}

function displayRestaurants(category) {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";
    message = category;

    document.getElementById("summary").textContent=message;
    document.getElementById("parent").textContent="";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        if (restaurant_array[count]) {
            var thumbnail = restaurant_array[count].thumb;
            var restaurantName = restaurant_array[count].restaurantName;
	        var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showRestaurantComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showRestaurantDetails(this)">' + restaurantName + '</h5></div>\
</div>'
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        }
    }
}

//This function is to display the individual details whenever the user clicks
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantName").textContent = restaurant_array[item].restaurantName;
    document.getElementById("thumb1").src = restaurant_array[item].thumb1;
    document.getElementById("cuisine_display").textContent = restaurant_array[item].cuisine_display;
    document.getElementById("region").textContent = restaurant_array[item].region;
    document.getElementById("opening_hour").textContent = restaurant_array[item].opening_hour;
    document.getElementById("address").textContent = restaurant_array[item].address;
    document.getElementById("emailAddress").textContent = restaurant_array[item].emailAddress;
    document.getElementById("phoneNumber").textContent = restaurant_array[item].phoneNumber;
    document.getElementById("average_rating").textContent = restaurant_array[item].average_rating;
    document.getElementById("about_us").textContent = restaurant_array[item].about_us;
    document.getElementById("history").textContent = restaurant_array[item].history;
}

//This function is to display "Home"
function listHome() {
    category = "Home";
    displayRestaurants(category);
    document.getElementById("menuHome").classList.add("active");
    document.getElementById("menuRestaurant").classList.remove("active");
    document.getElementById("menuFavourite").classList.remove("active");
    //document.getElementById("menuLogin").classList.remove("active");
}

//This function is to display "Restaurants"
function listRestaurant() {
    category = "Restaurants";
    displayRestaurants(category);
    document.getElementById("menuHome").classList.remove("active");
    document.getElementById("menuRestaurant").classList.add("active");
    document.getElementById("menuFavourite").classList.remove("active");
    //document.getElementById("menuLogin").classList.remove("active");
}

//This function is to display "Favourites"
function listFavourites() {
    category = "Favourites";
    displayRestaurants(category);
    document.getElementById("menuHome").classList.remove("active");
    document.getElementById("menuRestaurant").classList.remove("active");
    document.getElementById("menuFavourite").classList.add("active");
    //document.getElementById("menuLogin").classList.remove("active");
}


// //This function is to display "Login"
// function listLogin() {
//     category = "Login";
//     displayRestaurants(category);
//     document.getElementById("menuHome").classList.remove("active");
//     document.getElementById("menuRestaurant").classList.remove("active");
//     document.getElementById("menuFavourite").classList.remove("active");
//     //document.getElementById("menuLogin").classList.add("active");
// }

//This function opens a new window/tab and loads the users favourites
function addToFav() {
    window.open(restaurant_array[currentIndex].add, "_blank");
}

function getSearchRestaurantData() {    
	var request = new XMLHttpRequest();
    var restaurantNameSearch = document.getElementById("searching").value;    
	request.open('GET', search_url + restaurantNameSearch, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() 
    {        
        //get all the restaurants records into our restaurant array        
        restaurant_array = JSON.parse(request.responseText);        
        //Fetch the reviews as well        
        console.log(restaurant_array) // output to console       
        //call the function so as to display all restaurants tiles for "Restaurant"        	
        displayRestaurants("Feed");    
    };    

// This command starts the calling of the restaurants web api    
request.send(JSON.stringify);}





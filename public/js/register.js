function registerMe(){
    var registerUser= new XMLHttpRequest();
   //endpoint 
    registerUser.open('POST', "http://127.0.0.1:8080/user", true);
    //json format
    registerUser.setRequestHeader("Content-Type", "application/json");
    //This command starts the calling of the register user api
    registerUser.onload = function () {
        console.log("new user sent");
        $('#registerModal').modal('hide');
        //$('#successModal').modal('show');
        $('#loginModal').modal('show');
        //$('#logoutModal').modal('show');
    }
    var pwd = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var lastname = document.getElementById("last_name").value;
    var firstname = document.getElementById("first_name").value;
    var dateofbirth = document.getElementById("date_of_birth").value;
    console.log(pwd,username,email,mobile,lastname,firstname,dateofbirth);
    
    var payload ={password:pwd,username:username,email:email,mobile:mobile,last_name:lastname,first_name:firstname,date_of_birth:dateofbirth};
    console.log(payload);
    registerUser.send(JSON.stringify(payload));
}
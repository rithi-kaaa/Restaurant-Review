function loginMe(){
    var loginUser =  new XMLHttpRequest();
    loginUser.open("POST", "http://127.0.0.1:8080/login", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function(){
        $('#loginModal').modal('hide');
           //convert to JSON object using parse from the string format in js
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);  
        if (token.result != false) {
           $('#successModal').modal('show');
            document.getElementById("registerMenu").style.display="none";
            document.getElementById("loginMenu").style.display="none";
            document.getElementById("logoutMenu").style.display="block";
            
            sessionStorage.setItem("sessiontoken", token.result);
            sessionStorage.setItem("username",payload.username);
                        //console.log(payload.user_id);            
        } else {
            $('#failModal').modal('show');            
        } 
    }
    var username = document.getElementById("usernamelogin").value;
    var pwd = document.getElementById("passwordlogin").value;
    var payload ={username:username,password:pwd};
    console.log(payload);
    loginUser.send(JSON.stringify(payload));
} 
//jquery event  - when the web page is rendered , the js function gets executed 
$(document).ready(function(){
    var sessiontoken =  sessionStorage.getItem("sessiontoken");
    var username = sessionStorage.getItem(payload.username);
    if (sessiontoken != null) {
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#logoutMenu').show();    
    }
    });
    

    
function logoutMe(){
    sessionStorage.removeItem("sessiontoken");
    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#logoutMenu').hide();  

}
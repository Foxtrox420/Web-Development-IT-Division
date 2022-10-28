function validate(){

    var email=document.getElementById("email").nodeValue;
    var password=document.getElementById("password").nodeValue;

    if(email == "kennlim04@gmail.com" && password == "admin"){
        alert("login succesful");
        return false;
    }
    else{
        alert("login failed"); 
    }
  
}
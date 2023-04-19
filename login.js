   // form validation 
function validate() {
    
    const email = document.getElementById("email").value;
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");

    if (atpos < 2 || dotpos < atpos +2 || dotpos+2>=email.length)      {
    document.getElementById("error1").innerHTML = "Please enter valid email";
    document.getElementById("email").style.borderColor = "red";
    return false;
    } else {
    document.getElementById("error1").innerHTML = "";
    }


    const pwd = document.getElementById("pwd");

    if (pwd.value.trim()  == "" || pwd.value.length < 4) {
    document.getElementById("error2").innerHTML = "Please enter  password";
    document.getElementById("pwd").style.borderColor = "red";
    return false;
    } else {
    document.getElementById("error2").innerHTML = "";
    }
    return true;
    }
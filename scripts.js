function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        document.getElementById("mtname").innerText = "cannot be empty!";
      return false;
    }else {
        document.getElementById("mtname").innerText = ""; 
    }

    let mail=document.forms["myForm"]["mail"].value;
    let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(mail)){
        document.getElementById("emailError").innerText = "Enter a valid email address!";
        return false;
    }

    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    
    if (password !== confirmPassword) {
        document.getElementById("passwordmatch").innerText = "Passwords do not match!";
        return false;
    } else {
        document.getElementById("passwordmatch").innerText = "";
        return true;
    }
  }
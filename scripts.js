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

  document.addEventListener('DOMContentLoaded', function() {
    const pfp = document.querySelector('.pfp');
    const sizeUpBtn = document.getElementById('sizeUpBtn');
    const sizeDownBtn = document.getElementById('sizeDownBtn');

    let currentSize = parseInt(window.getComputedStyle(pfp).width);

    sizeUpBtn.addEventListener('click', function() {
        currentSize += 5;
        pfp.style.width = `${currentSize}px`;
        pfp.style.height = `${currentSize}px`;
    });

    sizeDownBtn.addEventListener('click', function() {
        currentSize -= 5;
        if (currentSize >= 50) { // Minimum size to avoid too small images
            pfp.style.width = `${currentSize}px`;
            pfp.style.height = `${currentSize}px`;
        }
    });

    darkModeSwitch.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link action
        alert('This functionality has not been implemented');
    });
});

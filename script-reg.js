window.addEventListener('load', function() {
    var back = document.querySelector('.back');
  if (back) {
    back.style.display = 'none'; 
  }
  var loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'none'; 
  }
});


document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        document.title = " ShopWise Чекає на вас!";
    } else {
        document.title = "ShopWise";
    }
});


document.querySelector('.btn_btn-lg').addEventListener('click', function() {
    var inputText = document.querySelector('.custom_input').value.toLowerCase(); 
    var inputElement = document.querySelector('.custom_input');
    if (!inputText.includes('годинник')) { 
        document.querySelector('.error').style.display = 'block'; 
        inputElement.classList.remove('valid'); 
    } else {
        document.querySelector('.error').style.display = 'none'; 
        inputElement.classList.add('valid'); 
    }
});


document.getElementById("first-name").addEventListener("input", validateForm);
document.getElementById("second-name").addEventListener("input", validateForm);
document.getElementById("three-name").addEventListener("input", validateForm);
document.getElementById("email").addEventListener("input", validateForm);
document.getElementById("number").addEventListener("input", validateForm);

function validateForm() {
    var firstName = document.getElementById("first-name").value.trim();
    var secondName = document.getElementById("second-name").value.trim();
    var threeName = document.getElementById("three-name").value.trim();
    var email = document.getElementById("email").value.trim();
    var number = document.getElementById("number").value.trim();
    var errorMessages = ["Це поле обов'язкове", "Це поле обов'язкове", "Це поле обов'язкове", "Це поле обов'язкове", "Це поле обов'язкове"];
    
    var ukrainianLettersPattern = /^[\u0400-\u04FF' ]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneNumberPattern = /^\+\d{12}$/;

    var inputs = [firstName, secondName, threeName, email, number];
    var errorFlags = [false, false, false, false, false];
    var hasError = false;

    // Check if fields are empty
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i] === "") {
            document.getElementById("error" + (i + 1)).innerText = errorMessages[i];
            document.getElementsByClassName("register")[0].getElementsByTagName("input")[i].style.borderColor = "red";
            errorFlags[i] = true;
            hasError = true;
        } else {
            document.getElementById("error" + (i + 1)).innerText = "";
            document.getElementsByClassName("register")[0].getElementsByTagName("input")[i].style.borderColor = "";
        }
    }

    if (hasError) {
        return; // If there's an empty field, stop further validation
    }

    // Check if Ukrainian letters only in name fields
    if (!ukrainianLettersPattern.test(firstName)) {
        document.getElementById("error1").innerText = "Може містити лише українські літери";
        document.getElementsByClassName("register")[0].getElementsByTagName("input")[0].style.borderColor = "red";
        errorFlags[0] = true;
    }
    if (!ukrainianLettersPattern.test(secondName)) {
        document.getElementById("error2").innerText = "Може містити лише українські літери";
        document.getElementsByClassName("register")[0].getElementsByTagName("input")[1].style.borderColor = "red";
        errorFlags[1] = true;
    }
    if (!ukrainianLettersPattern.test(threeName)) {
        document.getElementById("error3").innerText = "Може містити лише українські літери";
        document.getElementsByClassName("register")[0].getElementsByTagName("input")[2].style.borderColor = "red";
        errorFlags[2] = true;
    }

    // Check if email is valid
    if (!emailPattern.test(email)) {
        document.getElementById("error4").innerText = "Введіть коректну електронну пошту";
        document.getElementsByClassName("register")[0].getElementsByTagName("input")[3].style.borderColor = "red";
        errorFlags[3] = true;
    }

    // Check if phone number is valid
    if (!phoneNumberPattern.test(number)) {
        document.getElementById("error5").innerText = "Введіть коректний номер телефону";
        document.getElementsByClassName("register")[0].getElementsByTagName("input")[4].style.borderColor = "red";
        errorFlags[4] = true;
    }

    // Apply red border to inputs with errors
    for (var i = 0; i < errorFlags.length; i++) {
        if (errorFlags[i]) {
            document.getElementsByClassName("register")[0].getElementsByTagName("input")[i].style.borderColor = "red";
        }
    }
}
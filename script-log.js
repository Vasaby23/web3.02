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



function validateForm() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var errorMsg = document.getElementById("error-msg");
  var errorMsg1 = document.getElementById("error-msg1");

  if (email.value.trim() === "") {
    email.style.borderColor = "red";
    errorMsg.innerHTML = "Це поле обов'язкове";
    return;
  } else {
    email.style.borderColor = ""; 
    errorMsg.innerHTML = ""; 
  }

  if (password.value.trim() === "") {
    password.style.borderColor = "red";
    errorMsg1.innerHTML = "Це поле обов'язкове";
    return;
  } else {
    password.style.borderColor = ""; 
    errorMsg1.innerHTML = ""; 
  }


  if (!email.value.includes("@")) {
    email.style.borderColor = "red";
    errorMsg.innerHTML = "Введіть коректну електронну пошту";
    return;
  } else {
    email.style.borderColor = "";
    errorMsg.innerHTML = ""; 
  }

  errorMsg.style.display = "none";
}



function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var showPasswordButton = document.getElementById("showPasswordButton");

  if (passwordField.type === "password") {
      passwordField.type = "text";
      showPasswordButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.77 134.77 0 0 1 22.69 128a134.56 134.56 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.56 134.56 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg>';
  } else {
      passwordField.type = "password";
      showPasswordButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.23 123.23 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133.06 133.06 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.23 123.23 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.47 153.47 0 0 1-19.3-20a8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10a153.47 153.47 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11"/></svg>';
  }
}

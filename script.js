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
    var inputText = document.querySelector('.custom_input').value.toLowerCase(); // Отримати текст з поля вводу
    var inputElement = document.querySelector('.custom_input');
    if (!inputText.includes('годинник')) { // Перевірити, чи містить текст слово "годинник"
        document.querySelector('.error').style.display = 'block'; // Показати повідомлення про помилку
        inputElement.classList.remove('valid'); // Видалити клас 'valid'
    } else {
        document.querySelector('.error').style.display = 'none'; // Сховати повідомлення про помилку, якщо текст правильний
        inputElement.classList.add('valid'); // Додати клас 'valid'
    }
});
(function () {

  var page = document.getElementById('stub');
  var logo = document.getElementById('stubLogo');

  // Меняем цвета страницы
  function changeColors() {
    page.classList.toggle('is-white');
  }

  logo.addEventListener('click', changeColors);

  // То же самое с клавиатуры (Enter и пробел)
  logo.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      changeColors();
    }
  });

})();

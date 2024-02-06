let main = document.querySelector('.main');
let colorOptions = document.querySelectorAll('.sidebar-color-option');
let sidebar = document.querySelector('.sidebar');
let customizeBtn = document.querySelector('.customize-btn');
for (let index = 0; index < colorOptions.length; index++) {
  colorOptions[index].style.backgroundColor = colorOptions[index].value;
}
for (let index = 0; index < colorOptions.length; index++) {
  colorOptions[index].addEventListener('click', function () {
    main.style.backgroundColor = colorOptions[index].value;
  });
}

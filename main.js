/**************Changing the Image ***********************/
function imgSlider(anything) {
  document.querySelector(".pepsi").src = anything;
}
/*************Changing the Backgorundcolor **************/
function changeBgColor(color) {
  const sec = document.querySelector(".sec");
  sec.style.background = color;
}

function menuToggle() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}

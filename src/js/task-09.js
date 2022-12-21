function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const textSpan = document.querySelector('.color')
const bodyColor = document.querySelector('body');

changeColorBtnEl.addEventListener ('click', () => {
  const randomHexColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomHexColor;
  textSpan.textContent = randomHexColor;
})


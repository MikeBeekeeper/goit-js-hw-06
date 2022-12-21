function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const numberInputEl = document.querySelector('input')
const boxesEl = document.querySelector('#boxes')



// numberInputEl.addEventListener('input',  (event) => {
//   amount = event.currentTarget.value;
//   console.log(amount)
// return amount
//   })
 

const amount = numberInputEl.addEventListener('input', (event) => { 
  return event.currentTarget.value
})



const createBoxes =  amount => {
  // let totalAmount = []
  let add = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div')

    add += 10;

    newBox.style.width = `${add}px`
    newBox.style.height = `${add}px`
    newBox.style.backgroundColor = getRandomHexColor()

    console.log(newBox)
    // totalAmount.push(newBox)
  }  
  // return totalAmount;  
};
createBoxes(amount)
// console.log(createBtnEl.addEventListener('click', createBoxes))








// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
  // после чего рендерится коллекция.При нажатии на кнопку Очистить, 
  // коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//  тем самым удаляя все созданные элементы.
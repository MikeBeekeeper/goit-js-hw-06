const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const counterEl = document.querySelector('#value')

decrementButtonEl.addEventListener('click', () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
});

incrementButtonEl.addEventListener('click', () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
})





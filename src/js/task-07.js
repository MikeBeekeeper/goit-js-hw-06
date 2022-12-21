const inputRange = document.querySelector('#font-size-control');
const inputRangeSpan = document.querySelector('#text');

inputRange.addEventListener('input', () => {
    
    const newFontSize = inputRange.value;
    inputRangeSpan.style.fontSize = `${newFontSize}px`;
    
})

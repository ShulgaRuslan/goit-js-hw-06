// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.
const inputRef = document.querySelector('input')
const textRef = document.querySelector('span')

inputRef.addEventListener('input', onRangeInput)

function onRangeInput(event) {
    textRef.style.fontSize = `${event.target.value}px`;
}



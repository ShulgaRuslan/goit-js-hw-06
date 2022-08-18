// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".
const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')
inputEl.addEventListener('input', onInputText)
function onInputText(event) {
    outputEl.textContent = event.currentTarget.value
    
    if (!outputEl.textContent) {
        outputEl.textContent ="Anonymous"
    }
}

















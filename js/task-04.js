// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const decrButtRef = document.querySelector('[data-action="decrement"]');
const incrButtRef = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrButtRef.addEventListener('click', onButtonDecrementClick);
incrButtRef.addEventListener('click', onIncrementButtonClick);


function onButtonDecrementClick() {
    counterValue -= 1;
    return valueEl.textContent = counterValue;
}

function onIncrementButtonClick() {
    counterValue += 1;
    return valueEl.textContent = counterValue;
}
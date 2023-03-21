const body = document.querySelector('body');
const startBtnColor = document.querySelector('button[data-start]');
// console.log(startBtnColor);
const stopBtnColor = document.querySelector('button[data-stop]');
// console.log(stopBtnColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

startBtnColor.addEventListener('click', handleStartColor);
stopBtnColor.addEventListener('click', handleStopColor);

function handleStartColor() {

    timerId = setInterval(() => {
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = `${randomColor}`;
    }, 1000);

    startBtnColor.setAttribute('disabled', '');

}

function handleStopColor() {
    clearInterval(timerId);
    startBtnColor.removeAttribute('disabled', '');
}
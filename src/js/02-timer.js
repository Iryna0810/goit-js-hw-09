import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timer = document.querySelector('.timer');
const timerFild = document.querySelector('.field');

        let dateNow = Date.now();
        console.log(dateNow);


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        // let dateNow = Date.now();
        // console.log(dateNow);
        console.log(Date.now(selectedDates[0]));
        
    //     const currentTime = Date.now();
    //     console.log(currentTime);
      const deltaTime = dateFinish - dateNow;
        const data = convertMs(deltaTime);
    //     console.log(data);
      updateClockFace(data);   
    }
};

const calendars = flatpickr("#datetime-picker", options);
console.log(calendars.selectedDates[0]);
// const dateFinish = Date.now(calendars.selectedDates[0]);

const dateFinish = Date.now(calendars.selectedDates[0]) - Date.now();
console.log(dateFinish);
console.log(convertMs(dateFinish));


// console.log(timerFild[data-minutes]);

timer.style.display = 'flex';
timer.style.justifyContent = 'space-around';
timer.style.color = 'tomato';
timer.style.margin = '10px';
timer.style.width = '450px';

// const currentTime = Date.now();
// console.log(currentTime);


function pad(value) {
    return String(value).padStart(2, '0');
}




refs = {
    startBtn: document.querySelector('button[data-start]'),
    clockDay: document.querySelector('span[data-days]'),
    clockHours: document.querySelector('span[data-hours]'),
    clockMinutes: document.querySelector('span[data-minutes]'),
    clockSeconds: document.querySelector('span[data-seconds]'),

}

function updateClockFace({ days, hours, minutes, seconds }) {
    refs.clockDay.textContent = `${days}`;
    refs.clockHours.textContent = `${hours}`;
    refs.clockMinutes.textContent = `${minutes}`;
    refs.clockSeconds.textContent = `${seconds}`;

}



// console.log(refs.clockDay);
// const dateStart = Date.now();
// console.log(dateStart);

// console.log(dateFinish - dateStart);

// let ms = dateFinish - dateStart;

// console.log(convertMs(ms));


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

const timerClass = {
    intervalId: null,

    start() {
        let currentTime = null;

        this.intervalId = setInterval(() => {
            currentTime = Date.now();
            const deltaTime = dateFinish - currentTime;
            const timeComponents = convertMs(deltaTime);
            console.log(timeComponents);

            const { days, hours, minutes, seconds } = timeComponents;
            console.log(`${days}:${hours}:${minutes}:${seconds}`);

            updateClockFace(timeComponents);



        }, 1000)
    },
    

} 

refs.startBtn.addEventListener('click', () => {
    timerClass.start();
});



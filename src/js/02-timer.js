import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timer = document.querySelector('.timer');
timer.style.display = 'flex';
timer.style.justifyContent = 'space-around';
timer.style.color = 'tomato';
timer.style.margin = '10px';
timer.style.width = '500px';
timer.style.fontSize = 'xx-large';

let currentTime = null;
let dateFinish = null;

const startBtn = document.querySelector('button[data-start]');
const clockDay = document.querySelector('span[data-days]');
const clockHours = document.querySelector('span[data-hours]');
const clockMinutes = document.querySelector('span[data-minutes]');
const clockSeconds = document.querySelector('span[data-seconds]');

startBtn.disabled = true;
startBtn.addEventListener('click', () => {
    timerClass.start();
});

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
        
        dateFinish = selectedDates[0];
        currentTime = Date.now();

        clearInterval(timerClass.intervalId);

        if (dateFinish < currentTime) {
        return Notiflix.Notify.failure("Please choose a date in the future",  {
        width: '360px',
        svgSize: '200px',
  },);
        }

        else startBtn.disabled = false;     
      
    }
};

const calendars = flatpickr("#datetime-picker", options);

function updateClockFace({ days, hours, minutes, seconds }) {
    clockDay.textContent = `${days}`;
    clockHours.textContent = `${hours}`;
    clockMinutes.textContent = `${minutes}`;
    clockSeconds.textContent = `${seconds}`;
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const timerClass = {
    intervalId: null,

    start() {
        startBtn.disabled = true;   

        this.intervalId = setInterval(() => {
            
            currentTime = Date.now();
            
            const deltaTime = dateFinish - currentTime;
            
            if (deltaTime <= 0) {
                this.stop();
                return;
        };
            
            const time = convertMs(deltaTime);
            const timerUpdate = addLeadingZero(time);
            
            updateClockFace(timerUpdate);
            
        
         
        }, 1000)


    },

    stop() {
        clearInterval(this.intervalId);
        startBtn.disabled = false;
        }    

} 

function addLeadingZero(items) {
    for (const key in items) {
       items[key] = String(items[key]).padStart(2, '0')
   }
    return items;
}




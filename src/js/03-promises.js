const formSubmit = document.querySelector('.form');


function createPromise(position, delay) {
 
  const promise = new Promise((resolve, reject) => {
    
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill  
        resolve({ position, delay });
      }
      else {
        // Reject
        reject({ position, delay });
      }
         
    }, delay)
  })
 

 return promise;
}

import Notiflix from 'notiflix';

formSubmit.addEventListener('submit', handleCreatePromise);

function handleCreatePromise(event) {
event.preventDefault();

  const delayFirst = Number(event.target.delay.value);
  
  const amount = Number(event.target.amount.value);
  const step = Number(event.target.step.value);
    let delayNext = delayFirst;
    for (let i = 1; i <= amount; i += 1) {
      createPromise([i], delayNext)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delayNext += step;
      }
}




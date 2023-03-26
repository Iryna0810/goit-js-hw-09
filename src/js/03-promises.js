const refs = {
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name = "step"]'),
  amountInput: document.querySelector('input[name = "amount"]'),
  formSubmit: document.querySelector('.form'),
}

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
 
  promise.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
 return promise;
}

refs.formSubmit.addEventListener('submit', handleCreatePromise);

function handleCreatePromise(event) {
event.preventDefault();

  const delayFirst = Number(refs.delayInput.value);
  
  setTimeout(() => {

  const amount = Number(refs.amountInput.value);
  const step = Number(refs.stepInput.value);
    let delayNext = 0;
    for (let i = 1; i <= amount; i += 1) {
      delayNext += step;
      createPromise([i], delayNext);
      }
  }, delayFirst) 
}




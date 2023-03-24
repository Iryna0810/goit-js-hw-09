const refs = {
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name = "step"]'),
  amountInput: document.querySelector('input[name = "amount"]'),
  formSubmit: document.querySelector('.form'),
}

// const amount = refs.amountInput.addEventListener('inut', handlAmount);
//  const step = refs.stepInput.addEventListener('input', handleStep);
//  const delayFirst = refs.delayInput.addEventListener('input', handlDelay);

const delayFirst = Number(refs.delayInput.value);
const step = Number(refs.stepInput.value);
const amount = Number(refs.amountInput.value);

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
         
    }, delayFirst)
  })
 
  promise.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
 return promise;

}



createPromise(amount, delayFirst);

 


console.log(refs.delayInput, refs.stepInput, refs.amountInput);


refs.formSubmit.addEventListener('submit', handleCreatePromise);

console.log(refs.formSubmit);

function handleCreatePromise(event) {
  event.preventDefault();
  
const delayFirst = Number(refs.delayInput.value);
const step = Number(refs.stepInput.value);
const amount = Number(refs.amountInput.value);
  // let promises = [];
  
let delayNext = delayFirst;


  for (i = 1; i <= amount; i += 1) {
    
  createPromise([i], delayNext[i]);
    delayNext += step;
  }

  // console.log(promises);
  // return promises;
}


//   function handlAmount(event) {
//    amount = event.target.value;
//   }


// function handleStep(event) {
//   delayStep = event.target.value;;
// }
//   function handlDelay (event) {
//   firstDelay = event.target.value;
//     console.log(firstDelay);
//   }  




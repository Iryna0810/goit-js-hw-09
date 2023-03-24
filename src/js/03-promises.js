function createPromise(position, delay) {
  let delay = firstDelay;
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
            if (shouldResolve) {
    // Fulfill
            }
            else {
    // Reject
            }
      
    
        }, delay)

  
  })

}

const refs = {
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name = "step"]'),
  amountInput: document.querySelector('[name = "amount"]'),
  formSubmit: document.querySelector('button'),
}

let firstDelay = null;
let delayStep = null;
let amount = null;

console.log(refs.delayInput, refs.stepInput, refs.amountInput);

refs.delayInput.addEventListener('input', handlDelay);
  function handlDelay (event) {
  firstDelay = event.target.value;
  console.log(firstDelay);
  }

refs.stepInput.addEventListener('input', handleStep);
function handleStep(event) {
  delayStep = event.target.value;;
  console.log(delayStep);
}

refs.amountInput.addEventListener('inut', handlAmount);
function handlAmount(event) {
  amount = event.target.value;
  console.log(amount);
}

refs.formSubmit.addEventListener('submit', createPromise);







!function(){var e={delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name = "step"]'),amountInput:document.querySelector('input[name = "amount"]'),formSubmit:document.querySelector(".form")};function t(e,t){var n=new Promise((function(n,o){var u=Math.random()>.3;setTimeout((function(){u?n({position:e,delay:t}):o({position:e,delay:t})}),t)}));return n.then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),n}e.formSubmit.addEventListener("submit",(function(n){n.preventDefault();var o=Number(e.delayInput.value);setTimeout((function(){var n=Number(e.amountInput.value),o=Number(e.stepInput.value),u=0;for(i=1;i<=n;i+=1)t([i],u+=o)}),o)}))}();
//# sourceMappingURL=03-promises.ca00fa3c.js.map
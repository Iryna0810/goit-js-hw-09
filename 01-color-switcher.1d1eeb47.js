!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){timerId=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.backgroundColor="".concat(e)}),1e3),e.setAttribute("disabled","")})),r.addEventListener("click",(function(){clearInterval(timerId),e.removeAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.1d1eeb47.js.map
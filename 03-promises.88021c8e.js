!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");({submitForm:document.querySelector(".form")}).submitForm.addEventListener("submit",(function(e){var n=function(e){var n,i;(n=e,i=t,new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:n,delay:i}):t({position:n,delay:i})}),i)}))).then((function(n){n.position;var t=n.delay;r.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms"))})).catch((function(n){n.position;var t=n.delay;r.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))})),t+=o};e.preventDefault();for(var t=Number(e.currentTarget.elements.delay.value),o=Number(e.currentTarget.elements.step.value),i=Number(e.currentTarget.elements.amount.value),a=1;a<=i;a+=1)n(a)}))}();
//# sourceMappingURL=03-promises.88021c8e.js.map
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("iQIUW");function i(e,t){return new Promise(((r,n)=>{setTimeout((()=>{Math.random()>.3?r({position:e,delay:t}):n({position:e,delay:t})}),t)}))}({submitForm:document.querySelector(".form")}).submitForm.addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.currentTarget.elements.delay.value),r=Number(e.currentTarget.elements.step.value),n=Number(e.currentTarget.elements.amount.value);for(let e=1;e<=n;e+=1)i(e,t).then((({position:t,delay:r})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${r}ms`)})).catch((({position:t,delay:r})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${r}ms`)})),t+=r}));
//# sourceMappingURL=03-promises.5b999b3b.js.map
function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,o,i,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function E(e){return c=e,a=setTimeout(j,t),l?y(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(h(e))return O(e);a=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function O(e){return a=void 0,p&&r?y(e):(r=o=void 0,f)}function T(){var e=v(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return E(u);if(s)return a=setTimeout(j,t),y(u)}return void 0===a&&(a=setTimeout(j,t)),f}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},T.flush=function(){return void 0===a?f:O(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y={formEL:document.querySelector(".feedback-form")};y.formEL.addEventListener("input",e(t)((function(e){E[e.target.name]=e.target.value.trim(),t="feedback-form-state",n=E,localStorage.setItem(t,JSON.stringify(n));var t,n}),500)),y.formEL.addEventListener("submit",(function(e){e.preventDefault(),console.log(E),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),E={}}));let E={};!function(){let e=localStorage.getItem("feedback-form-state");if(e)try{E=JSON.parse(e),Object.entries(E).forEach((([e,t])=>{y.formEL.elements[e]&&(y.formEL.elements[e].value=t)}))}catch(e){console.error("Error parsing JSON data:",e)}}();
//# sourceMappingURL=03-feedback.69867458.js.map

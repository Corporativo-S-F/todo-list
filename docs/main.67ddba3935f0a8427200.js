(()=>{"use strict";var t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.d({},{L:()=>v});var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var o,r,n;return o=t,n=[{key:"fromJson",value:function(e){var o=e.id,r=e.tarea,n=e.completado,a=(e.creado,new t(r));return a.id=o,a.completado=n,a.creado.creado,a}}],(r=null)&&e(o.prototype,r),n&&e(o,n),Object.defineProperty(o,"prototype",{writable:!1}),t}();function r(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw i}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function a(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage()}var e,n,i;return e=t,(n=[{key:"nuevoTodo",value:function(t){this.todos.push(t),localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"marcarCompletado",value:function(t){var e,o=r(this.todos);try{for(o.s();!(e=o.n()).done;){var n=e.value;if(parseFloat(n.id)===parseFloat(t)){n.completado=!n.completado,localStorage.setItem("todo",JSON.stringify(this.todos));break}}}catch(t){o.e(t)}finally{o.f()}}},{key:"eliminarTodoCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((function(t){return o.fromJson(t)}))}}])&&a(e.prototype,n),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}var s=document.querySelector(".todo-list"),u=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),y=function(t){var e='\n        <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n            <div class = "view">\n                <input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n                <label>").concat(t.tarea,'</label>\n                <button class="destroy"></button>\n            </div>\n            <input class="edit" value="Create a TodoMVC template">\n        </li>'),o=document.createElement("div");return o.innerHTML=e,s.append(o.firstElementChild),o};u.addEventListener("keyup",(function(t){if(13===t.keyCode&&u.value.length>0){var e=new o(u.value);v.nuevoTodo(e),y(e),u.value=""}})),s.addEventListener("click",(function(t){var e=t.target.localName,o=t.target.parentElement.parentElement,r=o.getAttribute("data-id");e.includes("input")?(v.marcarCompletado(r),o.classList.toggle("completed")):e.includes("button")&&(v.eliminarTodo(r),s.removeChild(o))})),d.addEventListener("click",(function(){v.eliminarTodoCompletados();for(var t=s.children.length-1;t>=0;t--){var e=s.children[t];e.classList.contains("completed")&&s.removeChild(e)}})),f.addEventListener("click",(function(t){var e=t.target.text;if(e){m.forEach((function(t){t.classList.remove("selected")})),t.target.classList.add("selected");var o,r=l(s.children);try{for(r.s();!(o=r.n()).done;){var n=o.value;n.classList.remove("hidden");var a=n.classList.contains("completed");switch(e){case"Pendientes":a&&n.classList.add("hidden");break;case"Completados":a||n.classList.add("hidden")}}}catch(t){r.e(t)}finally{r.f()}}}));var v=new i;v.todos.forEach((function(t){return y(t)})),console.log(v)})();
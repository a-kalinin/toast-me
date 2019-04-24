'use strict';
import modulesImportTest from './test';
import toast from 'toast-me.js';

console.log('Toast Me test running');
document.body.innerHTML += '<h1>Toast Me test running</h1>'
modulesImportTest();

console.log(toast);


document.body.innerHTML += '<p><button id="button">Do not press me</button></p>';
document.getElementById('button').addEventListener('click', () => {
  // toast('you did it! :D');
  toast('Why you pressing me? :"(', 'error');
});


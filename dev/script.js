'use strict';
import modulesImportTest from './test';
import toast from 'toast-me.js';

console.log('Toast Me test running');
document.body.innerHTML += '<h1>Toast Me test running</h1>'
modulesImportTest();

console.log(toast);
toast('test');

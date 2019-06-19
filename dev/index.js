'use strict';
import { createNode } from 'helper';
import toast, { ToastOptions } from 'toast-me.js';

import styles from './style.scss';

createNode('h1')
  .html('ToastMe')
  .putIntoDoc();

createNode('button')
  .html('Do not press me')
  .on('click', () => toast('Why you pressing me? :"(', 'error'))
  .putInto(createNode('p').putIntoDoc().node);

createNode('button')
  .html('Press me instead!')
  .on('click', () => toast('Yes, you did it!', { duration: 2500 }))
  .putInto(createNode('p').putIntoDoc().node);

createNode('button')
  .html('I am customized, try me!')
  .on(
    'click',
    () => toast(
      'Like me?',
      {
        toastClass: styles.customToast,
        position: 'bottom',
        showDuration: 3000,
      },
      {
        label: 'Confirm',
        action: () => alert('You are so kind!'),
        class: styles.customButton,
      },
    ),
  )
  .putInto(createNode('p').putIntoDoc().node);

createNode('button')
  .html('Maybe several messages at once?')
  .on(
    'click',
    () => {
      toast('One', { duration: 2500 });
      setTimeout(() => toast('Two', { duration: 2500 }), 400);
      setTimeout(() => toast('Three', { duration: 2500 }), 800);
    },
  )
  .putInto(createNode('p').putIntoDoc().node);

createNode('button')
  .html('Or you would like them in line?')
  .on(
    'click',
    () => {
      toast('One', { type: 'chain', duration: 2500 });
      setTimeout(() => toast('Two', { type: 'chain', duration: 2500 }), 400);
      setTimeout(() => toast('Three', { type: 'chain', duration: 2500 }), 800);
    },
  )
  .putInto(createNode('p').putIntoDoc().node);


'use strict';
import { createNode } from 'helper';
import toast, { ToastOptions } from 'toast-me.js';

import styles from './style.scss';

createNode('h1')
  .html('Toast Me test running')
  .putIntoDoc();

createNode('button')
  .html('Do not press me')
  .on('click', () => toast('Why you pressing meWhy you pressing meWhy you pressing meWhy you pressing meWhy you pressing meWhy you pressing me? :"(', 'error'))
  .putInto(createNode('p').putIntoDoc().node);

createNode('button')
  .html('Press me instead!')
  .on('click', () => toast('Yes, you did it!'))
  .putInto(createNode('p').putIntoDoc().node);

createNode('button')
  .html('I am custom, try me!')
  .on(
    'click',
    () => toast(
      'Like me?',
      {
        toastClass: styles.customToast,
        position: 'bottom',
        showDuration: 6000,
      },
      {
        name: 'Confirm',
        action: () => alert('You are so kind!'),
        class: styles.customButton,
      },
    ),
  )
  .putInto(createNode('p').putIntoDoc().node);



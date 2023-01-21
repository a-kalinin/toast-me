'use strict';
import React from 'react';
import { createNode } from 'helper';
import ReactDOM from 'react-dom';
import toast from 'toast-me.js';

import styles from './style.scss';

function getNewParagraph() {
  return createNode('p').putIntoDoc().node;
}

createNode('h1')
  .html('ToastMe')
  .putIntoDoc();

createNode('button')
  .html('Do not press me')
  .on('click', () => toast('Why you pressing me? :"(', 'error'))
  .putInto(getNewParagraph());

createNode('button')
  .html('Press me instead!')
  .on('click', () => toast('Yes, you did it!', { duration: 2500 }))
  .putInto(getNewParagraph());

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
  .putInto(getNewParagraph());

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
  .putInto(getNewParagraph());

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
  .putInto(getNewParagraph());

createNode('button')
  .html('And I have styled (semi-transparent) container!')
  .on(
    'click',
    () => {
      toast('I am ghost! 0_0', { containerClass: styles.customContainer, useUniqueContainer: true });
    },
  )
  .putInto(getNewParagraph());

createNode('button')
  .html('I have HTML content.')
  .on(
    'click',
    () => {
      toast('Oh, no way! HTML tags inside! &#10132; <button style="font-size: 22px;">&#9787;</button>', { useUnsafeHtmlContent: true });
    },
  )
  .putInto(getNewParagraph());

createNode('style')
  .html('@keyframes rotate {from { transform: rotateY(0deg); } to { transform: rotateY(360deg); }}')
  .putIntoDoc();

createNode('button')
  .html('I have React content. And animation.')
  .on(
    'click',
    () => {
      const uniqId = 'messageRoot_' + Math.random().toString().slice(2);

      toast(`<div id="${uniqId}" />`, { useUnsafeHtmlContent: true });

      const reactMessage = (
        <div>
          React? This is real magic!
          <span
            style={{
              fontSize: 22,
              display: 'inline-block',
              animation: '2s infinite rotate',
            }}
          >
            &#9787;
          </span>
        </div>
      );

      ReactDOM.render(reactMessage, document.getElementById(uniqId))
    },
  )
  .putInto(getNewParagraph());


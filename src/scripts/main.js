'use strict';

// write your code here
const logo = document.querySelector('.logo');
const message = document.createElement('div');
const messageError = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    reject(new Error('Promise was rejected!'));
  });
});

promise1.then((text) => {
  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
});

promise2.catch((text) => {
  setTimeout(() => {
    messageError.classList.add('message', 'error-message');
    messageError.textContent = 'Promise was rejected!';
    document.body.appendChild(messageError);
  }, 3000);
});

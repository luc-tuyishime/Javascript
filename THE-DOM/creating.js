const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am bezos';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = '../img/luc.JPG';
myImage.alt = 'Nice picture';
myImage.classList.add('img-luc');
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// Ohh shoot we need to add something to the top like a header.
const title = document.createElement('h2');
title.textContent = 'Cool header';
myDiv.insertAdjacentElement('beforebegin', title);

// Define unordered list of elements
const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'One';
list.append(li);

document.body.insertAdjacentElement('beforebegin', list);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5);

const li2 = document.createElement('li');
li2.textContent = 'two';
li.insertAdjacentElement('afterend', li2);

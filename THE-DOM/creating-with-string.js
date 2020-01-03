const item = document.querySelector('.item');

const src = `../img/luc.JPG`;
const desc = `Cupe baby`;

const HTML = `
 <div class="wrapper">
 <p>We are here already</p>
 <img src="${src}" alt="${desc}">
 <h1>
 </div>
`;

// TURN A STRING INTO A DOM ELEMENT
const myFragment = document.createRange().createContextualFragment(HTML); // create a collection of document that we can work width
document.body.appendChild(myFragment);

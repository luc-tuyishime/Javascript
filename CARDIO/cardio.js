// MAKE A DIV
const div = document.createElement('div');
// ADD A CLASS OF WRAPPER TO IT
div.classList.add('wrapper');
// PUT INTO THE DIV
document.body.appendChild(div);

// MAKE AN UNORDERED LIST
const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;

// PUT THAT LIST INTO THE ABOVE WRAPPER
div.innerHTML = ul;
console.log(ul);

// CREATE AN IMAGE
const img = document.createElement('img');

// SET THE SOURCE TO AN IMAGE
img.src = '../img/luc.JPG';

// SET THE WIDTH TO 250
img.width = 230;
img.height = 230;

// ADD A CLASS OF CUTE
img.classList.add('cute');

// ADD AN ALT OF CUTE PUPPY
img.alt = 'cute puppy';

// APPEND THAT IMAGE TO THE WRAPPER
div.appendChild(img);

// WITH HTML STRING, MAKE A DIV WITH TWO PARAGRAPHS INSIDE OF IT
const myHTML = `
  <div class="myDiv">
   <p>Paragraph One</p>
   <p>Paragraph Two</p>
  </div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);

// PUT THIS DIV BEFORE THE UNORDERED LIST FORM ABOVE
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// ADD A CLASS TO THE SECOND PARAGRAPH CALLED WARNING
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// REMOVE THE FIRST PARAGRAPHS
myDiv.firstElementChild.remove();

// CREATE A FUNCTION cCALLED GENERATEPLAYERCARD THAT TAKES IN THREE ARGUMENTS: NAME, AGE, AND HEIGHT
// HAVE THAT FUNCTION RETURN HTML LOKKS LIKE THIS
// <div class="playercard">
// <h2>NAME - AGE</h2>
// <p>They are HEIGHT and AGE years old. In Dog years this person would be
// AGEINDOGYEARS. That would be tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
        return `
      <div class="playercard">
      <h1>${name} - ${age}</h1>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}
         AGEINDOGYEARS. That would be tall dog!</p>
         <button class="delete" type="delete">&times; Delete</button>
      </div>
    `;
}

// MAKE AN EW DIV WITH A CLASS OF CARDS
const cards = document.createElement('div');
cards.classList.add('cards');

// HAVE THAT FUNCTION MAKE 4 CARDS
let cardsHtml = generatePlayerCard('lucas', 15, 20);
cardsHtml += generatePlayerCard('tune', 12, 14);
cardsHtml += generatePlayerCard('here', 11, 90);
cardsHtml += generatePlayerCard('Meek', 12, 99);

cards.innerHTML = cardsHtml;
div.insertAdjacentElement('beforebegin', cards);

// SELECT ALL THE BUTTONS
const buttons = document.querySelectorAll('.delete');
console.log(buttons);

// MAKE OUT DELETE FUNCTION
function deleteButton(event) {
        const buttonThatGotClicked = event.currentTarget;
        buttonThatGotClicked.closest('.playercard').remove();
}

// LOOP OVER THEN ATACH AN EVENT LISTENER
buttons.forEach(button => {
        button.addEventListener('click', deleteButton);
});

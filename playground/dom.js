const header2 = document.querySelector('h2');
console.log(header2.textContent);
// Set the textContent on that property
header2.textContent = 'I am jean luc';
console.log(header2.textContent);

const pizza = document.querySelector('.pizza');

console.log(pizza.textContent);

pizza.insertAdjacentText('afterbegin', ' PIZZAA');

// WORKING WITH CLASSES
const lapizza = document.querySelector('.img-luc');

// lapizza.classList.remove('cool');

console.log(lapizza.classList);

function toggleRound() {
        lapizza.classList.toggle('round');
}

lapizza.addEventListener('click', toggleRound);

// WORKING WITH CUSTOM DATA ATRIBUTES
const custom = document.querySelector('.img-luc');
console.log('Custom data attributes', custom.dataset);

custom.addEventListener('click', () => {
        alert(`Welcome ${custom.dataset.last} ${custom.dataset.name}`);
});

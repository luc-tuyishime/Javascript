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

// Object.fromEntries

const vvv = new Map([
        ['foo', 'bar'],
        ['baz', 42],
]);

const obj = Object.fromEntries(vvv);
console.log(obj);

// expected output Object { foo: 'bar, baz: 42 }

// Average

function getAvg(grades) {
        const total = grades.reduce((acc, c) => acc + c, 0);
        return total / grades.length;
}

const result = getAvg([2, 4, 2]);
console.log('average', result);

const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

console.log('fill', filterInputs);

const filters = {
        sarcastic: (letter, index) => {
                // if it is odd, it will return 1, and that is truphy, so this if statement will trip
                if (index % 2) {
                        return letter.toUpperCase();
                }
                // if it even, it will reurn 0 and we will lowercase it.
                return letter.toLowerCase();
        },
        funky: () => {},
        unable: () => {},
};

const transformText = text => {
        const filter = filterInputs.find(input => input.checked).value;
        // take the text, and over over each letter
        const mod = Array.from(text).map(filters[filter]);
        result.textContent = mod.join('');
};

textarea.addEventListener('input', e => transformText(e.target.value));

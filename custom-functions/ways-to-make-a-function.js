// Hoisting mean you can run a function before it's defined

// function doctorize(firstname) {
//         return `Dr. ${firstname}`;
// }

// Anonymous function
// function (firstname) {
//         return `Dr. ${firstname}`;
// }

// Function expression
const doctorize = function(firstname) {
        return `Dr. ${firstname}`;
};

const inchToCM = inches => inches * 2.54;

const Total = (a, b = 3) => a + b;

const makeBaby = (first, last) => ({
        name: `${first} ${last}`,
        age: 15,
});

(function(age) {
        return `wea are all ${age}`;
})(40);

// METHODS ===> (Is a function that lives inside an object)

const lucas = {
        name: 'Jean luc',
        // Methods
        sayHi() {
                return `Hi lucas`;
        },

        // Arrow function
        sayBye: () => `we are going`,
};

// Callback Function (Is a function that is called inside a function after somethin happen)

const button = document.querySelector('.click');

function handleClick() {
        console.log('You have clicked');
}

button.addEventListener('click', handleClick);

setTimeout(() => console.log('we the best'), 3000);

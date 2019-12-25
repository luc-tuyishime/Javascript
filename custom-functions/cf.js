// This is a function definition
function calculateBill(billAmount, taxRate = 0.13, tipRates = 0.15) {
        // This is the function body
        console.log('Running calcualte bills');
        const total = billAmount + billAmount * taxRate + billAmount * tipRates;
        return total;
}

// Funtion call or **Run**
const resultTotal1 = calculateBill(100, 0.13);
const resultTotal2 = calculateBill(130, 0.15);
console.log(`the result is ${resultTotal1} ${resultTotal2}`);

function sayHello(name) {
        return `Hey ${name}`;
}

function newName(name = 'tuyishime') {
        return ` Dr ${name.toUpperCase()}`;
}

console.log(newName(sayHello('jean luc')));

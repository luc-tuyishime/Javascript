// Can run a function before it's declared or exist

sayHi();

// Javascript will take this function and move it to the top, that's why it's working
function sayHi() {
        console.log('workkkk');
        console.log(add(10, 2));
}

function add(a, b) {
        return a + b;
}

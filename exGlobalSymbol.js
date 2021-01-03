const colorRed = 1,
    colorBlue = 2;
function whatColor(color) {
    if (color === colorRed) {
        return 'it\'s red.';
    }
    if (color === colorBlue) {
        return 'it\'s blue.';
    }
    return 'it\' not red and blue.';
}
let on = 1,
    off = 0;
console.log(whatColor(on));

const colorRed1 = Symbol('red'),
    colorBlue1 = Symbol('blue');

function whatColor1(color) {
    if (color === colorRed1) {
        return 'it\'s red.';
    }
    if (color === colorBlue1) {
        return 'it\'s blue.';
    }
    return 'it\' not red and blue.';
}

console.log(whatColor1(on));
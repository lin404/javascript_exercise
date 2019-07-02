// the function that reverses a string:
// 'niL si eman ym iH' should be:
// 'Hi my name is Lin' 

function reverse(str) {

    // check!!!
    if (!str || str.length < 2 || typeof str != 'string') {
        return 'error';
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

// const newStr = reverse2('niL si eman ym iH');
console.log(reverse('niL si eman ym iH'));

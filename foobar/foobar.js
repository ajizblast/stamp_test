function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function generateArray() {
    const array = [];
    for (let i = 100; i >= 1; i--) {
        let value;
        if (isPrime(i)) {
            continue;
        } else if (i % 3 === 0 && i % 5 === 0) {
            value = 'FooBar';
        } else if (i % 3 === 0) {
            value = 'Foo';
        } else if (i % 5 === 0) {
            value = 'Bar';
        } else {
            value = i;
        }
        array.push(value);
    }
    return array;
}

const resultArray = generateArray();
let output = resultArray.join(', ');
console.log(output);

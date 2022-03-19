export function isEven(number) {
    return number % 2 === 0
}

export function fibonacci(num) {
    if (!num || num < 1) {
        return 'must be higher than 0'
    }
    const arr = []
    let pastNumber = 0; let currentNumber = 1;
    for (let i = 1; i <= num; i++) {
        const nextNumber = currentNumber + pastNumber
        arr.push(currentNumber)
        pastNumber = currentNumber
        currentNumber = nextNumber
    }
    return arr.join(', ');
}
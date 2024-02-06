function calculate() {
    // Perform some long-running calculation here
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    return sum;
}

const result = calculate();
postMessage(result);

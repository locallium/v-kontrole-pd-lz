function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function printFibonacciReverse(start, end) {
    const fibNumbers = fibonacci(start);
    for (let i = start; i >= end; i--) {
        console.log(fibNumbers[i]);
    }
}

printFibonacciReverse(100, 1);
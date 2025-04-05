function printButterfly(n) {
    for (let i = 1; i <= n; i++) {
        let line = '*'.repeat(i);
        line += ' '.repeat(2 * (n - i));
        line += '*'.repeat(i);
        console.log(line);
    }

    for (let i = n; i >= 1; i--) {
        let line = '*'.repeat(i);
        line += ' '.repeat(2 * (n - i));
        line += '*'.repeat(i);
        console.log(line);
    }
}

printButterfly(5);

//complexity: O(1)
function sum_to_n_a(n) {
    return (n * (n + 1)) / 2;
}

//complexity: O(n)
function sum_to_n_b(n) {
    if (n === 1) return 1;
    return n + sum_to_n_b(n - 1);
}

//complexity: O(n)
function sum_to_n_c(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
}
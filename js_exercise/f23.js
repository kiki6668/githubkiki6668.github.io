for (var i = 1, sum = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        continue
    }
    sum += i

}
console.log(sum) 
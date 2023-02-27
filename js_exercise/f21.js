for (var i = 2000; i <= 2100; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
        console.log(i)
    }
}
function sum(a, b) {
    for (i = a; i <= b; i++) {
        if((i%4===0&&i%100!==0)||i%400===0)
        console.log(i)
    }
}
sum(2000, 2100)
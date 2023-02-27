function sum(a, b, c) {
    var ff = max
    if (a > b) {
       var max = a
    } else {
        max = b
    }
if(max>c){
    return max
}else{
    return c
}
}console.log(sum(1,9,0))